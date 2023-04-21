import { createClient } from "@supabase/supabase-js";
import { createHash } from "crypto";
import { loadEnvConfig } from "@next/env";
import { readdir, readFile, stat } from "fs/promises";
import GithubSlugger from "github-slugger";
import { Content, Root } from "mdast";
import { fromMarkdown } from "mdast-util-from-markdown";
import { toMarkdown } from "mdast-util-to-markdown";
import { toString } from "mdast-util-to-string";
import { Configuration, OpenAIApi } from "openai";
import { basename, dirname, join } from "path";
import { u } from "unist-builder";
import { inspect } from "util";
import type { Database } from "@/types/supabase";

loadEnvConfig("");

const ignoredFiles = ["pages/Readme.md"];

/**
 * Splits a `mdast` tree into multiple trees based on
 * a predicate function. Will include the splitting node
 * at the beginning of each tree.
 *
 * Useful to split a markdown file into smaller sections.
 */
function splitTreeBy(tree: Root, predicate: (node: Content) => boolean) {
  return tree.children.reduce<Root[]>((trees, node) => {
    const [lastTree] = trees.slice(-1);

    if (!lastTree || predicate(node)) {
      const tree: Root = u("root", [node]);
      return trees.concat(tree);
    }

    lastTree.children.push(node);
    return trees;
  }, []);
}

type Section = {
  content: string;
  heading?: string;
  slug?: string;
};

type ProcessedMd = {
  checksum: string;
  sections: Section[];
};

/**
 * Processes MD content for search indexing.
 * It  splits it into sub-sections based on criteria.
 */
function processMdForSearch(content: string): ProcessedMd {
  const checksum = createHash("sha256").update(content).digest("base64");

  const mdTree = fromMarkdown(content, {
    extensions: [],
    mdastExtensions: [],
  });

  if (!mdTree) {
    return {
      checksum,
      sections: [],
    };
  }

  const sectionTrees = splitTreeBy(mdTree, (node) => node.type === "heading");

  const slugger = new GithubSlugger();

  const sections = sectionTrees.map((tree) => {
    const [firstNode] = tree.children;

    const heading =
      firstNode.type === "heading" ? toString(firstNode) : undefined;
    const slug = heading ? slugger.slug(heading) : undefined;

    return {
      content: toMarkdown(tree),
      heading,
      slug,
    };
  });

  return {
    checksum,
    sections,
  };
}

type WalkEntry = {
  path: string;
};

async function walk(dir: string, parentPath?: string): Promise<WalkEntry[]> {
  const immediateFiles = await readdir(dir);

  const recursiveFiles = await Promise.all(
    immediateFiles.map(async (file) => {
      const path = join(dir, file);
      const stats = await stat(path);
      if (stats.isDirectory()) {
        // Keep track of document hierarchy (if this dir has corresponding doc file)
        const docPath = `${basename(path)}.md`;

        return walk(
          path,
          immediateFiles.includes(docPath)
            ? join(dirname(path), docPath)
            : parentPath
        );
      } else if (stats.isFile()) {
        return [{ path: path }];
      } else {
        return [];
      }
    })
  );

  const flattenedFiles = recursiveFiles.reduce(
    (all, folderContents) => all.concat(folderContents),
    []
  );

  return flattenedFiles.sort((a, b) => a.path.localeCompare(b.path));
}

abstract class BaseEmbeddingSource {
  checksum?: string;
  sections?: Section[];

  constructor(public source: string, public path: string) {}

  abstract load(): Promise<{ checksum: string; sections: Section[] }>;
}

class MarkdownEmbeddingSource extends BaseEmbeddingSource {
  constructor(
    source: string,
    public filePath: string,
    public parentFilePath?: string
  ) {
    const path = filePath.replace(/^pages/, "").replace(/\.mdx?$/, "");

    super(source, path);
  }

  async load() {
    const contents = await readFile(this.filePath, "utf8");

    const { checksum, sections } = processMdForSearch(contents);

    this.checksum = checksum;
    this.sections = sections;

    return {
      checksum,
      sections,
    };
  }
}

async function generateEmbeddings() {
  // TODO: use better CLI lib like yargs
  const args = process.argv.slice(2);
  const shouldRefresh = args.includes("--refresh");

  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.SUPABASE_SERVICE_ROLE_KEY ||
    !process.env.OPENAI_API_KEY
  ) {
    return console.log(
      "Environment variables NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, and OPENAI_API_KEY are required: skipping embeddings generation"
    );
  }

  const supabase = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    }
  );

  const embeddingSources: BaseEmbeddingSource[] = [
    ...(await walk("pages"))
      .filter(({ path }) => /\.mdx?$/.test(path))
      .filter(({ path }) => !ignoredFiles.includes(path))
      .map((entry) => new MarkdownEmbeddingSource("", entry.path)),
  ];

  console.log(`Discovered ${embeddingSources.length} pages`);

  if (!shouldRefresh) {
    console.log("Checking which pages are new or have changed");
  } else {
    console.log("Refresh flag set, re-generating all pages");
  }

  for (const embeddingSource of embeddingSources) {
    const { source, path } = embeddingSource;

    try {
      const { checksum, sections } = await embeddingSource.load();

      // Check for existing page in DB and compare checksums
      const { error: fetchPageError, data: existingPage } = await supabase
        .from("page")
        .select("id, path, checksum, parentPage:parent_page_id(id, path)")
        .filter("path", "eq", path)
        .limit(1)
        .maybeSingle();

      if (fetchPageError) {
        throw fetchPageError;
      }

      if (existingPage) {
        if (!shouldRefresh) {
          console.log(
            `[${path}] Docs have changed, removing old page sections and their embeddings`
          );
        } else {
          console.log(
            `[${path}] Refresh flag set, removing old page sections and their embeddings`
          );
        }

        const { error: deletePageSectionError } = await supabase
          .from("page_section")
          .delete()
          .filter("page_id", "eq", existingPage.id);

        if (deletePageSectionError) {
          throw deletePageSectionError;
        }
      }

      // Create/update page record. Intentionally clear checksum until we
      // have successfully generated all page sections.
      const { error: upsertPageError, data: page } = await supabase
        .from("page")
        .upsert(
          {
            project_id: 1,
            checksum: null,
            path,
            source,
          },
          { onConflict: "project_id,path" }
        )
        .select()
        .limit(1)
        .single();

      if (upsertPageError) {
        throw upsertPageError;
      }

      console.log(
        `[${path}] Adding ${sections.length} page sections (with embeddings)`
      );
      for (const { slug, heading, content } of sections) {
        // OpenAI recommends replacing newlines with spaces for best results (specific to embeddings)
        const input = content.replace(/\n/g, " ");

        try {
          const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
          });
          const openai = new OpenAIApi(configuration);

          const embeddingResponse = await openai.createEmbedding({
            model: "text-embedding-ada-002",
            input,
          });

          if (embeddingResponse.status !== 200) {
            throw new Error(inspect(embeddingResponse.data, false, 2));
          }

          const [responseData] = embeddingResponse.data.data;

          const { error: insertPageSectionError, data: pageSection } =
            await supabase
              .from("page_section")
              .insert({
                page_id: page.id,
                slug,
                heading,
                content,
                token_count: embeddingResponse.data.usage.total_tokens,
                embedding: responseData.embedding as unknown as string,
              })
              .select()
              .limit(1)
              .single();

          if (insertPageSectionError) {
            throw insertPageSectionError;
          }
        } catch (err) {
          // TODO: decide how to better handle failed embeddings
          console.error(
            `Failed to generate embeddings for '${path}' page section starting with '${input.slice(
              0,
              40
            )}...'`
          );

          throw err;
        }
      }

      // Set page checksum so that we know this page was stored successfully
      const { error: updatePageError } = await supabase
        .from("page")
        .update({ checksum })
        .filter("id", "eq", page.id);

      if (updatePageError) {
        throw updatePageError;
      }
    } catch (err) {
      console.error(
        `Page '${path}' or one/multiple of its page sections failed to store properly. Page has been marked with null checksum to indicate that it needs to be re-generated.`
      );
      console.error(err);
    }
  }

  console.log("Embedding generation complete");
}

async function main() {
  await generateEmbeddings();
}

main().catch((err) => console.error(err));

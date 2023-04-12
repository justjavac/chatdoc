import { serve } from "std/http/server.ts";
import "xhr";
import { createClient } from "@supabase/supabase-js";
import { codeBlock, oneLine } from "common-tags";
import GPT3Tokenizer from "gpt3-tokenizer";
import {
  ChatCompletionRequestMessage,
  ChatCompletionRequestMessageRoleEnum,
  Configuration,
  CreateChatCompletionRequest,
  OpenAIApi,
} from "openai";
import { ApplicationError, UserError } from "../_shared/mod.ts";
import type { Database } from "../../../types/supabase.ts";

const openAiKey = Deno.env.get("OPENAI_API_KEY");
const supabaseUrl = Deno.env.get("SUPABASE_URL");
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const SYSTEM = `
You are a very enthusiastic Document AI who loves
to help people! Given the following information from
the documentation, answer the user's question using
only that information, outputted in markdown format.
`;

const REQUIREMENTS = `
You must also follow the below rules when answering:

- Do not make up answers that are not provided in the documentation.
- If you are unsure and the answer is not explicitly written in the documentation context, say "Sorry, I don't know how to help with that."
- Prefer splitting your response into multiple paragraphs.
- Output as markdown with code snippets if available, add spaces between Chinese and English.
- Use \`{language}\` as you output language.
`;

serve(async (req) => {
  try {
    if (req.method === "OPTIONS") {
      return new Response("ok", { headers: corsHeaders });
    }

    if (!openAiKey) {
      throw new ApplicationError("Missing environment variable OPENAI_KEY");
    }

    if (!supabaseUrl) {
      throw new ApplicationError("Missing environment variable SUPABASE_URL");
    }

    if (!supabaseServiceKey) {
      throw new ApplicationError(
        "Missing environment variable SUPABASE_SERVICE_ROLE_KEY",
      );
    }

    const requestData = await req.json();

    if (!requestData) {
      throw new UserError("Missing request data");
    }

    const { project_id, query } = requestData;

    if (!query) {
      throw new UserError("Missing query in request data");
    }

    if (!project_id) {
      throw new UserError("Missing project_id in request data");
    }

    console.log({ project_id, query });

    const sanitizedQuery = query.trim();

    const supabaseClient = createClient<Database>(
      supabaseUrl,
      supabaseServiceKey,
    );

    const configuration = new Configuration({ apiKey: openAiKey });
    const openai = new OpenAIApi(configuration);

    // Moderate the content to comply with OpenAI T&C
    const moderationResponse = await openai.createModeration({
      input: sanitizedQuery,
    });

    const [results] = moderationResponse.data.results;

    if (results.flagged) {
      throw new UserError("Flagged content", {
        flagged: true,
        categories: results.categories,
      });
    }

    const embeddingResponse = await openai.createEmbedding({
      model: "text-embedding-ada-002",
      input: sanitizedQuery.replaceAll("\n", " "),
    });

    if (embeddingResponse.status !== 200) {
      throw new ApplicationError(
        "Failed to create embedding for question",
        embeddingResponse,
      );
    }

    const [{ embedding }] = embeddingResponse.data.data;

    const { error: matchError, data: pageSections } = await supabaseClient.rpc(
      "match_page_sections",
      {
        project_id,
        embedding: embedding as unknown as string,
        match_threshold: 0.78,
        match_count: 10,
        min_content_length: 50,
      },
    );

    if (matchError) {
      throw new ApplicationError("Failed to match page sections", matchError);
    }

    const tokenizer = new GPT3Tokenizer({ type: "gpt3" });
    let tokenCount = 0;
    let contextText = "";

    for (let i = 0; i < pageSections.length; i++) {
      const pageSection = pageSections[i];
      const content = pageSection.content;
      const encoded = tokenizer.encode(content);
      tokenCount += encoded.text.length;

      if (tokenCount >= 1500) {
        break;
      }

      contextText += `${content.trim()}\n---\n`;
    }

    const messages: ChatCompletionRequestMessage[] = [
      {
        role: ChatCompletionRequestMessageRoleEnum.System,
        content: SYSTEM,
      },
      {
        role: ChatCompletionRequestMessageRoleEnum.User,
        content: codeBlock`
          Here is the Deno documentation:
          ${contextText}
        `,
      },
      {
        role: ChatCompletionRequestMessageRoleEnum.User,
        content: codeBlock`
          Here is my question:
          ${oneLine`${sanitizedQuery}`}
      `,
      },
      {
        role: ChatCompletionRequestMessageRoleEnum.User,
        content: REQUIREMENTS.replace(
          "{language}",
          req.headers.get("Accept-Language") || "en",
        ),
      },
    ];

    const completionOptions: CreateChatCompletionRequest = {
      model: "gpt-3.5-turbo",
      messages,
      max_tokens: 1024,
      temperature: 0,
      stream: true,
    };

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      headers: {
        Authorization: `Bearer ${openAiKey}`,
        "Content-Type": "application/json",
        "Accept-Language": req.headers.get("Accept-Language") || "en",
      },
      method: "POST",
      body: JSON.stringify(completionOptions),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new ApplicationError("Failed to generate completion", error);
    }

    // Proxy the streamed SSE response from OpenAI
    return new Response(response.body, {
      headers: {
        ...corsHeaders,
        "Content-Type": "text/event-stream",
      },
    });
  } catch (err: unknown) {
    if (err instanceof UserError) {
      return new Response(
        JSON.stringify({
          error: err.message,
          data: err.data,
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    } else if (err instanceof ApplicationError) {
      // Print out application errors with their additional data
      console.error(`${err.message}: ${JSON.stringify(err.data)}`);
    } else {
      // Print out unexpected errors as is to help with debugging
      console.error(err);
    }

    // TODO: include more response info in debug environments
    return new Response(
      JSON.stringify({
        error: "There was an error processing your request",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});

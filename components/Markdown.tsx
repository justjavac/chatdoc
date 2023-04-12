"use client";

import ReactMarkdown from "react-markdown";
import RemarkMath from "remark-math";
import RehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import RemarkGfm from "remark-gfm";
import RehypePrsim from "rehype-prism-plus";

export function Markdown(props: { children: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[RemarkMath, RemarkGfm]}
      rehypePlugins={[RehypeKatex, [RehypePrsim, { ignoreMissing: true }]]}
      linkTarget="_blank"
    >
      {props.children}
    </ReactMarkdown>
  );
}

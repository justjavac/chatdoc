import { ChatCompletionRequestMessageRoleEnum } from "openai";
import { Deno, OpenAI, User } from "./Icons";
import { Markdown } from "./Markdown";

export interface MessageProps {
  content: string;
  role: ChatCompletionRequestMessageRoleEnum;
  streaming?: boolean;
}

export function Message({ content, role, streaming }: MessageProps) {
  return (
    <section
      className={`flex items-top text-center p-3 rounded py-0 ${
        role === ChatCompletionRequestMessageRoleEnum.Assistant
          ? "col-start-1 col-end-11 flex-row"
          : "col-start-2 col-end-13 flex-row-reverse"
      }`}
    >
      <div className="relative p-1 rounded h-10 w-10 dark:bg-white">
        {role === ChatCompletionRequestMessageRoleEnum.Assistant ? (
          <>
            <OpenAI className="h-8 w-8" />
            <Deno className="absolute bottom-0 right-0 h-4 w-4 rounded" />
          </>
        ) : (
          <User className="h-8 w-8" />
        )}
      </div>
      <article
        className={`p-2 text-left align-middle shadow rounded max-w-none prose prose-sm dark:prose-invert ${
          role === ChatCompletionRequestMessageRoleEnum.Assistant
            ? "ml-3 bg-gray-100 dark:bg-[#2c2c2c] dark:text-white"
            : "mr-3 bg-indigo-100 dark:bg-[#59b169] dark:text-black"
        }`}
      >
        <Markdown>{content}</Markdown>
      </article>
    </section>
  );
}

import type { CreateChatCompletionResponse } from "openai";
import { SSE } from "sse.js";
import { getEdgeFunctionUrl } from "./getEdgeFunctionUrl";

const edgeFunctionUrl = getEdgeFunctionUrl()!;

export function requestChatStream(
  project_id: number,
  query: string,
  options?: {
    filterBot?: boolean;
    onMessage: (message: string, done: boolean) => void;
    onError: (error: Error) => void;
  },
) {
  const eventSource = new SSE(`${edgeFunctionUrl}/chat-stream`, {
    headers: {
      apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
      "Content-Type": "application/json",
    },
    payload: JSON.stringify({ query, project_id, context: "" }),
  });

  eventSource.addEventListener("error", options?.onError as any);

  let answer = "";
  eventSource.addEventListener("message", (e: any) => {
    try {
      if (e.data === "[DONE]") {
        options?.onMessage(answer, true);
        return;
      }

      const completionResponse: CreateChatCompletionResponse | any = JSON.parse(
        e.data,
      );
      answer = answer +
        (completionResponse.choices?.[0].text ??
          completionResponse.choices?.[0].delta.content ?? "");
      options?.onMessage(answer, false);
    } catch (error) {
      options?.onError(error as Error);
    }
  });

  eventSource.stream();
}

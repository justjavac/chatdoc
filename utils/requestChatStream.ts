import type { CreateChatCompletionResponse } from "openai";
import { SSE } from "@/utils";
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
  const payload = JSON.stringify({ query, project_id, context: "" });
  const eventSource = new SSE(`${edgeFunctionUrl}/chat-stream`, payload);

  eventSource.addEventListener("error", options?.onError as any);

  let answer = "";
  eventSource.addEventListener("message", (e: MessageEvent<string>) => {
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
      eventSource.close();
      options?.onError(error as Error);
    }
  });
}

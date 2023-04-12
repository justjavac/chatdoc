"use client";

import { useState } from "react";
import type { ChatCompletionRequestMessage } from "openai";
import { Message } from "./Message";
import { Input } from "./Input";
import { ProjectInfo } from "./ProjectInfo";
import { requestChatStream } from "../utils";
import { useScrollToBottom } from "../hooks";
import type { Database } from "@/types/supabase";

export interface ChatProps {
  project: Database["public"]["Tables"]["project"]["Row"];
}

export function Chat({ project }: ChatProps) {
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);
  const [messageRef, setAutoScroll, onWheel] = useScrollToBottom();

  const updateLastMessage = (message: ChatCompletionRequestMessage) => {
    setMessages((messages) => {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage) {
        return [...messages.slice(0, -1), message];
      }
      return messages;
    });
  };

  const handleInput = async (content: string) => {
    setAutoScroll(true);
    const userMessage: ChatCompletionRequestMessage = {
      role: "user",
      content: content,
    };
    setMessages([...messages, userMessage]);
    requestChatStream(project.id, content, {
      onMessage(content, done) {
        const assistantMessage: ChatCompletionRequestMessage = {
          role: "assistant",
          content: content,
        };
        setMessages([...messages, userMessage, assistantMessage]);
      },
      onError() {
        const assistantMessage: ChatCompletionRequestMessage = {
          role: "assistant",
          content: content + "\n\n出错了，稍后重试吧",
        };
        setMessages([...messages, userMessage, assistantMessage]);
      },
    });
  };

  return (
    <div className="flex flex-col h-full">
      {messages.length === 0 && <ProjectInfo {...project} />}
      <div
        ref={messageRef}
        className="flex-1 grid grid-cols-12 auto-rows-max gap-y-2 py-4 overflow-y-scroll"
        onWheel={onWheel}
      >
        {messages.map((message, index) => (
          <Message key={index} {...message} />
        ))}
      </div>
      {project.hash && <Input onSubmit={handleInput} loading={false} />}
    </div>
  );
}

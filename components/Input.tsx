"use client";

import { useState, KeyboardEvent } from "react";
import { shouldSubmit } from "../utils";
import { Submit } from "./Icons";

export function Input(props: {
  loading: boolean;
  onSubmit: (value: string) => void;
}) {
  const [userInput, setUserInput] = useState("");

  const onUserSubmit = () => {
    if (userInput.length <= 0) return;
    props.onSubmit(userInput);
    setUserInput("");
  };

  const onInputKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (shouldSubmit(e)) {
      onUserSubmit();
      e.preventDefault();
    }
  };

  return (
    <div className="w-full border-t dark:border-gray-600/10 dark:bg-gray-800 pt-2">
      <textarea
        tabIndex={0}
        rows={1}
        className="form-textarea m-0 w-full h-16 text-sm resize-none border-0 bg-transparent p-0 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent pl-2 dark:invert dark:placeholder:text-slate-900"
        onInput={(e) => setUserInput(e.currentTarget.value)}
        value={userInput}
        onKeyDown={(e) => onInputKeyDown(e as any)}
        placeholder="Type your message here..."
      ></textarea>
      <button
        className="absolute p-1 rounded-md text-gray-500 bottom-1.5 hover:bg-gray-100 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent right-1"
        onClick={onUserSubmit}
        title="Send"
      >
        <Submit />
      </button>
    </div>
  );
}

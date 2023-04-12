import type { KeyboardEvent } from "react";

export function shouldSubmit(event: KeyboardEvent<HTMLTextAreaElement>) {
  return event.key === "Enter" &&
    !(event.metaKey || event.ctrlKey || event.altKey || event.shiftKey ||
      event.nativeEvent.isComposing);
}

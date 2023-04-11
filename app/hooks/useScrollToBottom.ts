import {
  UIEventHandler,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
  WheelEventHandler,
} from "react";

/**
 * Auto scroll to bottom when new message comes.
 *
 * Usage:
 *
 * ```tsx
 * const [ messageRef, setAutoScroll ] = useScrollToBottom();
 *
 * <div ref={newMessageRef} onScroll={handleScroll}>
 *  {messages.map((message) => (
 *   <div key={message.id}>{message.content}</div>
 * ))}
 * </div>
 * ```
 *
 * @returns ref: ref of the scrollable element
 * @returns setAutoScroll: set autoScroll
 * @returns onWheel: wheel event handler
 */
export function useScrollToBottom() {
  const ref = useRef<HTMLDivElement>(null);
  const [autoScroll, setAutoScroll] = useState(true);

  const onScroll: UIEventHandler<HTMLDivElement> = useCallback((e) => {
    console.log("onScroll", e);
  }, []);

  const onWheel: WheelEventHandler<HTMLDivElement> = useCallback((e) => {
    // if scroll up, disable auto scroll
    if (e.deltaY < 0) {
        setAutoScroll(false);
        return;
    }

    // if scroll down, and the last message is scroolen into bottom, enable auto scroll
    const el = ref.current!;
    if (el.scrollHeight - el.scrollTop - el.clientHeight < 10) {
      setAutoScroll(true);
    }
  }, []);

  useLayoutEffect(() => {
    if (!autoScroll) return;
    if (!ref.current) return;
    const el = ref.current;
    el.scrollTop = el.scrollHeight;
  });

  return [ref, setAutoScroll, onWheel] as const;
}

type EventType = "message" | "error" | "open";
type EventListener = (event: MessageEvent) => void;

const decoder = new TextDecoder();

export class SSE {
  #controller: AbortController | null = null;
  #listeners: Record<string, EventListener[]> = {};
  #buffer = "";
  url: string;

  constructor(url: string, payload = "") {
    this.#controller = new AbortController();
    this.url = url;
    const signal = this.#controller.signal;

    fetch(url, {
      signal,
      method: "POST",
      headers: {
        Accept: "text/event-stream",
        "Content-Type": "application/json",
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
      },
      body: payload,
    })
      .then((response) => {
        if (!response.body) {
          return;
        }
        const reader = response.body.getReader();
        return this.#readStream(reader);
      })
      .catch((error) => {
        const event = new MessageEvent("error", { data: error });
        this.dispatchEvent(event);
      });
  }

  async #readStream(
    reader: ReadableStreamDefaultReader<Uint8Array>
  ): Promise<void> {
    return reader.read().then(({ done, value }) => {
      if (done) {
        return;
      }

      this.#buffer += decoder.decode(value, { stream: !done });

      const parts = this.#buffer.split("\n\n");
      this.#buffer = parts.pop() ?? "";

      parts.forEach((part) => {
        const event = new MessageEvent("message", {
          data: part.replace(/data: /, ""),
        });
        this.dispatchEvent(event);
      });

      return this.#readStream(reader);
    });
  }

  dispatchEvent(event: MessageEvent) {
    if (this.#listeners[event.type]) {
      this.#listeners[event.type].forEach((listener) => {
        listener(event);
      });
    }
  }

  close() {
    if (this.#controller) {
      this.#controller.abort();
      this.#controller = null;
      const event = new MessageEvent("close");
      this.dispatchEvent(event);
    }
  }

  addEventListener(type: EventType, listener: EventListener) {
    if (!this.#listeners[type]) {
      this.#listeners[type] = [];
    }
    this.#listeners[type].push(listener);
  }

  removeEventListener(type: EventType, listener: EventListener) {
    if (!this.#listeners[type]) {
      return;
    }
    const index = this.#listeners[type].indexOf(listener);
    if (index > -1) {
      this.#listeners[type].splice(index, 1);
    }
  }
}

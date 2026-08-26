"use client";

import { useEffect, useRef, useState } from "react";

function styleChatWidget(el: HTMLElement, open: boolean) {
  el.style.setProperty("position", "fixed", "important");
  el.style.setProperty("bottom", "96px", "important");
  el.style.setProperty("right", "24px", "important");
  el.style.setProperty("z-index", "9999", "important");
  el.style.setProperty("width", "400px", "important");
  el.style.setProperty("max-width", "calc(100vw - 32px)", "important");
  // The widget's own layout (banner + transcript + input) needs ~592px;
  // anything shorter clips the message input at the bottom.
  el.style.setProperty("height", "620px", "important");
  el.style.setProperty("max-height", "calc(100vh - 160px)", "important");
  el.style.setProperty("box-shadow", "0 10px 40px rgba(0,0,0,0.35)", "important");
  el.style.setProperty("border-radius", "12px", "important");
  el.style.setProperty("overflow", "hidden", "important");
  el.style.setProperty("display", open ? "block" : "none", "important");
}

export default function ChatWidgetToggle() {
  const [open, setOpen] = useState(false);
  const openRef = useRef(open);
  openRef.current = open;

  // The LeadConnector chat widget is injected asynchronously (lazyOnload
  // script) and, on this widget ID, renders as an inline "embedded" box
  // rather than a floating bubble. We watch for it and take over its
  // position/visibility instead, driven by our own toggle button.
  useEffect(() => {
    const apply = () => {
      const el = document.querySelector("chat-widget") as HTMLElement | null;
      if (el) styleChatWidget(el, openRef.current);
    };
    apply();
    const observer = new MutationObserver(apply);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = document.querySelector("chat-widget") as HTMLElement | null;
    if (el) styleChatWidget(el, open);
  }, [open]);

  return (
    <button
      type="button"
      onClick={() => setOpen((value) => !value)}
      aria-label={open ? "Close chat" : "Open chat"}
      className="fixed bottom-6 right-6 z-[9998] flex items-center gap-2 rounded-full bg-[#ED1C24] pl-4 pr-5 py-3 text-white shadow-lg transition-colors hover:bg-[#c8181f]"
    >
      <span className="text-xl leading-none">{open ? "✕" : "💬"}</span>
      <span className="text-sm font-semibold uppercase tracking-wide">
        {open ? "Close" : "Chat with us"}
      </span>
    </button>
  );
}

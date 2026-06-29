"use client";

import { useEffect, useRef } from "react";

/**
 * Slim, brand-flavored PDF viewer for a tracked document.
 *
 * - Renders the PDF inline (no login, no chrome from the rest of the site).
 * - On mount in a REAL browser, fires a one-shot beacon to /api/track. Email
 *   security scanners and link unfurlers fetch the URL but don't run JS, so
 *   they don't trigger a false "open" — only an actual human view does.
 */
export default function DocViewer({
  token,
  title,
  file,
}: {
  token: string;
  title: string;
  file: string;
}) {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    try {
      fetch("/api/doc-open", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
        keepalive: true,
      }).catch(() => {});
    } catch {
      /* tracking must never break the viewer */
    }
  }, [token]);

  return (
    <div className="flex h-dvh flex-col bg-warm-black text-cream">
      <header className="flex items-center justify-between gap-4 border-b border-cream/15 px-4 py-3 sm:px-6">
        <div className="flex min-w-0 items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/fc-mark.png"
            alt="Farley Creative"
            className="h-7 w-auto shrink-0"
          />
          <span className="truncate font-serif text-sm italic text-cream/90 sm:text-base">
            {title}
          </span>
        </div>
        <a
          href={file}
          download
          className="shrink-0 rounded-full bg-butter-yellow px-4 py-1.5 text-xs font-semibold tracking-wide text-warm-black transition hover:opacity-90 sm:text-sm"
        >
          Download
        </a>
      </header>

      <main className="relative flex-1">
        <iframe
          src={`${file}#view=FitH`}
          title={title}
          className="absolute inset-0 h-full w-full border-0 bg-cream"
        />
      </main>

      {/* Fallback for browsers (some mobile) that won't render a PDF in an
          iframe — they show this link instead of a blank frame. */}
      <noscript />
    </div>
  );
}

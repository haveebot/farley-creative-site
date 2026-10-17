"use client";

import { useEffect, useRef } from "react";

/**
 * "Opened" beacon for a tracked link, once per browser session: a multi-page
 * preview mounts again on every page, but one visit should log one open.
 * Runs only in a real browser: email security scanners and link unfurlers
 * fetch the URL but don't run JS, so they don't trigger a false "open".
 */
export function useOpenBeacon(token: string) {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    if (skipOpen(token)) return;
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
}

/**
 * True when this visit shouldn't log an open: one already went out this
 * session, or the link carries `?review` (an owner preview). Marks the
 * session either way, so the pages clicked to next stay quiet too.
 */
function skipOpen(token: string): boolean {
  const key = `fc-doc-open:${token}`;
  const reviewing = new URLSearchParams(window.location.search).has("review");
  try {
    if (sessionStorage.getItem(key)) return true;
    sessionStorage.setItem(key, "1");
  } catch {
    /* storage blocked: decide from this page alone */
  }
  return reviewing;
}

"use client";

import { useEffect, useRef } from "react";

/**
 * One-shot "opened" beacon for a tracked link. Runs only in a real browser:
 * email security scanners and link unfurlers fetch the URL but don't run JS,
 * so they don't trigger a false "open".
 */
export function useOpenBeacon(token: string) {
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
}

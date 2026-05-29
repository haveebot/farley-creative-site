"use client";

/**
 * <Tracker /> — pings the Hub's /api/track endpoint on every page
 * navigation. Fire-and-forget; never blocks render or interaction.
 *
 * Privacy-respecting: sends only path + referrer host. The Hub adds
 * country from request headers and a daily-rotating visitor hash.
 * No PII, no IP, no UA, no cross-day tracking.
 *
 * Replaces the dependency on Vercel Web Analytics for the Hub's
 * traffic dashboard card. Vercel Analytics + Speed Insights remain
 * in layout.tsx for first-party dashboards.
 */

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const ENDPOINT =
  process.env.NEXT_PUBLIC_TRACK_ENDPOINT ??
  "https://hub.farleycreative.com/api/track";

const SITE_ID = "farleycreative.com";

export function Tracker() {
  const pathname = usePathname();
  const lastPath = useRef<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (lastPath.current === pathname) return;
    lastPath.current = pathname;

    // Defer one tick so the path change settles before we ping.
    const timer = setTimeout(() => {
      const body = JSON.stringify({
        site_id: SITE_ID,
        path: pathname,
        referrer: document.referrer || null,
      });

      fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
        keepalive: true,
        mode: "cors",
        credentials: "omit",
      }).catch(() => {
        // Fire-and-forget. Never surface tracking errors to the user.
      });
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

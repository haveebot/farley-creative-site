"use client";

import { useOpenBeacon } from "./useOpenBeacon";

/**
 * Website design preview for a tracked link.
 *
 * The design's sections are stacked edge to edge at full width, so the client
 * scrolls one homepage the way they would on the live site, with no viewer
 * chrome. A small badge marks it as a Farley Creative preview.
 */
export default function WebPreview({
  token,
  pages,
}: {
  token: string;
  pages: { src: string; alt: string }[];
}) {
  useOpenBeacon(token);

  return (
    <div className="min-h-dvh bg-[#1f2e4a]">
      <main>
        {pages.map((page, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={page.src}
            src={page.src}
            alt={page.alt}
            width={2880}
            height={1800}
            loading={i < 2 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "auto"}
            className="block h-auto w-full"
          />
        ))}
      </main>

      <div className="pointer-events-none fixed bottom-4 right-4 flex items-center gap-2 rounded-full bg-warm-black/75 px-3 py-1.5 text-[11px] tracking-wide text-cream backdrop-blur-sm sm:text-xs">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/fc-mark.png" alt="" className="h-4 w-auto" />
        <span>Design preview · Farley Creative</span>
      </div>
    </div>
  );
}

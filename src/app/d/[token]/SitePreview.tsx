"use client";

import Link from "next/link";
import type {
  PreviewLink,
  PreviewSection,
  PreviewSite,
} from "@/lib/tracked-docs";
import { useOpenBeacon } from "./useOpenBeacon";

/**
 * Multi-page website design preview for a tracked link.
 *
 * Each page is its design sections stacked edge to edge, with invisible links
 * laid over the buttons, so the client clicks through the site the way it
 * will work live. A slim top bar moves between pages.
 */
export default function SitePreview({
  token,
  nav,
  sections,
  slug,
}: {
  token: string;
  nav: PreviewSite["nav"];
  sections: PreviewSection[];
  slug: string;
}) {
  useOpenBeacon(token);

  const base = `/d/${token}`;

  return (
    <div className="min-h-dvh bg-[#1f2e4a]">
      <header className="sticky top-0 z-20 border-b border-[#b5945a]/40 bg-[#1f2e4a]/95 backdrop-blur-sm">
        <nav
          aria-label="Preview pages"
          className="flex h-11 items-center gap-5 overflow-x-auto whitespace-nowrap px-4 text-[11px] uppercase tracking-[0.16em] text-[#f4efe6] sm:justify-end sm:gap-8 sm:px-8 sm:text-xs"
        >
          {nav.map((item) => {
            const current = item.slug === slug;
            return (
              <Link
                key={item.slug}
                href={pageHref(base, item.slug)}
                aria-current={current ? "page" : undefined}
                className={
                  current
                    ? "text-[#b5945a]"
                    : "transition-colors hover:text-[#b5945a]"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </header>

      {/* Bottom room so the badge clears the footer's fine print */}
      <main className="pb-14">
        {sections.map((section, i) => (
          <Section key={section.src} section={section} base={base} index={i} />
        ))}
      </main>

      <div className="pointer-events-none fixed bottom-4 right-4 z-20 flex items-center gap-2 rounded-full bg-warm-black/75 px-3 py-1.5 text-[11px] tracking-wide text-cream backdrop-blur-sm sm:text-xs">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/fc-mark.png" alt="" className="h-4 w-auto" />
        <span>Design preview · Farley Creative</span>
      </div>
    </div>
  );
}

function Section({
  section,
  base,
  index,
}: {
  section: PreviewSection;
  base: string;
  index: number;
}) {
  const width = section.width ?? 1440;
  const height = section.height ?? 900;

  return (
    <div className="relative">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={section.src}
        alt={section.alt}
        width={width * 2}
        height={height * 2}
        loading={index < 2 ? "eager" : "lazy"}
        fetchPriority={index === 0 ? "high" : "auto"}
        className="block h-auto w-full"
      />
      {section.links?.map((link) => (
        <HotSpot
          key={`${link.href}:${link.x},${link.y}`}
          link={link}
          base={base}
          width={width}
          height={height}
        />
      ))}
    </div>
  );
}

function HotSpot({
  link,
  base,
  width,
  height,
}: {
  link: PreviewLink;
  base: string;
  width: number;
  height: number;
}) {
  const style = {
    left: `${(link.x / width) * 100}%`,
    top: `${(link.y / height) * 100}%`,
    width: `${(link.w / width) * 100}%`,
    height: `${(link.h / height) * 100}%`,
  };
  const className =
    "absolute transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b5945a]";

  if (/^https?:\/\//.test(link.href)) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.label}
        title={link.label}
        className={className}
        style={style}
      />
    );
  }
  return (
    <Link
      href={pageHref(base, link.href)}
      aria-label={link.label}
      title={link.label}
      className={className}
      style={style}
    />
  );
}

function pageHref(base: string, slug: string) {
  return slug ? `${base}/${slug}` : base;
}

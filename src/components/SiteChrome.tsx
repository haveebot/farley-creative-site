/**
 * Shared header nav + footer for all pages. Mirrors the home-page chrome
 * so adding a new route doesn't reinvent the layout.
 *
 * - Logo: yellow round mark on dark bg, straight wordmark on cream bg
 * - Mobile drawer slides in from right, full-height
 * - Reveal class for sections — see globals.css
 */

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/#packages", label: "Packages" },
  { href: "/how-we-execute", label: "Process" },
  { href: "/contact", label: "Contact" },
];

export function HeaderNav({ dark = true }: { dark?: boolean }) {
  const [open, setOpen] = useState(false);
  const bg = dark
    ? "bg-warm-black text-cream/90"
    : "bg-cream text-warm-black";
  const hoverColor = dark
    ? "hover:text-butter-yellow"
    : "hover:text-forest-teal";

  // Close drawer on route changes / when nav link clicked
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <header
        className={`${bg} sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-warm-black/90`}
      >
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src={dark ? "/brand/farleycreative-yellow-round.png" : "/brand/farleycreative-straight.png"}
              alt="Farley Creative"
              width={dark ? 36 : 140}
              height={dark ? 36 : 32}
              priority
              className={dark ? "rounded-full" : ""}
            />
            {dark && (
              <span className="font-serif italic text-butter-yellow text-base hidden sm:inline">
                farley
                <span className="font-sans not-italic font-bold text-cream">
                  creative
                </span>
              </span>
            )}
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em]">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`${hoverColor} transition`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="md:hidden p-2 -mr-2"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div
          className="fixed inset-0 z-[60] md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-warm-black/60"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 w-72 bg-warm-black text-cream/90 p-6 flex flex-col">
            <div className="flex items-center justify-between mb-12">
              <Image
                src="/brand/farleycreative-yellow-round.png"
                alt="Farley Creative"
                width={36}
                height={36}
                className="rounded-full"
              />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="p-2 -mr-2"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-lg tracking-wide hover:text-butter-yellow transition"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <p className="mt-auto pt-8 text-xs text-cream/50 font-serif italic">
              Where creative meets conversion.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-warm-black text-cream/60 border-t border-cream/10 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/brand/farleycreative-yellow-round.png"
                alt="Farley Creative"
                width={48}
                height={48}
                className="rounded-full"
              />
            </Link>
            <p className="mt-4 text-sm text-cream/60 leading-relaxed max-w-xs">
              Founder-operator marketing and branding agency. Texas-rooted,
              brand-meets-physical-space sweet spot.
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-butter-yellow mb-3">
              Explore
            </p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/work" className="hover:text-butter-yellow transition">Work</Link></li>
              <li><Link href="/#packages" className="hover:text-butter-yellow transition">Packages</Link></li>
              <li><Link href="/how-we-execute" className="hover:text-butter-yellow transition">Process</Link></li>
              <li><Link href="/contact" className="hover:text-butter-yellow transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-butter-yellow mb-3">
              Contact
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:collie@farleycreative.com" className="hover:text-butter-yellow transition">
                  collie@farleycreative.com
                </a>
              </li>
              <li>
                <a href="tel:+12107095771" className="hover:text-butter-yellow transition">
                  210.709.5771
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-cream/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs">
          <p>© {new Date().getFullYear()} Farley Creative</p>
          <p className="font-serif italic">Where creative meets conversion.</p>
        </div>
      </div>
    </footer>
  );
}

/**
 * Shared header nav + footer for all pages. Mirrors the home-page chrome
 * so adding a new route doesn't reinvent the layout.
 */

import Link from "next/link";

export function HeaderNav({ dark = true }: { dark?: boolean }) {
  const bg = dark ? "bg-warm-black text-cream/90" : "bg-cream text-warm-black";
  const hover = dark ? "hover:text-butter-yellow" : "hover:text-forest-teal";
  return (
    <header
      className={`${bg} sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-warm-black/90`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif italic text-butter-yellow text-lg"
        >
          farley
          <span className="font-sans not-italic font-bold text-cream">
            creative
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em]">
          <Link href="/#about" className={`${hover} transition`}>
            About
          </Link>
          <Link href="/work" className={`${hover} transition`}>
            Work
          </Link>
          <Link href="/#packages" className={`${hover} transition`}>
            Packages
          </Link>
          <Link href="/how-we-execute" className={`${hover} transition`}>
            Process
          </Link>
          <Link href="/contact" className={`${hover} transition`}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-warm-black text-cream/60 border-t border-cream/10 px-6 py-10">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
        <p>© {new Date().getFullYear()} Farley Creative</p>
        <p className="font-serif italic">Where creative meets conversion.</p>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { HeaderNav, SiteFooter } from "@/components/SiteChrome";

export const metadata = {
  title: "Lost",
  description: "Page not found.",
};

export default function NotFound() {
  return (
    <>
      <HeaderNav />
      <main className="bg-cream text-warm-black min-h-[70vh] flex items-center justify-center px-6">
        <div className="max-w-xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-forest-teal mb-6">
            404
          </p>
          <h1 className="text-4xl md:text-6xl font-serif italic leading-tight mb-8">
            Looks like that page wandered off.
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-warm-black/75 mb-10">
            Page wasn&apos;t found — could be moved, renamed, or never existed.
            Here&apos;s where to head instead.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="bg-butter-yellow text-warm-black px-8 py-3 font-medium tracking-wide hover:opacity-90 transition"
            >
              Home →
            </Link>
            <Link
              href="/work"
              className="border border-warm-black/40 text-warm-black px-8 py-3 font-medium tracking-wide hover:border-forest-teal transition"
            >
              See the work
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

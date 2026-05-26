/**
 * /work — case study index. All 5 cards link to the detail page.
 */

import Image from "next/image";
import Link from "next/link";
import { HeaderNav, SiteFooter } from "@/components/SiteChrome";
import { CASE_STUDIES } from "@/lib/case-studies";

export const metadata = {
  title: "Work",
  description:
    "Brand systems built to live in physical spaces, on screens, and at events — across hospitality, retail, real estate, and lifestyle.",
};

export default function WorkPage() {
  return (
    <>
      <HeaderNav />
      <main className="bg-cream text-warm-black">
        <header className="px-6 pt-24 pb-12">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-forest-teal mb-6">
              Selected work
            </p>
            <h1 className="text-4xl md:text-6xl font-serif italic leading-tight max-w-3xl">
              Brand systems that live in physical spaces, on screens, and at
              events.
            </h1>
            <p className="mt-8 text-base md:text-lg max-w-2xl text-warm-black/75 leading-relaxed">
              Five projects. Hospitality, real estate, community publishing,
              event design, and B2B systems. Different scopes, same operating
              principle: every brand artifact gets the polish of the firm
              itself.
            </p>
          </div>
        </header>

        <section className="px-6 pb-24">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {CASE_STUDIES.map((c) => (
              <Link
                key={c.slug}
                href={`/work/${c.slug}`}
                className="block border border-warm-black/15 bg-cream hover:border-forest-teal transition group overflow-hidden"
              >
                {c.hero && (
                  <div className="relative aspect-[16/10] bg-warm-black/5 overflow-hidden">
                    <Image
                      src={c.hero.src}
                      alt={c.hero.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className={`${c.hero.shape === "tall" ? "object-contain" : "object-cover"} group-hover:scale-105 transition-transform duration-500`}
                    />
                  </div>
                )}
                <div className="p-8">
                <div className="flex items-baseline justify-between mb-4">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-forest-teal">
                    {c.kind}
                  </p>
                  {c.status === "placeholder" && (
                    <span className="text-[10px] text-warm-black/40">
                      coming soon
                    </span>
                  )}
                  {c.live_url && (
                    <span className="text-[10px] uppercase tracking-[0.2em] text-butter-yellow bg-warm-black px-2 py-1 rounded-sm">
                      ● Live
                    </span>
                  )}
                </div>
                <h2 className="text-2xl font-semibold mb-3">{c.title}</h2>
                <p className="text-sm leading-relaxed text-warm-black/75 mb-6">
                  {c.hook_short}
                </p>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-xs italic text-forest-teal opacity-60 group-hover:opacity-100 transition">
                    Read case study →
                  </p>
                  {c.live_url && (
                    <span className="text-[10px] uppercase tracking-[0.2em] text-warm-black/70">
                      {c.live_url_label}
                    </span>
                  )}
                </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

/**
 * /work/[slug] — case study detail.
 *
 * Renders Collie's 5-section template (IMG_3038):
 *   1. Challenge / Objective
 *   2. The Hook
 *   3. Strategy
 *   4. Outcome (Measurable)
 *   5. CTA for potential client
 */

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HeaderNav, SiteFooter } from "@/components/SiteChrome";
import { CASE_STUDIES, getCaseStudy } from "@/lib/case-studies";

export const dynamicParams = false;

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) return { title: "Case study" };
  return {
    title: `${c.title} — case study`,
    description: c.hook_short,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) notFound();

  return (
    <>
      <HeaderNav />
      <main className="bg-cream text-warm-black">
        {/* Hero image — full-width banner if provided */}
        {c.hero && (
          <div className="relative w-full bg-warm-black aspect-[16/7] md:aspect-[16/6] overflow-hidden">
            <Image
              src={c.hero.src}
              alt={c.hero.alt}
              fill
              priority
              sizes="100vw"
              className={c.hero.shape === "tall" ? "object-contain" : "object-cover"}
            />
          </div>
        )}

        {/* Hero text */}
        <header className="px-6 pt-16 pb-16 border-b border-warm-black/10">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/work"
              className="text-xs uppercase tracking-[0.3em] text-forest-teal hover:text-warm-black transition"
            >
              ← Selected work
            </Link>
            <p className="text-xs uppercase tracking-[0.3em] text-forest-teal mt-8 mb-4">
              {c.kind}
            </p>
            <h1 className="text-4xl md:text-6xl font-serif italic leading-tight mb-8">
              {c.title}
            </h1>
            <p className="text-lg md:text-xl text-warm-black/80 leading-relaxed max-w-2xl">
              {c.hook_short}
            </p>

            {c.live_url && (
              <a
                href={c.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 bg-warm-black text-cream text-xs uppercase tracking-[0.2em] hover:bg-forest-teal transition"
              >
                Visit {c.live_url_label ?? c.live_url}
                <span aria-hidden="true">↗</span>
              </a>
            )}

            <dl className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-warm-black/10">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.25em] text-forest-teal mb-1">
                  Client
                </dt>
                <dd className="text-sm">{c.client}</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.25em] text-forest-teal mb-1">
                  Year
                </dt>
                <dd className="text-sm">{c.year}</dd>
              </div>
              <div className="col-span-2 md:col-span-1">
                <dt className="text-[10px] uppercase tracking-[0.25em] text-forest-teal mb-1">
                  Scope
                </dt>
                <dd className="text-sm">{c.scope.join(" · ")}</dd>
              </div>
            </dl>
          </div>
        </header>

        {/* Body sections — Collie's template */}
        <article className="px-6 py-24 space-y-20">
          {c.status === "placeholder" && (
            <div className="max-w-3xl mx-auto p-4 bg-soft-mint/40 border-l-2 border-forest-teal text-xs text-warm-black/70">
              <strong className="font-medium">Note:</strong> case study content
              in progress. Structural template shown; client-specific copy
              lands once Collie supplies the source material.
            </div>
          )}

          <Section label="01" title="Challenge">
            <p className="text-base md:text-lg leading-relaxed text-warm-black/85">
              {c.challenge}
            </p>
          </Section>

          <Section label="02" title="The Hook">
            <p className="text-base md:text-lg leading-relaxed text-warm-black/85 font-serif italic">
              {c.hook}
            </p>
          </Section>

          <Section label="03" title="Strategy">
            <ul className="space-y-4">
              {c.strategy.map((s, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-forest-teal text-xs font-medium mt-1.5 shrink-0 w-8">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base md:text-lg leading-relaxed text-warm-black/85">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </Section>

          {c.gallery && c.gallery.length > 0 && (
            <section className="max-w-5xl mx-auto">
              <div className={`grid gap-4 ${c.gallery.length === 1 ? "grid-cols-1" : c.gallery.length === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}>
                {c.gallery.map((g, i) => (
                  <div
                    key={i}
                    className={`relative bg-warm-black/5 overflow-hidden ${
                      g.shape === "tall" ? "aspect-[3/4]" : g.shape === "square" ? "aspect-square" : "aspect-[16/10]"
                    }`}
                  >
                    <Image
                      src={g.src}
                      alt={g.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className={g.shape === "tall" ? "object-contain" : "object-cover"}
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          <Section label="04" title="Outcome">
            <ul className="space-y-3">
              {c.outcome.map((o, i) => (
                <li
                  key={i}
                  className="border-l-2 border-butter-yellow pl-4 text-base md:text-lg leading-relaxed text-warm-black/85"
                >
                  {o}
                </li>
              ))}
            </ul>
          </Section>
        </article>

        {/* CTA band */}
        <section className="bg-warm-black text-cream px-6 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-butter-yellow mb-6">
              {c.title}
            </p>
            <p className="text-2xl md:text-3xl font-serif italic leading-snug mb-10">
              {c.cta}
            </p>
            <Link
              href="/contact"
              className="inline-block bg-butter-yellow text-warm-black px-10 py-4 font-medium tracking-wide hover:opacity-90 transition"
            >
              Start the conversation →
            </Link>
          </div>
        </section>

        {/* Other case studies */}
        <section className="bg-cream px-6 py-20 border-t border-warm-black/10">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-forest-teal mb-6 text-center">
              More work
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {CASE_STUDIES.filter((other) => other.slug !== c.slug).map(
                (other) => (
                  <Link
                    key={other.slug}
                    href={`/work/${other.slug}`}
                    className="block border border-warm-black/15 p-5 hover:border-forest-teal transition"
                  >
                    <p className="text-[10px] uppercase tracking-[0.25em] text-forest-teal mb-2">
                      {other.kind}
                    </p>
                    <p className="text-sm font-semibold">{other.title}</p>
                  </Link>
                ),
              )}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function Section({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-3xl mx-auto">
      <div className="flex items-baseline gap-6 mb-8">
        <span className="text-forest-teal text-xs font-medium tracking-widest">
          {label}
        </span>
        <h2 className="text-2xl md:text-3xl font-serif italic">{title}</h2>
      </div>
      {children}
    </section>
  );
}

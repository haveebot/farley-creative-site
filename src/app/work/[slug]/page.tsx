/**
 * /work/[slug] — case study detail. Editorial layout with image-led pacing:
 *   1. Full-bleed hero
 *   2. Title + hook + meta header
 *   3. Challenge (text)
 *   4. Image break — gallery[0]
 *   5. The Hook (pull quote, centered)
 *   6. Strategy (numbered list)
 *   7. Image break — gallery[1+] (1-up, 2-up, or stacked depending on count)
 *   8. Outcome (stat callouts on butter-yellow)
 *   9. CTA band
 */

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HeaderNav, SiteFooter } from "@/components/SiteChrome";
import {
  CASE_STUDIES,
  getCaseStudy,
  type GalleryImage,
} from "@/lib/case-studies";

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

function ImageBlock({ image }: { image: GalleryImage }) {
  // Display at natural aspect ratio — no forced crop. Plain img keeps the
  // image's intrinsic proportions so wide panoramic crops stay panoramic and
  // square crops stay square instead of getting cropped to fit a container.
  return (
    <div className="w-full bg-warm-black/5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image.src}
        alt={image.alt}
        className="block w-full h-auto"
        loading="lazy"
      />
    </div>
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) notFound();

  const [g0, ...gRest] = c.gallery ?? [];

  return (
    <>
      <HeaderNav />
      <main className="bg-cream text-warm-black">
        {/* HERO — full-bleed banner */}
        {c.hero && (
          <div className="relative w-full bg-warm-black aspect-[16/8] md:aspect-[21/9] overflow-hidden">
            <Image
              src={c.hero.src}
              alt={c.hero.alt}
              fill
              priority
              sizes="100vw"
              className={
                c.hero.shape === "tall" ? "object-contain" : "object-cover"
              }
            />
          </div>
        )}

        {/* HEADER — title, hook, meta */}
        <header className="px-6 pt-16 md:pt-24 pb-16">
          <div className="max-w-6xl mx-auto">
            <Link
              href="/work"
              className="text-xs uppercase tracking-[0.3em] text-forest-teal hover:text-warm-black transition"
            >
              ← Selected work
            </Link>

            <div className="mt-12 grid md:grid-cols-12 gap-8 md:gap-16 items-end">
              <div className="md:col-span-7">
                <p className="text-xs uppercase tracking-[0.3em] text-forest-teal mb-4">
                  {c.kind}
                </p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif italic leading-[1.05]">
                  {c.title}
                </h1>
              </div>
              <div className="md:col-span-5">
                <p className="text-lg md:text-xl text-warm-black/80 leading-relaxed">
                  {c.hook_short}
                </p>
                {c.live_url && (
                  <a
                    href={c.live_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-warm-black text-cream text-xs uppercase tracking-[0.2em] hover:bg-forest-teal transition"
                  >
                    Visit {c.live_url_label ?? c.live_url}
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </div>

            <dl className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-warm-black/10">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.25em] text-forest-teal mb-2">
                  Client
                </dt>
                <dd className="text-sm">{c.client}</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.25em] text-forest-teal mb-2">
                  Year
                </dt>
                <dd className="text-sm">{c.year}</dd>
              </div>
              <div className="col-span-2 md:col-span-1">
                <dt className="text-[10px] uppercase tracking-[0.25em] text-forest-teal mb-2">
                  Scope
                </dt>
                <dd className="text-sm">{c.scope.join(" · ")}</dd>
              </div>
            </dl>
          </div>
        </header>

        {/* CHALLENGE */}
        <Section label="01" title="Challenge">
          <p className="text-base md:text-lg leading-relaxed text-warm-black/85">
            {c.challenge}
          </p>
        </Section>

        {/* IMAGE BREAK 1 — full-bleed */}
        {g0 && (
          <div className="mt-20 md:mt-28">
            <ImageBlock image={g0} />
          </div>
        )}

        {/* HOOK — editorial pull quote */}
        <section className="px-6 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-forest-teal mb-8">
              02 — The Hook
            </p>
            <blockquote className="text-2xl md:text-4xl font-serif italic leading-snug text-warm-black">
              {c.hook}
            </blockquote>
          </div>
        </section>

        {/* STRATEGY */}
        <Section label="03" title="Strategy">
          <ul className="space-y-5">
            {c.strategy.map((s, i) => (
              <li key={i} className="flex gap-5">
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

        {/* IMAGE BREAK 2 — handles 1, 2, or 3+ remaining images */}
        {gRest.length > 0 && <GalleryBreak images={gRest} />}

        {/* OUTCOME — stat callouts, stays on cream with butter-yellow accents */}
        <section className="px-6 py-20 md:py-28 mt-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-baseline gap-6 mb-12">
              <span className="text-forest-teal text-xs font-medium tracking-widest">
                04
              </span>
              <h2 className="text-2xl md:text-3xl font-serif italic">
                Outcome
              </h2>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              {c.outcome.map((o, i) => {
                const m = o.match(/^([\d.]+%)\s+(.+)/);
                if (m) {
                  return (
                    <li
                      key={i}
                      className="border-l-2 border-butter-yellow pl-6"
                    >
                      <p className="text-5xl md:text-6xl font-serif italic text-forest-teal leading-none mb-3">
                        {m[1]}
                      </p>
                      <p className="text-sm md:text-base text-warm-black/75 leading-snug">
                        {m[2]}
                      </p>
                    </li>
                  );
                }
                return (
                  <li
                    key={i}
                    className="border-l-2 border-butter-yellow pl-6 text-base md:text-lg leading-relaxed text-warm-black/85"
                  >
                    {o}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

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

        {/* More work */}
        <section className="bg-cream px-6 py-20 border-t border-warm-black/10">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-forest-teal mb-8 text-center">
              More work
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {CASE_STUDIES.filter((other) => other.slug !== c.slug).map(
                (other) => (
                  <Link
                    key={other.slug}
                    href={`/work/${other.slug}`}
                    className="block p-5 hover:bg-soft-mint/30 transition"
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
    <section className="px-6 py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-baseline gap-6 mb-8">
          <span className="text-forest-teal text-xs font-medium tracking-widest">
            {label}
          </span>
          <h2 className="text-2xl md:text-3xl font-serif italic">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function GalleryBreak({ images }: { images: GalleryImage[] }) {
  // Stack images at natural aspect — full width, no forced crops. Mixed
  // source aspects (panoramic, square, tall) read cleanly when each gets
  // its own row.
  return (
    <div className="mt-20 md:mt-28 space-y-4">
      {images.map((g, i) => (
        <ImageBlock key={i} image={g} />
      ))}
    </div>
  );
}

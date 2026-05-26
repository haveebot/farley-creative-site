/**
 * /experience — Selected experience page.
 *
 * Renders Collie's senior credentials. Featured entries get a large image
 * above the body text. Non-featured entries (Selected Brand Engagements) get
 * a side-by-side text + 3-image gallery row layout per mockup DAHKut-EFqI.
 */

import Image from "next/image";
import Link from "next/link";
import { HeaderNav, SiteFooter } from "@/components/SiteChrome";
import { EXPERIENCE_CATEGORIES } from "@/lib/experience";

export const metadata = {
  title: "Experience",
  description:
    "Selected client engagements, in-house leadership, and product-design experience across hospitality, retail, real estate, and heritage brands.",
};

export default function ExperiencePage() {
  return (
    <>
      <HeaderNav />
      <main className="bg-cream text-warm-black">
        <header className="px-6 pt-24 pb-12">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-forest-teal mb-6">
              Experience
            </p>
            <h1 className="text-4xl md:text-6xl font-serif italic leading-tight mb-8">
              The depth behind the agency.
            </h1>
            <p className="text-base md:text-lg max-w-2xl text-warm-black/75 leading-relaxed">
              Selected client engagements, in-house leadership, and product
              design across hospitality, retail, real estate, and heritage
              brands. The track record that informs how we build for clients
              now.
            </p>
          </div>
        </header>

        {EXPERIENCE_CATEGORIES.map((category, ci) => (
          <section
            key={category.slug}
            id={category.slug}
            className="px-6 py-16 border-t border-warm-black/10"
          >
            <div className="max-w-5xl mx-auto">
              <div className="mb-10 max-w-2xl">
                <p className="text-xs uppercase tracking-[0.3em] text-forest-teal mb-3">
                  {String(ci + 1).padStart(2, "0")}
                </p>
                <h2 className="text-2xl md:text-3xl font-serif italic leading-tight mb-3">
                  {category.title}
                </h2>
                <p className="text-base text-warm-black/75 leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="space-y-12">
                {category.entries.map((entry) => {
                  if (entry.featured) {
                    return (
                      <article
                        key={entry.slug}
                        className="border border-warm-black/15 overflow-hidden"
                      >
                        {entry.image && (
                          <div className="relative w-full bg-warm-black/5 overflow-hidden">
                            <Image
                              src={entry.image.src}
                              alt={entry.image.alt}
                              width={2000}
                              height={1200}
                              sizes="(min-width: 1024px) 60vw, 100vw"
                              className="w-full h-auto block"
                              priority
                            />
                          </div>
                        )}
                        <div className="p-8 md:p-10">
                          <header className="mb-3">
                            <h3 className="text-2xl font-semibold mb-1">
                              {entry.name}
                            </h3>
                            <p className="text-xs uppercase tracking-[0.2em] text-forest-teal">
                              {entry.role}
                            </p>
                          </header>
                          <p className="text-base text-warm-black/85 leading-relaxed mb-3">
                            {entry.summary}
                          </p>
                          {entry.detail && (
                            <p className="text-sm text-warm-black/75 leading-relaxed mb-4">
                              {entry.detail}
                            </p>
                          )}
                          {entry.highlights && entry.highlights.length > 0 && (
                            <ul className="space-y-2 mt-4">
                              {entry.highlights.map((h, i) => (
                                <li
                                  key={i}
                                  className="border-l-2 border-butter-yellow pl-3 text-sm text-warm-black/85 leading-relaxed"
                                >
                                  {h}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </article>
                    );
                  }
                  // Non-featured: 2-column with text on left, image gallery on right
                  if (entry.image) {
                    return (
                      <article
                        key={entry.slug}
                        className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center border-l-2 border-forest-teal pl-6 md:pl-8 py-2"
                      >
                        <div className="md:col-span-6">
                          <h3 className="text-xl font-semibold mb-1">
                            {entry.name}
                          </h3>
                          <p className="text-xs uppercase tracking-[0.2em] text-forest-teal mb-3">
                            {entry.role}
                          </p>
                          <p className="text-base text-warm-black/85 leading-relaxed">
                            {entry.summary}
                          </p>
                        </div>
                        <div className="md:col-span-6">
                          <Image
                            src={entry.image.src}
                            alt={entry.image.alt}
                            width={1500}
                            height={540}
                            sizes="(min-width: 768px) 45vw, 100vw"
                            className="w-full h-auto block"
                          />
                        </div>
                      </article>
                    );
                  }
                  // Non-featured, no image: text-only
                  return (
                    <article
                      key={entry.slug}
                      className="border-l-2 border-forest-teal pl-6 md:pl-8 py-2"
                    >
                      <h3 className="text-xl font-semibold mb-1">
                        {entry.name}
                      </h3>
                      <p className="text-xs uppercase tracking-[0.2em] text-forest-teal mb-3">
                        {entry.role}
                      </p>
                      <p className="text-base text-warm-black/85 leading-relaxed">
                        {entry.summary}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="bg-warm-black text-cream px-6 py-20 border-t border-cream/10">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-butter-yellow mb-6">
              See the current agency work
            </p>
            <h2 className="text-3xl md:text-5xl font-serif italic leading-tight mb-10">
              Selected case studies.
            </h2>
            <Link
              href="/work"
              className="inline-block bg-butter-yellow text-warm-black px-10 py-4 font-medium tracking-wide hover:opacity-90 transition"
            >
              See the work →
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

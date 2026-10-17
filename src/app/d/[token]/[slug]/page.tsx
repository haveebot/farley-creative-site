import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTrackedDoc, previewSections } from "@/lib/tracked-docs";
import SitePreview from "../SitePreview";

type Params = { token: string; slug: string };

// The pages behind a multi-page website preview (/d/<token>/<slug>). The
// homepage itself is served at /d/<token>. Same privacy as every tracked doc.
export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { token, slug } = await params;
  const doc = getTrackedDoc(token);
  const route =
    doc?.site && slug && Object.hasOwn(doc.site.routes, slug)
      ? doc.site.routes[slug]
      : undefined;
  return {
    title: doc && route ? `${route.title} · ${doc.title}` : "Document",
    robots: { index: false, follow: false, nocache: true },
    alternates: {},
  };
}

export default async function TrackedSitePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { token, slug } = await params;
  const doc = getTrackedDoc(token);
  if (!doc?.site || !slug) notFound();

  const sections = previewSections(doc.site, slug);
  if (!sections) notFound();

  return (
    <SitePreview
      token={doc.token}
      nav={doc.site.nav}
      sections={sections}
      slug={slug}
    />
  );
}

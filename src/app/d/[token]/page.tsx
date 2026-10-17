import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTrackedDoc, previewSections } from "@/lib/tracked-docs";
import DocViewer from "./DocViewer";
import SitePreview from "./SitePreview";
import WebPreview from "./WebPreview";

type Params = { token: string };

// Keep tracked docs out of search engines + social unfurls. They're reachable
// only by the exact link; nothing should index or list them.
export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { token } = await params;
  const doc = getTrackedDoc(token);
  return {
    title: doc ? doc.title : "Document",
    robots: { index: false, follow: false, nocache: true },
    alternates: {},
  };
}

export default async function TrackedDocPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { token } = await params;
  const doc = getTrackedDoc(token);
  if (!doc) notFound();

  if (doc.site) {
    const sections = previewSections(doc.site, "");
    if (!sections) notFound();
    return (
      <SitePreview
        token={doc.token}
        nav={doc.site.nav}
        sections={sections}
        slug=""
      />
    );
  }
  if (doc.pages) {
    return <WebPreview token={doc.token} pages={doc.pages} />;
  }
  if (!doc.file) notFound();

  return (
    <DocViewer
      token={doc.token}
      title={doc.title}
      file={doc.file}
    />
  );
}

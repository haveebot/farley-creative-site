import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTrackedDoc } from "@/lib/tracked-docs";
import DocViewer from "./DocViewer";

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

  return (
    <DocViewer
      token={doc.token}
      title={doc.title}
      file={doc.file}
    />
  );
}

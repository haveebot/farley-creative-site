import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    // /d/ holds private, by-link-only tracked documents — keep them unindexed.
    rules: { userAgent: "*", allow: "/", disallow: "/d/" },
    sitemap: "https://farleycreative.com/sitemap.xml",
  };
}

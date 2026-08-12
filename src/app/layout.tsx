import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Tracker } from "@/components/Tracker";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://farleycreative.com"),
  title: {
    default: "Farley Creative — Texas Marketing & Branding Agency",
    template: "%s · Farley Creative",
  },
  description:
    "Farley Creative is a founder-operator marketing and branding agency based in Boerne, Texas, serving the Hill Country, San Antonio, Austin, and beyond. Brand strategy, visual identity, web, and multi-channel marketing. Where creative meets conversion.",
  applicationName: "Farley Creative",
  authors: [{ name: "Collie Farley" }],
  creator: "Collie Farley",
  publisher: "Farley Creative",
  alternates: { canonical: "/" },
  category: "Marketing & Branding Agency",
  keywords: [
    "marketing agency",
    "branding agency",
    "Texas marketing agency",
    "Texas branding agency",
    "Hill Country branding agency",
    "San Antonio marketing agency",
    "best branding agency Texas",
    "brand identity",
    "hospitality branding",
    "founder-operator agency",
    "multi-channel marketing",
    "brand experiences",
    "Collie Farley",
    "Farley Creative",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/brand/farleycreative-favicon.png", type: "image/png", sizes: "48x48" },
    ],
    shortcut: "/favicon.ico",
    apple: "/brand/farleycreative-favicon-180.png",
  },
  openGraph: {
    title: "Farley Creative — Texas Marketing & Branding Agency",
    description:
      "Founder-operator marketing and branding agency serving Texas, the Hill Country, and the Gulf Coast. Where creative meets conversion.",
    url: "https://farleycreative.com",
    siteName: "Farley Creative",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og/og-default.png",
        width: 1200,
        height: 630,
        alt: "Farley Creative — where creative meets conversion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Farley Creative",
    description: "Where creative meets conversion.",
    images: ["/og/og-default.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const SITE = "https://farleycreative.com";

const SAME_AS = [
  "https://www.facebook.com/FarleyCreative",
  "https://www.instagram.com/farleygirlscreative",
];

// Single cross-linked @graph: the agency (ProfessionalService), the website,
// and Collie as a Person — so "Farley Creative", "Collie Farley", and the
// service/location queries all resolve to entities Google + LLMs can read.
const SITE_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "Organization"],
      "@id": `${SITE}/#organization`,
      name: "Farley Creative",
      url: SITE,
      logo: {
        "@type": "ImageObject",
        url: `${SITE}/brand/farleycreative-straight.png`,
      },
      image: `${SITE}/og/og-default.png`,
      description:
        "Founder-operator marketing and branding agency based in Boerne, Texas, serving the Hill Country, San Antonio, Austin, and beyond. Brand strategy, visual identity, web, and multi-channel marketing.",
      founder: { "@id": `${SITE}/#collie` },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Boerne",
        addressRegion: "TX",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 29.7947,
        longitude: -98.732,
      },
      areaServed: [
        { "@type": "State", name: "Texas" },
        { "@type": "City", name: "Boerne, Texas" },
        { "@type": "Place", name: "Texas Hill Country" },
        { "@type": "City", name: "San Antonio, Texas" },
        { "@type": "City", name: "Austin, Texas" },
        { "@type": "City", name: "Port Aransas, Texas" },
      ],
      email: "collie@farleycreative.com",
      telephone: "+1-210-709-5771",
      priceRange: "$$",
      serviceType: [
        "Brand strategy",
        "Visual identity",
        "Multi-channel marketing",
        "Web design",
        "Event design",
        "Brand experience design",
      ],
      knowsAbout: [
        "Brand strategy",
        "Visual identity design",
        "Marketing",
        "Hospitality branding",
        "Web design",
        "Event design",
      ],
      slogan: "Where creative meets conversion.",
      sameAs: SAME_AS,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "Farley Creative",
      description: "Texas marketing and branding agency. Where creative meets conversion.",
      publisher: { "@id": `${SITE}/#organization` },
      inLanguage: "en-US",
    },
    {
      "@type": "Person",
      "@id": `${SITE}/#collie`,
      name: "Collie Farley",
      url: `${SITE}/about`,
      jobTitle: "Founder & Creative Director",
      worksFor: { "@id": `${SITE}/#organization` },
      knowsAbout: ["Marketing", "Branding", "Brand strategy", "Creative direction"],
      sameAs: SAME_AS,
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SITE_SCHEMA) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Tracker />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://farleycreative.com"),
  title: {
    default: "Farley Creative — where creative meets conversion",
    template: "%s · Farley Creative",
  },
  description:
    "Founder-operator marketing and branding agency translating creative vision into scalable systems — connecting brand, space, events, and marketing.",
  applicationName: "Farley Creative",
  authors: [{ name: "Collie Farley" }],
  keywords: [
    "marketing agency",
    "branding agency",
    "brand identity",
    "hospitality branding",
    "Texas branding agency",
    "founder-operator agency",
    "multi-channel marketing",
    "brand experiences",
  ],
  icons: {
    icon: [
      { url: "/brand/farleycreative-yellow-round.png", type: "image/png" },
    ],
    shortcut: "/brand/farleycreative-yellow-round.png",
    apple: "/brand/farleycreative-yellow-round.png",
  },
  openGraph: {
    title: "Farley Creative",
    description:
      "Founder-operator marketing and branding agency. Where creative meets conversion.",
    url: "https://farleycreative.com",
    siteName: "Farley Creative",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/brand/farleycreative-yellow-round.png",
        width: 1024,
        height: 1024,
        alt: "Farley Creative",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Farley Creative",
    description: "Where creative meets conversion.",
    images: ["/brand/farleycreative-yellow-round.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://farleycreative.com/#organization",
  name: "Farley Creative",
  url: "https://farleycreative.com",
  logo: "https://farleycreative.com/brand/farleycreative-straight.png",
  image: "https://farleycreative.com/brand/farleycreative-yellow-round.png",
  description:
    "Founder-operator marketing and branding agency translating creative vision into scalable systems — connecting brand, space, events, and marketing.",
  founder: { "@type": "Person", name: "Collie Farley" },
  address: { "@type": "PostalAddress", addressRegion: "TX", addressCountry: "US" },
  areaServed: { "@type": "Place", name: "United States" },
  email: "collie@farleycreative.com",
  telephone: "+1-210-709-5771",
  serviceType: [
    "Brand strategy",
    "Visual identity",
    "Multi-channel marketing",
    "Web design",
    "Event design",
    "Brand experience design",
  ],
  slogan: "Where creative meets conversion.",
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
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

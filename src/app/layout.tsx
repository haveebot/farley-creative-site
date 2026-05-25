import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://farleycreative.com"),
  title: {
    default: "Farley Creative — where creative meets conversion",
    template: "%s · Farley Creative",
  },
  description:
    "Founder-operator marketing and branding agency translating creative vision into scalable systems — connecting brand, space, events, and marketing.",
  openGraph: {
    title: "Farley Creative",
    description: "Where creative meets conversion.",
    url: "https://farleycreative.com",
    siteName: "Farley Creative",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

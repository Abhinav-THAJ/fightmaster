import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Demo",
    template: `%s | Demo`,
  },
  description: "Demo - Professional restaurant website offering the best services and experience online.",
  keywords: "restaurant, food, menu, dining, eat",
  authors: [{ name: "Demo" }],
  creator: "Demo",
  publisher: "Demo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://example.com",
    siteName: "Demo",
    title: "Demo",
    description: "Demo - Professional restaurant website offering the best services and experience online.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Demo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Demo",
    description: "Demo - Professional restaurant website offering the best services and experience online.",
    site: "@demo",
    images: ["/og-image.png"],
  },
  verification: {
    google: "",
  },
  alternates: {
    canonical: "https://example.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Demo",
  "description": "Demo - Professional restaurant website offering the best services and experience online.",
  "url": "https://example.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://example.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

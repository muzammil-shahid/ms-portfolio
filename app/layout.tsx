import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sans",
});

const SITE_URL = "https://www.muzammilshahid.com";
const TITLE = "Muhammad Muzammil - Software Engineering Leader";
const DESCRIPTION =
  "Software Engineering Leader at Cloudways - DigitalOcean with 10+ years in React, TypeScript, Next.js, and PHP. Leading 10+ engineers, AI-augmented development, and frontend architecture behind Cloudways' $350M acquisition.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: "Muhammad Muzammil", url: SITE_URL }],
  creator: "Muhammad Muzammil",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Muhammad Muzammil",
    "Software Engineering Leader",
    "Engineering Manager",
    "Software Engineer",
    "Frontend Architect",
    "React",
    "NextJS",
    "TypeScript",
    "JavaScript",
    "PHP",
    "WordPress",
    "Cloudways",
    "DigitalOcean",
    "AI-Augmented Development",
    "Karachi",
    "Pakistan",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Muhammad Muzammil Portfolio",
    type: "profile",
    locale: "en_US",
    images: [
      {
        url: "/img/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Muzammil - Software Engineering Leader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/img/og-banner.jpg"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Muzammil",
  url: SITE_URL,
  image: `${SITE_URL}/img/muzammilshahid.png`,
  jobTitle: "Software Engineering Leader",
  worksFor: {
    "@type": "Organization",
    name: "DigitalOcean",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressCountry: "PK",
  },
  email: `mailto:muzammilshahid.gt@gmail.com`,
  sameAs: ["https://www.linkedin.com/in/muzammil09/"],
  knowsAbout: [
    "React",
    "TypeScript",
    "Next.js",
    "JavaScript",
    "PHP",
    "WordPress",
    "Frontend Architecture",
    "Engineering Leadership",
    "AI-Augmented Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className={`${inter.className} bg-dark-950 text-dark-50 antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

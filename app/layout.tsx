import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Muzammil - Software Engineer",
  description:
    "Software Engineer at Cloudways - DigitalOcean | Javascript / ReactJs / NextJs / Redux / Laravel / WordPress",
  authors: [{ name: "Muhammad Muzammil" }],
  keywords: [
    "Muhammad Muzammil",
    "Software Engineer",
    "React",
    "NextJS",
    "JavaScript",
    "PHP",
    "WordPress",
    "Cloudways",
    "DigitalOcean",
  ],
  openGraph: {
    title: "Muhammad Muzammil - Software Engineer",
    description:
      "Software Engineer at Cloudways - DigitalOcean | Javascript / ReactJs / NextJs / Redux / Laravel / WordPress",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Muhammad Muzammil - Software Engineer",
    description:
      "Software Engineer at Cloudways - DigitalOcean | Javascript / ReactJs / NextJs / Redux / Laravel / WordPress",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-dark-950 text-dark-50 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

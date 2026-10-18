import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Muhammad Muzammil - Software Engineering Leader",
  description:
    "Software Engineering Leader at Cloudways - DigitalOcean | Javascript / ReactJs / NextJs / Redux / Laravel / WordPress",
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
    title: "Muhammad Muzammil - Software Engineering Leader",
    description:
      "Software Engineering Leader at Cloudways - DigitalOcean | Javascript / ReactJs / NextJs / Redux / Laravel / WordPress",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Muhammad Muzammil - Software Engineering Leader",
    description:
      "Software Engineering Leader at Cloudways - DigitalOcean | Javascript / ReactJs / NextJs / Redux / Laravel / WordPress",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className={`${inter.className} bg-dark-950 text-dark-50 antialiased`}>
        {children}
      </body>
    </html>
  );
}

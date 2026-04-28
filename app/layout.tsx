import type { Metadata } from "next";
import { Inter, DM_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "John Duong — Talent Engineer",
  description:
    "I don't just hire AI builders. I am one. Talent Engineer at Valence building Scout — an autonomous sourcing agent that runs 24/7.",
  metadataBase: new URL("https://chocolatepainx.github.io/john-portfolio"),
  keywords: [
    "Talent Engineer",
    "AI Recruiting",
    "Scout",
    "Valence",
    "Autonomous Sourcing",
    "John Duong",
  ],
  openGraph: {
    title: "John Duong — Talent Engineer",
    description: "I don't just hire AI builders. I am one.",
    url: "https://chocolatepainx.github.io/john-portfolio",
    siteName: "John Duong",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Duong — Talent Engineer",
    description: "I don't just hire AI builders. I am one.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmMono.variable} ${instrumentSerif.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}

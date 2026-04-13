import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://idjota.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:
      "Jonatan Waibsnaider — Building high-scale, revenue-critical systems",
    template: "%s | Jonatan Waibsnaider",
  },
  description:
    "Senior Software Engineer. Building production systems. TypeScript, React, Node.js & AI engineering.",
  keywords: [
    "Jonatan Waibsnaider",
    "software engineer",
    "systems engineer",
    "backend engineer",
    "full stack developer",
    "AI engineer",
    "Scalable Systems",
    "Frontend Engineer",
    "Backend Engineer",
    "Frontend Architect",
    "idjota",
  ],
  authors: [{ name: "Jonatan Waibsnaider", url: BASE_URL }],
  creator: "Jonatan Waibsnaider",
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: BASE_URL,
    title:
      "Jonatan Waibsnaider — Building high-scale, revenue-critical systems",
    description:
      "Senior Software Engineer. Building production systems. TypeScript, React, Node.js & AI engineering.",
    siteName: "Jonatan Waibsnaider",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Jonatan Waibsnaider — Building high-scale, revenue-critical systems",
    description:
      "Senior Software Engineer. Building production systems. TypeScript, React, Node.js & AI engineering.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Analytics />
      <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col">{children}</body>
      </html>
    </>
  );
}

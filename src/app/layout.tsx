import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Your original working imports
import "./globals.css";
import ProviderWrapper from "@/components/ProviderWrapper";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Vedant Bhamare",
    template: "%s | Vedant Bhamare",
  },
  description: "Fullstack Developer crafting scalable apps with Next.js, TypeScript & Redux. Explore projects, timeline, and recent progress.",
  keywords: ["portfolio", "fullstack", "nextjs", "typescript", "redux"],
  authors: [{ name: "Vedant Bhamare" }],
  creator: "Vedant Bhamare",
  openGraph: {
    title: "Vedant Bhamare - Portfolio",
    description: "Fullstack Developer Portfolio",
    url: "https://yourdomain.com",
    siteName: "Vedant Bhamare",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vedant Bhamare Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedant Bhamare",
    description: "Fullstack Developer Portfolio",
    images: ["/twitter-image.jpg"],
  },
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
  verification: {
    google: "your-google-site-verification",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900 text-white`}>
        <ProviderWrapper>
          {children}
          <Analytics />
          <SpeedInsights />
        </ProviderWrapper>
      </body>
    </html>
  );
}

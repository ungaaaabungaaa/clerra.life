import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const siteUrl = new URL("https://clerra.life");
const siteTitle = "Clerra | Browser Extension for a Cleaner, More Focused Web";
const siteDescription =
  "Clerra is a browser extension that declutters pages, reduces noise, and helps you focus on the content that actually matters.";

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: siteTitle,
  description: siteDescription,
  applicationName: "Clerra",
  keywords: [
    "Clerra",
    "browser extension",
    "Chrome extension",
    "declutter web pages",
    "focus online",
    "reduce distractions",
  ],
  alternates: {
    canonical: "/",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: "/",
    title: siteTitle,
    description: siteDescription,
    siteName: "Clerra",
    locale: "en_US",
    images: [
      {
        url: "/background.png",
        width: 6912,
        height: 4468,
        alt: "Clerra browser extension preview background",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/background.png"],
  },
  icons: {
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    icon: [
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    shortcut: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={quicksand.variable}>
      <body>{children}</body>
    </html>
  );
}

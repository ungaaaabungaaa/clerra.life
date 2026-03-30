import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clerra | Less, but true",
  description: "Less, but true",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

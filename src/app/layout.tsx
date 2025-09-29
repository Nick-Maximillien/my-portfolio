import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Nicholas Muthoki | AI & Blockchain Consulting",
  description:
    "Portfolio of Nicholas Muthoki — AI & Blockchain Builder. Showcasing Agrosight, AutoBooks AI, blockchain solutions, and Rust DeFi engine.",
  keywords: [
    "AI",
    "Blockchain",
    "Consulting",
    "Agrosight",
    "AutoBooks AI",
    "Rust DeFi",
    "Kenya AI",
    "Nicholas Muthoki",
  ],
  authors: [{ name: "Nicholas Muthoki" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

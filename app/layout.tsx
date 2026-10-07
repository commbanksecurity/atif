import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atif Hussain | Senior SEO Strategist & Organic Growth Architect",
  description:
    "Portfolio of Atif Hussain (atifhussain12536@gmail.com). Senior SEO Growth Strategist delivering programmatic architecture, technical crawl optimization, and enterprise revenue growth for international brands.",
  keywords: [
    "Atif Hussain",
    "SEO Strategist",
    "Technical SEO",
    "Programmatic SEO",
    "Organic Growth",
    "International SEO",
    "Core Web Vitals",
    "SaaS SEO",
  ],
  authors: [{ name: "Atif Hussain", url: "mailto:atifhussain12536@gmail.com" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased dark`}
    >
      <body className="min-h-screen bg-[#070b13] text-zinc-100 flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
        {children}
      </body>
    </html>
  );
}

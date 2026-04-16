import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tdfaccounting.com'),
  title: {
    default: 'TDF Accounting | Chartered Professional Accountants',
    template: '%s | TDF Accounting'
  },
  description: 'TDF Accounting, CPA firm since 2015, serves Markham with expert tax and financial planning for small to medium-sized businesses.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased smooth-scroll`}
    >
      <body className="min-h-full flex flex-col font-body bg-off-white selection:bg-accent/30">
        <TopBar />
        <Navbar />
        <main className="flex-1 w-full bg-white relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

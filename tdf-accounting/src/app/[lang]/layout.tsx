import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getDictionary } from "@/i18n/get-dictionary";
import "../globals.css";

import Script from "next/script";

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
  keywords: ['TDF Accounting', 'CPA Markham', 'Chartered Professional Accountants', 'Tax Services', 'Corporate Tax', 'Personal Tax returns', 'Accounting services Markham'],
  authors: [{ name: 'TDF Accounting' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://tdfaccounting.com',
    siteName: 'TDF Accounting',
    title: 'TDF Accounting | Chartered Professional Accountants',
    description: 'Expert tax and accounting services in Markham.',
    images: [
      {
        url: '/images/banner-home.webp',
        width: 1200,
        height: 630,
        alt: 'TDF Accounting'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TDF Accounting | Chartered Professional Accountants',
    description: 'Expert tax and accounting services in Markham.',
    images: ['/images/banner-home.webp']
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "name": "TDF Accounting",
  "image": "https://tdfaccounting.com/images/weblogo2.webp",
  "url": "https://tdfaccounting.com",
  "telephone": "+16478775996",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "15 Allstate Parkway, 6F",
    "addressLocality": "Markham",
    "addressRegion": "ON",
    "postalCode": "L3R 5B4",
    "addressCountry": "CA"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "17:00"
  }
};

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;
  const dict = await getDictionary(params.lang);
  
  return (
    <html
      lang={params.lang}
      className={`${inter.variable} h-full antialiased smooth-scroll`}
    >
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
      </head>
      <body className="min-h-full flex flex-col font-body bg-off-white selection:bg-accent/30">
        <div aria-hidden="true" style={{ display: 'none', position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
          Created by DME-Jiackey
        </div>
        <TopBar dict={dict} />
        <Navbar dict={dict} lang={params.lang} />
        <main className="flex-1 w-full bg-white relative">
          {props.children}
        </main>
        <Footer dict={dict} lang={params.lang} />
      </body>
    </html>
  );
}

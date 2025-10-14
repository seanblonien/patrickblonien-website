import type {Metadata} from 'next';
import {Open_Sans, Merriweather} from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import {siteInfo} from '@/data/site';
import {Analytics} from '@vercel/analytics/next';
import {SpeedInsights} from '@vercel/speed-insights/next';
import {PersonStructuredData, WebsiteStructuredData} from '@/components/StructuredData';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-merriweather',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.patrickblonien.com'),
  title: {
    default: 'Patrick Blonien | Home',
    template: 'Patrick Blonien | %s',
  },
  description:
    siteInfo.researchFocus
    || `${siteInfo.name}, ${siteInfo.title} at ${siteInfo.institution}. Research in finance and economics.`,
  keywords: [
    'Patrick Blonien',
    'finance',
    'economics',
    'research',
    'Carnegie Mellon',
    'Tepper',
    'academic',
    'corporate finance',
    'asset pricing',
    'investor behavior',
    'finance professor',
    'financial research',
  ],
  authors: [{name: siteInfo.name}],
  creator: siteInfo.name,
  publisher: siteInfo.name,
  alternates: {
    canonical: 'https://www.patrickblonien.com',
  },
  icons: {
    icon: [
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.patrickblonien.com',
    siteName: siteInfo.name,
    title: `${siteInfo.name} – ${siteInfo.title}`,
    description: siteInfo.researchFocus || `${siteInfo.title} at ${siteInfo.institution}`,
    images: [
      {
        url: siteInfo.portraitUrl || '/portrait.jpg',
        width: 1200,
        height: 630,
        alt: `${siteInfo.name} - ${siteInfo.title}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteInfo.name} – ${siteInfo.title}`,
    description: siteInfo.researchFocus || `${siteInfo.title} at ${siteInfo.institution}`,
    images: [siteInfo.portraitUrl || '/portrait.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      'index': true,
      'follow': true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} ${merriweather.variable}`}>
      <head>
        <PersonStructuredData />
        <WebsiteStructuredData />
      </head>
      <body className="font-sans flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

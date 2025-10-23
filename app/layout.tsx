import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import {PersonStructuredData, WebsiteStructuredData} from '@/components/StructuredData';
import {siteInfo} from '@/data/site';
import {Analytics} from '@vercel/analytics/next';
import {SpeedInsights} from '@vercel/speed-insights/next';
import type {Metadata} from 'next';
import {Merriweather, Open_Sans} from 'next/font/google';
import './globals.css';

const openSans = Open_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
  preload: true,
});

const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-merriweather',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://patrickblonien.com'),
  title: {
    default: `${siteInfo.name} | Home`,
    template: `${siteInfo.name} | %s`,
  },
  description:
    siteInfo.researchFocus
    || `${siteInfo.name}, ${siteInfo.title} at ${siteInfo.institution}. My primary research area is financial market design. I am also interested in using structural models to estimate economically important latent variables.`,
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
    canonical: 'https://patrickblonien.com',
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
    url: 'https://patrickblonien.com',
    siteName: siteInfo.name,
    title: `${siteInfo.name} | Home`,
    description: `${siteInfo.name}, ${siteInfo.title} at ${siteInfo.institution}`,
    images: [
      {
        url: siteInfo.portraitUrl,
        width: 1200,
        height: 630,
        alt: `${siteInfo.name} - ${siteInfo.title}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteInfo.name} | Home`,
    description: `${siteInfo.name}, ${siteInfo.title} at ${siteInfo.institution}`,
    images: [siteInfo.portraitUrl],
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

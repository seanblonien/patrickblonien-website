import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Merriweather, Open_Sans as OpenSans } from 'next/font/google';
import { PropsWithChildren } from 'react';
import { Footer } from '@/components/footer';
import { NavBar } from '@/components/nav-bar';
import { PersonStructuredData, WebsiteStructuredData } from '@/components/structured-data';
import { siteInfo } from '@/data/site';
import type { Metadata } from 'next';
import './globals.css';

const openSans = OpenSans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
  // eslint-disable-next-line @typescript-eslint/naming-convention -- library API
  preload: true,
});

const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-merriweather',
  display: 'swap',
  // eslint-disable-next-line @typescript-eslint/naming-convention -- library API
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://patrickblonien.com'),
  title: {
    default: `${siteInfo.name} | Home`,
    template: `${siteInfo.name} | %s`,
  },
  description:
    siteInfo.researchFocus ||
    `${siteInfo.name}, ${siteInfo.title} at ${siteInfo.institution}. My primary research area is financial market design. I am also interested in using structural models to estimate economically important latent variables.`,
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
  authors: [{ name: siteInfo.name }],
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
    // eslint-disable-next-line @typescript-eslint/naming-convention -- library API
    index: true,
    // eslint-disable-next-line @typescript-eslint/naming-convention -- library API
    follow: true,
    googleBot: {
    // eslint-disable-next-line @typescript-eslint/naming-convention -- library API
      'index': true,
      // eslint-disable-next-line @typescript-eslint/naming-convention -- library API
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

function RootLayout({
  children,
}: PropsWithChildren) {
  return (
    <html className={`${openSans.variable} ${merriweather.variable}`} lang='en'>
      <head>
        <PersonStructuredData />
        <WebsiteStructuredData />
      </head>
      <body className='font-sans flex flex-col min-h-screen'>
        <NavBar />
        <main className='flex-1'>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
export default RootLayout;

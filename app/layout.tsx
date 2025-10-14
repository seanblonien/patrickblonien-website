import type { Metadata } from "next";
import { Open_Sans, Merriweather } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { siteInfo } from "@/data/site";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.patrickblonien.com"),
  title: {
    default: `${siteInfo.name} – ${siteInfo.title}, ${siteInfo.institution}`,
    template: `%s – ${siteInfo.name}`,
  },
  description:
    siteInfo.researchFocus ||
    `${siteInfo.name}, ${siteInfo.title} at ${siteInfo.institution}. Research in finance and economics.`,
  keywords: [
    "finance",
    "economics",
    "research",
    "Carnegie Mellon",
    "Tepper",
    "academic",
  ],
  authors: [{ name: siteInfo.name }],
  creator: siteInfo.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.patrickblonien.com",
    siteName: siteInfo.name,
    title: `${siteInfo.name} – ${siteInfo.title}`,
    description: siteInfo.researchFocus || `${siteInfo.title} at ${siteInfo.institution}`,
    images: [
      {
        url: siteInfo.portraitUrl || "/portrait.jpg",
        width: 1200,
        height: 630,
        alt: siteInfo.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteInfo.name} – ${siteInfo.title}`,
    description: siteInfo.researchFocus || `${siteInfo.title} at ${siteInfo.institution}`,
    images: [siteInfo.portraitUrl || "/portrait.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} ${merriweather.variable}`}>
      <body className="font-sans flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

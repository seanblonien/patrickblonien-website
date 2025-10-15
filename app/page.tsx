/**
 * Home Page
 *
 * This is the main landing page for the website.
 * It displays the hero section with name, title, institution, and portrait.
 *
 * To update content:
 * - Edit data/site.ts to change personal information
 * - Update the portrait image in public/portrait.webp
 * - Modify the research focus text in data/site.ts
 */

import Hero from '@/components/Hero';
import {siteInfo} from '@/data/site';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  description: `${siteInfo.name}, ${siteInfo.title} at ${siteInfo.institution}. ${siteInfo.researchFocus}`,
  alternates: {
    canonical: 'https://www.patrickblonien.com',
  },
  openGraph: {
    title: `${siteInfo.name} | Home`,
    description: `${siteInfo.name}, ${siteInfo.title} at ${siteInfo.institution}`,
    url: 'https://www.patrickblonien.com',
  },
};

export default function Home() {
  return <Hero />;
}

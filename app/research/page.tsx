/**
 * Research Page
 *
 * This page displays research papers organized by type (Working Papers and Publications).
 * Papers are automatically grouped and displayed with section headings and separators.
 *
 * To add a new paper:
 * 1. Open data/papers.ts
 * 2. Add a new object to the papers array following the ResearchPaper type
 * 3. Required fields: id (unique slug), title, authors (array), paperType
 * 4. paperType must be either "Working Papers" or "Publications"
 * 5. Optional fields: venue, year, abstract, tags, links
 * 6. Links can include: paper, slides, bibtex, presentation, media, code, data, external
 *
 * Example:
 * {
 *   id: "my-paper-2025",
 *   title: "My Research Paper Title",
 *   authors: ["Patrick Blonien", "Coauthor Name"],
 *   paperType: "Working Papers",
 *   venue: "Journal of Finance",
 *   year: 2025,
 *   abstract: "This paper examines...",
 *   tags: ["corporate finance"],
 *   links: [
 *     { type: "paper", url: "https://example.com/paper.pdf" },
 *     { type: "slides", url: "https://example.com/slides.pdf" },
 *   ]
 * }
 *
 * The page will automatically update when you save the file.
 */

import ResearchList from '@/components/ResearchList';
import {BreadcrumbStructuredData} from '@/components/StructuredData';
import {siteInfo} from '@/data/site';
import type {Metadata} from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Research',
  description: `Research papers and publications by ${siteInfo.name}, ${siteInfo.title} at ${siteInfo.institution}. Explore working papers and publications in corporate finance, asset pricing, and investor behavior.`,
  alternates: {
    canonical: 'https://www.patrickblonien.com/research',
  },
  openGraph: {
    title: `${siteInfo.name} | Research`,
    description: `Research papers and publications by ${siteInfo.name}`,
    url: 'https://www.patrickblonien.com/research',
  },
};

export default function ResearchPage() {
  const breadcrumbItems = [
    {
      name: 'Home',
      url: 'https://www.patrickblonien.com',
    },
    {
      name: 'Research',
      url: 'https://www.patrickblonien.com/research',
    },
  ];

  return (
    <>
      <BreadcrumbStructuredData items={breadcrumbItems} />

      {/* Full-width banner with overlaid title */}
      <div className="relative w-full h-32 sm:h-40 md:h-48">
        <Image
          src="/cmu_tartan.webp"
          alt="CMU Tartan Pattern"
          fill
          className="object-cover object-center"
          style={{minWidth: '100%', minHeight: '100%'}}
          priority
        />
        {/* Overlaid title positioned at bottom left */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
              Research
            </h1>
          </div>
        </div>
      </div>

      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <ResearchList />
        </div>
      </div>
    </>
  );
}

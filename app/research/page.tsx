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

import type { Metadata } from "next";
import ResearchList from "@/components/ResearchList";
import { siteInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Research",
  description: `Research papers and publications by ${siteInfo.name}, ${siteInfo.title} at ${siteInfo.institution}.`,
  openGraph: {
    title: `Research – ${siteInfo.name}`,
    description: `Research papers and publications by ${siteInfo.name}`,
  },
};

export default function ResearchPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-4">
            Research
          </h1>
        </div>

        <ResearchList />
      </div>
    </div>
  );
}

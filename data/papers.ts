import type { ResearchPaper } from "./types";

/**
 * Research Papers Data
 *
 * To add a new paper:
 * 1. Add a new object to the papers array below
 * 2. Ensure all required fields are filled: id, title, authors, paperType
 * 3. Optional fields: venue, year, abstract, tags, links
 * 4. The id should be a URL-friendly slug (lowercase, hyphens)
 * 5. Authors should be in order of appearance on the paper
 * 6. paperType must be either "Working Papers" or "Publications"
 * 7. Links can include: paper, slides, bibtex, presentation, media, code, data, external
 *
 * Example:
 * {
 *   id: "my-new-paper-2025",
 *   title: "The Impact of X on Y: Evidence from Z",
 *   authors: ["Patrick Blonien", "Coauthor Name"],
 *   paperType: "Working Papers",
 *   venue: "Journal of Finance",
 *   year: 2025,
 *   abstract: "This paper examines...",
 *   tags: ["corporate finance", "asset pricing"],
 *   links: [
 *     { type: "paper", url: "https://example.com/paper.pdf" },
 *     { type: "slides", url: "https://example.com/slides.pdf" },
 *   ]
 * }
 */

export const papers: ResearchPaper[] = [
  {
    id: "investor-behavior-market-dynamics",
    title: "Investor Behavior and Market Dynamics: A Comprehensive Analysis",
    authors: ["Patrick Blonien", "Jane Doe"],
    paperType: "Working Papers",
    venue: "Working Paper",
    year: 2025,
    abstract:
      "This paper examines the relationship between investor behavior and market dynamics in modern financial markets. Using a comprehensive dataset spanning multiple asset classes, we document significant patterns in how individual and institutional investors respond to market signals. Our findings suggest that behavioral biases play a crucial role in price formation and market efficiency. We develop a theoretical framework that incorporates these insights and test its predictions using high-frequency trading data. The results have important implications for asset pricing models and market microstructure theory.",
    tags: ["corporate finance", "asset pricing", "investor behavior"],
    links: [
      { type: "paper", url: "https://example.com/paper.pdf" },
      { type: "slides", url: "https://example.com/slides.pdf" },
      { type: "bibtex", url: "https://example.com/cite.bib" },
      {
        type: "external",
        label: "SSRN",
        url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=EXAMPLE",
      },
    ],
  },
  {
    id: "capital-structure-decisions",
    title: "Capital Structure Decisions in the Modern Era",
    authors: ["Patrick Blonien", "John Smith", "Emily Chen"],
    paperType: "Publications",
    venue: "Review of Financial Studies",
    year: 2024,
    abstract:
      "We investigate how firms make capital structure decisions in an environment characterized by low interest rates and increased regulatory scrutiny. Our analysis reveals that traditional trade-off theory predictions hold, but with important modifications related to financial flexibility and market timing considerations.",
    tags: ["corporate finance", "capital structure"],
    links: [
      { type: "paper", url: "https://example.com/paper2.pdf" },
      {
        type: "external",
        label: "Publisher",
        url: "https://academic.oup.com/rfs/example",
      },
    ],
  },
  {
    id: "asset-pricing-anomalies",
    title: "Understanding Asset Pricing Anomalies Through the Lens of Behavioral Finance",
    authors: ["Patrick Blonien"],
    paperType: "Working Papers",
    venue: "R&R at Journal of Financial Economics",
    year: 2024,
    abstract:
      "This study provides a unified framework for understanding various asset pricing anomalies documented in the literature. By incorporating insights from behavioral finance, we show that many seemingly disparate anomalies can be explained by a common set of investor biases and market frictions.",
    tags: ["asset pricing", "behavioral finance"],
    links: [
      { type: "paper", url: "https://example.com/paper3.pdf" },
      { type: "slides", url: "https://example.com/slides3.pdf" },
      { type: "code", url: "https://github.com/example/code" },
    ],
  },
] satisfies ResearchPaper[];

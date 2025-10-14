import type {ResearchPaper} from './types';

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
    id: 'size-discovery-slow-markets',
    title: 'Size Discovery in Slow Markets',
    authors: ['Patrick Blonien'],
    paperType: 'Working Papers',
    date: 'January 13, 2024',
    abstract:
      'Adding a size-discovery trading protocol, where a break in the limit order book occurs to match orders at a fixed price, can increase allocative efficiency in markets with slow trading frequency. A high trading frequency spreads liquidity, resulting in a strong incentive to wait for a size-discovery session. This incentive to delay trade is smaller in slower markets, and its negative effect on efficiency can be offset in slower markets by the positive effect of size discovery. This result rationalizes the empirical fact that size-discovery protocols only exist in slower markets. Potential conflicts of interest between traders and platform operators are identified but seem unlikely to drive the existence of size-discovery trading protocols.',
    tags: ['Job Market Paper', 'market microstructure', 'trading protocols'],
    imageUrl: '/size_discovery.png',
    links: [
      {
        type: 'external',
        label: 'SSRN',
        url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4484749',
      },
    ],
    presentations: [
      {
        venue: 'Finance Theory Webinar',
        location: 'Virtual',

      },
      {
        venue: 'Carnegie Mellon University',
        location: 'Pittsburgh, PA',

      },
      {
        venue: 'Boston College',
        location: 'Chestnut Hill, MA',

      },
      {
        venue: 'University of Notre Dame',
        location: 'Notre Dame, IN',

      },
      {
        venue: 'University of Washington',
        location: 'Seattle, WA',

      },
      {
        venue: 'University of Colorado Boulder',
        location: 'Boulder, CO',

      },
      {
        venue: 'University of Maryland',
        location: 'College Park, MD',

      },
      {
        venue: 'University of Texas at Dallas',
        location: 'Richardson, TX',

      },
      {
        venue: 'NFA (2023)',
        location: 'Calgary, AB',

      },
      {
        venue: 'WFA (2023)',
        location: 'San Francisco, CA',

      },
      {
        venue: 'Finance Theory Group Summer School',
        location: 'Virtual',

      },
      {
        venue: 'Rice University',
        location: 'Houston, TX',

      },
    ],
    awards: [
      {
        title: 'The Brattle Group Ph.D. Candidate Award For Outstanding Research, WFA 2023',
      },
      {
        title: 'Finance Theory Group Summer School Best Paper Award (ex aequo) 2023',
      },
      {
        title: 'Runner-up of the Finance Theory Group (FTG) 2024 Best Paper Award',
      },
    ],
  },
  {
    id: 'investor-behavior-market-dynamics',
    title: 'Investor Behavior and Market Dynamics: A Comprehensive Analysis',
    authors: ['Patrick Blonien', 'Jane Doe'],
    paperType: 'Working Papers',
    venue: 'Working Paper',
    date: '2025',
    abstract:
      'This paper examines the relationship between investor behavior and market dynamics in modern financial markets. Using a comprehensive dataset spanning multiple asset classes, we document significant patterns in how individual and institutional investors respond to market signals. Our findings suggest that behavioral biases play a crucial role in price formation and market efficiency. We develop a theoretical framework that incorporates these insights and test its predictions using high-frequency trading data. The results have important implications for asset pricing models and market microstructure theory.',
    tags: ['corporate finance', 'asset pricing', 'investor behavior'],
    links: [
      {
        type: 'paper',
        url: 'https://example.com/paper.pdf',
      },
      {
        type: 'slides',
        url: 'https://example.com/slides.pdf',
      },
      {
        type: 'bibtex',
        url: 'https://example.com/cite.bib',
      },
      {
        type: 'external',
        label: 'SSRN',
        url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=EXAMPLE',
      },
    ],
  },
  {
    id: 'capital-structure-decisions',
    title: 'Capital Structure Decisions in the Modern Era',
    authors: ['Patrick Blonien', 'John Smith', 'Emily Chen'],
    paperType: 'Publications',
    venue: 'Review of Financial Studies',
    date: '2024',
    abstract:
      'We investigate how firms make capital structure decisions in an environment characterized by low interest rates and increased regulatory scrutiny. Our analysis reveals that traditional trade-off theory predictions hold, but with important modifications related to financial flexibility and market timing considerations.',
    tags: ['corporate finance', 'capital structure'],
    links: [
      {
        type: 'paper',
        url: 'https://example.com/paper2.pdf',
      },
      {
        type: 'external',
        label: 'Publisher',
        url: 'https://academic.oup.com/rfs/example',
      },
    ],
  },
  {
    id: 'asset-pricing-anomalies',
    title: 'Understanding Asset Pricing Anomalies Through the Lens of Behavioral Finance',
    authors: ['Patrick Blonien'],
    paperType: 'Working Papers',
    venue: 'R&R at Journal of Financial Economics',
    date: '2024',
    abstract:
      'This study provides a unified framework for understanding various asset pricing anomalies documented in the literature. By incorporating insights from behavioral finance, we show that many seemingly disparate anomalies can be explained by a common set of investor biases and market frictions.',
    tags: ['asset pricing', 'behavioral finance'],
    links: [
      {
        type: 'paper',
        url: 'https://example.com/paper3.pdf',
      },
      {
        type: 'slides',
        url: 'https://example.com/slides3.pdf',
      },
      {
        type: 'code',
        url: 'https://github.com/example/code',
      },
    ],
  },
] satisfies ResearchPaper[];

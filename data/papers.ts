import adviceInShareholderVotingImg from '@/public/advice_in_shareholder_voting.webp';
import congressionalStockTradingImg from '@/public/congressional_stock_trading.webp';
import detectingTransformedTradeImg from '@/public/detecting_transformed_trade.webp';
import is247TradingBetterImg from '@/public/is_24-7_trading_better.webp';
import sizeDiscoveryImg from '@/public/size_discovery.webp';
import type { ResearchPaper } from './types';

/**
 * Research Papers Data
 *
 * To add a new paper:
 * 1. Add a new object to the papers array below
 * 2. Ensure all required fields are filled: id, title, authors, paperType
 * 3. Optional fields: venue, year, abstract, tags, links, imageUrl
 * 4. The id should be a URL-friendly slug (lowercase, hyphens)
 * 5. Authors should be in order of appearance on the paper
 * 6. paperType must be either "Working Papers" or "Publications"
 * 7. Links can include: paper, slides, bibtex, presentation, media, code, data, external
 * 8. For imageUrl, import the image at the top of this file and reference it directly
 *
 * Example:
 * import myPaperImg from '@/public/my-paper-image.webp';
 *
 * {
 *   id: "my-new-paper-2025",
 *   title: "The Impact of X on Y: Evidence from Z",
 *   authors: [
 *     { name: "Patrick Blonien", isPatrick: true },
 *     { name: "Coauthor Name", url: "https://example.com/coauthor" }
 *   ],
 *   paperType: "Working Papers",
 *   venue: "Journal of Finance",
 *   year: 2025,
 *   abstract: "This paper examines...",
 *   tags: ["corporate finance", "asset pricing"],
 *   imageUrl: myPaperImg,
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
    authors: [{ name: 'Patrick Blonien', isPatrick: true }],
    paperType: 'Working Papers',
    abstract:
      'Adding a size-discovery trading protocol, where a break in the limit order book occurs to match orders at a fixed price, can increase allocative efficiency in markets with slow trading frequency. A high trading frequency spreads liquidity, resulting in a strong incentive to wait for a size-discovery session. This incentive to delay trade is smaller in slower markets, and its negative effect on efficiency can be offset in slower markets by the positive effect of size discovery. This result rationalizes the empirical fact that size-discovery protocols only exist in slower markets. Potential conflicts of interest between traders and platform operators are identified but seem unlikely to drive the existence of size-discovery trading protocols.',
    imageUrl: sizeDiscoveryImg,
    imageDimensions: { width: 320, height: 207 },
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
        venue: 'Northern Finance Association (2023)',
        location: 'Toronto, ON',
      },
      {
        venue: 'Western Finance Association (2023)',
        location: 'San Francisco, CA',
      },
      {
        venue: 'Finance Theory Group Summer School',
        location: 'Seattle, WA',
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
    id: 'quality-of-advice-shareholder-voting',
    title: 'The Quality of Advice in Shareholder Voting',
    authors: [
      { name: 'Patrick Blonien', isPatrick: true },
      { name: 'Alan Crane', url: 'https://www.alancrane.com/' },
      { name: 'Kevin Crotty', url: 'https://kevin-crotty.com/' },
      { name: 'David De Angelis', url: 'https://www.de-angelis.com/' },
    ],
    paperType: 'Working Papers',
    abstract:
      'How does the quality and influence of advice relate to voting mistakes?  Estimates of latent proposal quality imply advisor ISS\'s recommendations are wrong half the time for shareholder proposals, while management\'s error rate is only 15%.  The direction of proxy advice and whether it agrees with management conveys information about ISS\'s precision, so shareholders make fewer mistakes than either proxy advisors or management.  Most mutual funds\' votes are more informative than ISS recommendations.  Vanguard\'s votes are a better benchmark for proposal quality than either ISS or even management recommendations. Our analysis implies limiting ISS\'s influence would improve voting outcomes.',
    imageUrl: adviceInShareholderVotingImg,
    imageDimensions: { width: 320, height: 240 },
    links: [
      {
        type: 'external',
        label: 'SSRN',
        url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3945818',
      },
    ],
    tags: ['Revise & Resubmit at The Review of Financial Studies'],
    presentations: [
      {
        venue: 'Securities and Exchange Commission (DERA)',
        location: 'Virtual',
        isPresentedByCoauthor: true,
      },
      {
        venue: 'American Finance Association (2022)',
        location: 'Virtual',
        isPresentedByCoauthor: true,
      },
      {
        venue: 'Financial Managament Association (2021)',
        location: 'Denver, CO',
      },
      {
        venue: 'Australian National University',
        location: 'Virtual',
        isPresentedByCoauthor: true,
      },
      {
        venue: 'Rice University',
        location: 'Houston, TX',
      },

    ],
  },
  {
    id: 'detecting-informed-trade-corporate-insiders',
    title: 'Detecting Informed Trade by Corporate Insiders',
    authors: [
      { name: 'Patrick Blonien', isPatrick: true },
      { name: 'Alan Crane', url: 'https://www.alancrane.com/' },
      { name: 'Kevin Crotty', url: 'https://kevin-crotty.com/' },
    ],
    paperType: 'Working Papers',
    abstract:
      'We introduce a two-dimensional mixture model that leverages the cross-section of insiders\' buy and sell histories to infer which insiders make informed buys, informed sells, both, or neither.  The method classifies all insiders, and insiders unclassified by leading alternative approaches exhibit a substantial propensity to use information.  Out-of-sample returns are higher for stocks traded by insiders identified as more likely to use information.  The model for insiders informs a person-specific mixture distribution that is used to classify whether any disclosed trade is informed. Whether trades are prescheduled, option-related, or by inside blockholders significantly relates to the probability they are informed.',
    imageUrl: detectingTransformedTradeImg,
    imageDimensions: { width: 320, height: 207 },
    links: [
      {
        type: 'external',
        label: 'SSRN',
        url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4633070',
      },
    ],
    presentations: [
      {
        venue: 'Midwest Finance Association',
        location: 'Chicago, IL'
      },
      {
        venue: '5th Conference on Financial Economics and Accounting',
        location: 'East Lansing, MI',
        isPresentedByCoauthor: true,
      },
      {
        venue: 'Northern Finance Association',
        location: 'Calgary, AB',
        isPresentedByCoauthor: true,
      },
      {
        venue: 'University of Virginia',
        location: 'Charlottesville, VA',
        isPresentedByCoauthor: true,
      },
      {
        venue: 'World Symposium on Investment Research',
        location: 'Toronto, ON',
      },
      {
        venue: 'University of Pittsburgh',
        location: 'Pittsburgh, PA',
        isPresentedByCoauthor: true,
      },
      {
        venue: 'Carnegie Mellon University',
        location: 'Pittsburgh, PA',
        isPresentedByCoauthor: true,
      },
      {
        venue: 'Louisiana State University',
        location: 'Baton Rouge, LA',
        isPresentedByCoauthor: true,
      },
      {
        venue: 'University of Kentucky',
        location: 'Lexington, KY',
      },
      {
        venue: 'Rice University',
        location: 'Houston, TX',
        isPresentedByCoauthor: true,
      },
      {
        venue: 'University of North Texas',
        location: 'Denton, TX',
        isPresentedByCoauthor: true,
      },
      {
        venue: 'Rice Breakfast Club',
        location: 'Houston, TX',
      },
    ],
  },
  {
    id: 'is-24-7-trading-better',
    title: 'Is 24/7 Trading Better?',
    authors: [
      { name: 'Patrick Blonien', isPatrick: true },
      { name: 'Alexander Ober', url: 'https://www.alexander-ober.com/' },
    ],
    paperType: 'Working Papers',
    abstract:
      'In a dynamic model of large traders who manage inventory risk, we show that a daily market closure coordinates liquidity. Traders are marginally more willing to incur price impact at the end of the day in order to limit the expected cost of holding excess inventory overnight. Some length of closure is welfare-improving relative to 24/7 trade, as the benefits of liquidity coordination fully offset the costs of the closure. A long closure is optimal in markets with few traders or infrequent shocks, while traders in large and active markets would benefit from extending trading hours to near 24/7.',
    imageUrl: is247TradingBetterImg,
    imageDimensions: { width: 320, height: 240 },
    links: [
      {
        type: 'external',
        label: 'SSRN',
        url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4942934',
      },
    ],
    media: [
      {
        label: 'Columbia Law School Blue Sky Blog',
        url: 'https://clsbluesky.law.columbia.edu/2024/10/17/is-24-7-trading-better/',
      },
      {
        label: 'Comment to the SEC on 24X National Exchange LLC',
        url: 'https://www.sec.gov/comments/10-242/10242-524675-1505242.pdf',
      },
      {
        label: 'Markets Media',
        url: 'https://www.marketsmedia.com/is-24-7-trading-inevitable/',
      },
    ],
    presentations: [
      {
        venue: 'Finance Down Under Conference',
        location: 'Melbourne, AU',
      },
      {
        venue: 'NYSE Market Microstructure Conference',
        location: 'New York, NY',
      },
      {
        venue: 'Financial Research Association',
        location: 'Las Vegas, NV',
      },
      {
        venue: 'The Microstructure Exchange',
        location: 'Virtual',
        isPresentedByCoauthor: true,
      },
      {
        venue: 'Northern Finance Association',
        location: 'Calgary, ON',
        isPresentedByCoauthor: true,
      },
      {
        venue: 'Financial Management Association',
        location: 'Chicago, IL',
        isPresentedByCoauthor: true,
      },
      {
        venue: 'Finance Theory Group Summer School',
        location: 'New York, NY',

      },
      {
        venue: 'World Federation of Exchanges Webinar',
        location: 'Virtual',

      },
      {
        venue: 'Carnegie Mellon University',
        location: 'Pittsburgh, PA',

      },
      {
        venue: 'Rice University',
        location: 'Houston, TX',

      },
    ],
    awards: [
      {
        title: 'FMA Annual Meeting Best Paper Award Semifinalist, FMA 2024',
      },
    ],
  },
  {
    id: 'congressional-stock-trading',
    title: 'Should the Public be Concerned about Congressional Stock Trading?',
    authors: [
      { name: 'Patrick Blonien', isPatrick: true },
      { name: 'Alan Crane', url: 'https://www.alancrane.com/' },
      { name: 'Kevin Crotty', url: 'https://kevin-crotty.com/' },
    ],
    paperType: 'Working Papers',
    abstract:
      'We study whether trades made by members of Congress outperform by combining survey-elicited beliefs with a hierarchical Bayesian model of abnormal returns. While prior literature finds little evidence of average outperformance, we show that profitable trading does occur but is infrequent and concentrated during key periods. Survey respondents believe two-thirds of members trade on private information, with expected profits of 36% per informed trade. Our model estimates that the vast majority of traders occasionally make profitable trades, but such trades are quite rare. We find no evidence that conflicted trades are more profitable, contrary to such trades\' media scrutiny. Consistent with proposed policy changes, trades in funds are less likely to be informed than single-stock trades.',
    imageUrl: congressionalStockTradingImg,
    imageDimensions: { width: 320, height: 240 },
    links: [
      {
        type: 'external',
        label: 'SSRN',
        url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5524863',
      },
    ],
    presentations: [
      {
        venue: 'Midwest Finance Association',
        location: 'Chicago, IL'
      },
      {
        venue: 'Georgetown Politics in Finance Conference',
        location: 'Washington, DC',
      },
      {
        venue: 'University of Rochester',
        location: 'Rochester, NY',
        isPresentedByCoauthor: true,
      },
      {
        venue: 'The University of Arizona',
        location: 'Tucson, AZ',
        isPresentedByCoauthor: true,
      },
    ],
  },
] satisfies ResearchPaper[];

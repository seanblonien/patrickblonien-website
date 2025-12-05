import type { SiteInfo } from './types';

export const siteInfo: SiteInfo = {
  name: 'Patrick Blonien',
  title: 'Assistant Professor of Finance',
  institution: 'Carnegie Mellon University, Tepper School of Business',
  email: 'pblonien@andrew.cmu.edu',
  address: '5000 Forbes Ave, Pittsburgh, PA 15213, USA',
  researchFocus:
    'My primary research interests lie in financial market design and the role of information in financial markets. I use dynamic models to evaluate the efficiency of different market structures and trading mechanisms. I am also interested in applying structural models to estimate the information content embedded in trades and recommendations. Prior to joining Carnegie Mellon University, I completed a Ph.D. in Finance at Rice University and hold a bachelor’s degree from Baylor University.',
  cvUrl: '/Patrick Blonien CV June 2025.pdf',
  portraitUrl: '/portrait.webp',
  socials: [
    {
      type: 'ssrn',
      url: 'https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=3595563',
    },
    {
      type: 'scholar',
      url: 'https://scholar.google.com/citations?user=wy8eu34AAAAJ&hl=en&oi=ao',
    },
    {
      type: 'linkedin',
      url: 'https://www.linkedin.com/in/patrick-blonien-52b3b8b0/',
    },
  ],
  affiliations: [
    {
      label: 'CMU Tepper School of Business',
      url: 'https://www.cmu.edu/tepper/',
    },
    {
      label: 'Faculty Page',
      url: 'https://scholars.cmu.edu/26562-patrick-blonien',
    },
    {
      label: 'Finance Theory Group',
      url: 'https://www.financetheory.org/members/patrick-blonien',
    },
  ],
} as const;

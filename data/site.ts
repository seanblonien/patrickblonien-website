import type { SiteInfo } from "./types";

export const siteInfo: SiteInfo = {
  name: "Patrick Blonien",
  title: "Assistant Professor of Finance",
  institution: "Carnegie Mellon University, Tepper School of Business",
  email: "pblonien@andrew.cmu.edu",
  address: "5000 Forbes Ave, Pittsburgh, PA 15213, USA",
  researchFocus:
    "My research focuses on corporate finance, asset pricing, and investor behavior, with particular emphasis on understanding how market dynamics influence firm decision-making and capital allocation.",
  cvUrl: `/Patrick Blonien CV June 2025.pdf`,
  portraitUrl: "/portrait.jpg",
  socials: [
    {
      type: "ssrn",
      url: "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=3595563",
    },
    {
      type: "scholar",
      url: "https://scholar.google.com/citations?user=wy8eu34AAAAJ&hl=en&oi=ao",
    },
    {
      type: "linkedin",
      url: "https://www.linkedin.com/in/patrick-blonien-52b3b8b0/",
    },
  ],
  affiliations: [
    {
      label: "CMU Tepper School of Business",
      url: "https://www.cmu.edu/tepper/",
    },
    {
      label: "Faculty Directory",
      url: "https://scholars.cmu.edu/26562-patrick-blonien",
    },
  ],
} as const;

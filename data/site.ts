import type { SiteInfo } from "./types";

export const siteInfo: SiteInfo = {
  name: "Patrick Blonien",
  title: "Assistant Professor of Finance",
  institution: "Carnegie Mellon University, Tepper School of Business",
  email: "patrick@patrickblonien.com",
  address: "5000 Forbes Ave, Pittsburgh, PA 15213, USA",
  researchFocus:
    "My research focuses on corporate finance, asset pricing, and investor behavior, with particular emphasis on understanding how market dynamics influence firm decision-making and capital allocation.",
  cvUrl: "/cv.pdf",
  portraitUrl: "/portrait.jpg",
  socials: [
    {
      type: "scholar",
      url: "https://scholar.google.com/citations?user=EXAMPLE",
    },
    {
      type: "ssrn",
      url: "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=EXAMPLE",
    },
    {
      type: "twitter",
      url: "https://twitter.com/example",
    },
    {
      type: "linkedin",
      url: "https://www.linkedin.com/in/example",
    },
  ],
  affiliations: [
    {
      label: "CMU Tepper School of Business",
      url: "https://www.cmu.edu/tepper/",
    },
    {
      label: "Faculty Directory",
      url: "https://www.cmu.edu/tepper/faculty-and-research/faculty-by-area/index.html",
    },
  ],
} as const;


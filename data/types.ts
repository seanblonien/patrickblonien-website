export type LinkType =
  | "paper"
  | "slides"
  | "bibtex"
  | "presentation"
  | "media"
  | "code"
  | "data"
  | "external";

export interface ResearchLink {
  type: LinkType;
  label?: string;
  url: string;
}

export type PaperType = "Working Papers" | "Publications";

export interface ResearchPaper {
  id: string;
  title: string;
  authors: string[];
  paperType: PaperType;
  venue?: string;
  year?: number;
  abstract?: string;
  tags?: string[];
  links?: ResearchLink[];
}

export type SocialLinkType = "scholar" | "ssrn" | "linkedin";

export interface SocialLink {
  type: SocialLinkType;
  url: string;
}

export interface Affiliation {
  label: string;
  url: string;
}

export interface SiteInfo {
  name: string;
  title: string;
  institution: string;
  email: string;
  address: string;
  researchFocus?: string;
  cvUrl?: string;
  portraitUrl?: string;
  socials: SocialLink[];
  affiliations: Affiliation[];
}

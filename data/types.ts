import type { StaticImageData } from 'next/image';

export type LinkType =
  | 'paper' |
  'slides' |
  'bibtex' |
  'presentation' |
  'media' |
  'code' |
  'data' |
  'external';

export type UrlType = `https://${string}`;

export type ResearchLink = {
  label?: string;
  type: LinkType;
  url: UrlType;
};

export type PaperType = 'Working Papers' | 'Publications';

export type Presentation = {
  date?: string;
  isPresentedByCoauthor?: true;
  location: string;
  venue: string;
};

export type Award = {
  title: string;
  year?: string;
};

export type MediaLink = {
  label: string;
  url: UrlType;
};

export type PatrickAuthor = {
  isPatrick: true;
  name: string;
};

export type ExternalAuthor = {
  isPatrick?: never;
  name: string;
  url: UrlType;
};

export type Author = PatrickAuthor | ExternalAuthor;

export type ResearchPaper = {
  abstract?: string;
  authors: Author[];
  awards?: Award[];
  date?: string;
  id: string;
  imageUrl?: StaticImageData;
  links?: ResearchLink[];
  media?: MediaLink[];
  paperType: PaperType;
  presentations?: Presentation[];
  tags?: string[];
  title: string;
  venue?: string;
};

export type SocialLinkType = 'scholar' | 'ssrn' | 'linkedin';

export type SocialLink = {
  type: SocialLinkType;
  url: UrlType;
};

export type Affiliation = {
  label: string;
  url: UrlType;
};

export type PublicUrlPath = `/${string}`;

export type SiteInfo = {
  address: string;
  affiliations: Affiliation[];
  cvUrl?: PublicUrlPath;
  email: string;
  institution: string;
  name: string;
  portraitUrl: PublicUrlPath;
  researchFocus?: string;
  socials: SocialLink[];
  title: string;
};

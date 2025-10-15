import type {StaticImageData} from 'next/image';

export type LinkType
  = | 'paper'
    | 'slides'
    | 'bibtex'
    | 'presentation'
    | 'media'
    | 'code'
    | 'data'
    | 'external';

export type UrlType = `https://${string}`;

export type ResearchLink = {
  type: LinkType;
  label?: string;
  url: UrlType;
};

export type PaperType = 'Working Papers' | 'Publications';

export type Presentation = {
  venue: string;
  location: string;
  date?: string;
  isPresentedByCoauthor?: true;
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
  name: string;
  isPatrick: true;
};

export type ExternalAuthor = {
  name: string;
  url: UrlType;
  isPatrick?: never;
};

export type Author = PatrickAuthor | ExternalAuthor;

export type ResearchPaper = {
  id: string;
  title: string;
  authors: Author[];
  paperType: PaperType;
  venue?: string;
  date?: string;
  abstract?: string;
  tags?: string[];
  links?: ResearchLink[];
  imageUrl?: StaticImageData;
  presentations?: Presentation[];
  awards?: Award[];
  media?: MediaLink[];
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
  name: string;
  title: string;
  institution: string;
  email: string;
  address: string;
  researchFocus?: string;
  cvUrl?: PublicUrlPath;
  portraitUrl: PublicUrlPath;
  socials: SocialLink[];
  affiliations: Affiliation[];
};

export type LinkType
  = | 'paper'
    | 'slides'
    | 'bibtex'
    | 'presentation'
    | 'media'
    | 'code'
    | 'data'
    | 'external';

export type ResearchLink = {
  type: LinkType;
  label?: string;
  url: string;
};

export type PaperType = 'Working Papers' | 'Publications';

export type Presentation = {
  venue: string;
  location: string;
  date?: string;
  isPresentedByCoauthor?: boolean;
};

export type Award = {
  title: string;
  year?: string;
};

export type PatrickAuthor = {
  name: string;
  isPatrick: true;
};

export type ExternalAuthor = {
  name: string;
  url: string;
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
  imageUrl?: string;
  presentations?: Presentation[];
  awards?: Award[];
};

export type SocialLinkType = 'scholar' | 'ssrn' | 'linkedin';

export type SocialLink = {
  type: SocialLinkType;
  url: string;
};

export type Affiliation = {
  label: string;
  url: string;
};

export type SiteInfo = {
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
};

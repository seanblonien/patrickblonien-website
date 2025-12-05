import {
  Code,
  Database,
  ExternalLink,
  FileText,
  Newspaper,
  Presentation,
  Quote,
  Video,
} from 'lucide-react';
import type { LinkType } from '@/data/types';

const linkIcons: Record<LinkType, React.ComponentType<{ className?: string }>> = {
  paper: FileText,
  slides: Presentation,
  bibtex: Quote,
  presentation: Video,
  media: Newspaper,
  code: Code,
  data: Database,
  external: ExternalLink,
};

const defaultLabels: Record<LinkType, string> = {
  paper: 'Paper',
  slides: 'Slides',
  bibtex: 'BibTeX',
  presentation: 'Presentations',
  media: 'Media',
  code: 'Code',
  data: 'Data',
  external: 'External Link',
};

type IconLinkProps = {
  label?: string;
  type: LinkType;
  url: string;
};

export const IconLink: React.FC<IconLinkProps> = ({ label, type, url }) => {
  const Icon = linkIcons[type];
  const displayLabel = label || defaultLabels[type];

  return (
    <a
      aria-label={`${displayLabel} (opens in new tab)`}
      className='inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-zinc-700 bg-white border border-zinc-300 rounded-md hover:border-primary hover:text-primary hover:bg-zinc-50 focus-ring transition-all cursor-pointer'
      href={url}
      rel='noopener noreferrer'
      target='_blank'
    >
      <Icon aria-hidden='true' className='w-4 h-4' />
      <span>{displayLabel}</span>
    </a>
  );
};

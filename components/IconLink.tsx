import type {LinkType} from '@/data/types';
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

const linkIcons: Record<LinkType, React.ComponentType<{className?: string}>> = {
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
  type: LinkType;
  label?: string;
  url: string;
};

export default function IconLink({type, label, url}: IconLinkProps) {
  const Icon = linkIcons[type];
  const displayLabel = label || defaultLabels[type];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-zinc-700 bg-white border border-zinc-300 rounded-md hover:border-primary hover:text-primary hover:bg-zinc-50 focus-ring transition-all cursor-pointer"
      aria-label={`${displayLabel} (opens in new tab)`}
    >
      <Icon className="w-4 h-4" aria-hidden="true" />
      <span>{displayLabel}</span>
    </a>
  );
}

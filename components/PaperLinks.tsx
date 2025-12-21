'use client';

import { Award as AwardIcon, Newspaper, Presentation as PresentationIcon } from 'lucide-react';
import type { ResearchPaper } from '@/data/types';
import { IconLink } from './IconLink';

type PaperLinksProps = {
  onAwardsClickAction: () => void;
  onMediaClickAction: () => void;
  onPresentationsClickAction: () => void;
  paper: ResearchPaper;
};

export const PaperLinks: React.FC<PaperLinksProps> = ({
  onAwardsClickAction,
  onMediaClickAction,
  onPresentationsClickAction,
  paper,
}) => {
  const hasLinks = paper.links && paper.links.length > 0;
  const hasPresentations = paper.presentations && paper.presentations.length > 0;
  const hasAwards = paper.awards && paper.awards.length > 0;
  const hasMedia = paper.media && paper.media.length > 0;
  const shouldRenderSection = (hasLinks ?? hasPresentations ?? hasAwards) ?? hasMedia;

  if (!shouldRenderSection) {
    return null;
  }

  return (
    <div className='flex flex-wrap gap-2'>
      {paper.links?.map((link) => (
        <IconLink
          key={`${link.type}-${link.label}`}
          label={link.label}
          type={link.type}
          url={link.url}
        />
      ))}

      {hasMedia && (
        <button
          aria-label='View media'
          className='inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-zinc-700 bg-white border border-zinc-300 rounded-md hover:border-primary hover:text-primary hover:bg-zinc-50 focus-ring transition-all cursor-pointer'
          onClick={onMediaClickAction}
        >
          <Newspaper aria-hidden='true' className='w-4 h-4' />
          <span>Media</span>
        </button>
      )}

      {hasPresentations && (
        <button
          aria-label='View presentations'
          className='inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-zinc-700 bg-white border border-zinc-300 rounded-md hover:border-primary hover:text-primary hover:bg-zinc-50 focus-ring transition-all cursor-pointer'
          onClick={onPresentationsClickAction}
        >
          <PresentationIcon aria-hidden='true' className='w-4 h-4' />
          <span>Presentations</span>
        </button>
      )}

      {hasAwards && (
        <button
          aria-label='View awards'
          className='inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-zinc-700 bg-white border border-zinc-300 rounded-md hover:border-primary hover:text-primary hover:bg-zinc-50 focus-ring transition-all cursor-pointer'
          onClick={onAwardsClickAction}
        >
          <AwardIcon aria-hidden='true' className='w-4 h-4' />
          <span>Awards</span>
        </button>
      )}
    </div>
  );
};

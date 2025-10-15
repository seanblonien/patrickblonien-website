'use client';

import type {ResearchPaper} from '@/data/types';
import {Award as AwardIcon, Newspaper, Presentation as PresentationIcon} from 'lucide-react';
import IconLink from './IconLink';

type PaperLinksProps = {
  paper: ResearchPaper;
  onPresentationsClick: () => void;
  onAwardsClick: () => void;
  onMediaClick: () => void;
};

export default function PaperLinks({paper, onPresentationsClick, onAwardsClick, onMediaClick}: PaperLinksProps) {
  const hasLinks = paper.links && paper.links.length > 0;
  const hasPresentations = paper.presentations && paper.presentations.length > 0;
  const hasAwards = paper.awards && paper.awards.length > 0;
  const hasMedia = paper.media && paper.media.length > 0;
  const shouldRenderSection = hasLinks || hasPresentations || hasAwards || hasMedia;

  if (!shouldRenderSection) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {paper.links?.map((link, index) => (
        <IconLink
          key={`${link.type}-${index}`}
          type={link.type}
          label={link.label}
          url={link.url}
        />
      ))}

      {hasMedia && (
        <button
          onClick={onMediaClick}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-zinc-700 bg-white border border-zinc-300 rounded-md hover:border-primary hover:text-primary hover:bg-zinc-50 focus-ring transition-all cursor-pointer"
          aria-label="View media"
        >
          <Newspaper className="w-4 h-4" aria-hidden="true" />
          <span>Media</span>
        </button>
      )}

      {hasPresentations && (
        <button
          onClick={onPresentationsClick}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-zinc-700 bg-white border border-zinc-300 rounded-md hover:border-primary hover:text-primary hover:bg-zinc-50 focus-ring transition-all cursor-pointer"
          aria-label="View presentations"
        >
          <PresentationIcon className="w-4 h-4" aria-hidden="true" />
          <span>Presentations</span>
        </button>
      )}

      {hasAwards && (
        <button
          onClick={onAwardsClick}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-zinc-700 bg-white border border-zinc-300 rounded-md hover:border-primary hover:text-primary hover:bg-zinc-50 focus-ring transition-all cursor-pointer"
          aria-label="View awards"
        >
          <AwardIcon className="w-4 h-4" aria-hidden="true" />
          <span>Awards</span>
        </button>
      )}
    </div>
  );
}

import type {ResearchPaper} from '@/data/types';
import {FileText} from 'lucide-react';
import Image from 'next/image';
import ResearchCardClient from './ResearchCardClient';

type ResearchCardProps = {
  paper: ResearchPaper;
};

type PaperImageProps = {
  imageUrl?: string;
  title: string;
  gradient: string;
};

function PaperImage({imageUrl, title, gradient}: PaperImageProps) {
  const baseClasses = 'flex-shrink-0 w-full sm:w-1/3 flex items-center justify-center';
  const gradientClasses = imageUrl ? '' : `h-48 sm:h-auto bg-gradient-to-br ${gradient}`;
  const containerClasses = `${baseClasses} ${gradientClasses}`;

  if (imageUrl) {
    return (
      <div className={containerClasses}>
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={300}
          className="w-full h-auto object-contain"
        />
      </div>
    );
  }

  return (
    <div className={containerClasses}>
      <div className="text-white/90">
        <FileText className="w-16 h-16 sm:w-20 sm:h-20" strokeWidth={1.5} />
      </div>
    </div>
  );
}

export default function ResearchCard({paper}: ResearchCardProps) {
  const gradient = 'from-primary-400 to-primary-600';

  return (
    <ResearchCardClient paper={paper}>
      <PaperImage imageUrl={paper.imageUrl} title={paper.title} gradient={gradient} />
    </ResearchCardClient>
  );
}

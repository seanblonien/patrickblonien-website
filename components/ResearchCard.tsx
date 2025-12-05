import { FileText } from 'lucide-react';
import Image, { type StaticImageData } from 'next/image';
import type { ResearchPaper } from '@/data/types';
import { ResearchCardClient } from './ResearchCardClient';

type ResearchCardProps = {
  paper: ResearchPaper;
};

type PaperImageProps = {
  gradient: string;
  imageUrl?: StaticImageData;
  title: string;
};

const PaperImage = ({ gradient, imageUrl, title }: PaperImageProps) => {
  const baseClasses = 'flex-shrink-0 w-full sm:w-1/3 flex items-center justify-center pl-2 py-4';
  const gradientClasses = imageUrl ? '' : `h-48 sm:h-auto bg-gradient-to-br ${gradient}`;
  const containerClasses = `${baseClasses} ${gradientClasses}`;

  if (imageUrl) {
    return (
      <div className={containerClasses}>
        <Image
          alt={title}
          className='w-full h-auto object-contain'
          src={imageUrl}
        />
      </div>
    );
  }

  return (
    <div className={containerClasses}>
      <div className='text-white/90'>
        <FileText className='w-16 h-16 sm:w-20 sm:h-20' strokeWidth={1.5} />
      </div>
    </div>
  );
};

export const ResearchCard: React.FC<ResearchCardProps> = ({ paper }) => {
  const gradient = 'from-primary-400 to-primary-600';

  return (
    <ResearchCardClient paper={paper}>
      <PaperImage gradient={gradient} imageUrl={paper.imageUrl} title={paper.title} />
    </ResearchCardClient>
  );
};

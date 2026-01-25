import type { ResearchPaper } from '@/data/types';

type MediaModalContentProps = {
  media?: ResearchPaper['media'];
};

export function MediaModalContent({ media }: MediaModalContentProps) {
  if (!media || media.length === 0) {
    return null;
  }

  return (
    <ul className='space-y-4'>
      {media.map((item) => (
        <li key={`${item.label}-${item.url}`} className='flex items-start gap-3'>
          <div className='shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2' />
          <div>
            <a
              className='text-base text-zinc-900 hover:text-primary transition-colors underline'
              href={item.url}
              rel='noopener noreferrer'
              target='_blank'
            >
              {item.label}
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
}

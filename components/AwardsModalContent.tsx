import type { ResearchPaper } from '@/data/types';

type AwardsModalContentProps = {
  awards?: ResearchPaper['awards'];
};

export const AwardsModalContent: React.FC<AwardsModalContentProps> = ({ awards }) => {
  if (!awards || awards.length === 0) {
    return null;
  }

  return (
    <ul className='space-y-4'>
      {awards.map((award) => (
        <li key={`${award.title}-${award.year}`} className='flex items-start gap-3'>
          <div className='shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2' />
          <div>
            <p className='text-base text-zinc-900'>{award.title}</p>
            {award.year && (
              <p className='text-sm text-zinc-500 mt-0.5'>{award.year}</p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

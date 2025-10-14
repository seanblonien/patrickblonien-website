import type {ResearchPaper} from '@/data/types';

type AwardsModalContentProps = {
  awards?: ResearchPaper['awards'];
};

export default function AwardsModalContent({awards}: AwardsModalContentProps) {
  if (!awards || awards.length === 0) {
    return null;
  }

  return (
    <ul className="space-y-4">
      {awards.map((award, index) => (
        <li key={index} className="flex items-start gap-3">
          <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
          <div>
            <p className="text-base text-zinc-900">{award.title}</p>
            {award.year && (
              <p className="text-sm text-zinc-500 mt-0.5">{award.year}</p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

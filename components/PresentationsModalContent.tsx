import type {ResearchPaper} from '@/data/types';

type PresentationsModalContentProps = {
  presentations?: ResearchPaper['presentations'];
};

export default function PresentationsModalContent({presentations}: PresentationsModalContentProps) {
  if (!presentations || presentations.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      {presentations.map((presentation, index) => (
        <div
          key={index}
          className="pb-4 border-b border-zinc-200 last:border-b-0 last:pb-0"
        >
          <h3 className="text-lg font-semibold text-zinc-900 mb-1">
            {presentation.venue}
          </h3>
          <p className="text-base text-zinc-600 mb-0.5">
            {presentation.location}
          </p>
          <p className="text-sm text-zinc-500">{presentation.date}</p>
        </div>
      ))}
    </div>
  );
}

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
              {presentation.isPresentedByCoauthor ? (
                <sup
                  className="text-zinc-500 align-top ml-1 text-xs -translate-y-0.5"
                  title="Presented by Coauthor"
                  aria-label="Presented by Coauthor"
                  style={{lineHeight: 1}}
                >
                  **
                </sup>
              ) : null}
          </h3>
          <p className="text-base text-zinc-600 mb-0.5">
            {presentation.location}
          </p>
          <p className="text-sm text-zinc-500">{presentation.date}</p>
        </div>
      ))}

      {/* Legend explaining marker for coauthor-presented items */}
      <div className="pt-3">
        <p className="text-sm text-zinc-500">
          <span className="text-zinc-500">**</span>{' '}
          <span className="ml-1">Presented by Coauthor</span>
        </p>
      </div>
    </div>
  );
}

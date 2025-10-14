import type {ResearchPaper} from '@/data/types';
import Collapse from './Collapse';

type PaperContentProps = {
  paper: ResearchPaper;
};

export default function PaperContent({paper}: PaperContentProps) {
  return (
    <>
      <h3 className="text-xl font-serif font-semibold text-zinc-900 mb-3 leading-tight">
        {paper.title}
      </h3>

      <p className="text-sm text-zinc-600 mb-2">
        {paper.authors.join(', ')}
      </p>

      {(paper.venue || paper.date) && (
        <p className="text-sm text-zinc-500 mb-4">
          {paper.venue}
          {paper.venue && paper.date && ' • '}
          {paper.date}
        </p>
      )}

      {paper.tags && paper.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {paper.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block px-2.5 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {paper.abstract && (
        <div className="mb-4">
          <Collapse title="Abstract">
            <p>{paper.abstract}</p>
          </Collapse>
        </div>
      )}
    </>
  );
}

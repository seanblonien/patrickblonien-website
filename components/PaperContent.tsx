import type {Author, ResearchPaper} from '@/data/types';
import Collapse from './Collapse';
import {ScholarlyArticleStructuredData} from './StructuredData';

type PaperContentProps = {
  paper: ResearchPaper;
};

type AuthorListProps = {
  authors: Author[];
};

function AuthorList({authors}: AuthorListProps) {
  return (
    <p className="text-sm text-zinc-600 mb-2">
      {authors.map((author, index) => {
        const isLast = index === authors.length - 1;
        const separator = isLast ? '' : ', ';

        if (author.isPatrick) {
          return (
            <span key={index}>
              <span className="font-semibold">{author.name}</span>
              {separator}
            </span>
          );
        }

        return (
          <span key={index}>
            <a
              href={author.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              {author.name}
            </a>
            {separator}
          </span>
        );
      })}
    </p>
  );
}

export default function PaperContent({paper}: PaperContentProps) {
  return (
    <>
      {/* Structured data for SEO - makes abstract discoverable by search engines */}
      {paper.abstract && <ScholarlyArticleStructuredData paper={paper} />}

      <h3 className="text-xl font-serif font-semibold text-zinc-900 mb-3 leading-tight">
        {paper.title}
      </h3>

      <AuthorList authors={paper.authors} />

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

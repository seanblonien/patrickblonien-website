import type {ResearchPaper} from '@/data/types';

type MediaModalContentProps = {
  media?: ResearchPaper['media'];
};

export default function MediaModalContent({media}: MediaModalContentProps) {
  if (!media || media.length === 0) {
    return null;
  }

  return (
    <ul className="space-y-4">
      {media.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
          <div>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-zinc-900 hover:text-primary transition-colors underline"
            >
              {item.label}
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
}

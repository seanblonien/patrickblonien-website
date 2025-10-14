'use client';

import {ChevronDown} from 'lucide-react';
import {useEffect, useRef, useState} from 'react';

type CollapseProps = {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

export default function Collapse({
  title,
  children,
  defaultOpen = false,
}: CollapseProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [height, setHeight] = useState<number | undefined>(defaultOpen ? undefined : 0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    if (isOpen) {
      const contentHeight = contentRef.current.scrollHeight;
      setHeight(contentHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-zinc-200 rounded-md overflow-hidden">
      <button
        onClick={handleToggle}
        className="w-full flex items-center justify-between px-4 py-3 text-left bg-zinc-50 hover:bg-zinc-100 focus-ring transition-colors cursor-pointer"
        aria-expanded={isOpen}
        aria-controls="collapse-content"
      >
        <span className="font-medium text-sm text-zinc-900">{title}</span>
        <ChevronDown
          className={`w-5 h-5 text-zinc-600 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      <div
        id="collapse-content"
        ref={contentRef}
        style={{height}}
        className="transition-all duration-300 ease-in-out overflow-hidden"
      >
        <div className="px-4 py-3 text-sm text-zinc-700 leading-relaxed bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}

'use client';

import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

type CollapseProps = {
  children: React.ReactNode;
  isDefaultOpen?: boolean;
  title: string;
};

export const Collapse: React.FC<CollapseProps> = ({
  children,
  isDefaultOpen = false,
  title,
}) => {
  const [isOpen, setIsOpen] = useState(isDefaultOpen);
  const [height, setHeight] = useState<number | undefined>(isDefaultOpen ? undefined : 0);
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
    <div className='border border-zinc-200 rounded-md overflow-hidden'>
      <button
        aria-controls='collapse-content'
        aria-expanded={isOpen}
        className='w-full flex items-center justify-between px-4 py-3 text-left bg-zinc-50 hover:bg-zinc-100 focus-ring transition-colors cursor-pointer'
        onClick={handleToggle}
      >
        <span className='font-medium text-sm text-zinc-900'>{title}</span>
        <ChevronDown
          aria-hidden='true'
          className={`w-5 h-5 text-zinc-600 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        ref={contentRef}
        aria-hidden={!isOpen}
        className='transition-all duration-300 ease-in-out overflow-hidden'
        id='collapse-content'
        style={{ height }}
      >
        <div className='px-4 py-3 text-sm text-zinc-700 leading-relaxed bg-white'>
          {children}
        </div>
      </div>
    </div>
  );
};

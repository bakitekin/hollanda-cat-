'use client';

import { useEffect, useRef, useState } from 'react';

type ServicesNavProps = {
  items: { id: string; label: string }[];
};

export default function ServicesNav({ items }: ServicesNavProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const headings = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-100px 0px -60% 0px', threshold: [0.1, 0.25, 0.5] }
    );

    headings.forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, [items]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="sticky top-16 z-30">
      <div className="container mx-auto px-4">
        <div className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-3 flex flex-wrap gap-2">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all border ${
                  isActive
                    ? 'bg-accent text-white border-accent shadow'
                    : 'bg-paper text-ink/80 border-gray-200 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}



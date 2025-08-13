'use client';

import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

type MosaicGalleryProps = {
  images: string[];
  altPrefix?: string;
};

export default function MosaicGallery({ images, altPrefix = 'Image' }: MosaicGalleryProps) {
  const safeImages = useMemo(() => images?.length ? images : ['/images/genel-1.jpeg'], [images]);
  const patternHeights = ['h-40 md:h-60', 'h-64 md:h-80', 'h-52 md:h-72', 'h-72 md:h-96', 'h-56 md:h-80', 'h-48 md:h-64'];

  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const openAt = (index: number) => {
    setCurrent(index);
    setIsOpen(true);
  };

  const close = useCallback(() => setIsOpen(false), []);
  const next = useCallback(() => setCurrent((c) => (c + 1) % safeImages.length), [safeImages.length]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + safeImages.length) % safeImages.length), [safeImages.length]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, close, next, prev]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {safeImages.map((src, idx) => (
          <button
            type="button"
            key={src + idx}
            onClick={() => openAt(idx)}
            className={`group relative ${patternHeights[idx % patternHeights.length]} rounded-2xl overflow-hidden border border-gray-200`}
          >
            <Image src={src} alt={`${altPrefix} ${idx + 1}`} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-black/85">
          <button aria-label="close" onClick={close} className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white">
            <X className="w-6 h-6" />
          </button>
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <button aria-label="prev" onClick={prev} className="absolute left-2 md:left-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white">
              <ChevronLeft className="w-7 h-7" />
            </button>
            <div className="relative w-full max-w-5xl h-[70vh]">
              <Image src={safeImages[current]} alt={`${altPrefix} ${current + 1}`} fill className="object-contain" />
            </div>
            <button aria-label="next" onClick={next} className="absolute right-2 md:right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white">
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}



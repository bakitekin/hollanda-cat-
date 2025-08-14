'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

type GalleryClientProps = {
  images: string[];
};

export default function GalleryClient({ images }: GalleryClientProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openAt = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const close = useCallback(() => setIsOpen(false), []);
  const prev = useCallback(() => setCurrentIndex((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrentIndex((i) => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, close, prev, next]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {images.map((src, index) => (
          <button
            key={index}
            type="button"
            onClick={() => openAt(index)}
            className="group relative h-72 md:h-80 lg:h-96 rounded-2xl overflow-hidden border border-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={`open-image-${index + 1}`}
          >
            <Image
              src={src}
              alt={`reference-${index + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority={index < 3}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-3 right-3 inline-flex items-center gap-2 bg-black/50 text-white text-xs font-medium px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <ZoomIn className="w-4 h-4" />
              <span>Preview</span>
            </div>
          </button>
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button
            type="button"
            aria-label="close"
            onClick={close}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            type="button"
            aria-label="prev"
            onClick={prev}
            className="absolute left-4 md:left-8 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="relative w-[92vw] h-[70vh] md:w-[84vw] md:h-[80vh] max-w-6xl">
            <Image
              src={images[currentIndex]}
              alt={`reference-large-${currentIndex + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          <button
            type="button"
            aria-label="next"
            onClick={next}
            className="absolute right-4 md:right-8 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </>
  );
}



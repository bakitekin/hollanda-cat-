'use client';

import { useEffect, useMemo, useState } from 'react';
import { MessageCircle, Phone, Mail } from 'lucide-react';

type HeroSliderProps = {
  images: string[];
  titleHtml: string;
  description: string;
  whatsappText: string;
  callText: string;
  badges?: string[];
  emailText: string;
  emailHref: string;
};

export default function HeroSlider({ images, titleHtml, description, whatsappText, callText, badges, emailText, emailHref }: HeroSliderProps) {
  const safeImages = useMemo(() => (images && images.length > 0 ? images : ['/images/genel-1.jpeg']), [images]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (safeImages.length <= 1) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % safeImages.length);
    }, 4500);
    return () => clearInterval(id);
  }, [safeImages.length]);

  return (
    <div className="relative text-ink py-32 md:py-40 px-4 mt-20 overflow-hidden">
      {/* Slides */}
      <div className="absolute inset-0">
        {safeImages.map((src, i) => (
          <div
            key={src + i}
            className={`absolute inset-0 bg-center bg-cover transition-opacity duration-[1200ms] ease-out ${i === index ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto text-center">
        <div className="inline-block mx-auto bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 px-6 py-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow" dangerouslySetInnerHTML={{ __html: titleHtml }} />
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow whitespace-pre-line">{description}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/31629188688?text=${encodeURIComponent('Merhaba! BRK DAK çatı hizmetleri hakkında bilgi almak istiyorum.')}`}
              target="_blank"
              className="bg-accent hover:brightness-95 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 flex items-center justify-center space-x-2 drop-shadow"
            >
              <MessageCircle className="w-6 h-6" />
              <span>{whatsappText}</span>
            </a>
            <a
              href="tel:+31629188688"
              className="bg-lavender hover:brightness-95 text-ink font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 flex items-center justify-center space-x-2 drop-shadow"
            >
              <Phone className="w-6 h-6" />
              <span>{callText}</span>
            </a>
            <a
              href={emailHref}
              className="bg-white hover:brightness-95 text-ink font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 flex items-center justify-center space-x-2 drop-shadow border border-gray-200"
            >
              <Mail className="w-6 h-6" />
              <span>{emailText}</span>
            </a>
          </div>
        </div>

        {badges && badges.length > 0 && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {badges.slice(0, 4).map((badge, i) => (
              <span key={i} className="bg-paper text-ink px-4 py-2 rounded-full text-sm border border-gray-200">{badge}</span>
            ))}
          </div>
        )}
      </div>

      {/* Dots */}
      {safeImages.length > 1 && (
        <div className="relative mt-6 flex justify-center gap-2">
          {safeImages.map((_, i) => (
            <button
              aria-label={`slide-${i + 1}`}
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition-all ${i === index ? 'bg-accent w-6' : 'bg-ink/30'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}



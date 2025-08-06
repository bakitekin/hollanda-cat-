'use client';

import { MessageCircle, Phone, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface WhatsAppButtonDictionary {
  title: string;
  owner: string;
  whatsapp_button: string;
  call_button: string;
  emergency_service: string;
}

export default function WhatsAppButton({ dictionary }: { dictionary: WhatsAppButtonDictionary }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const t = dictionary;

  const phoneNumber = '+31629188688';
  const whatsappNumber = '31629188688';
  
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Merhaba! BRK DAK çatı hizmetleri hakkında bilgi almak istiyorum.');
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };
  
  const handlePhoneClick = () => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div className="fixed bottom-6 right-6 z-50" ref={wrapperRef}>
      {isExpanded && (
        <>
          <div 
            className="fixed inset-0 bg-black/20 -z-10"
            onClick={() => setIsExpanded(false)}
          ></div>
          
          <div className="absolute bottom-16 right-0 bg-gray-800/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-gray-700/50 mb-4 min-w-[280px]">
            <div className="text-center mb-4">
              <h3 className="text-white font-bold text-lg">{t.title}</h3>
              <p className="text-gray-300 text-sm">{t.owner}</p>
              <p className="text-blue-400 font-semibold">{phoneNumber}</p>
            </div>
            
            <div className="space-y-2">
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t.whatsapp_button}</span>
              </button>
              
              <button
                onClick={handlePhoneClick}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>{t.call_button}</span>
              </button>
            </div>
            
            <div className="text-center mt-3">
              <p className="text-gray-400 text-xs">{t.emergency_service}</p>
            </div>
          </div>
        </>
      )}
      
      <button
        onClick={toggleExpanded}
        className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group relative"
      >
        {isExpanded ? <X className="w-8 h-8" /> : <MessageCircle className="w-8 h-8" />}
        
        {!isExpanded && (
          <>
            <div className="absolute inset-0 bg-green-600 rounded-full animate-ping opacity-20"></div>
            <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
              !
            </div>
          </>
        )}
      </button>
    </div>
  );
}
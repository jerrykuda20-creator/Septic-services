import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS } from '../data/websiteConfig';

export const WhatsAppWidget = () => {
  const whatsappUrl = `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(
    'Hello Home Love Waste Management, I need septic tank emptying / waste management service.'
  )}`;

  return (
    <aside aria-label="WhatsApp quick contact" className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Home Love Waste Management on WhatsApp"
        className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs py-3 px-4 rounded-full shadow-lg shadow-emerald-600/30 hover:scale-105 transition-all duration-200 cursor-pointer"
      >
        <MessageCircle className="w-5 h-5 fill-white/20" />
        <span className="hidden sm:inline">WhatsApp Us</span>
      </a>
    </aside>
  );
};

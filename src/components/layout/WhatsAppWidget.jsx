import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { CONFIG } from '../../data/websiteConfig';

export const WhatsAppWidget = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage = encodeURIComponent(
    `Hello ${CONFIG.brand.name}, I would like to check availability and book a septic service.`
  );
  const whatsappUrl = `https://wa.me/${CONFIG.brand.whatsAppNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 select-none">
      {/* Optional Dismissible Floating Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white/95 text-slate-800 text-xs font-semibold py-2 px-3.5 rounded-2xl shadow-xl border border-sky-100 backdrop-blur-md animate-fade-in transition-all">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Instant WhatsApp Dispatch</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 ml-1 p-0.5 rounded cursor-pointer"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Pulsing Action Bubble */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 text-white rounded-full shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
      >
        {/* Pulsing Ripple Effect */}
        <span className="absolute -inset-1.5 rounded-full bg-emerald-400/30 animate-ping pointer-events-none group-hover:opacity-0" />
        <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 opacity-0 group-hover:opacity-60 blur-sm transition-opacity" />

        <MessageCircle className="w-7 h-7 relative z-10 fill-white/10 group-hover:rotate-6 transition-transform" />
      </a>
    </div>
  );
};

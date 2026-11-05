import React from 'react';
import { Phone, Clock, MessageCircle } from 'lucide-react';
import { BUSINESS } from '../data/websiteConfig';

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        
        {/* Brand Text Header (Simple, clean, no fake logo) */}
        <a href="#" className="flex flex-col">
          <span className="text-xl sm:text-2xl font-bold font-heading text-slate-900 tracking-tight">
            Home Love
          </span>
          <span className="text-xs font-semibold text-sky-600 uppercase tracking-wider -mt-1">
            Waste Management
          </span>
        </a>

        {/* 24 Hours status + Direct Call CTAs */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open 24 Hours</span>
          </div>

          <a
            href={BUSINESS.phones[0].tel}
            className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-bold text-sm px-4 py-2 rounded-xl shadow-sm transition"
          >
            <Phone className="w-4 h-4" />
            <span>Call: {BUSINESS.phones[0].display}</span>
          </a>
        </div>

      </div>
    </header>
  );
};

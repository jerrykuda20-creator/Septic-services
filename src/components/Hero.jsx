import React from 'react';
import { Phone, MessageCircle, ArrowDown, ShieldCheck } from 'lucide-react';
import { BUSINESS } from '../data/websiteConfig';

export const Hero = () => {
  return (
    <section className="pt-12 pb-16 bg-gradient-to-b from-slate-50 via-white to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Headline & Value Proposition */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold px-3.5 py-1 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
            <span>Google Verified Septic System Service</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 leading-[1.15]">
            Reliable Septic Tank Emptying & Liquid Waste Management
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            High-power vacuum tankers for residential homes, commercial estates, and institutions. Prompt same-day response, clean equipment, and upfront rates.
          </p>

          {/* Primary Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-xs transition"
            >
              <span>View Phone Numbers & Book</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href={BUSINESS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-xs transition"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>WhatsApp Us Directly</span>
            </a>
          </div>
        </div>

        {/* Real Operational Photo Showcase (Single, clean proof grid — zero redundant gallery needed) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-4">
          {BUSINESS.photos.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:border-sky-300 hover:shadow-md transition-all duration-200 flex flex-col"
            >
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-3.5">
                <h3 className="font-bold text-sm text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-500 mt-0.5">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

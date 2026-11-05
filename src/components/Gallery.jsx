import React from 'react';
import { ShieldCheck, MapPin, Phone, Star } from 'lucide-react';
import { BUSINESS } from '../data/websiteConfig';

export const Gallery = () => {
  return (
    <section id="gallery" className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-sky-50 text-sky-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-sky-100 mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
              <span>Google Business Profile Photos</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 tracking-tight">
              Real Fleet & On-Site Operations
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              Authentic photos from our daily septic tank dislodging, vacuum extraction, and customer service operations.
            </p>
          </div>

          {/* Google Verified Card Minimalist Widget */}
          <div className="flex items-center gap-3 bg-slate-50 border border-slate-200/80 px-4 py-2.5 rounded-2xl shadow-2xs">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xs shrink-0">
              G
            </div>
            <div className="text-left text-xs">
              <div className="flex items-center gap-1 font-bold text-slate-900">
                <span>Home love waste management</span>
                <span className="text-blue-500 text-[10px]">✔</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-500 text-[11px] font-medium">
                <span className="text-emerald-600 font-semibold">Open 24 Hours</span>
                <span>•</span>
                <span>Septic System Service</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Column Clean Gallery (Zero Layout Shift) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BUSINESS.gallery.map((photo) => (
            <div
              key={photo.id}
              className="bg-slate-50/80 rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:border-sky-300 hover:shadow-md transition-all duration-200 flex flex-col group"
            >
              {/* Aspect Ratio Container for Zero CLS */}
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                  {photo.badge}
                </div>
              </div>

              {/* Photo Description */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-sky-600 transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {photo.subtitle}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-200/70 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                  <span>Home Love Waste Mgmt</span>
                  <a
                    href={BUSINESS.phones[0].tel}
                    className="text-sky-600 hover:underline font-semibold"
                  >
                    Call for Service
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, ShieldCheck, Zap } from 'lucide-react';
import { CONFIG } from '../../data/websiteConfig';

export const ContactSection = () => {
  const defaultMessage = encodeURIComponent(
    `Hello ${CONFIG.brand.name}, I need assistance regarding a liquid waste / septic inquiry.`
  );
  const whatsappUrl = `https://wa.me/${CONFIG.brand.whatsAppNumber}?text=${defaultMessage}`;

  return (
    <section id="contact" className="py-20 bg-slate-50/80 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-700 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border border-sky-200 mb-3">
            <Phone className="w-3.5 h-3.5" />
            Direct Communications
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            Connect with Operational Dispatch
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Immediate assistance for homeowner inquiries, commercial quotes, or emergency backup dispatch.
          </p>
        </div>

        {/* 3 Contact Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Emergency & Voice Hotline */}
          <div className="glass-panel glass-panel-hover rounded-3xl p-7 flex flex-col justify-between border-red-200/60 bg-gradient-to-b from-white via-red-50/10 to-white">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center mb-5">
                <Phone className="w-6 h-6 animate-pulse" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-red-600">
                24/7 Rapid Emergency Hotline
              </span>
              <h3 className="text-xl font-bold font-heading text-slate-900 mt-1 mb-2">
                {CONFIG.brand.phoneDisplay}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Direct wire to live operators. Average dispatch vehicle routing within 45 minutes for backups.
              </p>
            </div>
            <a
              href={CONFIG.brand.phoneCall}
              className="mt-6 w-full py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Hotline Now</span>
            </a>
          </div>

          {/* Card 2: Instant WhatsApp Dispatch */}
          <div className="glass-panel glass-panel-hover rounded-3xl p-7 flex flex-col justify-between border-emerald-200/60 bg-gradient-to-b from-white via-emerald-50/10 to-white">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mb-5">
                <MessageCircle className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">
                Instant Chat & Photo Diagnosis
              </span>
              <h3 className="text-xl font-bold font-heading text-slate-900 mt-1 mb-2">
                WhatsApp Dispatch
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Send photos of your tank lid, yard symptoms, or alarm box for instant technical assessment.
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Launch WhatsApp Chat</span>
            </a>
          </div>

          {/* Card 3: Digital Operations & Compliance Mail */}
          <div className="glass-panel glass-panel-hover rounded-3xl p-7 flex flex-col justify-between border-sky-200/60">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 border border-sky-200 flex items-center justify-center mb-5">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600">
                Commercial & Real Estate Escrow
              </span>
              <h3 className="text-xl font-bold font-heading text-slate-900 mt-1 mb-2">
                Digital Operations
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Send commercial RFP tenders, municipal contracts, and escrow certification requests.
              </p>
            </div>
            <a
              href={`mailto:${CONFIG.brand.email}`}
              className="mt-6 w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{CONFIG.brand.email}</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

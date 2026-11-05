import React from 'react';
import { Phone, Clock, MapPin, ArrowUp, MessageCircle } from 'lucide-react';
import { BUSINESS } from '../data/websiteConfig';

export const Footer = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-8 border-t border-slate-800 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          
          {/* Col 1: Brand & Identity */}
          <div className="space-y-3 md:col-span-1">
            <img
              src="/logo.png"
              alt="Home Love Waste Management"
              className="h-9 w-auto brightness-0 invert opacity-95"
            />
            <p className="text-slate-400 leading-relaxed text-xs">
              Reliable cesspool emptier and septic tank dislodging service operating across Accra and Greater Accra. Clean, odor-free, and available 24 hours daily.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Open 24 Hours / 7 Days</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => { onNavigate('home'); scrollToTop(); }}
                  className="hover:text-sky-400 transition cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('about'); scrollToTop(); }}
                  className="hover:text-sky-400 transition cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('contact'); scrollToTop(); }}
                  className="hover:text-sky-400 transition cursor-pointer"
                >
                  Contacts & Booking
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Phone Numbers */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Direct Phone Lines
            </h4>
            <div className="space-y-2 font-semibold">
              {BUSINESS.phones.map((p, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <a href={p.tel} className="hover:text-white transition">
                    {p.number} ({p.network})
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Col 4: Location & WhatsApp */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Service Area & Chat
            </h4>
            <p className="text-slate-400">
              Greater Accra, Tema, Kasoa, Spintex, East Legon, Madina & surrounding towns.
            </p>
            <a
              href={BUSINESS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-3 py-2 rounded-xl transition mt-1"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp: {BUSINESS.whatsappDisplay}</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-sky-400 hover:text-sky-300 font-semibold cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

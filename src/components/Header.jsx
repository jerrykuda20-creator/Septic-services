import React, { useState } from 'react';
import { Phone, Menu, X, Clock, MapPin } from 'lucide-react';
import { BUSINESS } from '../data/websiteConfig';

export const Header = ({ activePage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contacts' },
  ];

  const handleNav = (pageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-18">
          
          {/* Site Main Logo Element (High-Resolution PNG) */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center text-left cursor-pointer group py-1"
            aria-label="Home Love Waste Management Home"
          >
            <img
              src="/logo.png"
              alt="Home Love Waste Management - Septic Tank Dislodging • Accra, Ghana"
              className="h-10 sm:h-12 w-auto object-contain group-hover:opacity-95 transition"
              width="240"
              height="50"
            />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-white text-sky-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Direct Phone Dial Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={BUSINESS.primaryTel}
              className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs transition"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: {BUSINESS.primaryPhone}</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={BUSINESS.primaryTel}
              className="p-2 rounded-xl bg-sky-600 text-white text-xs font-bold flex items-center justify-center"
              aria-label="Call primary phone"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-2 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`text-left px-4 py-2.5 rounded-xl text-sm font-bold ${
                  activePage === item.id
                    ? 'bg-sky-50 text-sky-700 border border-sky-200'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 space-y-2 text-xs">
            <div className="flex items-center gap-2 text-slate-600">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>Open 24 Hours • Prompt Dislodging in Accra</span>
            </div>
            <a
              href={BUSINESS.primaryTel}
              className="w-full flex items-center justify-center gap-2 py-3 bg-sky-600 text-white font-bold rounded-xl"
            >
              <Phone className="w-4 h-4" />
              <span>Call Directly: {BUSINESS.primaryPhone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

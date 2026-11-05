import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck, Zap } from 'lucide-react';
import { CONFIG } from '../../data/websiteConfig';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Workflow', href: '#workflow' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-[0_4px_20px_rgba(14,165,233,0.06)] border-b border-sky-100 py-3'
          : 'bg-white/75 backdrop-blur-sm border-b border-slate-100 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Container */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, '#home')}
            className="flex items-center gap-3 group select-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-cyan-400 p-0.5 shadow-md shadow-sky-500/20 group-hover:shadow-sky-500/35 transition">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                <Zap className="w-5 h-5 text-sky-500 fill-sky-500/20 group-hover:scale-110 transition duration-200" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold font-heading tracking-tight text-slate-900">
                  {CONFIG.brand.shortName}
                </span>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-sky-600 bg-sky-50 px-1.5 py-0.5 rounded border border-sky-200">
                  Tech
                </span>
              </div>
              <p className="text-[10px] font-medium text-slate-400 tracking-wide uppercase">
                Liquid Waste Systems
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-sm font-semibold text-slate-600 hover:text-sky-600 tracking-normal transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-sky-500 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button & Emergency hotline */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={CONFIG.brand.phoneCall}
              className="text-xs font-semibold text-slate-600 hover:text-red-500 flex items-center gap-1.5 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span>24/7 Hotline</span>
            </a>

            <a
              href="#booking-form"
              onClick={(e) => handleScrollTo(e, '#booking-form')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-white font-semibold text-sm px-4 py-2.5 rounded-xl shadow-md shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 active:translate-y-0 transition duration-200 cursor-pointer"
            >
              <span>Instant Booking</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#booking-form"
              onClick={(e) => handleScrollTo(e, '#booking-form')}
              className="text-xs font-bold text-sky-600 bg-sky-50 border border-sky-200 px-3 py-1.5 rounded-lg"
            >
              Book
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-sky-600 hover:bg-slate-100 transition focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-sky-100 px-6 pt-4 pb-6 space-y-3 shadow-xl animate-fade-in">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={CONFIG.brand.phoneCall}
              className="w-full flex items-center justify-center gap-2 text-xs font-bold text-red-600 bg-red-50 border border-red-200 py-2.5 rounded-xl"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span>24/7 Emergency: {CONFIG.brand.phoneDisplay}</span>
            </a>
            <a
              href="#booking-form"
              onClick={(e) => handleScrollTo(e, '#booking-form')}
              className="w-full flex items-center justify-center gap-2 bg-sky-500 text-white font-semibold text-sm py-3 rounded-xl shadow-md shadow-sky-500/25"
            >
              <span>Instant Booking Terminal</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

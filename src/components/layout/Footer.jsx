import React from 'react';
import { ShieldCheck, Zap, Clock, MapPin, Award, ArrowUp } from 'lucide-react';
import { CONFIG } from '../../data/websiteConfig';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-850">
          
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-cyan-400 p-0.5">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Zap className="w-4 h-4 text-sky-400" />
                </div>
              </div>
              <span className="text-lg font-bold font-heading text-white tracking-tight">
                {CONFIG.brand.name}
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Ultra-fast, high-performance liquid waste engineering. Operating certified vacuum fleets, hydro-jet diagnostic systems, and tamper-proof compliance manifests across municipal, residential, and commercial sectors.
            </p>

            <div className="pt-2 flex items-center gap-2 text-slate-300 font-mono text-[11px]">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>License Registration: {CONFIG.brand.licenseNumber}</span>
            </div>
          </div>

          {/* Operating Hours Matrix (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              Operating Hours Matrix
            </h4>
            <div className="space-y-2 text-[11px]">
              {CONFIG.footer.hours.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center py-1.5 border-b border-slate-850/80">
                  <span className="text-slate-400">{item.day}</span>
                  <span className={`font-mono font-semibold ${item.day.includes('Emergency') ? 'text-red-400' : 'text-slate-200'}`}>
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Service Areas (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              Operational Service Regions
            </h4>
            <ul className="space-y-1.5 text-[11px]">
              {CONFIG.footer.serviceAreas.map((area, idx) => (
                <li key={idx} className="flex items-center gap-2 text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Environmental Compliance Stamps (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              Certifications
            </h4>
            <div className="space-y-2">
              {CONFIG.footer.certifications.map((cert, idx) => (
                <div key={idx} className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-[10px] text-slate-300 font-medium">
                  {cert}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright Tags */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} {CONFIG.brand.name}. Edge-Optimized High-Performance Waste Infrastructure.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 transition cursor-pointer">EPA Waste Disposal Policy</span>
            <span className="hover:text-slate-400 transition cursor-pointer">Terms of Telemetry</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-sky-400 hover:text-sky-300 font-semibold cursor-pointer ml-2"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

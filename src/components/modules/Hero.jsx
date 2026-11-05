import React from 'react';
import { ArrowDownRight, ShieldCheck, Zap, Activity, Clock, Phone, ChevronRight } from 'lucide-react';
import { CONFIG } from '../../data/websiteConfig';

export const Hero = () => {
  const handleScrollToBooking = (e) => {
    e.preventDefault();
    const target = document.querySelector('#booking-form');
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const target = document.querySelector('#contact');
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-tech-grid"
    >
      {/* Background Subtle Electric Blue Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-sky-200/40 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[380px] h-[380px] bg-cyan-100/60 rounded-full blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Action Container */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Micro-badge */}
            <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200/80 rounded-full px-3.5 py-1 text-xs font-bold text-sky-700 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              <span>Next-Gen Waste-Tech Architecture</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-500 font-medium">EPA-Certified</span>
            </div>

            {/* Headline Box */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-slate-900 tracking-tight leading-[1.12]">
              Precision Vacuum Extraction &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500">
                Liquid Waste Systems
              </span>
            </h1>

            {/* Slogan Placeholder Slot */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50/90 border border-slate-200/80 backdrop-blur-sm max-w-2xl mx-auto lg:mx-0">
              <p className="text-xs sm:text-sm font-semibold tracking-wide text-sky-800 uppercase font-heading mb-1 flex items-center justify-center lg:justify-start gap-1.5">
                <Zap className="w-4 h-4 text-sky-500" />
                Operational Slogan
              </p>
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                "{CONFIG.brand.sloganPlaceholder}"
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Engineered for residential estates, commercial facilities, and municipal wastewater infrastructure. Zero yard disruption, rapid edge dispatch, and tamper-proof compliance logging.
            </p>

            {/* Action Buttons Container */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={handleScrollToBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-sky-500 hover:bg-sky-400 active:bg-sky-600 text-white font-bold text-base px-8 py-4 rounded-2xl shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <span>Book Service Terminal</span>
                <ArrowDownRight className="w-5 h-5" />
              </button>

              <button
                onClick={handleScrollToContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-base px-6 py-4 rounded-2xl border border-slate-200 hover:border-sky-300 shadow-sm transition-all duration-200 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-sky-500" />
                <span>Contact Dispatch</span>
              </button>
            </div>

            {/* Trust Metrics Bar */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>State Certified License #{CONFIG.brand.licenseNumber}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-sky-500" />
                <span>&lt; 45 Min Average Response</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Tech Telemetry Card (Zero CLS container) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow Frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-sky-400/30 to-cyan-300/30 blur-xl opacity-75" />

              <div className="relative bg-white/90 border border-sky-100 rounded-3xl p-6 sm:p-7 shadow-2xl backdrop-blur-xl">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600 flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-sky-500 animate-pulse" />
                      Live Edge Telemetry
                    </span>
                    <h3 className="text-lg font-bold font-heading text-slate-900">
                      Mobile Fleet Grid
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full text-xs font-bold text-emerald-700">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span>Crews Ready</span>
                  </div>
                </div>

                {/* Explicit Size Image/Asset Placeholder Box (Zero CLS) */}
                <div className="mt-4 mb-5 relative w-full aspect-[16/9] rounded-2xl bg-gradient-to-br from-slate-100 via-sky-50/50 to-slate-100 border border-sky-100 overflow-hidden flex flex-col items-center justify-center p-4 text-center">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-sky-200/60 flex items-center justify-center text-sky-600 mb-2">
                    <Zap className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">
                    High-Vacuum Fleet Unit #CF-804
                  </span>
                  <span className="text-[11px] text-slate-500 mt-0.5">
                    Continuous 4,000 Gallon Tank Telemetry • Active Standby
                  </span>
                  {/* Subtle corner tech markers */}
                  <div className="absolute top-2 left-2 text-[9px] font-mono font-semibold text-sky-600/70">
                    [GPS: 34.05°N, 118.24°W]
                  </div>
                  <div className="absolute bottom-2 right-2 text-[9px] font-mono font-semibold text-emerald-600/80">
                    PUMP_RPM: 1850 | READY
                  </div>
                </div>

                {/* High-Tech Telemetry Stats Grid */}
                <div className="grid grid-cols-3 gap-2.5 mb-5 text-center">
                  <div className="bg-slate-50/80 border border-slate-100 p-2.5 rounded-xl">
                    <span className="block text-base font-extrabold font-heading text-slate-900">100%</span>
                    <span className="text-[10px] font-semibold text-slate-500 uppercase">Eco-Disposal</span>
                  </div>
                  <div className="bg-slate-50/80 border border-slate-100 p-2.5 rounded-xl">
                    <span className="block text-base font-extrabold font-heading text-sky-600">0</span>
                    <span className="text-[10px] font-semibold text-slate-500 uppercase">Yard Rutting</span>
                  </div>
                  <div className="bg-slate-50/80 border border-slate-100 p-2.5 rounded-xl">
                    <span className="block text-base font-extrabold font-heading text-slate-900">4K PSI</span>
                    <span className="text-[10px] font-semibold text-slate-500 uppercase">Jetting Power</span>
                  </div>
                </div>

                {/* Quick Booking Trigger */}
                <button
                  onClick={handleScrollToBooking}
                  className="w-full py-3 px-4 bg-sky-50 hover:bg-sky-100 border border-sky-200 text-sky-700 font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition duration-200 cursor-pointer"
                >
                  <span>Open Quick Booking Terminal</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

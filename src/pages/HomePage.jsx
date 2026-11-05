import React from 'react';
import { Phone, MessageCircle, ArrowRight, CheckCircle2, Clock, MapPin, Truck, ShieldCheck } from 'lucide-react';
import { BUSINESS } from '../data/websiteConfig';
import { SepticTruckTag } from '../components/SepticTruckTag';

export const HomePage = ({ onNavigate }) => {
  return (
    <div className="space-y-14 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="pt-8 sm:pt-12 bg-gradient-to-b from-sky-50/60 via-white to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Direct Info & CTAs */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 px-3.5 py-1 rounded-full text-xs font-bold shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Open 24 Hours • Prompt Dislodging in Accra & Beyond</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 tracking-tight leading-[1.18]">
                Professional Septic Tank Dislodging & Toilet Pit Emptying
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Fast cesspool emptier vacuum tanker service for residential compounds, estates, schools, hotels, and churches across Greater Accra. Clean work, zero mess, and honest pricing.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
                <a
                  href={BUSINESS.primaryTel}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-xs transition"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {BUSINESS.primaryPhone}</span>
                </a>

                <a
                  href={BUSINESS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-xs transition"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20" />
                  <span>WhatsApp Chat</span>
                </a>

                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm px-5 py-3.5 rounded-xl transition cursor-pointer"
                >
                  <span>Book Callback</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Local Ghanaian Trust Points */}
              <div className="pt-3 grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-semibold text-slate-700 max-w-lg mx-auto lg:mx-0">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Same-Day Dispatch</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Cash / MoMo Accepted</span>
                </div>
                <div className="flex items-center gap-1.5 col-span-2 sm:col-span-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Clean Odor-Free Suction</span>
                </div>
              </div>

            </div>

            {/* Right Column: Real Operational Truck Showcase */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-3 shadow-xl border border-slate-200/90 max-w-md mx-auto">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100">
                  <img
                    src="/truck.jpg"
                    alt="Home Love Waste Management Vacuum Suction Tanker Truck"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded-lg">
                    Our Suction Tanker Truck
                  </div>
                  <div className="absolute bottom-3 right-3 bg-emerald-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span>Active in Accra</span>
                  </div>
                </div>

                <div className="p-3.5 text-center">
                  <h3 className="font-bold text-slate-900 text-sm">
                    {BUSINESS.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    High-volume vacuum tanker ready for prompt service across Greater Accra.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. REAL IMAGE GALLERY (Great look, zero CLS) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Real Work & Operations
            </span>
            <h2 className="text-2xl font-bold font-heading text-slate-900 mt-0.5">
              Our Trucks & On-Site Dislodging Gallery
            </h2>
          </div>
          <button
            onClick={() => onNavigate('about')}
            className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1 cursor-pointer"
          >
            <span>Read more about our fleet</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {BUSINESS.gallery.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xs hover:border-sky-300 hover:shadow-md transition flex flex-col group"
            >
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition duration-300"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  {item.badge}
                </span>
              </div>
              <div className="p-3.5">
                <h3 className="font-bold text-sm text-slate-900 group-hover:text-sky-600 transition">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CORE SERVICES GRID */}
      <section className="bg-slate-50 py-14 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-100 px-3 py-1 rounded-full">
              What We Offer
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 mt-2">
              Our Cesspool & Waste Services
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Affordable, reliable liquid waste evacuation for compounds and businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BUSINESS.services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs hover:border-sky-300 transition flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-3">
                    <Truck className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-slate-900 mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {service.desc}
                  </p>
                </div>
                
                <a
                  href={BUSINESS.primaryTel}
                  className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1 pt-3 border-t border-slate-100"
                >
                  <span>Book Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. GHANAIAN SERVICE AREAS & VECTOR SHOWCASE */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                Local Service Coverage
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
                Available Across Accra & Greater Accra Region
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                No matter where you are located, our vacuum tanker trucks are on standby to reach your area promptly:
              </p>

              {/* Badges of Ghanaian towns */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {BUSINESS.serviceAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg border border-slate-200"
                  >
                    {area}
                  </span>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-xs transition cursor-pointer"
                >
                  <span>Contact Our Team for Your Area</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Vector Illustration Card */}
            <div className="lg:col-span-5">
              <SepticTruckTag mode="showcase" />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

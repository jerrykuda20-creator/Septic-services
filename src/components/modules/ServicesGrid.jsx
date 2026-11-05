import React from 'react';
import { 
  Droplets, 
  Layers, 
  FlameKindling, 
  Radio, 
  Activity, 
  AlertOctagon, 
  MessageCircle, 
  ArrowUpRight, 
  Clock 
} from 'lucide-react';
import { CONFIG } from '../../data/websiteConfig';

const iconMap = {
  Droplets,
  Layers,
  FlameKindling,
  Radio,
  Activity,
  AlertOctagon
};

export const ServicesGrid = () => {
  return (
    <section id="services" className="py-24 bg-white border-t border-slate-100 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-sky-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-sky-50 text-sky-700 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border border-sky-200 mb-3">
            <Droplets className="w-3.5 h-3.5" />
            Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            Specialized Waste-Tech Engineering Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Comprehensive liquid waste management, precision diagnostics, and vacuum extraction designed for longevity and environmental integrity.
          </p>
        </div>

        {/* Dynamic Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CONFIG.services.map((service) => {
            const Icon = iconMap[service.iconName] || Droplets;
            const isEmergency = service.id === 'emergency-dispatch';
            const encodedMsg = encodeURIComponent(service.whatsappMessage);
            const whatsappLink = `https://wa.me/${CONFIG.brand.whatsAppNumber}?text=${encodedMsg}`;

            return (
              <div
                key={service.id}
                className={`relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 group ${
                  isEmergency
                    ? 'bg-gradient-to-b from-white via-red-50/20 to-white border-2 border-red-200 shadow-md hover:border-red-400 hover:shadow-red-500/10'
                    : 'glass-panel glass-panel-hover'
                }`}
              >
                <div>
                  {/* Top Bar: Icon Slot & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 ${
                        isEmergency
                          ? 'bg-red-50 text-red-500 border border-red-200'
                          : 'bg-sky-50 text-sky-600 border border-sky-100 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-200'
                      }`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>

                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                        isEmergency
                          ? 'bg-red-100/70 text-red-700 border-red-200 animate-pulse'
                          : 'bg-slate-100 text-slate-600 border-slate-200'
                      }`}
                    >
                      {service.tag}
                    </span>
                  </div>

                  {/* Header Title */}
                  <h3 className="text-xl font-bold font-heading text-slate-900 mb-2.5 group-hover:text-sky-600 transition-colors">
                    {service.title}
                  </h3>

                  {/* Descriptive Brief Layout */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div>
                  {/* Service Interval Info */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-6 pt-3 border-t border-slate-100">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{service.interval}</span>
                  </div>

                  {/* Individualized "Inquire via WhatsApp" Click Connector */}
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 font-bold text-xs py-3 px-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                      isEmergency
                        ? 'bg-red-600 hover:bg-red-500 text-white border-red-600 shadow-md shadow-red-600/20'
                        : 'bg-emerald-50 hover:bg-emerald-500 text-emerald-800 hover:text-white border-emerald-200 hover:border-emerald-500 shadow-sm'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    <span>Inquire via WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

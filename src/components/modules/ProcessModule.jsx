import React from 'react';
import { Calendar, Wrench, FileCheck2, ArrowRight } from 'lucide-react';
import { Badge } from '../ui/Badge';

export const ProcessModule = () => {
  const steps = [
    {
      step: '01',
      title: 'Easy Scheduling & Transparent Quote',
      desc: 'Pick your preferred date online or call our 24/7 hotline. You receive an upfront flat-rate quote with no hidden fuel or dumping fees.',
      icon: Calendar
    },
    {
      step: '02',
      title: 'Precision Pumping & High-Tech Scrub',
      desc: 'Our driver arrives on schedule with lawn protection. We access the tank without tearing up your grass and pump all solids and liquid sludge completely.',
      icon: Wrench
    },
    {
      step: '03',
      title: 'Inlet/Outlet Check & Digital Sign-Off',
      desc: 'We inspect the inlet baffle, outlet baffle, and effluent filter, then provide a stamped certificate and maintenance recommendation for your records.',
      icon: FileCheck2
    }
  ];

  return (
    <section id="process" className="py-20 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="cyan" className="mb-3">
            Streamlined Workflow
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How Our Service Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            From your first click or call to the final inspection certificate, we make septic tank maintenance effortless and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative bg-slate-900/60 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-cyan-500/40 transition duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold text-cyan-400/80 font-mono">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-cyan-400">
                  <span>Guaranteed Professionalism</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

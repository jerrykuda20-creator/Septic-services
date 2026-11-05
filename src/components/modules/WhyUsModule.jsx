import React from 'react';
import { Shield, Sparkles, Clock, FileCheck, CheckCircle2 } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

export const WhyUsModule = () => {
  const highlights = [
    {
      icon: Shield,
      title: 'Licensed & EPA Certified',
      description: 'Fully certified wastewater technicians operating under strict state environmental health regulations.'
    },
    {
      icon: Sparkles,
      title: 'Clean Yard Guarantee',
      description: 'We use turf protection mats, lightweight hoses, and odor-neutralizing vacuums. We leave zero lawn rutting.'
    },
    {
      icon: Clock,
      title: 'Guaranteed Arrival Windows',
      description: 'No waiting around all day. We give precise 2-hour arrival windows with live GPS driver dispatch tracking.'
    },
    {
      icon: FileCheck,
      title: 'Official Digital Records',
      description: 'Instant PDF reports detailing gallonage removed, baffle integrity, and date stamped proof for real estate sales.'
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-slate-900/60 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <Badge variant="cyan">The ClearFlow Standard</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Why Homeowners & Businesses Trust Us
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Septic issues can be stressful and messy. Our mission is to provide transparent, hassle-free service with clean modern trucks and respectful technicians.
            </p>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800">
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-cyan-400">15+</span>
                <span className="text-xs text-slate-400">Years in Business</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-emerald-400">14K+</span>
                <span className="text-xs text-slate-400">Tanks Serviced</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-blue-400">4.9/5</span>
                <span className="text-xs text-slate-400">Rating Stars</span>
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Zero surcharge weekend rates for routine bookings</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>State approved waste processing & disposal</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="bg-slate-800/40 border-slate-700/60 p-6">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
                </Card>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { Droplets, ScanLine, Activity, Wrench, Building2, AlertTriangle, Check, ArrowRight } from 'lucide-react';
import { SERVICES } from '../../data/servicesData';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

const iconMap = {
  Droplets,
  ScanLine,
  Activity,
  Wrench,
  Building2,
  AlertTriangle
};

export const ServicesModule = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 bg-slate-900/50 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="cyan" className="mb-3">
            Comprehensive Environmental Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Complete Septic & Wastewater Solutions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Engineered solutions for residential homeowners, commercial facilities, and municipal properties. Delivered by state-licensed technicians.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || Droplets;
            const isEmergency = service.id === 'emergency';

            return (
              <Card
                key={service.id}
                className={`flex flex-col justify-between h-full relative group overflow-hidden ${
                  isEmergency ? 'border-red-900/60 bg-red-950/20 hover:border-red-500/60' : ''
                }`}
              >
                <div>
                  {/* Top Bar with Icon and Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                      isEmergency 
                        ? 'bg-red-500/10 text-red-400 border border-red-500/20' 
                        : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant={isEmergency ? 'red' : 'cyan'}>
                      {service.badge}
                    </Badge>
                  </div>

                  {/* Title and Short Description */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Recommended Interval */}
                  <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    <span>Interval: <strong className="text-slate-200">{service.recommended}</strong></span>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Button */}
                <Button
                  variant={isEmergency ? 'emergency' : 'secondary'}
                  size="sm"
                  className="w-full justify-center group-hover:bg-cyan-500 group-hover:text-slate-950 group-hover:border-transparent transition-all"
                  onClick={() => onSelectService(service)}
                  icon={ArrowRight}
                >
                  {isEmergency ? 'Immediate Dispatch' : 'Request This Service'}
                </Button>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};

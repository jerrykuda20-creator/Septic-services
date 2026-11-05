import React from 'react';
import { Camera, CheckCircle2, ArrowRight, ShieldCheck, Truck, Layers, MapPin, Sparkles } from 'lucide-react';
import { CONFIG } from '../../data/websiteConfig';

export const Workflow = () => {
  return (
    <section id="workflow" className="py-24 bg-slate-50/70 border-t border-slate-150 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-700 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border border-sky-200 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Operational Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            Step-by-Step Execution Architecture
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            A frictionless, 4-phase deployment model engineered for speed, hygiene, and complete digital accountability.
          </p>
        </div>

        {/* 4-Step Progress Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {CONFIG.workflowSteps.map((step, index) => {
            return (
              <div
                key={step.stepNumber}
                className="glass-panel glass-panel-hover rounded-3xl p-5 flex flex-col justify-between relative group border-sky-100"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-widest font-heading text-sky-600 bg-sky-50 px-2.5 py-1 rounded-lg border border-sky-100">
                      Phase {step.stepNumber}
                    </span>
                    <span className="text-2xl font-extrabold font-mono text-slate-300 group-hover:text-sky-500 transition-colors">
                      {step.stepNumber}
                    </span>
                  </div>

                  {/* Explicit Picture Layout Box with Explicit Aspect Ratio (Zero CLS) */}
                  <div className="relative w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-100 via-sky-50/60 to-slate-200/60 border border-slate-200/80 overflow-hidden mb-5 flex flex-col items-center justify-center p-4 text-center group-hover:border-sky-300 transition-colors">
                    
                    {/* Placeholder Camera Icon & Framing */}
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-sky-500 transition-colors mb-2">
                      <Camera className="w-5 h-5" />
                    </div>

                    <span className="text-[11px] font-bold text-slate-700 leading-snug">
                      {step.imagePlaceholder}
                    </span>
                    <span className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider font-mono">
                      [Client Image Slot • 800x600]
                    </span>

                    {/* High-tech edge corner brackets */}
                    <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t-2 border-l-2 border-sky-400/50" />
                    <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t-2 border-r-2 border-sky-400/50" />
                    <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b-2 border-l-2 border-sky-400/50" />
                    <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b-2 border-r-2 border-sky-400/50" />
                  </div>

                  {/* Step Title */}
                  <h3 className="text-base font-bold font-heading text-slate-900 mb-2 leading-tight group-hover:text-sky-600 transition-colors">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Verification Tag */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <span className="flex items-center gap-1 text-emerald-600">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified Phase
                  </span>
                  {index < 3 ? (
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-sky-500 group-hover:translate-x-1 transition-all" />
                  ) : (
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-500" />
                  )}
                </div>

              </div>
            );
          })}

        </div>

        {/* Operational Guarantee Sub-banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-sky-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 text-sky-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Zero Lawn Disruption Guarantee</h4>
              <p className="text-xs text-slate-500">Every operational crew applies heavy-gauge ground turf protection mats and remote-run intake hoses.</p>
            </div>
          </div>
          <span className="text-xs font-mono font-semibold text-sky-600 bg-sky-50 px-3 py-1.5 rounded-lg border border-sky-100 shrink-0">
            TURF_PROTECT: ACTIVE
          </span>
        </div>

      </div>
    </section>
  );
};

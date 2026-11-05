import React from 'react';
import { ShieldCheck, Clock, Award, PhoneCall, CheckCircle2, ArrowRight, Truck } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

export const HeroModule = ({ onOpenBooking, onEmergencyClick }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-600/15 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline and Call-to-actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2">
              <Badge variant="cyan" icon={ShieldCheck}>
                Licensed • EPA Certified • Insured
              </Badge>
              <Badge variant="emerald" className="hidden sm:inline-flex">
                4.9/5 ★ (850+ Reviews)
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Fast, Reliable <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400">
                Septic Services & Pumping
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              From routine 3-year residential pump-outs to urgent drain field emergencies and high-definition video pipe inspections. Clean, odor-free, and dependable.
            </p>

            {/* Quick value bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-sm text-slate-300">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Zero Hidden Fees</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Same-Day Dispatch</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Eco-Safe Disposal</span>
              </div>
            </div>

            {/* CTA Group */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={onOpenBooking}
                icon={ArrowRight}
                className="w-full sm:w-auto shadow-cyan-500/30"
              >
                Get Instant Quote & Book
              </Button>
              <Button
                variant="emergency"
                size="lg"
                onClick={onEmergencyClick}
                icon={PhoneCall}
                className="w-full sm:w-auto"
              >
                Emergency Dispatch
              </Button>
            </div>

            {/* Bottom trust bar */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-500" /> 24/7 Live Operators
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-slate-500" /> 100% Satisfaction Guarantee
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Dispatch & Quick Estimation Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative border glowing ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/30 to-blue-600/30 blur-lg opacity-75"></div>

              <div className="relative bg-slate-900/90 border border-slate-700/80 rounded-2xl p-6 shadow-2xl backdrop-blur-xl">
                
                {/* Header with live status */}
                <div className="flex items-center justify-between pb-5 border-b border-slate-800">
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Truck className="w-5 h-5 text-cyan-400" />
                      Live Fleet Status
                    </h3>
                    <p className="text-xs text-slate-400">Real-time local service coverage</p>
                  </div>
                  <div className="flex items-center gap-2 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-1 rounded-full text-xs font-semibold text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>3 Crews Active</span>
                  </div>
                </div>

                {/* Service highlights in card */}
                <div className="py-5 space-y-3.5">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/40">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0 text-cyan-400 font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Full Tank Pumping & Scrub</h4>
                      <p className="text-xs text-slate-400">Sludge, scum, and effluent vacuumed with high-capacity equipment.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/40">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 text-emerald-400 font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Baffle & Filter Diagnostic</h4>
                      <p className="text-xs text-slate-400">Comprehensive inspection preventing costly drain field failure.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/40">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 text-blue-400 font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Digital Compliance Certificate</h4>
                      <p className="text-xs text-slate-400">Official documentation for county records and real estate disclosures.</p>
                    </div>
                  </div>
                </div>

                {/* Instant Action Button */}
                <Button
                  variant="primary"
                  className="w-full justify-center text-sm py-3 font-semibold"
                  onClick={onOpenBooking}
                >
                  Schedule Your Service in 60s
                </Button>
                
                <p className="text-center text-[11px] text-slate-400 mt-3">
                  No payment required to request quotes or schedule.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

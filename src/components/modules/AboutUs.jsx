import React, { useState } from 'react';
import { Play, CheckCircle2, Shield, Award, Cpu, Eye, Sparkles } from 'lucide-react';
import { CONFIG } from '../../data/websiteConfig';

export const AboutUs = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const competitiveEdgePoints = [
    {
      title: 'Precision Sensor Telemetry',
      desc: 'We utilize digital ultrasonic sensors and fiber-optic pipe diagnostics to accurately assess sludge volume before suction commences.'
    },
    {
      title: 'Turf Guard Architecture',
      desc: 'Zero yard rutting promise through modular distributed axle weight pads and high-tensile flexible intake hose lines.'
    },
    {
      title: 'EPA Clean Water Compliance',
      desc: 'Every gallon pumped is digitally logged with manifest telemetry and routed directly to accredited biosolid treatment facilities.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50/70 border-t border-slate-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 bg-sky-100/70 text-sky-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-sky-200 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            Engineering & Heritage
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            Next-Gen Environmental Waste Logistics
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Pioneering modern waste engineering with automated vacuum tech, certified handling, and transparent digital verification.
          </p>
        </div>

        {/* Two-Column Responsive Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative, Operational Lifespan & Competitive Edge */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Origin Narrative Placeholder Slot */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold font-heading text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-sky-500" />
                Origin Narrative & Mission
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Founded with a mission to modernize traditional septic pumping, {CONFIG.brand.name} integrates digital dispatch algorithms, quiet high-vacuum pumps, and rigorous environmental health compliance. We eliminate guesswork with upfront digital pricing and certified disposal manifests.
              </p>
            </div>

            {/* Operational Lifespan & Milestones */}
            <div className="grid grid-cols-3 gap-4 py-4 border-y border-slate-200/80">
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold font-heading text-sky-600">18+</span>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Years Operational</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">16,500+</span>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Tanks Pumped</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold font-heading text-emerald-600">99.8%</span>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">On-Time Window</span>
              </div>
            </div>

            {/* Competitive Edge Points */}
            <div className="space-y-4 pt-2">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700">
                Key Competitive Edge Points:
              </h4>
              <div className="space-y-3">
                {competitiveEdgePoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-sm font-bold text-slate-900">{point.title}</h5>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Video Overlay Placeholder Card (Zero CLS container) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl p-1 bg-gradient-to-tr from-sky-400/20 via-slate-200 to-sky-300/30 shadow-xl">
              
              <div className="relative bg-white rounded-[22px] overflow-hidden border border-sky-100 p-4 sm:p-6">
                
                {/* Header label */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700 font-heading">
                      Operational Footage Reel
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-sky-600 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                    4K_TELEMETRY.RAW
                  </span>
                </div>

                {/* Explicit Aspect-Ratio Video Container (Zero CLS) */}
                <div className="relative w-full aspect-[16/9] rounded-2xl bg-slate-900 overflow-hidden group shadow-inner border border-slate-800 flex items-center justify-center">
                  
                  {isPlaying ? (
                    /* Interactive Embed / Mock Video Playing */
                    <div className="w-full h-full flex flex-col items-center justify-center bg-slate-950 text-white p-6 text-center animate-fade-in">
                      <div className="w-12 h-12 rounded-full border-2 border-sky-400 border-t-transparent animate-spin mb-3" />
                      <p className="text-sm font-semibold text-sky-300">Streaming Operational Demo...</p>
                      <p className="text-xs text-slate-400 mt-1">Direct fleet footage integration slot</p>
                      <button
                        onClick={() => setIsPlaying(false)}
                        className="mt-4 px-3 py-1 bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 rounded-lg cursor-pointer"
                      >
                        Reset Video Card
                      </button>
                    </div>
                  ) : (
                    /* Video Poster & Play Button Interaction */
                    <>
                      {/* High-tech grid background simulation for poster */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-sky-950 opacity-90" />
                      
                      {/* Technical overlay grid lines */}
                      <div className="absolute inset-0 bg-tech-dots opacity-20 pointer-events-none" />

                      {/* Video Information Preview */}
                      <div className="relative z-10 text-center px-6">
                        <button
                          type="button"
                          onClick={() => setIsPlaying(true)}
                          aria-label="Play operational video reel"
                          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-sky-500/90 hover:bg-sky-400 text-white flex items-center justify-center mx-auto shadow-lg shadow-sky-500/40 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer group"
                        >
                          <Play className="w-8 h-8 ml-1 fill-white text-white group-hover:scale-105 transition-transform" />
                        </button>
                        <h4 className="mt-4 text-base font-bold text-white font-heading">
                          Watch Fleet Extraction in Action
                        </h4>
                        <p className="text-xs text-slate-300 mt-1 max-w-xs mx-auto">
                          Click to play operational footage, soil protection setup, and vacuum efficiency reel.
                        </p>
                      </div>

                      {/* Technical Telemetry Badges */}
                      <div className="absolute bottom-3 left-3 text-[10px] font-mono text-sky-300/80 bg-slate-900/80 px-2 py-0.5 rounded backdrop-blur-sm border border-slate-700">
                        FPS: 60 | CODEC: H.265
                      </div>
                      <div className="absolute top-3 right-3 text-[10px] font-mono text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded backdrop-blur-sm border border-slate-700">
                        DURATION: 01:45
                      </div>
                    </>
                  )}

                </div>

                {/* Sub-card specs */}
                <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-emerald-500" />
                    OSHA & EPA compliant operation
                  </span>
                  <span className="font-mono text-[11px] text-slate-400">
                    ID: CLR-OPS-VIDEO-2026
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

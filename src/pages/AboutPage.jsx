import React from 'react';
import { ShieldCheck, Truck, Clock, CheckCircle2, Phone, MapPin, Award, ArrowRight } from 'lucide-react';
import { BUSINESS } from '../data/websiteConfig';
import { SepticTruckTag } from '../components/SepticTruckTag';

export const AboutPage = ({ onNavigate }) => {
  const pillars = [
    {
      title: '24/7 Rapid Response',
      desc: 'Septic backups and toilet overflows happen without warning. Our drivers and crew are on standby 24 hours daily across Accra.',
      icon: Clock
    },
    {
      title: 'Heavy-Duty Suction Tankers',
      desc: 'Our high-capacity vacuum tanker trucks are equipped with heavy industrial vacuum pumps to dislodge thick bottom sludge efficiently.',
      icon: Truck
    },
    {
      title: 'Zero Spillage & Clean Yard Promise',
      desc: 'We use airtight camlock couplers and long flexible suction hoses to access deep compounds without driving over lawn or interlocks.',
      icon: ShieldCheck
    },
    {
      title: 'Accredited Environmental Disposal',
      desc: 'All pumped liquid waste is legally transported and safely discharged at certified municipal wastewater stabilization and treatment plants.',
      icon: Award
    }
  ];

  return (
    <div className="space-y-16 pb-20">
      
      {/* 1. Header Hero */}
      <section className="pt-10 sm:pt-14 pb-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-100 px-3 py-1 rounded-full">
              About Home Love Waste Management
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
              Dedicated to Clean, Fast & Reliable Liquid Waste Sanitation in Ghana
            </h1>
            <p className="text-base text-slate-600 leading-relaxed">
              We are a dedicated septic system and liquid waste dislodging service operating across Accra and Greater Accra. Our mission is to keep Ghanaian homes, schools, hospitals, and commercial properties healthy and odor-free.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Story & Who We Are */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-4 text-slate-700 text-sm leading-relaxed">
            <h2 className="text-2xl font-bold font-heading text-slate-900">
              Who We Are
            </h2>
            <p>
              <strong>Home Love Waste Management</strong> was established to solve the common frustrations homeowners and estate managers face with unreliable cesspool emptiers: late arrivals, dirty equipment, lawn rutting, and unexpected price increases.
            </p>
            <p>
              We run clean, well-maintained vacuum tanker trucks operated by respectful, experienced drivers and dislodging technicians. Whether it is a single-family house with a full toilet soakaway, a busy school compound, or a high-traffic hotel, we handle every dislodging job with precision and thoroughness.
            </p>
            <p>
              Our trucks are equipped with high-tensile flexible suction hoses allowing us to park on the street or driveway and reach tanks located deep in backyards or enclosed compounds.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-1.5 bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-lg border border-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Ghana Environmental Standards Compliant
              </span>
              <span className="flex items-center gap-1.5 bg-sky-50 text-sky-800 px-3 py-1.5 rounded-lg border border-sky-200">
                <CheckCircle2 className="w-4 h-4 text-sky-600" />
                Registered Cesspool Emptier Service
              </span>
            </div>
          </div>

          {/* Real Tanker Photo */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-3 border border-slate-200 shadow-md">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
                <img
                  src="/truck.jpg"
                  alt="Home Love Waste Management Vacuum Tanker Truck"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 text-center">
                <span className="text-xs font-bold text-slate-800 block">
                  Our Heavy-Duty Suction Tanker
                </span>
                <span className="text-[11px] text-slate-500">
                  Ready for prompt dispatch anywhere in Accra
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. The 4 Pillars */}
      <section className="bg-slate-50 py-14 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Why Customers Trust Us
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 mt-1">
              Our 4 Pillars of Service
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs hover:border-sky-300 transition"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 mb-1.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Equipment & Vector Badge Showcase */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Modern Sanitation Equipment
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
              Equipped to Handle Any Tank Volume
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our vacuum trucks are engineered with industrial suction pumps capable of extracting thick, hardened sludge and sludge crusts that ordinary pumps leave behind. This ensures your septic tank gets completely cleaned, lasting longer before requiring another pump-out.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-xs transition cursor-pointer"
              >
                <span>Request a Dislodging Trip</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <SepticTruckTag mode="showcase" />
          </div>

        </div>
      </section>

    </div>
  );
};

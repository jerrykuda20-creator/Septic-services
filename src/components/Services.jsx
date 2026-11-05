import React from 'react';
import { Truck, Droplets, Wrench, AlertCircle } from 'lucide-react';
import { BUSINESS } from '../data/websiteConfig';

const icons = [Truck, Droplets, Wrench, AlertCircle];

export const Services = () => {
  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="max-w-xl mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
            What We Do
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 mt-1">
            Our Core Services
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Complete sanitation, extraction, and waste transport solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BUSINESS.services.map((item, idx) => {
            const Icon = icons[idx] || Truck;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs hover:border-sky-300 transition"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-3.5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

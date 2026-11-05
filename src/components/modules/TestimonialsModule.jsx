import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../data/servicesData';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

export const TestimonialsModule = () => {
  return (
    <section id="reviews" className="py-20 bg-slate-900/40 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="cyan" className="mb-3">
            Real Customer Feedback
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Trusted by 14,000+ Happy Customers
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Read what local homeowners and commercial facility managers say about our fast response, honest pricing, and clean service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <Card key={idx} className="flex flex-col justify-between h-full bg-slate-900/70 border-slate-800">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-700" />
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    {item.name}
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  </h4>
                  <p className="text-xs text-slate-400">{item.role}</p>
                </div>
                <span className="text-[11px] text-slate-500 font-medium">{item.date}</span>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

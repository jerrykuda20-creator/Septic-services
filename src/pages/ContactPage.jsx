import React, { useState } from 'react';
import { Phone, MessageCircle, Send, CheckCircle2, Clock, MapPin, AlertCircle, Truck } from 'lucide-react';
import { BUSINESS } from '../data/websiteConfig';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    service: 'Septic Tank Emptying',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Home Love Waste Management,\n\nI need a septic dislodging service.\n\n• Name: ${formData.name || 'Not specified'}\n• Phone: ${formData.phone || 'Not specified'}\n• Location: ${formData.location || 'Not specified'}\n• Service: ${formData.service}\n• Landmark/Notes: ${formData.notes || 'None'}\n\nPlease let me know your arrival time and price.`
    );
    window.open(`https://wa.me/${BUSINESS.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="space-y-14 pb-20">
      
      {/* 1. Page Header */}
      <section className="pt-10 sm:pt-14 pb-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-100 px-3 py-1 rounded-full">
              Contact & Dispatch
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
              Get in Touch with Home Love Waste Management
            </h1>
            <p className="text-base text-slate-600 leading-relaxed">
              Call any of our lines directly, message our dispatch on WhatsApp, or send a callback request. We operate 24 hours daily.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Phone Numbers & WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone numbers card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-5">
              <div>
                <h3 className="text-base font-bold font-heading text-slate-900">
                  Call Our Direct Lines
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Reach our active drivers and operators immediately:
                </p>
              </div>

              <div className="space-y-3">
                {BUSINESS.phones.map((phone, idx) => (
                  <a
                    key={idx}
                    href={phone.tel}
                    className="flex items-center justify-between p-3.5 bg-slate-50 hover:bg-sky-50 rounded-2xl border border-slate-200 hover:border-sky-400 transition group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-extrabold text-slate-900 block text-sm group-hover:text-sky-600 transition">
                          {phone.number}
                        </span>
                        <span className="text-[10px] font-semibold text-slate-500">
                          {phone.network} {phone.isPrimary ? '• Primary Line' : '• Available'}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-sky-600 group-hover:translate-x-0.5 transition-transform">
                      Call Now →
                    </span>
                  </a>
                ))}
              </div>

              {/* WhatsApp Quick Action */}
              <div className="pt-2 border-t border-slate-100">
                <a
                  href={BUSINESS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-xs transition"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20" />
                  <span>Chat on WhatsApp ({BUSINESS.whatsappDisplay})</span>
                </a>
              </div>
            </div>

            {/* Operating Hours & Operational Base */}
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200 text-xs space-y-3">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Hours of Operation:</span>
                  <span className="text-slate-600">Open 24 Hours • Monday to Sunday (Including Holidays)</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-slate-200/80">
                <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Service Base & Coverage:</span>
                  <span className="text-slate-600">Greater Accra Region, Tema, Kasoa, and surrounding districts.</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Callback & Booking Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            
            <h3 className="text-lg font-bold font-heading text-slate-900 mb-1">
              Request a Dislodging Trip or Quote
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Enter your property location and phone number. Our driver will call you back to confirm details and dispatch.
            </p>

            {submitted ? (
              <div className="py-10 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Request Sent Successfully!</h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our driver or dispatch manager will contact you at{' '}
                  <strong className="text-slate-900">{formData.phone}</strong> promptly.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-sky-600 font-semibold hover:underline cursor-pointer"
                  >
                    Submit another booking
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Kwame Mensah"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-sky-500 focus:bg-white focus:outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 055 277 9904"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-sky-500 focus:bg-white focus:outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Location / Area in Accra *
                    </label>
                    <input
                      type="text"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. East Legon, Spintex, Tema, Madina"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-sky-500 focus:bg-white focus:outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Service Required
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-sky-500 focus:bg-white focus:outline-none cursor-pointer"
                    >
                      <option value="Septic Tank Emptying">Septic Tank Dislodging & Emptying</option>
                      <option value="Commercial Liquid Waste">Commercial & Industrial Liquid Waste</option>
                      <option value="Soakaway Cleaning">Soakaway & Manhole Unblocking</option>
                      <option value="Emergency Overflow">24/7 Emergency Overflow Response</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Landmark or Additional Notes (Optional)
                  </label>
                  <textarea
                    name="notes"
                    rows={2}
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Nearby landmark, gate details, or tank location..."
                    className="w-full px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-sky-500 focus:bg-white focus:outline-none transition"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 px-5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition cursor-pointer shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Callback Request</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    className="flex-1 py-3 px-5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs rounded-xl border border-emerald-200 flex items-center justify-center gap-2 transition cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>
      </section>

    </div>
  );
};

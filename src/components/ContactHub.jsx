import React, { useState } from 'react';
import { Phone, MessageCircle, Send, CheckCircle2, Clock, MapPin } from 'lucide-react';
import { BUSINESS } from '../data/websiteConfig';

export const ContactHub = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
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
    const message = encodeURIComponent(
      `Hello Home Love Waste Management,\n\nName: ${formData.name || 'Not provided'}\nPhone: ${formData.phone || 'Not provided'}\nLocation: ${formData.location || 'Not provided'}\nNotes: ${formData.notes || 'None'}\n\nPlease let me know your availability and price.`
    );
    window.open(`https://wa.me/${BUSINESS.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
            Get in Touch
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 mt-1">
            Call Directly or Request Service
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Choose your preferred method: call any of our lines, chat on WhatsApp, or send a quick callback form.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Phone Lines & WhatsApp (Consolidated) */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 space-y-6">
            
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
                Direct Phone Lines:
              </span>
              <div className="space-y-2.5">
                {BUSINESS.phones.map((p, idx) => (
                  <a
                    key={idx}
                    href={p.tel}
                    className="flex items-center justify-between p-3.5 bg-white hover:bg-sky-50/50 rounded-xl border border-slate-200 hover:border-sky-400 transition group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition">
                        <Phone className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-slate-900 group-hover:text-sky-600 transition">
                        {p.number}
                      </span>
                    </div>
                    <span className="text-xs text-sky-600 font-semibold">
                      Call Now →
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Direct WhatsApp Link */}
            <div className="pt-2 border-t border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Instant Messaging:
              </span>
              <a
                href={BUSINESS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-xs transition"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Chat via WhatsApp ({BUSINESS.primaryPhone})</span>
              </a>
            </div>

            {/* Hours */}
            <div className="pt-2 border-t border-slate-200 flex items-center gap-2 text-xs font-semibold text-slate-600">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>Available 24/7 • Same-Day Dispatch</span>
            </div>

          </div>

          {/* Right Column: Clean Callback Request Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xs">
            
            <h3 className="text-lg font-bold font-heading text-slate-900 mb-1">
              Quick Callback Form
            </h3>
            <p className="text-xs text-slate-500 mb-5">
              Fill in your details and our driver or dispatcher will phone you right back.
            </p>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Request Sent!</h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Thank you, <strong className="text-slate-900">{formData.name}</strong>. We will contact you at{' '}
                  <strong className="text-slate-900">{formData.phone}</strong> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-sky-600 font-semibold hover:underline cursor-pointer pt-2"
                >
                  Submit another request
                </button>
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
                      placeholder="e.g. Samuel Osei"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-sky-500 focus:bg-white focus:outline-none transition"
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
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-sky-500 focus:bg-white focus:outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Location / Town *
                  </label>
                  <input
                    type="text"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. East Legon, Tema, Madina"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-sky-500 focus:bg-white focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Details / Landmark (Optional)
                  </label>
                  <textarea
                    name="notes"
                    rows={2}
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Describe issue (e.g. full tank, overflow) or landmark..."
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-sky-500 focus:bg-white focus:outline-none transition"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 px-4 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Callback Request</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    className="flex-1 py-3 px-4 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs rounded-xl border border-emerald-200 flex items-center justify-center gap-2 transition cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

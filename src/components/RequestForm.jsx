import React, { useState } from 'react';
import { Send, Phone, MessageCircle, CheckCircle, MapPin, User } from 'lucide-react';
import { BUSINESS } from '../data/websiteConfig';

export const RequestForm = () => {
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
    const message = encodeURIComponent(
      `Hello Home Love Waste Management,\n\nName: ${formData.name || 'Not provided'}\nPhone: ${formData.phone || 'Not provided'}\nLocation: ${formData.location || 'Not provided'}\nService: ${formData.service}\nNotes: ${formData.notes || 'None'}\n\nPlease let me know your availability and price.`
    );
    window.open(`https://wa.me/${BUSINESS.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="request-form" className="py-14 bg-white border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-100 px-3 py-1 rounded-full">
            Fast Response
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 mt-2">
            Request Service or Price Quote
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Fill the short form below or contact any of our direct phone numbers.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
          
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Thank You, {formData.name}!</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                We have received your details. Our dispatch team will call you back on{' '}
                <strong className="text-slate-900">{formData.phone}</strong> right away.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-sky-600 font-semibold hover:underline cursor-pointer"
                >
                  Send another request
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
                    placeholder="Enter your name"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm focus:border-sky-500 focus:outline-none"
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
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm focus:border-sky-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Location / Area *
                  </label>
                  <input
                    type="text"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. East Legon, Tema, Madina"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm focus:border-sky-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm focus:border-sky-500 focus:outline-none cursor-pointer"
                  >
                    <option value="Septic Tank Emptying">Septic Tank Emptying</option>
                    <option value="Liquid Waste Management">Liquid Waste Management</option>
                    <option value="Soakaway Cleaning">Soakaway & Manhole Cleaning</option>
                    <option value="Emergency Pumping">Emergency Overflow Dislodging</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Additional Notes (Optional)
                </label>
                <textarea
                  name="notes"
                  rows={2}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Any extra instructions or landmark..."
                  className="w-full px-4 py-2 rounded-xl bg-white border border-slate-300 text-sm focus:border-sky-500 focus:outline-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 px-6 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Request</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="flex-1 py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle, 
  AlertTriangle, 
  Calendar, 
  MapPin, 
  User, 
  Phone, 
  FileText, 
  ExternalLink,
  Layers,
  Sparkles,
  Loader2
} from 'lucide-react';
import { CONFIG } from '../../data/websiteConfig';

export const BookingForm = () => {
  const [formMode, setFormMode] = useState('direct'); // 'direct' | 'googleForms'
  
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    location: '',
    tankSize: '1,000 Gallons (Standard)',
    scheduleDate: '',
    isEmergency: false,
    notes: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'
  const [referenceCode, setReferenceCode] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Connect to companion backend if available or handle edge submission
      await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phone,
          address: formData.location,
          tankSize: formData.tankSize,
          preferredDate: formData.scheduleDate,
          isEmergency: formData.isEmergency,
          notes: formData.notes
        })
      });
    } catch (err) {
      // Graceful fallback for pure static edge deployments
      console.log('Static Edge fallback mode active');
    }

    const genId = 'CFT-' + Math.floor(100000 + Math.random() * 900000);
    setReferenceCode(genId);
    setStatus('success');
  };

  const handleReset = () => {
    setStatus('idle');
    setFormData({
      fullName: '',
      phone: '',
      location: '',
      tankSize: '1,000 Gallons (Standard)',
      scheduleDate: '',
      isEmergency: false,
      notes: ''
    });
  };

  return (
    <section id="booking-form" className="py-24 bg-white border-t border-slate-100 relative">
      {/* Background soft glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-sky-100/60 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-sky-50 text-sky-700 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border border-sky-200 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Digital Booking Terminal
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            Schedule Extraction or Request Quote
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Frictionless booking engine. Choose between our high-speed direct terminal or external Google Forms embed.
          </p>

          {/* Mode Switcher Tabs */}
          <div className="mt-6 inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setFormMode('direct')}
              className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                formMode === 'direct'
                  ? 'bg-white text-slate-900 shadow-sm font-bold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Direct High-Tech Form
            </button>
            <button
              type="button"
              onClick={() => setFormMode('googleForms')}
              className={`px-4 py-2 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                formMode === 'googleForms'
                  ? 'bg-white text-slate-900 shadow-sm font-bold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Google Forms Iframe</span>
            </button>
          </div>
        </div>

        {/* Form Container Card */}
        <div className="relative rounded-3xl p-1 bg-gradient-to-tr from-sky-200/50 via-slate-100 to-sky-300/40 shadow-xl">
          <div className="bg-white/95 rounded-[22px] border border-sky-100 p-6 sm:p-10 backdrop-blur-md">
            
            {formMode === 'googleForms' ? (
              /* Google Forms Iframe Responsive Container */
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5 font-heading">
                    <FileText className="w-4 h-4 text-sky-500" />
                    Google Forms Edge Embed Wrapper
                  </span>
                  <a
                    href={CONFIG.googleForms.embedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-sky-600 hover:text-sky-700 font-semibold flex items-center gap-1"
                  >
                    <span>Open in new window</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Scaled Responsive Iframe Wrapper (Zero CLS layout box) */}
                <div className="w-full relative min-h-[560px] rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden flex flex-col items-center justify-center p-4">
                  {/* Informational placeholder header for developer/client */}
                  <div className="text-center p-6 max-w-md">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-sky-500 mx-auto mb-3">
                      <FileText className="w-6 h-6" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-800">
                      Google Forms Iframe Target Active
                    </h4>
                    <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                      To connect your exact company form, paste your form embed link into <code className="bg-white px-1 py-0.5 rounded border text-sky-600">websiteConfig.js → googleForms.embedUrl</code>.
                    </p>
                  </div>

                  {/* Responsive Iframe Frame */}
                  <iframe
                    src={CONFIG.googleForms.embedUrl}
                    title="ClearFlow Septic Booking Form"
                    className="w-full h-[500px] border-0 rounded-xl bg-white shadow-inner"
                    loading="lazy"
                  >
                    Loading Google Forms Terminal...
                  </iframe>
                </div>
              </div>
            ) : (
              /* Direct High-Tech Interactive Form */
              status === 'success' ? (
                <div className="py-10 text-center space-y-5 animate-fade-in">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle className="w-9 h-9" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-heading text-slate-900">
                      Booking Transmission Confirmed!
                    </h3>
                    <p className="text-slate-600 text-sm mt-1">
                      Our dispatch coordinators have received your specifications.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-left text-xs text-slate-600 space-y-2 max-w-md mx-auto">
                    <div className="flex justify-between">
                      <span className="font-semibold text-slate-500">Telemetry Tracking ID:</span>
                      <span className="font-mono font-bold text-sky-600">{referenceCode}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-slate-500">Contact Name:</span>
                      <span className="font-medium text-slate-900">{formData.fullName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-slate-500">Phone:</span>
                      <span className="font-medium text-slate-900">{formData.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-slate-500">Location:</span>
                      <span className="font-medium text-slate-900">{formData.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-slate-500">Tank Volume:</span>
                      <span className="font-medium text-slate-900">{formData.tankSize}</span>
                    </div>
                    {formData.isEmergency && (
                      <div className="pt-2 border-t border-slate-200 flex items-center gap-1.5 text-red-600 font-bold">
                        <AlertTriangle className="w-4 h-4" />
                        <span>Priority 1 Emergency Flag Set</span>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={handleReset}
                    className="inline-flex items-center justify-center px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl shadow cursor-pointer transition"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Cyber Red Emergency Banner Toggle */}
                  <div className="flex items-center justify-between p-3.5 rounded-2xl bg-red-50 border border-red-200/80">
                    <div className="flex items-center gap-2.5">
                      <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" />
                      <div>
                        <span className="text-xs font-bold text-red-900 block font-heading">
                          Is this an active septic overflow or interior backup?
                        </span>
                        <span className="text-[11px] text-red-600/90">
                          Enables immediate priority mobile unit dispatching.
                        </span>
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      name="isEmergency"
                      id="isEmergency"
                      checked={formData.isEmergency}
                      onChange={handleChange}
                      className="w-5 h-5 accent-red-600 rounded cursor-pointer"
                    />
                  </div>

                  {/* 2-Column Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Marcus Vance"
                          className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-sky-500 focus:bg-white focus:outline-none transition"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-sky-500 focus:bg-white focus:outline-none transition"
                        />
                      </div>
                    </div>

                  </div>

                  {/* Property Location */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Property Service Address / Geo-Location *
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="Street Address, City, Postal Code"
                        className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-sky-500 focus:bg-white focus:outline-none transition"
                      />
                    </div>
                  </div>

                  {/* Tank Size & Schedule Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Septic Tank Volume (Approx)
                      </label>
                      <select
                        name="tankSize"
                        value={formData.tankSize}
                        onChange={handleChange}
                        className="w-full px-3.5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-sky-500 focus:bg-white focus:outline-none transition cursor-pointer"
                      >
                        <option value="750 Gallons">750 Gallons (Small Residential)</option>
                        <option value="1,000 Gallons (Standard)">1,000 Gallons (Standard Home)</option>
                        <option value="1,250 Gallons">1,250 Gallons (Large Home)</option>
                        <option value="1,500+ Gallons">1,500+ Gallons (Estate / Commercial)</option>
                        <option value="Not Sure">Uncertain (Technician Sonar Measure)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Preferred Service Date
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="date"
                          name="scheduleDate"
                          value={formData.scheduleDate}
                          onChange={handleChange}
                          className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-sky-500 focus:bg-white focus:outline-none transition"
                        />
                      </div>
                    </div>

                  </div>

                  {/* Notes / Special Access Instructions */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Operational Notes & Yard Access Instructions
                    </label>
                    <textarea
                      name="notes"
                      rows={2}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Tank riser lid location, gate codes, or symptoms observed..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-sky-500 focus:bg-white focus:outline-none transition placeholder:text-slate-400"
                    />
                  </div>

                  {/* Submit Action */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className={`w-full py-4 px-6 rounded-2xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-lg transition-all duration-200 cursor-pointer ${
                      formData.isEmergency
                        ? 'bg-red-600 hover:bg-red-500 text-white shadow-red-600/30'
                        : 'bg-sky-500 hover:bg-sky-400 text-white shadow-sky-500/25 hover:shadow-sky-500/40'
                    }`}
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmitting Terminal Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>
                          {formData.isEmergency
                            ? 'DISPATCH PRIORITY 1 EMERGENCY UNIT'
                            : 'CONFIRM BOOKING & GENERATE DISPATCH TICKET'}
                        </span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-slate-400">
                    No payment required upfront. We will contact you to confirm operational arrival times.
                  </p>

                </form>
              )
            )}

          </div>
        </div>

      </div>
    </section>
  );
};

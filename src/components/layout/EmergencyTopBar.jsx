import React from 'react';
import { PhoneCall, AlertCircle, Clock } from 'lucide-react';

export const EmergencyTopBar = ({ onEmergencyClick }) => {
  return (
    <div className="bg-gradient-to-r from-red-950 via-slate-900 to-red-950 border-b border-red-900/40 text-xs sm:text-sm py-2 px-4 transition-all">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          <span className="font-semibold text-red-200 flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5 text-red-400" />
            24/7 Emergency Septic Dispatch Available
          </span>
          <span className="hidden md:inline-flex items-center gap-1 text-slate-400 text-xs">
            <Clock className="w-3 h-3 text-slate-500" />
            Average Response: under 45 mins
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-slate-300 hidden sm:inline">Sewage backup or alarm triggered?</span>
          <button
            onClick={onEmergencyClick}
            className="inline-flex items-center gap-1.5 bg-red-600/90 hover:bg-red-600 text-white font-bold px-3 py-1 rounded-lg text-xs transition shadow-sm hover:shadow-red-600/40 cursor-pointer"
          >
            <PhoneCall className="w-3 h-3 animate-pulse" />
            <span>(800) 555-FLOW</span>
          </button>
        </div>
      </div>
    </div>
  );
};

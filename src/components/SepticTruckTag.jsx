import React from 'react';

export const SepticTruckTag = ({ className = 'w-16 h-10', mode = 'badge' }) => {
  if (mode === 'tag') {
    return (
      <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200/90 rounded-xl px-3 py-1.5 shadow-2xs">
        <svg
          viewBox="0 0 120 70"
          className="w-10 h-6 shrink-0"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Cab */}
          <path d="M85 30H108L114 45V60H85V30Z" fill="#F97316" stroke="#C2410C" strokeWidth="2" strokeLinejoin="round" />
          <path d="M90 34H103L108 45H90V34Z" fill="#BAE6FD" stroke="#0284C7" strokeWidth="1.5" />
          {/* Tanker */}
          <rect x="25" y="20" width="58" height="35" rx="10" fill="#E2E8F0" stroke="#475569" strokeWidth="2.5" />
          <path d="M42 20V55M58 20V55M74 20V55" stroke="#94A3B8" strokeWidth="2" />
          {/* Suction Pipe Crane */}
          <path d="M54 20V8H15V62" stroke="#334155" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="15" cy="62" r="3" fill="#0284C7" />
          {/* Wheels */}
          <circle cx="40" cy="58" r="7" fill="#1E293B" stroke="#64748B" strokeWidth="2" />
          <circle cx="40" cy="58" r="3" fill="#CBD5E1" />
          <circle cx="68" cy="58" r="7" fill="#1E293B" stroke="#64748B" strokeWidth="2" />
          <circle cx="68" cy="58" r="3" fill="#CBD5E1" />
          <circle cx="98" cy="58" r="7" fill="#1E293B" stroke="#64748B" strokeWidth="2" />
          <circle cx="98" cy="58" r="3" fill="#CBD5E1" />
        </svg>
        <div className="flex flex-col text-left">
          <span className="text-[11px] font-bold text-slate-800 leading-tight">Cesspool Emptier</span>
          <span className="text-[10px] text-sky-700 font-semibold leading-tight">Dislodging Unit</span>
        </div>
      </div>
    );
  }

  // Large graphic showcase mode
  return (
    <div className={`relative flex items-center justify-center p-3 rounded-2xl bg-gradient-to-br from-sky-50 to-slate-100 border border-sky-200/80 shadow-xs ${className}`}>
      <svg
        viewBox="0 0 320 180"
        className="w-full h-auto max-h-40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Ground Line */}
        <line x1="10" y1="165" x2="310" y2="165" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round" />
        
        {/* Manhole Opening */}
        <ellipse cx="50" cy="165" rx="18" ry="4" fill="#64748B" />
        <ellipse cx="68" cy="167" rx="14" ry="3" fill="#94A3B8" stroke="#475569" strokeWidth="1.5" />

        {/* Technician 1 (Operator holding pipe) */}
        <g id="operator-1">
          {/* Body */}
          <rect x="22" y="112" width="14" height="28" rx="2" fill="#0284C7" />
          {/* Legs */}
          <line x1="25" y1="140" x2="25" y2="162" stroke="#0369A1" strokeWidth="4" strokeLinecap="round" />
          <line x1="33" y1="140" x2="33" y2="162" stroke="#0369A1" strokeWidth="4" strokeLinecap="round" />
          <rect x="22" y="160" width="7" height="4" rx="1" fill="#78350F" />
          <rect x="30" y="160" width="7" height="4" rx="1" fill="#78350F" />
          {/* Head & Safety Helmet */}
          <circle cx="29" cy="102" r="6" fill="#FBBF24" />
          <path d="M22 101C22 97 25 94 29 94C33 94 36 97 36 101H22Z" fill="#F97316" stroke="#C2410C" strokeWidth="1" />
        </g>

        {/* Heavy Suction Hose Crane from Truck to Manhole */}
        <path
          d="M175 60V32H50V164"
          stroke="#334155"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M50 120V164"
          stroke="#0284C7"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Tanker Body */}
        <rect x="95" y="55" width="150" height="85" rx="24" fill="#F1F5F9" stroke="#334155" strokeWidth="4" />
        <path d="M135 55V140M170 55V140M205 55V140" stroke="#94A3B8" strokeWidth="3" />
        <rect x="110" y="105" width="120" height="25" rx="3" fill="#E2E8F0" stroke="#475569" strokeWidth="2" />
        <circle cx="120" cy="117" r="3" fill="#64748B" />
        <circle cx="220" cy="117" r="3" fill="#64748B" />

        {/* Orange Truck Cab */}
        <path
          d="M245 80H295L308 115V150H245V80Z"
          fill="#F97316"
          stroke="#C2410C"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        {/* Cab Window */}
        <path
          d="M255 88H288L296 112H255V88Z"
          fill="#BAE6FD"
          stroke="#0284C7"
          strokeWidth="2"
        />
        {/* Headlight & Bumper */}
        <rect x="303" y="132" width="6" height="8" rx="2" fill="#FDE047" stroke="#CA8A04" strokeWidth="1" />
        <rect x="298" y="142" width="12" height="7" rx="1" fill="#334155" />

        {/* Heavy Truck Wheels */}
        <g id="wheels">
          {/* Rear Wheels Dual */}
          <circle cx="130" cy="148" r="15" fill="#0F172A" stroke="#475569" strokeWidth="3" />
          <circle cx="130" cy="148" r="6" fill="#94A3B8" />
          <circle cx="165" cy="148" r="15" fill="#0F172A" stroke="#475569" strokeWidth="3" />
          <circle cx="165" cy="148" r="6" fill="#94A3B8" />
          {/* Front Wheel */}
          <circle cx="280" cy="148" r="15" fill="#0F172A" stroke="#475569" strokeWidth="3" />
          <circle cx="280" cy="148" r="6" fill="#94A3B8" />
        </g>
      </svg>
      <div className="absolute bottom-2 right-3 bg-white/90 backdrop-blur-xs border border-slate-200 px-2 py-0.5 rounded text-[10px] font-bold text-slate-700">
        Dislodging Operations Illustration
      </div>
    </div>
  );
};

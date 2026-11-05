import React from 'react';

export const Card = ({
  children,
  className = '',
  hoverEffect = true,
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className={`bg-slate-800/60 backdrop-blur-md border border-slate-700/60 rounded-2xl p-6 transition-all duration-300 ${
        hoverEffect ? 'hover:border-cyan-500/50 hover:bg-slate-800/90 hover:shadow-xl hover:shadow-cyan-950/20 hover:-translate-y-1' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

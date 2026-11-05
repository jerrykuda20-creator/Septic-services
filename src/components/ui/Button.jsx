import React from 'react';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  onClick,
  type = 'button',
  icon: Icon,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-60 disabled:cursor-not-allowed select-none';

  const variants = {
    primary: 'bg-cyan-500 hover:bg-cyan-400 active:bg-cyan-600 text-slate-950 font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 focus:ring-cyan-400',
    secondary: 'bg-slate-800 hover:bg-slate-700 active:bg-slate-850 text-slate-100 border border-slate-700/80 hover:border-slate-600 focus:ring-slate-500',
    emergency: 'bg-red-600 hover:bg-red-500 active:bg-red-700 text-white font-semibold shadow-lg shadow-red-600/30 hover:shadow-red-600/50 focus:ring-red-400 animate-pulse hover:animate-none',
    outline: 'bg-transparent hover:bg-slate-800 text-cyan-400 border border-cyan-500/40 hover:border-cyan-400 focus:ring-cyan-400',
    accent: 'bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-slate-950 font-semibold shadow-lg shadow-emerald-500/25 focus:ring-emerald-400'
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
    xl: 'text-lg px-8 py-4 gap-3'
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {Icon && <Icon className={size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} />}
      {children}
    </button>
  );
};

import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'accent' | 'muted' | 'outline' | 'success';
  className?: string;
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'accent',
  className = '',
  size = 'sm',
}) => {
  const sizeStyles = {
    sm: 'px-2.5 py-0.5 text-[10px] tracking-wider',
    md: 'px-3 py-1 text-xs tracking-wide',
  };

  const variantStyles = {
    accent:
      'bg-theme-accent/10 text-theme-accent border border-theme-accent/30 font-mono font-medium',
    muted:
      'bg-white/5 text-theme-text-muted border border-white/10 font-mono',
    outline:
      'bg-transparent text-theme-text-secondary border border-theme-border font-mono',
    success:
      'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full uppercase transition-colors duration-200 ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

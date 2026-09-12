import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  glow = false,
  hoverEffect = true,
}) => {
  return (
    <div
      className={`glass-card rounded-xl p-6 relative overflow-hidden transition-all duration-300 ${
        hoverEffect ? 'hover:-translate-y-1 hover:border-theme-border-hover' : ''
      } ${glow ? 'shadow-glow-sm' : ''} ${className}`}
    >
      {/* Subtle top border highlight */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-theme-accent/25 to-transparent pointer-events-none" />
      {children}
    </div>
  );
};

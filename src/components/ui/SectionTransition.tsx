import React from 'react';

interface SectionTransitionProps {
  variant?: 'subtle' | 'glow' | 'technical';
  className?: string;
}

export const SectionTransition: React.FC<SectionTransitionProps> = ({
  variant = 'technical',
  className = '',
}) => {
  return (
    <div
      className={`relative w-full flex items-center justify-center py-6 sm:py-8 overflow-hidden pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* 1. Ambient radial color bloom behind the transition */}
      <div className="absolute w-3/4 max-w-3xl h-10 bg-gradient-to-r from-transparent via-theme-accent/10 to-transparent blur-2xl" />

      {/* 2. Soft horizontal beam that tapers cleanly to zero opacity on both edges */}
      <div className="w-full max-w-6xl px-6 sm:px-12 flex items-center justify-center relative">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-theme-accent/25 to-transparent" />
        
        {/* Core bright focal beam in the center */}
        <div className="absolute w-48 sm:w-64 h-[1px] bg-gradient-to-r from-transparent via-theme-accent-light/60 to-transparent blur-[0.5px]" />
      </div>

      {/* 3. Subtle micro-technical notch in the center */}
      {variant === 'technical' && (
        <div className="absolute flex items-center gap-1 px-3 py-0.5 rounded-full bg-theme-bg/90 border border-theme-accent/20 backdrop-blur-md">
          <span className="w-1 h-1 rounded-full bg-theme-accent/50" />
          <span className="w-1.5 h-1.5 rounded-full bg-theme-accent shadow-[0_0_8px_var(--accent-glow-strong)]" />
          <span className="w-1 h-1 rounded-full bg-theme-accent/50" />
        </div>
      )}
    </div>
  );
};

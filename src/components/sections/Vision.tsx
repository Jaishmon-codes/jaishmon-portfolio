import React from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';

export const Vision: React.FC = () => {
  const pillars = [
    { num: '01', title: 'BUILD FROM ZERO.' },
    { num: '02', title: 'BUILD BETTER.' },
    { num: '03', title: 'BUILD AT SCALE.' },
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-theme-accent" />
            <span className="font-mono text-xs uppercase tracking-widest text-theme-accent">
              05 // LONG-TERM MISSION
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase">
            THIS ISN'T THE ENDGAME.
          </h2>
        </div>

        {/* 3 Bold Minimal Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {pillars.map((p) => (
            <div
              key={p.num}
              className="glass-card p-6 sm:p-8 rounded-xl border border-theme-border/80 flex items-center justify-between group hover:border-theme-accent/60 transition-all duration-300"
            >
              <div>
                <span className="font-mono text-xs font-bold text-theme-accent block mb-2">
                  {p.num} // DIRECTION
                </span>
                <span className="font-display font-extrabold text-xl sm:text-2xl text-white tracking-wide group-hover:text-theme-accent transition-colors">
                  {p.title}
                </span>
              </div>
              <Sparkles className="w-4 h-4 text-theme-accent opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Concise Mission Statement (Zero Manifesto Walls) */}
        <div className="glass-panel p-6 sm:p-8 rounded-xl border border-theme-border/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4 max-w-3xl">
            <div className="p-3 rounded-lg bg-theme-accent/15 border border-theme-accent/40 text-theme-accent shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <p className="text-sm sm:text-base text-theme-text-secondary leading-relaxed font-normal">
              Exploring how decentralized blockchain protocols, secure software design, and high-performance backend systems can contribute to stronger, more resilient technology infrastructure.
            </p>
          </div>

          <span className="font-mono text-xs text-theme-accent font-semibold tracking-wider whitespace-nowrap self-start sm:self-auto">
            PURPOSE-DRIVEN // SCALE
          </span>
        </div>

      </div>
    </section>
  );
};

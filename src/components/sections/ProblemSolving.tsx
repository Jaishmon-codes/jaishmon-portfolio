import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { Binary, ShieldAlert, Cpu, Check } from 'lucide-react';

export const ProblemSolving: React.FC = () => {
  const getProblemIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Binary className="w-5 h-5 text-theme-accent" />;
      case 1:
        return <ShieldAlert className="w-5 h-5 text-theme-accent" />;
      case 2:
        return <Cpu className="w-5 h-5 text-theme-accent" />;
      default:
        return <Binary className="w-5 h-5 text-theme-accent" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-theme-accent" />
              <span className="font-mono text-xs uppercase tracking-widest text-theme-accent">
                06 // PROBLEM SOLVING ETHOS
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-none">
              I LIKE HARD PROBLEMS.
            </h2>
          </div>

          <div className="font-mono text-xs text-theme-text-muted">
            DSA • CTFs • TECHNICAL EXPERIMENTS
          </div>
        </div>

        {/* 3 Compact Visual Focus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {portfolioData.problemSolving.map((area, idx) => (
            <div
              key={area.title}
              className="glass-card p-6 rounded-xl border border-theme-border/80 hover:border-theme-accent/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-theme-accent/15 text-theme-accent">
                    {getProblemIcon(idx)}
                  </div>
                  <span className="font-mono text-xs text-theme-accent font-bold">
                    0{idx + 1}
                  </span>
                </div>

                <span className="font-mono text-[10px] uppercase text-theme-text-muted tracking-wider block mb-1">
                  {area.tagline}
                </span>
                <h3 className="font-display font-bold text-lg text-white mb-4">
                  {area.title}
                </h3>
              </div>

              {/* Items List */}
              <div className="pt-4 border-t border-theme-border/40 space-y-1.5">
                {area.items.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs font-mono text-theme-text-secondary">
                    <Check className="w-3.5 h-3.5 text-theme-accent shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

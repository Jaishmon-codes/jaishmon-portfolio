import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { Code2, Server, Blocks, Shield, Cpu } from 'lucide-react';

export const WhatIBuild: React.FC = () => {
  const getAreaIcon = (num: string) => {
    switch (num) {
      case '01':
        return <Code2 className="w-5 h-5" />;
      case '02':
        return <Server className="w-5 h-5" />;
      case '03':
        return <Blocks className="w-5 h-5" />;
      case '04':
        return <Shield className="w-5 h-5" />;
      case '05':
        return <Cpu className="w-5 h-5" />;
      default:
        return <Code2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="what-i-build" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-theme-accent" />
              <span className="font-mono text-xs uppercase tracking-widest text-theme-accent">
                03 // ARCHITECTURAL FOCUS
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-none">
              WHAT I'M BUILDING TOWARD
            </h2>
          </div>

          <div className="font-mono text-xs text-theme-text-muted">
            5 DOMAINS OF EXPLORATION
          </div>
        </div>

        {/* 5 Distinct Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioData.buildingAreas.map((area) => (
            <div
              key={area.number}
              className="glass-card p-6 rounded-xl border border-theme-border/80 hover:border-theme-accent/60 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-theme-surface border border-theme-border text-theme-accent">
                    {area.number}
                  </span>
                  <div className="p-2 rounded-lg bg-theme-accent/10 border border-theme-accent/30 text-theme-accent group-hover:scale-110 transition-transform">
                    {getAreaIcon(area.number)}
                  </div>
                </div>

                <span className="font-mono text-[10px] uppercase text-theme-text-muted tracking-widest block mb-1">
                  {area.subtitle}
                </span>
                <h3 className="font-display font-bold text-xl text-white group-hover:text-theme-accent transition-colors mb-4">
                  {area.title}
                </h3>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-theme-border/40">
                <div className="flex flex-wrap gap-1.5">
                  {area.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-theme-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* 6th Callout: Unified Ethos */}
          <div className="glass-card p-6 rounded-xl border border-theme-accent/40 bg-theme-accent/5 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[10px] uppercase text-theme-accent font-bold tracking-widest block mb-1">
                SYSTEM SUMMARY
              </span>
              <h3 className="font-display font-bold text-xl text-white mb-2">
                Unified by First Principles
              </h3>
              <p className="font-mono text-xs text-theme-text-secondary leading-relaxed">
                Understanding how bytes flow, where latency compounds, and how security fails across physical and digital layers.
              </p>
            </div>
            
            <div className="pt-4 border-t border-theme-border/40 font-mono text-xs text-theme-accent font-semibold flex items-center justify-between">
              <span>ZERO ASSUMPTIONS</span>
              <span>• PROTOCOL FIRST</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

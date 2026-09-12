import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolio';
import { ArrowRight, ChevronRight, Binary, Activity, Layers, AppWindow, CheckCircle2 } from 'lucide-react';

export const EngineeringMindset: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const stages = portfolioData.engineeringMindset;

  const getStageIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Activity className="w-4 h-4" />;
      case 1:
        return <Binary className="w-4 h-4" />;
      case 2:
        return <Layers className="w-4 h-4" />;
      case 3:
        return <AppWindow className="w-4 h-4" />;
      case 4:
        return <CheckCircle2 className="w-4 h-4" />;
      default:
        return <Binary className="w-4 h-4" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-theme-accent" />
            <span className="font-mono text-xs uppercase tracking-widest text-theme-accent">
              04 // ENGINEERING RIGOR
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight uppercase mb-4">
            FROM ALGORITHMS TO APPLICATIONS.
          </h2>
          <p className="text-base sm:text-lg text-theme-text-secondary leading-relaxed">
            Data structures and algorithms aren't isolated puzzles studied for job interviews. I value understanding how computational theory, memory bounds, and algorithmic complexity translate directly into high-throughput production software.
          </p>
        </div>

        {/* The Pipeline Visualization */}
        <div className="glass-card p-6 sm:p-10 rounded-2xl border border-theme-border relative">
          
          <div className="flex items-center justify-between pb-6 border-b border-theme-border/50 mb-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-theme-accent animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-white font-semibold">
                EXECUTION PIPELINE
              </span>
            </div>
            <span className="font-mono text-[11px] text-theme-text-muted hidden sm:inline">
              CLICK A NODE TO INSPECT CONVERSION
            </span>
          </div>

          {/* Stepper Pipeline Flow (Horizontal on desktop, vertical on mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative mb-8">
            {stages.map((stage, idx) => {
              const isSelected = activeStage === idx;
              return (
                <div key={stage.label} className="relative group">
                  <button
                    onClick={() => setActiveStage(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 relative ${
                      isSelected
                        ? 'bg-theme-accent/20 border-theme-accent shadow-glow-sm scale-[1.02]'
                        : 'bg-theme-surface/70 border-theme-border/70 hover:border-theme-border hover:bg-theme-elevated'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className={`p-1.5 rounded-md ${isSelected ? 'bg-theme-accent text-white' : 'bg-white/5 text-theme-accent'}`}>
                        {getStageIcon(idx)}
                      </div>
                      <span className="font-mono text-[10px] text-theme-text-muted">
                        0{idx + 1}
                      </span>
                    </div>

                    <div className={`font-display font-bold text-sm tracking-wider uppercase ${isSelected ? 'text-white' : 'text-theme-text-secondary'}`}>
                      {stage.label}
                    </div>
                    <div className="font-mono text-[10px] text-theme-text-muted truncate mt-0.5">
                      {stage.sub}
                    </div>

                    {/* Animated pipeline pulse indicator */}
                    {isSelected && (
                      <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-theme-accent shadow-[0_0_8px_var(--accent-glow-strong)]" />
                    )}
                  </button>

                  {/* Connecting Arrow for Desktop */}
                  {idx < stages.length - 1 && (
                    <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-theme-border group-hover:text-theme-accent transition-colors">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Active Stage Detail Panel */}
          <div className="p-6 rounded-xl bg-theme-surface/80 border border-theme-border/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-xs text-theme-accent font-semibold">
                  STAGE 0{activeStage + 1} // {stages[activeStage].label}
                </span>
                <span className="text-theme-border">•</span>
                <span className="font-mono text-xs text-theme-text-muted">
                  {stages[activeStage].sub}
                </span>
              </div>
              <p className="text-sm sm:text-base text-theme-text-secondary font-normal">
                {stages[activeStage].description}
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-theme-accent shrink-0">
              <span>{stages[activeStage].label}</span>
              <ArrowRight className="w-3.5 h-3.5" />
              <span>{activeStage === stages.length - 1 ? 'Continuous Delivery' : stages[activeStage + 1].label}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

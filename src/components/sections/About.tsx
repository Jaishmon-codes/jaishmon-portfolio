import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolio';
import { Terminal, Shield, Blocks, Cpu, Code2, Binary } from 'lucide-react';

export const About: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const steps = portfolioData.philosophySteps;

  const coreDomains = [
    { label: 'Computer Science', icon: <Binary className="w-4 h-4" />, detail: 'Algorithms & Theoretical Rigor' },
    { label: 'Blockchain', icon: <Blocks className="w-4 h-4" />, detail: 'Distributed Consensus & Web3' },
    { label: 'Security', icon: <Shield className="w-4 h-4" />, detail: 'CTF Defense & Resilience' },
    { label: 'Systems', icon: <Cpu className="w-4 h-4" />, detail: 'Backend Architecture & Persistence' },
    { label: 'Software', icon: <Code2 className="w-4 h-4" />, detail: 'Full-Stack Engineering' },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Minimal & Punchy */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-theme-accent" />
            <span className="font-mono text-xs uppercase tracking-widest text-theme-accent">
              01 // IDENTITY & MINDSET
            </span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-none uppercase mb-3">
            CURIOUS BY DEFAULT.
          </h2>
          <p className="text-lg sm:text-xl font-mono text-theme-accent-light">
            "Always exploring how things work — and what can be built with them."
          </p>
        </div>

        {/* Visual Domain Tokens: 5 Key Pillars */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-14">
          {coreDomains.map((dom) => (
            <div
              key={dom.label}
              className="glass-card p-4 rounded-xl border border-theme-border/70 hover:border-theme-accent/60 hover:shadow-glow-sm transition-all duration-300 group cursor-default"
            >
              <div className="p-2 w-fit rounded-lg bg-white/5 text-theme-accent group-hover:scale-110 transition-transform mb-3">
                {dom.icon}
              </div>
              <div className="font-display font-bold text-sm text-white tracking-wide group-hover:text-theme-accent transition-colors">
                {dom.label}
              </div>
              <div className="font-mono text-[10px] text-theme-text-muted mt-1 leading-snug">
                {dom.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Visual 5-Stage Iterative Stepper (No Paragraph Walls) */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-theme-border/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-theme-border/40 mb-6">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-theme-accent" />
              <span className="font-mono text-xs font-semibold text-white tracking-wider uppercase">
                THE ITERATIVE BLUEPRINT
              </span>
            </div>
            <span className="font-mono text-[11px] text-theme-text-muted">
              LEARN → APPLY → BUILD → BREAK → BUILD BETTER
            </span>
          </div>

          {/* Stepper Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mb-6">
            {steps.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`p-3.5 rounded-xl border text-left transition-all duration-300 relative ${
                    isSelected
                      ? 'bg-theme-accent/20 border-theme-accent shadow-glow-sm scale-[1.02]'
                      : 'bg-theme-surface/50 border-theme-border/60 hover:border-theme-border hover:bg-theme-surface'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-[10px] text-theme-text-muted">
                      {step.number}
                    </span>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-theme-accent" />
                    )}
                  </div>
                  <div className={`font-display font-bold text-sm tracking-wider uppercase ${
                    isSelected ? 'text-white' : 'text-theme-text-secondary'
                  }`}>
                    {step.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Concise Detail */}
          <div className="p-4 rounded-xl bg-theme-surface/80 border border-theme-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-theme-accent px-2 py-0.5 rounded bg-theme-accent/15 border border-theme-accent/30">
                STAGE {steps[activeStep].number}
              </span>
              <span className="font-mono text-xs text-white font-medium">
                {steps[activeStep].tagline}
              </span>
            </div>
            <span className="font-mono text-xs text-theme-text-muted">
              {steps[activeStep].description}
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

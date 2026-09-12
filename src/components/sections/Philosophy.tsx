import React, { useState } from 'react';
import { Layers, ArrowRight, Merge, RefreshCw, Cpu, Database, Network, Shield, Workflow } from 'lucide-react';

export const Philosophy: React.FC = () => {
  const [isMerged, setIsMerged] = useState(true);

  const rawHeadaches = [
    { label: 'Fragmented Data', icon: <Database className="w-4 h-4" /> },
    { label: 'Security Loopholes', icon: <Shield className="w-4 h-4" /> },
    { label: 'Manual Paperwork', icon: <Workflow className="w-4 h-4" /> },
    { label: 'Unstable APIs', icon: <Network className="w-4 h-4" /> },
    { label: 'Hardware Latency', icon: <Cpu className="w-4 h-4" /> },
  ];

  return (
    <section id="philosophy" className="py-20 sm:py-28 relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-theme-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-theme-accent" />
            <span className="font-mono text-xs uppercase tracking-widest text-theme-accent">
              02 // PHILOSOPHY & ARCHITECTURE
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight uppercase mb-6">
            I LIKE TURNING REAL-WORLD HEADACHES INTO SOFTWARE.
          </h2>
          <p className="text-lg sm:text-xl text-theme-text-secondary leading-relaxed font-normal">
            "I enjoy finding problems that are messy in the real world, bringing the pieces together, and building systems that make them simpler."
          </p>
        </div>

        {/* Visual Component: Disconnected Nodes Merging Into One Central System */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-6 sm:p-10 rounded-2xl border border-theme-border relative">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-theme-border/50 mb-8">
              <div>
                <span className="font-mono text-[10px] text-theme-text-muted tracking-widest uppercase block">
                  SYSTEM SYNTHESIS
                </span>
                <h3 className="font-display font-bold text-lg text-white">
                  "I like bringing everything into one place."
                </h3>
              </div>

              {/* Interactive toggle to simulate fragmentation vs unified system */}
              <button
                onClick={() => setIsMerged(!isMerged)}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-theme-border bg-theme-surface hover:bg-theme-elevated text-xs font-mono text-theme-text-secondary hover:text-white transition-all duration-200 self-start sm:self-auto"
              >
                <RefreshCw className="w-3.5 h-3.5 text-theme-accent" />
                <span>{isMerged ? 'View Fragmented State' : 'Synthesize into Unified System'}</span>
              </button>
            </div>

            {/* Dispersed Nodes Grid */}
            <div
              className={`grid grid-cols-2 sm:grid-cols-5 gap-3 w-full transition-all duration-500 ${
                isMerged ? 'opacity-85 scale-[0.98]' : 'opacity-100 scale-100'
              }`}
            >
              {rawHeadaches.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 rounded-xl border flex flex-col items-center text-center gap-2 transition-all duration-300 ${
                    isMerged
                      ? 'bg-theme-surface/70 border-theme-border text-theme-text-muted'
                      : 'bg-theme-card border-rose-500/40 text-rose-300 shadow-sm'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${isMerged ? 'bg-white/5 text-theme-accent' : 'bg-rose-500/15 text-rose-400'}`}>
                    {item.icon}
                  </div>
                  <span className="font-mono text-[11px] font-medium leading-tight">
                    {item.label}
                  </span>
                  <span className="text-[9px] font-mono text-theme-text-muted">
                    {isMerged ? 'Channelled' : 'Unsynchronized'}
                  </span>
                </div>
              ))}
            </div>

            {/* Dedicated Connecting Flow Indicator (In-flow, never overlapping!) */}
            <div className="py-6 flex flex-col items-center justify-center">
              <div className="h-6 w-[1px] bg-gradient-to-b from-transparent via-theme-border to-theme-accent/60" />
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-theme-surface border border-theme-accent/40 shadow-glow-sm my-1">
                <Merge className="w-3.5 h-3.5 text-theme-accent" />
                <span className="font-mono text-[10px] text-white tracking-widest uppercase font-semibold">
                  {isMerged ? 'CONVERGING INTO UNIFIED ENGINE' : 'FRAGMENTS UNRESOLVED'}
                </span>
              </div>
              <div className="h-6 w-[1px] bg-gradient-to-b from-theme-accent/60 via-theme-border to-transparent" />
            </div>

            {/* Central Unified Engine Representation */}
            <div
              className={`p-5 sm:p-6 rounded-xl border transition-all duration-500 ${
                isMerged
                  ? 'bg-theme-accent/10 border-theme-accent/50 shadow-glow-sm'
                  : 'bg-theme-surface/40 border-theme-border/40 opacity-50'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-lg bg-theme-accent/20 border border-theme-accent flex items-center justify-center text-theme-accent shrink-0">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-base sm:text-lg text-white">
                      The Unified System Architecture
                    </div>
                    <div className="font-mono text-xs text-theme-text-muted mt-0.5">
                      Single pane of execution: deterministic state, resilient security & clean interfaces
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 font-mono text-xs text-theme-accent font-medium self-start sm:self-auto shrink-0">
                  <span>Structured & Solved</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

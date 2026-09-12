import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolio';
import { Radar } from 'lucide-react';
import type { ConstellationNode } from '../../types/portfolio';

export const CurrentlyExploring: React.FC = () => {
  const { nodes, connections } = portfolioData.constellation;
  const [activeNode, setActiveNode] = useState<ConstellationNode | null>(nodes[0]);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const getNodeById = (id: string) => nodes.find((n) => n.id === id);

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-theme-accent" />
              <span className="font-mono text-xs uppercase tracking-widest text-theme-accent">
                10 // ACTIVE FRONTIERS
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight uppercase mb-4">
              CURRENTLY EXPLORING
            </h2>
            <p className="text-base text-theme-text-secondary leading-relaxed">
              An interactive constellation of adjacent domains, protocols, and architectural concepts actively under research and experimental testing.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-theme-surface border border-theme-border font-mono text-xs text-theme-text-muted">
            <Radar className="w-3.5 h-3.5 text-theme-accent animate-pulse" />
            <span>INTERACTIVE RADAR</span>
          </div>
        </div>

        {/* Constellation Radar Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Constellation Canvas View (Lg: 8 cols) */}
          <div className="lg:col-span-8">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl bg-theme-surface/70 border border-theme-border p-4 sm:p-8 backdrop-blur-xl overflow-hidden shadow-glow-card">
              
              {/* Radar circular sweep grid */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <div className="w-[85%] aspect-square rounded-full border border-theme-border" />
                <div className="w-[60%] aspect-square rounded-full border border-theme-border absolute" />
                <div className="w-[35%] aspect-square rounded-full border border-theme-border absolute" />
                <div className="w-full h-[1px] bg-theme-border absolute" />
                <div className="h-full w-[1px] bg-theme-border absolute" />
              </div>

              {/* Rotating radar line */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
                <div className="w-full h-full animate-radar-sweep relative">
                  <div className="absolute top-1/2 left-1/2 w-1/2 h-[2px] origin-left bg-gradient-to-r from-theme-accent to-transparent" />
                </div>
              </div>

              {/* SVG vector links between nodes */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                {connections.map(([fromId, toId], idx) => {
                  const fromNode = getNodeById(fromId);
                  const toNode = getNodeById(toId);
                  if (!fromNode || !toNode) return null;

                  const isHighlighted =
                    hoveredNode === fromId ||
                    hoveredNode === toId ||
                    activeNode?.id === fromId ||
                    activeNode?.id === toId;

                  return (
                    <line
                      key={`${fromId}-${toId}-${idx}`}
                      x1={`${fromNode.x}%`}
                      y1={`${fromNode.y}%`}
                      x2={`${toNode.x}%`}
                      y2={`${toNode.y}%`}
                      stroke={
                        isHighlighted
                          ? 'var(--accent-primary)'
                          : 'var(--accent-border)'
                      }
                      strokeWidth={isHighlighted ? '1.5' : '1'}
                      strokeOpacity={isHighlighted ? '0.9' : '0.4'}
                      strokeDasharray={isHighlighted ? 'none' : '3 3'}
                      className="transition-all duration-300"
                    />
                  );
                })}
              </svg>

              {/* Constellation Nodes */}
              {nodes.map((node) => {
                const isActive = activeNode?.id === node.id;
                const isHovered = hoveredNode === node.id;

                return (
                  <button
                    key={node.id}
                    onClick={() => setActiveNode(node)}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer transition-all duration-300 ${
                      isActive ? 'scale-110' : 'hover:scale-105'
                    }`}
                  >
                    {/* Glowing outer ring */}
                    <div
                      className={`relative flex items-center justify-center rounded-full transition-all duration-300 ${
                        isActive
                          ? 'w-10 h-10 bg-theme-accent/20 border-2 border-theme-accent shadow-glow'
                          : isHovered
                          ? 'w-8 h-8 bg-theme-surface border border-theme-accent/80 shadow-glow-sm'
                          : 'w-7 h-7 bg-theme-card border border-theme-border'
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          isActive
                            ? 'bg-white shadow-[0_0_8px_#fff]'
                            : isHovered
                            ? 'bg-theme-accent'
                            : 'bg-theme-accent-light opacity-60'
                        }`}
                      />
                    </div>

                    {/* Node label badge */}
                    <div
                      className={`mt-1.5 px-2 py-0.5 rounded-md whitespace-nowrap font-mono text-[10px] tracking-wide transition-all duration-300 ${
                        isActive
                          ? 'bg-theme-accent text-white font-bold shadow-glow-sm'
                          : isHovered
                          ? 'bg-theme-surface text-white border border-theme-accent/50'
                          : 'bg-theme-card/90 text-theme-text-muted border border-theme-border/60'
                      }`}
                    >
                      {node.label}
                    </div>
                  </button>
                );
              })}

            </div>
          </div>

          {/* Active Node Detail Card (Lg: 4 cols) */}
          <div className="lg:col-span-4">
            {activeNode ? (
              <div className="glass-card p-6 sm:p-8 rounded-2xl border border-theme-border/90 relative animate-in fade-in duration-200">
                <div className="flex items-center justify-between pb-4 border-b border-theme-border/50 mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-theme-accent font-semibold">
                    {activeNode.category} DOMAIN
                  </span>
                  <div className="w-2 h-2 rounded-full bg-theme-accent animate-ping" />
                </div>

                <h3 className="font-display font-bold text-2xl text-white mb-2">
                  {activeNode.label}
                </h3>

                <p className="text-sm text-theme-text-secondary leading-relaxed font-normal mb-6">
                  {activeNode.description}
                </p>

                <div className="pt-4 border-t border-theme-border/40 flex items-center justify-between text-xs font-mono text-theme-text-muted">
                  <span>SYSTEM STATUS</span>
                  <span className="text-emerald-400 font-semibold">ACTIVE EXPLORATION</span>
                </div>
              </div>
            ) : (
              <div className="glass-card p-6 text-center text-theme-text-muted font-mono text-xs">
                Select a node to inspect exploration telemetry.
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

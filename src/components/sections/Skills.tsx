import React, { useState } from 'react';
import { Blocks, Shield, Cpu, Code2, Database, Cloud, Binary, Sparkles } from 'lucide-react';

interface SkillNetworkNode {
  id: string;
  label: string;
  category: string;
  icon: React.ReactNode;
  tools: string[];
  description: string;
  angle: number; // Angle in degrees for radial placement
}

export const Skills: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('blockchain');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const nodes: SkillNetworkNode[] = [
    {
      id: 'software',
      label: 'SOFTWARE',
      category: 'Full-Stack & Web',
      icon: <Code2 className="w-4 h-4" />,
      tools: ['React', 'TypeScript', 'JavaScript', 'HTML5/CSS3', 'Tailwind CSS', 'REST APIs'],
      description: 'End-to-end web architectures, reactive client states, and component modularity.',
      angle: 0,
    },
    {
      id: 'blockchain',
      label: 'BLOCKCHAIN',
      category: 'Decentralized State',
      icon: <Blocks className="w-4 h-4" />,
      tools: ['Smart Contracts', 'Consensus Protocols', 'Web3 Runtimes', 'Distributed Ledgers'],
      description: 'Trustless consensus mechanics, cryptographic verifications, and state machines.',
      angle: 51,
    },
    {
      id: 'cybersecurity',
      label: 'CYBERSECURITY',
      category: 'Defensive Systems',
      icon: <Shield className="w-4 h-4" />,
      tools: ['CTF Challenges', 'Web Exploits', 'Threat Surface Audit', 'Defensive Hardening'],
      description: 'Adversarial analysis, vulnerability inspection, and attack vector mitigation.',
      angle: 103,
    },
    {
      id: 'dsa',
      label: 'DSA',
      category: 'Computational Rigor',
      icon: <Binary className="w-4 h-4" />,
      tools: ['Algorithms', 'Data Structures', 'Time/Space Bounds', 'Problem Solving'],
      description: 'Asymptotic performance bounds, algorithmic optimizations, and deterministic proofs.',
      angle: 154,
    },
    {
      id: 'cloud',
      label: 'CLOUD',
      category: 'Infrastructure',
      icon: <Cloud className="w-4 h-4" />,
      tools: ['AWS Core Services', 'Linux Runtimes', 'Docker Basics', 'Server Deployments'],
      description: 'Cloud service orchestration, scalable hosting, and automated environments.',
      angle: 206,
    },
    {
      id: 'databases',
      label: 'DATABASES',
      category: 'Data Persistence',
      icon: <Database className="w-4 h-4" />,
      tools: ['SQL', 'Relational Schemas', 'Normalization', 'ACID Transactions', 'Indexing'],
      description: 'Relational data models, query optimization, and structured storage schemas.',
      angle: 257,
    },
    {
      id: 'embedded',
      label: 'EMBEDDED',
      category: 'Hardware & IoT',
      icon: <Cpu className="w-4 h-4" />,
      tools: ['Micro-controllers', 'Sensor Interfacing', 'Hardware Automation', 'C/C++ Basics'],
      description: 'Interfacing computation with physical hardware controllers and sensor buses.',
      angle: 308,
    },
  ];

  const activeNode = nodes.find((n) => n.id === (hoveredId || activeId)) || nodes[0];

  return (
    <section id="skills" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Minimal & Asymmetric */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-theme-accent" />
              <span className="font-mono text-xs uppercase tracking-widest text-theme-accent">
                02 // INTERACTIVE CAPABILITY NETWORK
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-none">
              SKILLS & SYSTEMS
            </h2>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-theme-text-muted">
            <Sparkles className="w-3.5 h-3.5 text-theme-accent" />
            <span>SELECT A NODE TO INSPECT TOOLS</span>
          </div>
        </div>

        {/* Network & Inspector Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT: Central Web3 Constellation Network (Lg: 8 cols) */}
          <div className="lg:col-span-8 flex items-center justify-center">
            <div className="relative w-full max-w-[540px] aspect-square flex items-center justify-center p-4">
              
              {/* Outer Orbital Orbit Ring */}
              <div className="absolute w-[80%] aspect-square rounded-full border border-theme-border/60 border-dashed pointer-events-none" />
              <div className="absolute w-[50%] aspect-square rounded-full border border-theme-border/40 pointer-events-none" />

              {/* SVG Vector Connection Rays */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                {nodes.map((node) => {
                  const isNodeActive = (hoveredId || activeId) === node.id;
                  const rad = (node.angle * Math.PI) / 180;
                  const r = 38; // Radius percent
                  const x = 50 + r * Math.cos(rad);
                  const y = 50 + r * Math.sin(rad);

                  return (
                    <line
                      key={node.id}
                      x1="50%"
                      y1="50%"
                      x2={`${x}%`}
                      y2={`${y}%`}
                      stroke={isNodeActive ? 'var(--accent-primary)' : 'var(--accent-border)'}
                      strokeWidth={isNodeActive ? '2' : '1'}
                      strokeOpacity={isNodeActive ? '1' : '0.4'}
                      strokeDasharray={isNodeActive ? 'none' : '3 3'}
                      className="transition-all duration-300"
                    />
                  );
                })}
              </svg>

              {/* CENTER NODE: JAISHMON */}
              <div className="relative z-20 flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-theme-surface border-2 border-theme-accent shadow-glow-card group">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mb-1" />
                <span className="font-display font-extrabold text-xs sm:text-sm text-white tracking-wider">
                  JAISHMON
                </span>
                <span className="font-mono text-[8px] text-theme-accent uppercase tracking-widest">
                  CORE NODE
                </span>
              </div>

              {/* ORBITING NODES (Arranged radially) */}
              {nodes.map((node) => {
                const isSelected = activeId === node.id;
                const isHovered = hoveredId === node.id;
                const isNodeActive = isSelected || isHovered;

                const rad = (node.angle * Math.PI) / 180;
                const r = 38; // Radius percent
                const x = 50 + r * Math.cos(rad);
                const y = 50 + r * Math.sin(rad);

                return (
                  <div
                    key={node.id}
                    style={{ left: `${x}%`, top: `${y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveId(node.id)}
                      onMouseEnter={() => setHoveredId(node.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      className={`flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl border font-mono text-[10px] sm:text-xs transition-all duration-300 shadow-sm cursor-pointer whitespace-nowrap ${
                        isNodeActive
                          ? 'bg-theme-accent text-white border-theme-accent shadow-glow scale-110'
                          : 'glass-panel text-theme-text-secondary hover:text-white hover:border-theme-accent/60'
                      }`}
                    >
                      <span className={isNodeActive ? 'text-white' : 'text-theme-accent'}>
                        {node.icon}
                      </span>
                      <span className="font-bold tracking-wider">{node.label}</span>
                    </button>
                  </div>
                );
              })}

            </div>
          </div>

          {/* RIGHT: Active Node Telemetry Panel (Lg: 4 cols) */}
          <div className="lg:col-span-4">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-theme-border/90 relative animate-in fade-in duration-200">
              <div className="flex items-center justify-between pb-4 border-b border-theme-border/50 mb-4">
                <div className="flex items-center gap-2 text-theme-accent">
                  {activeNode.icon}
                  <span className="font-mono text-xs font-bold uppercase tracking-widest">
                    {activeNode.category}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-theme-text-muted">ACTIVE</span>
              </div>

              <h3 className="font-display font-bold text-2xl text-white tracking-tight mb-2">
                {activeNode.label}
              </h3>

              <p className="text-sm text-theme-text-secondary leading-relaxed mb-6 font-normal">
                {activeNode.description}
              </p>

              {/* Tools Tag Cloud */}
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-theme-text-muted block mb-2.5">
                  ASSOCIATED STACK & TOOLS
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeNode.tools.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-theme-surface border border-theme-border text-xs font-mono text-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-theme-border/30 flex items-center justify-between text-[11px] font-mono text-theme-text-muted">
                <span>EXECUTION</span>
                <span className="text-emerald-400 font-semibold">PRODUCTION READY</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

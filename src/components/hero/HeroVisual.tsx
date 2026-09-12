import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolio';
import { Code2, Sparkles, Layers, Shield, Cpu, Binary, Cloud } from 'lucide-react';

interface TechNode {
  id: string;
  label: string;
  sub: string;
  icon: React.ReactNode;
  position: string; // Tailwind coordinate class
  lineAngle: string;
}

export const HeroVisual: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const [bracketHovered, setBracketHovered] = useState(false);
  const [activeNode, setActiveNode] = useState<string | null>('blockchain');

  const techNodes: TechNode[] = [
    {
      id: 'dsa',
      label: 'DSA',
      sub: 'Algorithmic Rigor',
      icon: <Binary className="w-3.5 h-3.5" />,
      position: '-top-4 -right-2 sm:-right-6',
      lineAngle: 'from-top-right',
    },
    {
      id: 'blockchain',
      label: 'BLOCKCHAIN',
      sub: 'Verifiable State & Web3',
      icon: <Layers className="w-3.5 h-3.5" />,
      position: 'top-1/3 -right-6 sm:-right-12',
      lineAngle: 'from-right',
    },
    {
      id: 'security',
      label: 'SECURITY',
      sub: 'Adversarial CTF Defense',
      icon: <Shield className="w-3.5 h-3.5" />,
      position: '-bottom-4 -right-2 sm:-right-6',
      lineAngle: 'from-bottom-right',
    },
    {
      id: 'systems',
      label: 'SYSTEMS',
      sub: 'Architecture & Persistence',
      icon: <Cpu className="w-3.5 h-3.5" />,
      position: 'top-1/2 -left-6 sm:-left-12 -translate-y-1/2',
      lineAngle: 'from-left',
    },
    {
      id: 'aws',
      label: 'AWS',
      sub: 'Cloud Infrastructure',
      icon: <Cloud className="w-3.5 h-3.5" />,
      position: '-top-4 -left-2 sm:-left-6',
      lineAngle: 'from-top-left',
    },
  ];

  return (
    <div className="relative w-full max-w-md mx-auto lg:max-w-none flex items-center justify-center p-6 sm:p-10 select-none">
      
      {/* Outer ambient glow behind the frame */}
      <div
        className={`absolute inset-0 bg-theme-accent/15 rounded-3xl blur-3xl transition-opacity duration-700 pointer-events-none ${
          bracketHovered || activeNode ? 'opacity-80 scale-105' : 'opacity-40'
        }`}
      />

      {/* Main Developer Frame Container */}
      <div
        className="relative group cursor-pointer"
        onMouseEnter={() => setBracketHovered(true)}
        onMouseLeave={() => setBracketHovered(false)}
      >
        {/* Top-Left Code Bracket Motif: < / */}
        <div className="absolute -top-7 -left-7 z-20 flex items-center gap-1 px-3 py-1 rounded-md bg-theme-surface/90 border border-theme-border text-theme-accent font-mono text-sm tracking-wider shadow-glow-sm transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
          <span className="text-theme-accent-light font-bold">&lt;</span>
          <span className="text-theme-accent font-extrabold">/</span>
          <span className="text-[10px] text-theme-text-muted ml-1 font-mono tracking-normal">DEV</span>
        </div>

        {/* Bottom-Right Code Bracket Motif: / > */}
        <div className="absolute -bottom-7 -right-7 z-20 flex items-center gap-1 px-3 py-1 rounded-md bg-theme-surface/90 border border-theme-border text-theme-accent font-mono text-sm tracking-wider shadow-glow-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1">
          <span className="text-[10px] text-theme-text-muted mr-1 font-mono tracking-normal">BUILD</span>
          <span className="text-theme-accent font-extrabold">/</span>
          <span className="text-theme-accent-light font-bold">&gt;</span>
        </div>

        {/* The Photo Frame with Dark Glass & Glowing Border */}
        <div
          className={`relative w-72 sm:w-80 md:w-[340px] aspect-[4/5] rounded-2xl p-2.5 transition-all duration-500 bg-gradient-to-b from-theme-surface/95 via-theme-card/90 to-theme-bg/95 border backdrop-blur-xl shadow-glow-card overflow-hidden ${
            bracketHovered
              ? 'border-theme-accent/60 shadow-glow'
              : 'border-theme-border'
          }`}
        >
          {/* Subtle frame corner guides */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-theme-accent/70 pointer-events-none" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-theme-accent/70 pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-theme-accent/70 pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-theme-accent/70 pointer-events-none" />

          {/* Inner Photo Wrapper */}
          <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#05080E] border border-white/5 flex items-center justify-center">
            {!imgError ? (
              <img
                src={portfolioData.personal.avatarPath}
                alt={portfolioData.personal.name}
                className="w-full h-full object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700"
                onError={() => setImgError(true)}
              />
            ) : (
              /* Fallback Wireframe Avatar */
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-theme-card via-[#060A10] to-[#030508] relative">
                <div className="absolute inset-0 bg-tech-grid opacity-20" />
                <div className="relative w-24 h-24 rounded-2xl bg-theme-surface/90 border border-theme-border flex items-center justify-center mb-4 shadow-glow-sm">
                  <Code2 className="w-10 h-10 text-theme-accent" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                </div>
                <div className="relative z-10">
                  <div className="font-display font-bold text-base text-white">
                    {portfolioData.personal.name}
                  </div>
                  <div className="font-mono text-[10px] text-theme-accent mt-0.5">
                    {portfolioData.personal.primaryPosition}
                  </div>
                </div>
              </div>
            )}

            {/* Inner bottom gradient for text contrast */}
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-theme-bg via-theme-bg/70 to-transparent pointer-events-none" />

            {/* In-photo metadata badge */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-1.5 rounded-lg bg-theme-bg/85 border border-theme-border/70 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-[10px] text-white tracking-wide">
                  CO-FOUNDER & CTO
                </span>
              </div>
              <span className="font-mono text-[10px] text-theme-accent font-semibold">
                ZLADINGER
              </span>
            </div>
          </div>
        </div>

        {/* 5 INTERACTIVE FLOATING TECHNICAL ELEMENTS AROUND PHOTO */}
        {techNodes.map((node) => {
          const isActive = activeNode === node.id;
          return (
            <div
              key={node.id}
              className={`absolute z-30 transition-all duration-300 ${node.position}`}
              onClick={(e) => {
                e.stopPropagation();
                setActiveNode(isActive ? null : node.id);
              }}
              onMouseEnter={() => setActiveNode(node.id)}
            >
              {/* The Technical Badge Node */}
              <button
                type="button"
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border font-mono text-xs transition-all duration-300 shadow-md ${
                  isActive
                    ? 'bg-theme-accent text-white border-theme-accent shadow-glow scale-105'
                    : 'glass-panel text-theme-text-secondary hover:text-white hover:border-theme-accent/60'
                }`}
              >
                <span className={isActive ? 'text-white' : 'text-theme-accent'}>
                  {node.icon}
                </span>
                <span className="font-bold tracking-wider text-[11px]">{node.label}</span>
              </button>

              {/* Connected Active Telemetry Flyout */}
              {isActive && (
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded bg-theme-card/95 border border-theme-accent/50 text-[10px] font-mono text-theme-accent-light shadow-glow-sm z-40 animate-in fade-in duration-150">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-theme-accent" />
                    <span>{node.sub}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}

      </div>
    </div>
  );
};

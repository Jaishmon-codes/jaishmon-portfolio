import React, { useState } from 'react';
import { PROJECTS_URL } from '../../data/portfolio';
import { Button } from '../ui/Button';
import { ExternalLink, ArrowRight, Lock, Unlock } from 'lucide-react';

export const ProjectTeasers: React.FC = () => {
  const [hoveredPortal, setHoveredPortal] = useState(false);

  const archiveSlots = [
    {
      code: '0x01',
      tag: 'SYSTEMS',
      title: 'Enterprise Architecture & Solutions Engine',
      tech: 'React • TypeScript • Node • SQL',
    },
    {
      code: '0x02',
      tag: 'WEB3',
      title: 'Decentralized State & Verification Protocol',
      tech: 'Solidity • Smart Contracts • Web3',
    },
    {
      code: '0x03',
      tag: 'SECURITY',
      title: 'Adversarial Threat Surface & Network Audit',
      tech: 'Python • Security Protocols • Linux',
    },
  ];

  return (
    <section id="projects" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-theme-accent" />
              <span className="font-mono text-xs uppercase tracking-widest text-theme-accent">
                04 // PROJECT ARCHIVE GATEWAY
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-none uppercase mb-2">
              WHAT I'VE BUILT.
            </h2>
            <p className="font-mono text-xs sm:text-sm text-theme-text-muted">
              INTERACTIVE REPOSITORIES, LIVE DEMOS & TECHNICAL BREAKDOWNS LIVE ON MY DEDICATED SHOWCASE
            </p>
          </div>

          <Button
            variant="primary"
            size="lg"
            href={PROJECTS_URL}
            isExternal
            icon={<ExternalLink className="w-4 h-4" />}
            className="shadow-glow shrink-0"
          >
            EXPLORE PROJECTS
          </Button>
        </div>

        {/* The Digital Vault / Archive Portal Visual Component */}
        <div
          className={`glass-card rounded-2xl border p-6 sm:p-10 transition-all duration-500 relative overflow-hidden ${
            hoveredPortal
              ? 'border-theme-accent shadow-glow'
              : 'border-theme-border'
          }`}
          onMouseEnter={() => setHoveredPortal(true)}
          onMouseLeave={() => setHoveredPortal(false)}
        >
          {/* Top Telemetry Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-theme-border/50 mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-theme-accent/15 text-theme-accent">
                {hoveredPortal ? <Unlock className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
              </div>
              <div>
                <span className="font-mono text-xs font-bold text-white tracking-wide">
                  PROJECT ARCHIVE REPOSITORY
                </span>
                <span className="font-mono text-[10px] text-theme-text-muted block">
                  SHOWCASE_URL: {PROJECTS_URL}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 font-mono text-xs text-theme-text-muted">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>GATEWAY READY</span>
              </span>
              <span className="hidden sm:inline text-theme-border">|</span>
              <span className="hidden sm:inline">EXTERNAL PORTAL</span>
            </div>
          </div>

          {/* 3 Preview Slots */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {archiveSlots.map((slot) => (
              <a
                key={slot.code}
                href={PROJECTS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-xl bg-theme-surface/70 border border-theme-border/70 hover:border-theme-accent/70 hover:bg-theme-surface transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs mb-3">
                    <span className="text-theme-accent font-bold">{slot.code}</span>
                    <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-theme-text-muted uppercase">
                      {slot.tag}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base text-white group-hover:text-theme-accent transition-colors mb-2">
                    {slot.title}
                  </h3>
                </div>

                <div className="pt-4 border-t border-theme-border/30 mt-4 flex items-center justify-between font-mono text-[11px] text-theme-text-muted">
                  <span>{slot.tech}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-theme-accent group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>

          {/* Bottom Portal Action Bar */}
          <div className="pt-6 border-t border-theme-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="font-mono text-xs text-theme-text-secondary">
              Looking for full source repositories, architecture blueprints, or live client deployments?
            </div>

            <a
              href={PROJECTS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs font-bold text-white bg-theme-accent hover:bg-theme-accent-secondary px-5 py-2.5 rounded-lg transition-all duration-300 shadow-glow-sm hover:shadow-glow hover:-translate-y-0.5"
            >
              <span>ENTER DEDICATED SHOWCASE</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

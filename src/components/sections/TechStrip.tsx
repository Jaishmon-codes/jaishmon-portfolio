import React from 'react';
import { portfolioData } from '../../data/portfolio';
import {
  Code,
  FileCode2,
  Atom,
  Terminal,
  Coffee,
  Database,
  Cloud,
  Blocks,
  ShieldCheck,
  Cpu,
  GitBranch,
} from 'lucide-react';

export const TechStrip: React.FC = () => {
  const getTechIcon = (tech: string) => {
    switch (tech.toLowerCase()) {
      case 'html':
        return <FileCode2 className="w-4 h-4 shrink-0" />;
      case 'css':
        return <Code className="w-4 h-4 shrink-0" />;
      case 'react':
        return <Atom className="w-4 h-4 shrink-0" />;
      case 'javascript':
        return <Terminal className="w-4 h-4 shrink-0" />;
      case 'java':
        return <Coffee className="w-4 h-4 shrink-0" />;
      case 'python':
        return <Terminal className="w-4 h-4 shrink-0" />;
      case 'sql':
        return <Database className="w-4 h-4 shrink-0" />;
      case 'aws':
        return <Cloud className="w-4 h-4 shrink-0" />;
      case 'blockchain':
        return <Blocks className="w-4 h-4 shrink-0" />;
      case 'cybersecurity':
        return <ShieldCheck className="w-4 h-4 shrink-0" />;
      case 'embedded systems':
        return <Cpu className="w-4 h-4 shrink-0" />;
      case 'data structures & algorithms':
        return <GitBranch className="w-4 h-4 shrink-0" />;
      default:
        return <Code className="w-4 h-4 shrink-0" />;
    }
  };

  return (
    <section className="relative w-full bg-theme-surface/30 backdrop-blur-md py-7 overflow-hidden">
      {/* Top and bottom subtle gradient transitions */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-theme-accent/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-theme-accent/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-theme-accent animate-pulse" />
          <span className="font-mono text-[11px] uppercase tracking-widest text-theme-text-muted">
            CURRENTLY WORKING ACROSS
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-theme-border/60 to-transparent" />
        </div>
      </div>

      {/* Technology Badges Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
          {portfolioData.techStrip.map((tech) => (
            <div
              key={tech}
              className="group relative flex items-center gap-2 px-3.5 py-2 rounded-lg bg-theme-card/60 border border-theme-border/60 hover:border-theme-accent/60 hover:bg-theme-elevated transition-all duration-300 cursor-default select-none hover:shadow-glow-sm"
            >
              <span className="text-theme-text-muted group-hover:text-theme-accent transition-colors duration-300">
                {getTechIcon(tech)}
              </span>
              <span className="font-mono text-xs text-theme-text-secondary group-hover:text-white transition-colors duration-300">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

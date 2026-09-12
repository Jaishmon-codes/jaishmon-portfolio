import React from 'react';
import { portfolioData, PROJECTS_URL } from '../../data/portfolio';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { personal, socials } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-theme-border/50 bg-theme-surface/80 backdrop-blur-xl relative z-20 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-theme-border/40 items-start">
          
          {/* Col 1: Identity & Role */}
          <div className="md:col-span-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center justify-center w-7 h-7 rounded bg-theme-card border border-theme-border">
                <span className="font-mono text-xs font-bold text-theme-accent">&lt;/&gt;</span>
              </div>
              <span className="font-display font-extrabold text-lg text-white tracking-wider">
                {personal.name.toUpperCase()}
              </span>
            </div>
            
            <p className="font-mono text-xs text-theme-accent-light mb-1">
              {personal.primaryPosition}
            </p>
            <p className="font-mono text-xs text-theme-text-muted">
              {personal.role}
            </p>
            <p className="font-mono text-[11px] text-theme-text-muted mt-2 max-w-sm">
              {personal.secondaryPosition}
            </p>
          </div>

          {/* Col 2: Navigation & External Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <div className="font-mono text-[10px] uppercase text-theme-text-muted tracking-widest mb-3">
                EXPLORE
              </div>
              <ul className="space-y-2 font-mono text-xs text-theme-text-secondary">
                <li><a href="#about" className="hover:text-theme-accent transition-colors">About</a></li>
                <li><a href="#experience" className="hover:text-theme-accent transition-colors">Experience</a></li>
                <li><a href="#skills" className="hover:text-theme-accent transition-colors">Skills</a></li>
                <li><a href="#philosophy" className="hover:text-theme-accent transition-colors">Philosophy</a></li>
              </ul>
            </div>

            <div>
              <div className="font-mono text-[10px] uppercase text-theme-text-muted tracking-widest mb-3">
                CONNECT
              </div>
              <ul className="space-y-2 font-mono text-xs text-theme-text-secondary">
                <li><a href={socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-theme-accent transition-colors">GitHub</a></li>
                <li><a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-theme-accent transition-colors">LinkedIn</a></li>
                <li><a href={socials.hackerrank} target="_blank" rel="noopener noreferrer" className="hover:text-theme-accent transition-colors">HackerRank</a></li>
                <li><a href={`mailto:${socials.email}`} className="hover:text-theme-accent transition-colors">Email</a></li>
                <li><a href={PROJECTS_URL} target="_blank" rel="noopener noreferrer" className="text-theme-accent hover:underline font-semibold">Projects Portal ↗</a></li>
              </ul>
            </div>
          </div>

          {/* Col 3: Back to top button */}
          <div className="md:col-span-2 flex md:justify-end">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-theme-card border border-theme-border hover:border-theme-accent text-xs font-mono text-theme-text-secondary hover:text-white transition-all duration-200 group"
              aria-label="Back to top of page"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5 text-theme-accent group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom Banner: Ethos & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left font-mono text-xs text-theme-text-muted">
          <div className="tracking-widest font-semibold text-theme-text-secondary">
            LEARN. APPLY. BUILD. BREAK. BUILD BETTER.
          </div>
          <div>
            © 2026 Jaishmon M. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};

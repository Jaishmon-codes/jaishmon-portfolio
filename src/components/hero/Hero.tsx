import React from 'react';
import { portfolioData, PROJECTS_URL } from '../../data/portfolio';
import { HeroVisual } from './HeroVisual';
import { Button } from '../ui/Button';
import { ArrowRight, ArrowUpRight, Terminal, Cpu } from 'lucide-react';

export const Hero: React.FC = () => {
  const { eyebrow, headline } = portfolioData.personal;

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4.5rem)] flex items-center justify-center pt-6 pb-16 lg:py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Large, Tight, Dominant Typography (Minimal Text) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-theme-accent/10 border border-theme-accent/30 text-theme-accent font-mono text-[11px] tracking-widest uppercase font-semibold">
                <Terminal className="w-3.5 h-3.5" />
                {eyebrow}
              </span>
            </div>

            {/* Core Dominant Headline */}
            <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl tracking-tighter leading-[0.92] text-white uppercase mb-6">
              <span className="block tracking-tight text-white/95">{headline.part1}</span>
              <span className="block tracking-tight text-white/95">{headline.part2}</span>
              <span className="block tracking-tight text-white/70">{headline.part3}</span>
              <span className="block tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-theme-accent via-theme-accent-light to-theme-accent drop-shadow-[0_0_24px_var(--accent-glow-strong)]">
                {headline.part4}
              </span>
            </h1>

            {/* Short Technical Descriptor (No text paragraphs) */}
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs sm:text-sm text-theme-text-muted tracking-wider uppercase mb-8">
              <span className="text-white font-medium">COMPUTER SCIENCE</span>
              <span className="text-theme-accent">×</span>
              <span className="text-white font-medium">BLOCKCHAIN</span>
              <span className="text-theme-accent">×</span>
              <span className="text-white font-medium">SYSTEMS</span>
              <span className="text-theme-accent">×</span>
              <span className="text-white font-medium">CYBERSECURITY</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                href={PROJECTS_URL}
                isExternal
                icon={<ArrowRight className="w-4 h-4" />}
                className="shadow-glow"
              >
                EXPLORE MY WORK
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href="#contact"
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                LET'S CONNECT
              </Button>
            </div>

            {/* Minimal telemetry ticker */}
            <div className="mt-10 pt-5 border-t border-theme-border/40 flex flex-wrap items-center gap-6 text-[11px] font-mono text-theme-text-muted">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white/80">ZLADINGER CTO</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-theme-border">•</span>
                <span>VIT-AP CSE '28</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-theme-border">•</span>
                <span className="flex items-center gap-1 text-theme-accent">
                  <Cpu className="w-3 h-3" />
                  <span>SYSTEM ONLINE</span>
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: The Distinctive Hero Visual Frame with Interactive Floating Nodes */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <HeroVisual />
          </div>

        </div>
      </div>
    </section>
  );
};

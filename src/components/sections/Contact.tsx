import React, { useState } from 'react';
import { portfolioData, PROJECTS_URL } from '../../data/portfolio';
import { Button } from '../ui/Button';
import {
  Mail,
  ArrowRight,
  Code2,
  Copy,
  Check,
  Sparkles,
  ExternalLink,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const { socials } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 sm:py-36 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-theme-accent/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="glass-card p-8 sm:p-14 lg:p-20 rounded-3xl border border-theme-border/90 text-center relative overflow-hidden shadow-glow-card">
          
          {/* Top code bracket graphic motif */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-theme-accent/10 border border-theme-accent/30 text-theme-accent font-mono text-xs tracking-widest uppercase mb-8">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INITIALIZE TRANSMISSION</span>
          </div>

          {/* Headline */}
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[0.95] uppercase max-w-4xl mx-auto mb-6">
            LET'S BUILD SOMETHING THAT MATTERS.
          </h2>

          {/* Subtext */}
          <p className="text-base sm:text-xl text-theme-text-secondary max-w-2xl mx-auto leading-relaxed mb-12 font-normal">
            Got a problem worth solving, an idea worth building, or an interesting opportunity? Let's connect and build systems that last.
          </p>

          {/* Social / Direct Connect Action Grid */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-3xl mx-auto mb-14">
            
            {/* Email Button */}
            <a
              href={`mailto:${socials.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-theme-accent text-white font-mono text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-glow-sm hover:shadow-glow hover:-translate-y-0.5 border border-theme-accent/60"
            >
              <Mail className="w-4 h-4" />
              <span>SEND AN EMAIL</span>
            </a>

            {/* Copy Email Helper */}
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-theme-surface border border-theme-border hover:border-theme-border-hover text-theme-text-secondary hover:text-white font-mono text-xs transition-all duration-200"
              title="Copy email to clipboard"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-theme-accent" />}
              <span>{copied ? 'COPIED!' : 'COPY EMAIL'}</span>
            </button>

            {/* GitHub */}
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-theme-surface border border-theme-border hover:border-theme-border-hover text-theme-text-secondary hover:text-white font-mono text-xs transition-all duration-200"
            >
              <svg className="w-4 h-4 fill-current text-theme-accent" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GITHUB</span>
              <ExternalLink className="w-3 h-3 text-theme-text-muted" />
            </a>

            {/* LinkedIn */}
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-theme-surface border border-theme-border hover:border-theme-border-hover text-theme-text-secondary hover:text-white font-mono text-xs transition-all duration-200"
            >
              <svg className="w-4 h-4 fill-current text-theme-accent" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.65 1.65 0 1 0 0 3.3 1.65 1.65 0 0 0 0-3.3z" />
              </svg>
              <span>LINKEDIN</span>
              <ExternalLink className="w-3 h-3 text-theme-text-muted" />
            </a>

            {/* HackerRank */}
            <a
              href={socials.hackerrank}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-theme-surface border border-theme-border hover:border-theme-border-hover text-theme-text-secondary hover:text-white font-mono text-xs transition-all duration-200"
            >
              <Code2 className="w-4 h-4 text-theme-accent" />
              <span>HACKERRANK</span>
              <ExternalLink className="w-3 h-3 text-theme-text-muted" />
            </a>
          </div>

          {/* FINAL CTA: SEE WHAT I'M BUILDING -> (PROJECTS_URL) */}
          <div className="pt-10 border-t border-theme-border/50 max-w-xl mx-auto flex flex-col items-center">
            <span className="font-mono text-[11px] text-theme-text-muted uppercase tracking-widest mb-4">
              READY FOR DEEP TECHNICAL IMPLEMENTATION?
            </span>
            <Button
              variant="primary"
              size="lg"
              href={PROJECTS_URL}
              isExternal
              icon={<ArrowRight className="w-5 h-5" />}
              className="w-full sm:w-auto text-sm px-8 py-4 shadow-glow"
            >
              SEE WHAT I'M BUILDING
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
};

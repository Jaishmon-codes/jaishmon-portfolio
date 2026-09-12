import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolio';
import { ChevronDown, ChevronUp, GraduationCap, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  // Collapsed by default, index 0 (Zladinger) open
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const experienceList = [
    {
      year: '2026',
      period: '2026 — Present',
      role: 'CO-FOUNDER & CTO',
      company: 'ZLADINGER',
      subtitle: 'Technology Solutions',
      tag: 'CURRENT ROLE',
      description:
        'Directing overall product engineering and architectural vision for a technology solutions company currently being constructed from the ground up.',
      highlights: [
        'System architecture & tech stack selection',
        'Full-stack engineering & solution design',
        'Technical strategy & scalable product roadmap',
      ],
    },
    {
      year: '2026',
      period: '20 May — 20 July',
      role: 'SWE INTERN',
      company: 'KCL LIMITED',
      subtitle: 'Engineering Internship',
      tag: 'INTERNSHIP',
      description:
        'Engaged in software development workflows, contributing to internal tooling, debugging production issues, and production codebase conventions.',
      highlights: [
        'Software engineering workflows & code reviews',
        'Feature implementation & bug resolution',
        'Production systems maintenance',
      ],
    },
    {
      year: '2025+',
      period: 'Continuous',
      role: 'INDEPENDENT BUILDER',
      company: 'FREELANCE & EXPERIMENTS',
      subtitle: 'CTFs • Hackathons • Web Apps',
      tag: 'EXPERIMENTS',
      description:
        'Building client web platforms, end-to-end applications, and actively participating in cybersecurity capture-the-flag competitions and hackathons.',
      highlights: [
        'Full-stack client prototypes & deployments',
        'CTF exploitation & vulnerability auditing',
        'Algorithmic sprints & rapid builds',
      ],
    },
  ];

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  const { education } = portfolioData;

  return (
    <section id="experience" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-theme-accent" />
            <span className="font-mono text-xs uppercase tracking-widest text-theme-accent">
              03 // EXPERIENCE TIMELINE
            </span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-none uppercase mb-2">
            VENTURES & ROLES
          </h2>
          <p className="font-mono text-xs sm:text-sm text-theme-text-muted">
            CLICK AN ITEM TO EXPAND TECHNICAL SCOPE
          </p>
        </div>

        {/* Compact Expandable Timeline */}
        <div className="space-y-3 mb-10">
          {experienceList.map((item, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div
                key={item.role + idx}
                className="glass-card rounded-xl border border-theme-border/80 overflow-hidden transition-all duration-300 hover:border-theme-border-hover"
              >
                {/* Header Row (Always Visible) */}
                <button
                  type="button"
                  onClick={() => toggleExpand(idx)}
                  className="w-full p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="font-mono text-sm font-bold text-theme-accent px-2.5 py-1 rounded bg-theme-surface border border-theme-border shrink-0">
                      {item.year}
                    </span>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-display font-bold text-base sm:text-lg text-white">
                          {item.role}
                        </span>
                        <span className="text-theme-border">•</span>
                        <span className="font-mono text-xs text-theme-accent-light font-semibold">
                          {item.company}
                        </span>
                      </div>
                      <div className="font-mono text-xs text-theme-text-muted mt-0.5">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-auto">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-theme-text-muted hidden sm:inline">
                      {item.period}
                    </span>
                    <div className="p-1 rounded bg-white/5 text-theme-accent">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </button>

                {/* Collapsible Technical Detail (Hidden by default) */}
                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-theme-border/40 animate-in fade-in duration-200">
                    <p className="text-sm text-theme-text-secondary mb-4 leading-relaxed font-normal">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((hl) => (
                        <span
                          key={hl}
                          className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-theme-text-secondary"
                        >
                          {hl}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Compact Education Card */}
        <div className="glass-panel p-5 sm:p-6 rounded-xl border border-theme-border/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-2.5 rounded-lg bg-theme-accent/15 border border-theme-accent/40 text-theme-accent shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="font-display font-bold text-base text-white">
                {education.degree} ({education.specialization})
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-theme-text-muted mt-0.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>{education.institution}</span>
                <span>•</span>
                <span>Expected Graduation: {education.expectedGraduation}</span>
              </div>
            </div>
          </div>

          <span className="font-mono text-xs text-theme-accent font-semibold px-3 py-1 rounded bg-theme-surface border border-theme-border self-start sm:self-auto">
            VIT-AP '28
          </span>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { Card } from '../ui/Card';

export const Education: React.FC = () => {
  const { degree, specialization, institution, expectedGraduation, status } =
    portfolioData.education;

  return (
    <div className="w-full">
      <Card className="relative overflow-hidden border-theme-border/80 bg-gradient-to-r from-theme-card via-theme-surface to-theme-card">
        {/* Subtle accent corner glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-theme-accent/5 rounded-full blur-2xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-theme-accent/15 border border-theme-accent/40 text-theme-accent shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-[10px] uppercase tracking-widest text-theme-accent font-semibold">
                  ACADEMIC FOUNDATION
                </span>
                <span className="text-theme-border">•</span>
                <span className="font-mono text-[10px] text-theme-text-muted">
                  {status}
                </span>
              </div>

              <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                {degree}
              </h3>

              <div className="flex items-center gap-2 mt-1">
                <Award className="w-3.5 h-3.5 text-theme-accent-light shrink-0" />
                <span className="font-mono text-xs text-theme-accent-light font-medium">
                  {specialization}
                </span>
              </div>

              <div className="flex items-center gap-1.5 mt-2 text-xs text-theme-text-muted">
                <MapPin className="w-3.5 h-3.5" />
                <span>{institution}</span>
              </div>
            </div>
          </div>

          {/* Right: Graduation Year Badge */}
          <div className="flex flex-col sm:items-end justify-center pl-14 sm:pl-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-theme-border/40">
            <span className="font-mono text-[10px] text-theme-text-muted uppercase tracking-wider mb-1">
              EXPECTED GRADUATION
            </span>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-theme-surface border border-theme-border text-white font-mono text-sm font-bold shadow-sm">
              <Calendar className="w-4 h-4 text-theme-accent" />
              <span>{expectedGraduation}</span>
            </div>
          </div>

        </div>
      </Card>
    </div>
  );
};

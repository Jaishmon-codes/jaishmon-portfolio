import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Palette, Check } from 'lucide-react';
import type { ThemeType } from '../../types/portfolio';

export const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme, availableThemes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (selectedTheme: ThemeType) => {
    setTheme(selectedTheme);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-theme-border bg-theme-surface/70 hover:bg-theme-elevated/70 text-theme-text-secondary hover:text-white text-xs font-mono transition-all duration-200"
        title="Switch color theme"
        aria-label="Theme selector"
        aria-expanded={isOpen}
      >
        <Palette className="w-3.5 h-3.5 text-theme-accent" />
        <span className="hidden sm:inline uppercase text-[11px] tracking-wider">
          {theme === 'crimson' ? 'RED' : theme === 'electric-blue' ? 'BLUE' : 'TERMINAL'}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 rounded-lg bg-theme-card/95 border border-theme-border backdrop-blur-xl shadow-glow-card p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-2 py-1.5 text-[11px] font-mono uppercase tracking-wider text-theme-text-muted border-b border-theme-border/50 mb-1">
            Visual Theme
          </div>

          <div className="space-y-1">
            {availableThemes.map((t) => {
              const isSelected = theme === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => handleSelect(t.id)}
                  className={`w-full flex items-center justify-between px-2.5 py-2 rounded-md text-left transition-all duration-200 ${
                    isSelected
                      ? 'bg-theme-accent/15 text-white border border-theme-accent/40'
                      : 'hover:bg-white/5 text-theme-text-secondary hover:text-white border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-3 h-3 rounded-full shrink-0 shadow-sm"
                      style={{ backgroundColor: t.accentColor }}
                    />
                    <div>
                      <div className="text-xs font-medium">{t.name}</div>
                      <div className="text-[10px] text-theme-text-muted">{t.description}</div>
                    </div>
                  </div>
                  {isSelected && <Check className="w-3.5 h-3.5 text-theme-accent shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

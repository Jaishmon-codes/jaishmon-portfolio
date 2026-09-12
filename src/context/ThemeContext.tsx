import React, { useEffect, useState } from 'react';
import type { ThemeType } from '../types/portfolio';
import { ThemeContext } from './theme-context';

const THEMES = [
  {
    id: 'electric-blue' as const,
    name: '01 — Electric Blue',
    accentColor: '#2563FF',
    description: 'Black + dark navy + electric blue energy (Primary)',
  },
  {
    id: 'crimson' as const,
    name: '02 — Crimson',
    accentColor: '#E11D48',
    description: 'Black + deep red/crimson glow',
  },
  {
    id: 'terminal' as const,
    name: '03 — Terminal',
    accentColor: '#10B981',
    description: 'Black + subtle green terminal aesthetic',
  },
];

const THEME_STORAGE_KEY = 'jaishmon_portfolio_theme_blue_v2';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeType>(() => {
    try {
      const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as ThemeType;
      if (savedTheme && ['electric-blue', 'crimson', 'terminal'].includes(savedTheme)) {
        return savedTheme;
      }
    } catch {
      // Ignore localStorage errors (e.g. incognito)
    }
    return 'electric-blue';
  });

  useEffect(() => {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Ignore localStorage errors
    }

    // Apply data-theme attribute to root document
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    
    // Update browser theme-color meta tag
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
      if (theme === 'crimson') {
        themeColorMeta.setAttribute('content', '#080305');
      } else if (theme === 'terminal') {
        themeColorMeta.setAttribute('content', '#020805');
      } else {
        themeColorMeta.setAttribute('content', '#030508');
      }
    }
  }, [theme]);

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, availableThemes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
};

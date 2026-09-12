import { createContext } from 'react';
import type { ThemeType } from '../types/portfolio';

export interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  availableThemes: { id: ThemeType; name: string; accentColor: string; description: string }[];
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

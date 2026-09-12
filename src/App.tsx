import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Home } from './pages/Home';

export const App: React.FC = () => {
  useEffect(() => {
    // Developer console greeting Easter egg
    console.log(
      '%c CURIOUS BY DEFAULT. MULTIDISCIPLINARY BY NATURE. BUILDER BY CHOICE. ',
      'background: #060A10; color: #2563FF; font-weight: bold; font-size: 14px; padding: 6px 10px; border: 1px solid #2563FF; border-radius: 4px;'
    );
    console.log(
      '%c Jaishmon M — Software Engineer & Builder | Co-Founder & CTO at Zladinger ',
      'font-size: 12px; color: #DCE4EF; margin-top: 4px;'
    );
    console.log(
      '%c Hint: Press "/" or use the terminal icon in the navbar to explore the system. ',
      'font-size: 11px; color: #60A5FA; font-style: italic;'
    );
  }, []);

  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
};

export default App;

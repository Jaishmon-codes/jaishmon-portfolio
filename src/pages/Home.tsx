import React, { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../components/hero/Hero';
import { GeometricBackground } from '../components/hero/GeometricBackground';
import { TechStrip } from '../components/sections/TechStrip';
import { About } from '../components/sections/About';
import { Philosophy } from '../components/sections/Philosophy';
import { WhatIBuild } from '../components/sections/WhatIBuild';
import { EngineeringMindset } from '../components/sections/EngineeringMindset';
import { Skills } from '../components/sections/Skills';
import { Experience } from '../components/sections/Experience';
import { ProblemSolving } from '../components/sections/ProblemSolving';
import { ProjectTeasers } from '../components/sections/ProjectTeasers';
import { Vision } from '../components/sections/Vision';
import { CurrentlyExploring } from '../components/sections/CurrentlyExploring';
import { Contact } from '../components/sections/Contact';
import { Footer } from '../components/layout/Footer';
import { CommandPalette } from '../components/interactive/CommandPalette';
import { InteractiveTerminal } from '../components/interactive/InteractiveTerminal';
import { SectionTransition } from '../components/ui/SectionTransition';
import { useKeyboardShortcut } from '../hooks/useKeyboardShortcut';

export const Home: React.FC = () => {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);

  // Keyboard shortcut: Press "/" or "Ctrl+K" to open Command Palette
  useKeyboardShortcut({
    key: '/',
    callback: () => setCommandPaletteOpen(true),
  });

  useKeyboardShortcut({
    key: 'k',
    ctrlOrMeta: true,
    callback: () => setCommandPaletteOpen(true),
  });

  return (
    <div className="relative min-h-screen bg-theme-bg text-theme-text-primary selection:bg-theme-accent/30 selection:text-white transition-colors duration-400">
      
      {/* Abstract Background Animation Canvas */}
      <GeometricBackground />

      {/* Sticky Navigation */}
      <Navbar
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Main Content Flow with Smooth Tapered Transitions */}
      <main className="relative z-10">
        <Hero />
        <TechStrip />
        <SectionTransition variant="subtle" />
        <About />
        <SectionTransition variant="technical" />
        <Philosophy />
        <SectionTransition variant="subtle" />
        <WhatIBuild />
        <SectionTransition variant="technical" />
        <EngineeringMindset />
        <SectionTransition variant="subtle" />
        <Skills />
        <SectionTransition variant="technical" />
        <Experience />
        <SectionTransition variant="subtle" />
        <ProblemSolving />
        <SectionTransition variant="technical" />
        <ProjectTeasers />
        <SectionTransition variant="subtle" />
        <Vision />
        <SectionTransition variant="technical" />
        <CurrentlyExploring />
        <SectionTransition variant="glow" />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Command Palette Modal */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Interactive Developer Terminal Modal */}
      <InteractiveTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

    </div>
  );
};

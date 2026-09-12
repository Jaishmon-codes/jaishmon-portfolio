import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { portfolioData, PROJECTS_URL } from '../../data/portfolio';
import {
  Search,
  ExternalLink,
  Terminal,
  Palette,
  Code,
  User,
  Briefcase,
  Layers,
  Sparkles,
  X,
} from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTerminal: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenTerminal,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);
  const inputRef = useRef<HTMLInputElement>(null);
  const { setTheme } = useTheme();

  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen);
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
    }
  }

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const commands = [
    {
      id: 'home',
      label: 'Home // Top',
      category: 'Navigation',
      icon: <User className="w-4 h-4" />,
      action: () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'about',
      label: '/about — Origin & Iterative Blueprint',
      category: 'Navigation',
      icon: <User className="w-4 h-4" />,
      action: () => {
        document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'experience',
      label: '/experience — Zladinger CTO & Timeline',
      category: 'Navigation',
      icon: <Briefcase className="w-4 h-4" />,
      action: () => {
        document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'skills',
      label: '/skills — Technical Proficiency Matrix',
      category: 'Navigation',
      icon: <Layers className="w-4 h-4" />,
      action: () => {
        document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'projects',
      label: '/projects — Dedicated Showcase Portal',
      category: 'Projects',
      icon: <ExternalLink className="w-4 h-4" />,
      action: () => {
        window.open(PROJECTS_URL, '_blank');
        onClose();
      },
    },
    {
      id: 'contact',
      label: '/contact — Initialize Transmission',
      category: 'Connect',
      icon: <Sparkles className="w-4 h-4" />,
      action: () => {
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'terminal',
      label: '/terminal — Open Developer CLI',
      category: 'Developer',
      icon: <Terminal className="w-4 h-4" />,
      action: () => {
        onClose();
        onOpenTerminal();
      },
    },
    {
      id: 'theme-blue',
      label: '/theme blue — Electric Blue (Default)',
      category: 'Theme',
      icon: <Palette className="w-4 h-4 text-blue-500" />,
      action: () => {
        setTheme('electric-blue');
        onClose();
      },
    },
    {
      id: 'theme-crimson',
      label: '/theme crimson — Deep Crimson Glow',
      category: 'Theme',
      icon: <Palette className="w-4 h-4 text-rose-500" />,
      action: () => {
        setTheme('crimson');
        onClose();
      },
    },
    {
      id: 'theme-terminal',
      label: '/theme terminal — Green Phosphor',
      category: 'Theme',
      icon: <Palette className="w-4 h-4 text-emerald-500" />,
      action: () => {
        setTheme('terminal');
        onClose();
      },
    },
    {
      id: 'github',
      label: '/github — Open Source Repositories',
      category: 'External',
      icon: <Code className="w-4 h-4" />,
      action: () => {
        window.open(portfolioData.socials.github, '_blank');
        onClose();
      },
    },
    {
      id: 'linkedin',
      label: '/linkedin — Professional Network',
      category: 'External',
      icon: <ExternalLink className="w-4 h-4" />,
      action: () => {
        window.open(portfolioData.socials.linkedin, '_blank');
        onClose();
      },
    },
  ];

  const filteredCommands = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase()) ||
    c.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredCommands.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev === 0 ? Math.max(0, filteredCommands.length - 1) : prev - 1
      );
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action();
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-28 px-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl rounded-2xl bg-theme-surface/95 border border-theme-border shadow-glow-card overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Search Input */}
        <div className="flex items-center px-4 py-3.5 border-b border-theme-border/60">
          <Search className="w-4 h-4 text-theme-accent mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Type a command or search (e.g. /about, /projects, /theme)..."
            className="w-full bg-transparent text-white font-mono text-xs focus:outline-none placeholder:text-theme-text-muted"
          />
          <button
            onClick={onClose}
            className="p-1 rounded text-theme-text-muted hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Command Options List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredCommands.length > 0 ? (
            filteredCommands.map((cmd, idx) => {
              const isSelected = selectedIndex === idx;
              return (
                <div
                  key={cmd.id}
                  onClick={cmd.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer transition-colors duration-150 font-mono text-xs ${
                    isSelected
                      ? 'bg-theme-accent/20 text-white border border-theme-accent/50'
                      : 'text-theme-text-secondary hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={isSelected ? 'text-theme-accent' : 'text-theme-text-muted'}>
                      {cmd.icon}
                    </span>
                    <span>{cmd.label}</span>
                  </div>
                  <span className="text-[10px] text-theme-text-muted uppercase">
                    {cmd.category}
                  </span>
                </div>
              );
            })
          ) : (
            <div className="p-6 text-center text-xs font-mono text-theme-text-muted">
              No matching commands. Try searching /about, /projects, or /theme.
            </div>
          )}
        </div>

        {/* Footer helper */}
        <div className="px-4 py-2 bg-theme-bg/80 border-t border-theme-border/40 flex items-center justify-between text-[10px] font-mono text-theme-text-muted">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span className="text-theme-accent">JAISHMON ARCHITECTURE CLI</span>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { portfolioData, PROJECTS_URL } from '../../data/portfolio';
import { ThemeSwitcher } from '../interactive/ThemeSwitcher';
import { ExternalLink, Menu, X, Terminal, Search } from 'lucide-react';
import { useScrollProgress } from '../../hooks/useScrollProgress';

interface NavbarProps {
  onOpenCommandPalette: () => void;
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCommandPalette,
  onOpenTerminal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { activeSection, scrollProgress } = useScrollProgress();

  const navLinks = [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'EXPERIENCE', href: '#experience', id: 'experience' },
    { label: 'SKILLS', href: '#skills', id: 'skills' },
    { label: 'PROJECTS', href: '#projects', id: 'projects' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top scroll progress line */}
      <div
        className="h-[2px] bg-theme-accent transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="glass-panel border-b border-theme-border/60 bg-theme-bg/75 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* LEFT: Developer Logo Motif */}
          <a
            href="#home"
            className="flex items-center gap-2 group cursor-pointer"
            aria-label="Jaishmon M - Home"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-md bg-theme-surface border border-theme-border group-hover:border-theme-accent group-hover:shadow-glow-sm transition-all duration-300">
              <span className="font-mono text-xs font-bold text-theme-accent group-hover:scale-105 transition-transform">
                &lt;/&gt;
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-wider text-white group-hover:text-theme-accent transition-colors">
                {portfolioData.personal.name.toUpperCase()}
              </span>
              <span className="font-mono text-[9px] text-theme-text-muted tracking-widest hidden sm:inline">
                ENGINEER • CTO
              </span>
            </div>
          </a>

          {/* CENTER: Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-md font-mono text-xs tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-white/5 border-b-2 border-theme-accent font-semibold'
                      : 'text-theme-text-muted hover:text-white hover:bg-white/[0.03]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* RIGHT: Actions & CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Command Palette Trigger */}
            <button
              onClick={onOpenCommandPalette}
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-theme-border bg-theme-surface/60 hover:bg-theme-elevated/70 text-theme-text-muted hover:text-white text-xs font-mono transition-all duration-200"
              title="Open Command Palette (Press /)"
              aria-label="Command Palette"
            >
              <Search className="w-3.5 h-3.5 text-theme-accent" />
              <span className="text-[10px] bg-theme-card px-1.5 py-0.5 rounded border border-theme-border text-theme-accent">
                /
              </span>
            </button>

            {/* Mini Terminal Trigger */}
            <button
              onClick={onOpenTerminal}
              className="p-2 rounded-md border border-theme-border bg-theme-surface/60 hover:bg-theme-elevated/70 text-theme-text-muted hover:text-theme-accent transition-all duration-200"
              title="Open Developer Terminal"
              aria-label="Terminal"
            >
              <Terminal className="w-3.5 h-3.5" />
            </button>

            {/* Theme Selector */}
            <ThemeSwitcher />

            {/* Primary CTA: VIEW PROJECTS (Redirects to PROJECTS_URL) */}
            <a
              href={PROJECTS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-theme-accent/90 hover:bg-theme-accent text-white font-mono text-xs font-medium tracking-wider uppercase transition-all duration-300 shadow-glow-sm hover:shadow-glow hover:-translate-y-0.5 border border-theme-accent/50"
            >
              <span className="hidden sm:inline">VIEW PROJECTS</span>
              <span className="sm:hidden">PROJECTS</span>
              <ExternalLink className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md border border-theme-border bg-theme-surface/80 text-theme-text-secondary hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-theme-border bg-theme-bg/95 backdrop-blur-2xl px-4 py-4 space-y-2 animate-in fade-in duration-200">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-3 py-2 rounded-md font-mono text-xs tracking-wider transition-colors ${
                  isActive
                    ? 'text-white bg-theme-accent/15 border-l-2 border-theme-accent'
                    : 'text-theme-text-muted hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <div className="pt-2 border-t border-theme-border/50 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommandPalette();
              }}
              className="flex items-center justify-between px-3 py-2 rounded-md border border-theme-border text-xs font-mono text-theme-text-secondary hover:text-white"
            >
              <span>Command Palette</span>
              <span className="text-[10px] bg-theme-card px-1.5 py-0.5 rounded border border-theme-border text-theme-accent">
                /
              </span>
            </button>
            <a
              href={PROJECTS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-theme-accent text-white font-mono text-xs tracking-wider uppercase font-medium shadow-glow-sm"
            >
              <span>EXPLORE ALL PROJECTS</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

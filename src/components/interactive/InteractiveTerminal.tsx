import React, { useState, useRef, useEffect } from 'react';
import { portfolioData, PROJECTS_URL } from '../../data/portfolio';
import { X } from 'lucide-react';

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistoryItem {
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({
  isOpen,
  onClose,
}) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: 'init',
      output: (
        <div className="text-theme-text-secondary space-y-1">
          <div>Jaishmon OS v1.0.4 [Production Kernel]</div>
          <div>Type <span className="text-theme-accent">help</span> to view available system routines.</div>
        </div>
      ),
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();

    let output: React.ReactNode;

    switch (trimmed) {
      case 'help':
        output = (
          <div className="space-y-1 text-xs">
            <div>Available developer routines:</div>
            <div><span className="text-theme-accent font-bold">whoami</span> — Display operator identity</div>
            <div><span className="text-theme-accent font-bold">mission</span> — Print core directive</div>
            <div><span className="text-theme-accent font-bold">philosophy</span> — Iterative development blueprint</div>
            <div><span className="text-theme-accent font-bold">role</span> — Current executive & engineering position</div>
            <div><span className="text-theme-accent font-bold">education</span> — Academic credentials & timeline</div>
            <div><span className="text-theme-accent font-bold">stack</span> — Active languages & technologies</div>
            <div><span className="text-theme-accent font-bold">projects</span> — Redirect to showcase engine</div>
            <div><span className="text-theme-accent font-bold">contact</span> — Communication endpoints</div>
            <div><span className="text-theme-accent font-bold">clear</span> — Flush console screen buffer</div>
            <div><span className="text-theme-accent font-bold">exit</span> — Terminate session</div>
          </div>
        );
        break;

      case 'whoami':
        output = (
          <div className="text-emerald-400 font-semibold">
            jaishmon (Software Engineer & Builder)
          </div>
        );
        break;

      case 'mission':
        output = (
          <div className="text-theme-accent-light italic">
            "Curious enough to explore anything. Technical enough to understand it. Crazy enough to build it."
          </div>
        );
        break;

      case 'philosophy':
        output = (
          <div className="font-mono text-xs text-white">
            01 LEARN → 02 APPLY → 03 BUILD → 04 BREAK → 05 BUILD BETTER
          </div>
        );
        break;

      case 'role':
        output = (
          <div>
            Co-Founder & CTO at <span className="text-white font-bold">Zladinger</span> (Technology Solutions)
          </div>
        );
        break;

      case 'education':
        output = (
          <div>
            B.Tech Computer Science & Engineering (Blockchain) @ VIT-AP (Expected 2028)
          </div>
        );
        break;

      case 'stack':
        output = (
          <div className="text-xs">
            {portfolioData.techStrip.join(' • ')}
          </div>
        );
        break;

      case 'projects':
        window.open(PROJECTS_URL, '_blank');
        output = (
          <div className="text-emerald-400">
            Showcase portal opened in external tab: {PROJECTS_URL}
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-0.5 text-xs">
            <div>Email: {portfolioData.socials.email}</div>
            <div>GitHub: {portfolioData.socials.github}</div>
            <div>LinkedIn: {portfolioData.socials.linkedin}</div>
            <div>HackerRank: {portfolioData.socials.hackerrank}</div>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        return;

      case 'exit':
        onClose();
        return;

      default:
        output = (
          <div className="text-rose-400">
            command not found: {trimmed}. Type <span className="text-white underline">help</span> for routine registry.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    handleCommand(inputVal);
    setInputVal('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="w-full max-w-2xl rounded-xl bg-[#03060A] border border-theme-border shadow-glow-card overflow-hidden flex flex-col font-mono text-xs"
        style={{ height: '480px' }}
      >
        {/* Terminal Titlebar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-theme-surface border-b border-theme-border/60">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 cursor-pointer" onClick={onClose} />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-[11px] text-theme-text-muted ml-3 font-mono">
              jaishmon@terminal: ~ (bash)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="text-theme-text-muted hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div
          ref={scrollRef}
          className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#03060A]/95 text-theme-text-secondary select-text"
        >
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-theme-text-muted">
                <span className="text-theme-accent">jaishmon@sys:~$</span>
                <span className="text-white font-semibold">{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}

          {/* Active Input Line */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-1">
            <span className="text-theme-accent shrink-0">jaishmon@sys:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="flex-1 bg-transparent text-white focus:outline-none caret-theme-accent"
              autoFocus
            />
          </form>
        </div>

        {/* Terminal Footer */}
        <div className="px-4 py-1.5 bg-theme-surface/60 border-t border-theme-border/40 text-[10px] text-theme-text-muted flex items-center justify-between">
          <span>Type 'help' for command manual</span>
          <span>Status: 0 errors</span>
        </div>
      </div>
    </div>
  );
};

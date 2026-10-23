import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { TERMINAL_COMMANDS } from '../data/portfolioData';

interface HistoryItem {
  id: string;
  command: string;
  output?: string;
  isError?: boolean;
}

interface TerminalSectionProps {
  onToggleTheme: () => void;
}

export const TerminalSection: React.FC<TerminalSectionProps> = ({ onToggleTheme }) => {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [inputVal, setInputVal] = useState('');
  const [historyList, setHistoryList] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [dimensions, setDimensions] = useState('80x24');

  const terminalBodyRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Update dynamic dimensions
  const updateDimensions = useCallback(() => {
    if (!containerRef.current || !terminalBodyRef.current) return;
    const width = containerRef.current.clientWidth;
    const height = terminalBodyRef.current.clientHeight;
    const cols = Math.max(20, Math.floor((width - 32) / 8.5));
    const rows = Math.max(10, Math.floor(height / 20));
    setDimensions(`${cols}x${rows}`);
  }, []);

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [updateDimensions]);

  // Scroll to bottom when history changes
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (rawCommand: string) => {
    const trimmed = rawCommand.trim();
    if (!trimmed) return;

    setHistoryList((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const parts = trimmed.split(' ');
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1).join(' ');

    if (cmd === 'clear') {
      setHistory([]);
      return;
    }

    if (cmd === 'theme') {
      onToggleTheme();
      setHistory((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          command: trimmed,
          output: 'Theme toggled successfully!',
          isError: false,
        },
      ]);
      return;
    }

    const matchedCmd = TERMINAL_COMMANDS[cmd];

    if (matchedCmd !== undefined) {
      const result = typeof matchedCmd === 'function' ? matchedCmd(args) : matchedCmd;
      setHistory((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          command: trimmed,
          output: result,
          isError: false,
        },
      ]);
    } else {
      setHistory((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          command: trimmed,
          output: `bash: command not found: ${trimmed}. Type 'help' for available commands.`,
          isError: true,
        },
      ]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
      setInputVal('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyList.length > 0) {
        const nextIndex = historyIndex === -1 ? historyList.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIndex);
        setInputVal(historyList[nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        if (historyIndex < historyList.length - 1) {
          const nextIndex = historyIndex + 1;
          setHistoryIndex(nextIndex);
          setInputVal(historyList[nextIndex]);
        } else {
          setHistoryIndex(-1);
          setInputVal('');
        }
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const current = inputVal.trim().toLowerCase();
      if (!current) return;
      const availableCommands = [...Object.keys(TERMINAL_COMMANDS), 'clear', 'theme'];
      const match = availableCommands.find((c) => c.startsWith(current));
      if (match) {
        setInputVal(match);
      }
    }
  };

  const formatOutput = (text: string) => {
    // Regex to detect urls and wrap with anchor tags
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);

    return parts.map((part, index) => {
      if (part.match(urlRegex)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 dark:text-[#58a6ff] hover:underline font-bold"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <section id="terminal" className="space-y-6 sm:space-y-8 scroll-mt-24">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 border-b dark:border-white/10 border-indigo-200/50 pb-4">
        <div>
          <h2 className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">// Interactive Console</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold dark:text-slate-100 text-slate-900 mt-1">Dixit&apos;s Shell Terminal</h3>
        </div>
        <div className="dark:text-slate-400 text-slate-600 text-xs font-mono">
          Type <span className="text-emerald-600 dark:text-emerald-400 font-bold">help</span> or press{' '}
          <kbd className="px-1.5 py-0.5 rounded glass-card text-[10px]">Tab</kbd> to autocomplete
        </div>
      </div>

      {/* Realistic Terminal Box with Higher Transparency */}
      <div
        ref={containerRef}
        className="w-full rounded-2xl bg-white/40 dark:bg-[#0d1117]/50 backdrop-blur-3xl border border-indigo-200/60 dark:border-[#30363d]/70 terminal-font text-sm sm:text-base terminal-shadow overflow-hidden text-slate-800 dark:text-emerald-400 relative shadow-2xl transition-colors duration-300"
      >
        {/* Authentic Window Header Bar */}
        <div className="bg-indigo-50/50 dark:bg-[#161b22]/50 px-4 py-2.5 flex items-center justify-between border-b border-indigo-200/40 dark:border-[#30363d]/60 select-none backdrop-blur-xl">
          <div className="flex items-center space-x-2 w-1/4">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] cursor-pointer hover:opacity-80" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] cursor-pointer hover:opacity-80" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29] cursor-pointer hover:opacity-80" />
          </div>
          <div className="text-xs text-slate-600 dark:text-[#8b949e] font-mono font-medium text-center w-2/4 tracking-wide flex items-center justify-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> bash — dixit@dev-device:~
          </div>
          <div id="terminal-dimensions" className="text-[11px] text-slate-500 dark:text-[#6e7681] font-mono text-right w-1/4">
            {dimensions}
          </div>
        </div>

        {/* Terminal Output & Interactive Area */}
        <div
          ref={terminalBodyRef}
          id="terminal-body"
          className="p-4 sm:p-6 h-80 sm:h-96 overflow-y-auto space-y-2 text-slate-800 dark:text-[#c9d1d9] bg-white/20 dark:bg-[#0d1117]/30 relative break-words leading-relaxed selection:bg-emerald-500 selection:text-white cursor-text"
          onClick={() => inputRef.current?.focus()}
        >
          <div className="text-emerald-700 dark:text-emerald-400 font-mono text-xs sm:text-sm font-semibold">
            Linux dev-device 6.8.0-45-generic #45-Ubuntu LTS
          </div>
          <div className="text-slate-600 dark:text-[#8b949e] text-xs sm:text-sm pb-2 border-b border-indigo-200/40 dark:border-[#21262d]">
            Type <span className="text-emerald-700 dark:text-emerald-400 font-semibold">&apos;neofetch&apos;</span>,{' '}
            <span className="text-emerald-700 dark:text-emerald-400 font-semibold">&apos;ls&apos;</span>, or{' '}
            <span className="text-emerald-700 dark:text-emerald-400 font-semibold">&apos;help&apos;</span> to explore interactive shell commands.
          </div>

          {/* Command output history container */}
          <div id="terminal-history" className="space-y-2 font-mono">
            {history.map((item) => (
              <div key={item.id} className="space-y-1">
                <div className="flex items-center gap-2 font-semibold mt-2 break-all text-xs sm:text-sm">
                  <span className="text-indigo-600 dark:text-[#58a6ff]">dixit@dev</span>
                  <span className="text-slate-500 dark:text-[#8b949e]">:</span>
                  <span className="text-emerald-600 dark:text-[#7ee787]">~</span>
                  <span className="text-slate-700 dark:text-[#c9d1d9]">$</span>{' '}
                  <span className="text-slate-900 dark:text-[#f0f6fc]">{item.command}</span>
                </div>
                {item.output && (
                  <div
                    className={
                      item.isError
                        ? 'text-rose-600 dark:text-[#ff7b72] whitespace-pre-wrap pl-3 border-l-2 border-rose-500 dark:border-[#f85149] my-1 text-xs sm:text-sm font-mono break-all'
                        : 'text-slate-800 dark:text-[#c9d1d9] whitespace-pre-wrap leading-relaxed pl-3 border-l-2 border-emerald-500 dark:border-[#3fb950] my-1 text-xs sm:text-sm font-mono break-all'
                    }
                  >
                    {formatOutput(item.output)}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Active Input Prompt Inline inside Terminal Screen */}
          <div className="flex items-center gap-2 pt-1 font-mono text-xs sm:text-sm">
            <span className="text-indigo-600 dark:text-[#58a6ff] font-bold shrink-0">dixit@dev</span>
            <span className="text-slate-500 dark:text-[#8b949e] font-bold shrink-0">:</span>
            <span className="text-emerald-600 dark:text-[#7ee787] font-bold shrink-0">~</span>
            <span className="text-slate-700 dark:text-[#c9d1d9] font-bold shrink-0">$</span>
            <input
              ref={inputRef}
              type="text"
              id="terminal-input"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent border-none outline-none flex-1 text-slate-900 dark:text-emerald-400 terminal-font text-xs sm:text-sm focus:ring-0 p-0 placeholder:text-slate-500 dark:placeholder:text-[#484f58] caret-emerald-600 dark:caret-emerald-400 font-semibold dark:font-normal"
              placeholder="Type command..."
              autoComplete="off"
            />
          </div>
        </div>

        {/* Quick Action Footer Bar */}
        <div className="bg-indigo-50/50 dark:bg-[#161b22]/50 px-4 sm:px-6 py-2.5 border-t border-indigo-200/40 dark:border-[#30363d]/60 flex items-center gap-2 overflow-x-auto backdrop-blur-xl">
          <span className="text-slate-500 dark:text-[#6e7681] font-mono text-[10px] uppercase tracking-wider mr-1 shrink-0 font-semibold">
            Quick Cmds:
          </span>
          <button
            onClick={() => {
              executeCommand('neofetch');
              inputRef.current?.focus();
            }}
            className="px-2.5 py-1 rounded-md bg-white/50 dark:bg-[#21262d]/60 text-slate-700 dark:text-[#c9d1d9] hover:bg-emerald-50 dark:hover:bg-[#30363d] hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-mono text-xs border border-indigo-200/50 dark:border-[#30363d] shrink-0 cursor-pointer shadow-sm"
          >
            neofetch
          </button>
          <button
            onClick={() => {
              executeCommand('ls');
              inputRef.current?.focus();
            }}
            className="px-2.5 py-1 rounded-md bg-white/50 dark:bg-[#21262d]/60 text-slate-700 dark:text-[#c9d1d9] hover:bg-emerald-50 dark:hover:bg-[#30363d] hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-mono text-xs border border-indigo-200/50 dark:border-[#30363d] shrink-0 cursor-pointer shadow-sm"
          >
            ls
          </button>
          <button
            onClick={() => {
              executeCommand('skills');
              inputRef.current?.focus();
            }}
            className="px-2.5 py-1 rounded-md bg-white/50 dark:bg-[#21262d]/60 text-slate-700 dark:text-[#c9d1d9] hover:bg-emerald-50 dark:hover:bg-[#30363d] hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-mono text-xs border border-indigo-200/50 dark:border-[#30363d] shrink-0 cursor-pointer shadow-sm"
          >
            skills
          </button>
          <button
            onClick={() => {
              executeCommand('clear');
              inputRef.current?.focus();
            }}
            className="px-2.5 py-1 rounded-md bg-white/50 dark:bg-[#21262d]/60 text-rose-600 dark:text-[#ff7b72] hover:bg-rose-50 dark:hover:bg-[#da3633] hover:text-rose-700 dark:hover:text-white transition-colors font-mono text-xs border border-indigo-200/50 dark:border-[#30363d] shrink-0 cursor-pointer shadow-sm"
          >
            clear
          </button>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { User, Cpu, Terminal, Mail, Activity, Check, X, Menu } from 'lucide-react';

interface NavbarProps {
  reduceMotion: boolean;
  onToggleMotion: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ reduceMotion, onToggleMotion }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3.5 px-4 sm:px-8 md:px-12 w-full max-w-[100vw] transition-all duration-300" id="navbar">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between header-glass px-4 sm:px-6 py-2.5 rounded-full relative">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="flex items-center space-x-2.5 group shrink-0 py-1"
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
        >
          <span className="font-mono text-xs sm:text-sm tracking-wider font-semibold">
            <span
              className={`transition-colors duration-200 ${
                logoHovered
                  ? 'text-slate-900 dark:text-white'
                  : 'text-emerald-600 dark:text-emerald-400'
              }`}
            >
              printf
            </span>
            <span
              className={`transition-colors duration-200 ${
                logoHovered
                  ? 'text-emerald-600 dark:text-emerald-400'
                  : 'text-slate-900 dark:text-white'
              }`}
            >
              (&quot;dj&quot;)
            </span>
          </span>
        </a>

        {/* Central Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          <a
            href="#about"
            className="px-3 py-1.5 rounded-full text-xs font-mono font-medium dark:text-slate-300 text-slate-700 hover:text-emerald-500 dark:hover:text-emerald-400 hover:bg-emerald-500/10 transition-all flex items-center gap-1.5"
          >
            <User className="w-3.5 h-3.5 text-emerald-500" /> About
          </a>
          <a
            href="#tech"
            className="px-3 py-1.5 rounded-full text-xs font-mono font-medium dark:text-slate-300 text-slate-700 hover:text-indigo-500 dark:hover:text-indigo-400 hover:bg-indigo-500/10 transition-all flex items-center gap-1.5"
          >
            <Cpu className="w-3.5 h-3.5 text-indigo-500" /> Tech
          </a>
          <a
            href="#terminal"
            className="px-3 py-1.5 rounded-full text-xs font-mono font-medium dark:text-slate-300 text-slate-700 hover:text-purple-500 dark:hover:text-purple-400 hover:bg-purple-500/10 transition-all flex items-center gap-1.5"
          >
            <Terminal className="w-3.5 h-3.5 text-purple-500" /> Console
          </a>
          <a
            href="#contact"
            className="px-3 py-1.5 rounded-full text-xs font-mono font-medium dark:text-slate-300 text-slate-700 hover:text-amber-500 dark:hover:text-amber-400 hover:bg-amber-500/10 transition-all flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5 text-amber-500" /> Connect
          </a>
        </nav>

        {/* Right Utilities & Mobile Menu Toggle */}
        <div className="flex items-center space-x-2 shrink-0">
          <button
            onClick={onToggleMotion}
            className="px-3 py-1.5 rounded-full glass-card hover:border-emerald-500/40 flex items-center space-x-1.5 shadow-sm active:scale-95 transition-all duration-200 cursor-pointer text-xs font-mono font-semibold"
            title="Toggle Reduce Motion"
          >
            <Activity className="w-3.5 h-3.5 text-emerald-500" />
            <span className="text-slate-700 dark:text-slate-300">Motion:</span>
            <span className="inline-flex items-center">
              {!reduceMotion ? (
                <Check className="w-3.5 h-3.5 text-emerald-500 font-bold" />
              ) : (
                <X className="w-3.5 h-3.5 text-rose-500 font-bold" />
              )}
            </span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full glass-card text-slate-700 dark:text-slate-200 focus:outline-none active:scale-95 transition-transform shadow-sm hover:border-emerald-500/40 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Floating Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full max-w-7xl mx-auto mt-2 p-3 header-glass rounded-2xl shadow-2xl flex flex-col space-y-1.5 text-xs font-mono font-medium">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3.5 py-2.5 rounded-xl hover:bg-emerald-500/10 flex items-center gap-2.5 text-slate-800 dark:text-slate-200 transition-colors"
          >
            <User className="w-4 h-4 text-emerald-500" /> About
          </a>
          <a
            href="#tech"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3.5 py-2.5 rounded-xl hover:bg-indigo-500/10 flex items-center gap-2.5 text-slate-800 dark:text-slate-200 transition-colors"
          >
            <Cpu className="w-4 h-4 text-indigo-500" /> Tech Stack
          </a>
          <a
            href="#terminal"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3.5 py-2.5 rounded-xl hover:bg-purple-500/10 flex items-center gap-2.5 text-slate-800 dark:text-slate-200 transition-colors"
          >
            <Terminal className="w-4 h-4 text-purple-500" /> Console
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3.5 py-2.5 rounded-xl hover:bg-amber-500/10 flex items-center gap-2.5 text-slate-800 dark:text-slate-200 transition-colors"
          >
            <Mail className="w-4 h-4 text-amber-500" /> Connect
          </a>
        </div>
      )}
    </header>
  );
};

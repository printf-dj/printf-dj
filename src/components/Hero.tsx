import React from 'react';
import { Sparkles, Terminal } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-[62vh] sm:min-h-[65vh] flex flex-col justify-center items-center text-center pt-2 pb-4 parallax-layer">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-emerald-600 dark:text-emerald-400 text-xs font-mono font-medium mb-4 sm:mb-6 shadow-md">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        Available for frontend &amp; UI collaborations
      </div>

      <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4 sm:mb-6 leading-tight drop-shadow-sm">
        Hi <span className="wave-emoji">👋</span>, <br />
        I&apos;m <span className="text-gradient">Dixit Jhinkwan</span>
      </h1>

      <p className="text-sm sm:text-lg md:text-xl dark:text-slate-300 text-slate-700 max-w-2xl font-light mb-6 sm:mb-8 leading-relaxed px-2">
        A passionate{' '}
        <span className="dark:text-white text-slate-900 font-semibold underline decoration-emerald-500 underline-offset-4">
          Frontend Developer
        </span>{' '}
        from India 🇮🇳 crafting sleek, responsive, and performance-driven web interfaces.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto px-4 mb-2 sm:mb-6">
        <a
          href="#tech"
          className="w-full sm:w-auto px-7 py-3 rounded-full bg-gradient-to-r from-emerald-500 via-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-xl hover:scale-[1.03] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 group"
        >
          Explore Skills <Sparkles className="w-4 h-4 ui-arrow" />
        </a>
        <a
          href="#terminal"
          className="w-full sm:w-auto px-7 py-3 rounded-full glass-card dark:text-slate-200 text-slate-800 font-semibold text-sm hover:border-emerald-500/50 transition-all duration-200 flex items-center justify-center gap-2 shadow-md group"
        >
          Launch Interactive CLI <Terminal className="w-4 h-4 text-emerald-500" />
        </a>
      </div>
    </section>
  );
};

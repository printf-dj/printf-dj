import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-6 mt-12 border-t dark:border-white/10 border-indigo-200/50 text-xs font-mono dark:text-slate-400 text-slate-600 flex flex-col md:flex-row items-center justify-between gap-4">
      <div>Last Updated: 18:10:2026 19:25 IST</div>
      <div className="text-center px-4">
        <span className="italic text-xs font-semibold tracking-wide animated-quote-glow">
          &quot;In case I don&apos;t see ya, good afternoon, good evening, and good night!&quot;
        </span>
      </div>
      <div className="flex items-center gap-2">
        Vibecoded with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 heart-throb" />
      </div>
    </footer>
  );
};

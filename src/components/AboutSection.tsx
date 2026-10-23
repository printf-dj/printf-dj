import React from 'react';
import { Code2, Zap } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="space-y-6 sm:space-y-8 scroll-mt-24">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 border-b dark:border-white/10 border-indigo-200/50 pb-4">
        <div>
          <h2 className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">// Profile &amp; Philosophy</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold dark:text-slate-100 text-slate-900 mt-1">Design Systems &amp; Clean Code</h3>
        </div>
        <div className="dark:text-slate-400 text-slate-600 text-xs font-mono">
          Based in India • Open for Global Projects
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 glass-card glass-card-hover p-6 sm:p-8 rounded-3xl flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center text-emerald-500 mb-4 shadow-sm border border-emerald-500/20">
              <Code2 className="w-6 h-6" />
            </div>
            <h4 className="text-xl sm:text-2xl font-bold dark:text-white text-slate-900">Modern Frontend &amp; Interactive Engineering</h4>
            <p className="dark:text-slate-300 text-slate-600 leading-relaxed font-normal text-sm sm:text-base">
              Focused on refined user interface details, dynamic animation systems, high-speed responsiveness, and robust application architecture. Dedicated to producing pixel-perfect frontend experiences backed by modern web standards.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t dark:border-white/10 border-indigo-200/40 flex flex-wrap gap-2 text-xs font-mono dark:text-slate-400 text-slate-600">
            <span className="px-3 py-1.5 rounded-xl glass-card text-emerald-600 dark:text-emerald-400 font-semibold shadow-sm">⚡ Performance Optimized</span>
            <span className="px-3 py-1.5 rounded-xl glass-card text-indigo-600 dark:text-indigo-400 font-semibold shadow-sm">🎨 Modern UI Design</span>
          </div>
        </div>

        <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl flex flex-col justify-between space-y-6">
          <h4 className="text-lg sm:text-xl font-bold dark:text-white text-slate-900 flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-500" /> Core Focus
          </h4>

          <div className="space-y-4">
            <div className="p-3.5 rounded-2xl glass-card shadow-sm">
              <div className="text-xs dark:text-slate-400 text-slate-500 font-mono">Primary Frontend</div>
              <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-1">JavaScript / AngularJS / Tailwind</div>
            </div>
            <div className="p-3.5 rounded-2xl glass-card shadow-sm">
              <div className="text-xs dark:text-slate-400 text-slate-500 font-mono">Backend Stack</div>
              <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-1">Node.js, C#, Java, MySQL</div>
            </div>
            <div className="p-3.5 rounded-2xl glass-card shadow-sm">
              <div className="text-xs dark:text-slate-400 text-slate-500 font-mono">Design &amp; Creative Media</div>
              <div className="text-sm font-semibold text-purple-600 dark:text-purple-400 mt-1">Premiere Pro / Photoshop / Canva</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

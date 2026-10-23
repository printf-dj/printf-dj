import React, { useState } from 'react';
import { TECHNOLOGIES, Technology } from '../data/portfolioData';

type FilterType = 'all' | 'frontend' | 'backend' | 'cloud' | 'design';

export const TechSection: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredTechnologies = filter === 'all'
    ? TECHNOLOGIES
    : TECHNOLOGIES.filter((t) => t.category === filter);

  const filters: { key: FilterType; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend & DB' },
    { key: 'cloud', label: 'Cloud & Tools' },
    { key: 'design', label: 'Media & Design' },
  ];

  const renderIcon = (tech: Technology) => {
    if (tech.name === 'Premiere Pro') {
      return (
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00005b] to-[#120078] text-[#9999ff] font-extrabold flex items-center justify-center text-base shadow-md border border-[#3030b7] group-hover:scale-110 transition-transform duration-200">
          Pr
        </div>
      );
    }
    if (tech.name === 'Photoshop') {
      return (
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#001e36] to-[#003459] text-[#31a8ff] font-extrabold flex items-center justify-center text-base shadow-md border border-[#0086ff] group-hover:scale-110 transition-transform duration-200">
          Ps
        </div>
      );
    }
    if (tech.icon) {
      return (
        <i className={`${tech.icon} text-3xl group-hover:scale-110 transition-transform duration-200`} />
      );
    }
    return null;
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= rating ? 'text-amber-400' : 'text-slate-400/40 dark:text-slate-600'}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <section id="tech" className="space-y-6 sm:space-y-8 scroll-mt-24">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-b dark:border-white/10 border-indigo-200/50 pb-5">
        <div className="space-y-2">
          <h2 className="text-xs font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">// Toolbox &amp; Ecosystem</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold dark:text-slate-100 text-slate-900 leading-snug">Languages &amp; Technologies</h3>
          <p className="text-xs sm:text-sm dark:text-slate-400 text-slate-600 pt-1">Hover or tap any card to view proficiency ratings.</p>
        </div>
        <div className="flex flex-wrap gap-2 w-full md:w-auto" id="tech-filters">
          {filters.map((f) => {
            const isActive = filter === f.key;
            return (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 ${
                  isActive
                    ? 'bg-emerald-500 text-white font-bold shadow-lg shadow-emerald-500/20'
                    : 'glass-card dark:text-slate-300 text-slate-700 dark:hover:text-white hover:text-emerald-700 shadow-sm'
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5 pt-2 pb-4" id="tech-grid">
        {filteredTechnologies.map((tech) => (
          <div key={tech.name} className="skill-item-wrapper">
            <div
              className={`glass-card glass-card-hover p-4 rounded-2xl skill-box cursor-pointer group transition-all duration-200 border border-slate-300 dark:border-slate-800 ${tech.color}`}
            >
              {renderIcon(tech)}
              <span className="text-xs sm:text-sm font-semibold dark:text-slate-100 text-slate-800 text-center tracking-wide mt-2">
                {tech.name}
              </span>
            </div>
            <div className="skill-stars text-xs tracking-wider flex items-center justify-center">
              {renderStars(tech.rating)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

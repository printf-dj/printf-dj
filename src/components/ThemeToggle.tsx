import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  return (
    <button
      id="theme-toggle"
      onClick={onToggle}
      className="fixed bottom-20 right-6 z-40 w-11 h-11 rounded-full glass-card flex items-center justify-center shadow-xl active:scale-95 transition-all duration-200 cursor-pointer hover:border-emerald-500/50"
      title={`Theme: ${isDark ? 'Dark' : 'Light'} (Follows system theme)`}
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-amber-400" />
      ) : (
        <Moon className="w-5 h-5 text-indigo-600" />
      )}
    </button>
  );
};

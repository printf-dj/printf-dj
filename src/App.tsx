import React, { useState, useEffect } from 'react';
import { ParticleCanvas } from './components/ParticleCanvas';
import { ParallaxOrbs } from './components/ParallaxOrbs';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { TechSection } from './components/TechSection';
import { TerminalSection } from './components/TerminalSection';
import { ContactSection } from './components/ContactSection';
import { ThemeToggle } from './components/ThemeToggle';
import { Footer } from './components/Footer';
import { PageLoader } from './components/PageLoader';

export const App: React.FC = () => {
  const [reduceMotion, setReduceMotion] = useState<boolean>(() => {
    return localStorage.getItem('reduceMotion') === 'true';
  });

  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem('theme');
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      } catch {
        return false;
      }
    }
    return false;
  });

  useEffect(() => {
    try {
      localStorage.removeItem('theme');
    } catch {}

    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = (matchesDark: boolean) => {
      setIsDark(matchesDark);
      if (matchesDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    // Synchronize initial state with current system preference
    applyTheme(mediaQuery.matches);

    // Live update when user system theme changes
    const handleThemeChange = (e: MediaQueryListEvent) => {
      applyTheme(e.matches);
    };

    mediaQuery.addEventListener('change', handleThemeChange);
    return () => mediaQuery.removeEventListener('change', handleThemeChange);
  }, []);

  const toggleMotion = () => {
    setReduceMotion((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('reduceMotion', String(next));
      } catch {}
      return next;
    });
  };

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return next;
    });
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-emerald-500 selection:text-white">
      {/* Website Loading Screen */}
      <PageLoader />

      {/* Background Interactive Particles */}
      <ParticleCanvas reduceMotion={reduceMotion} />

      {/* Floating Glow Orbs */}
      <ParallaxOrbs reduceMotion={reduceMotion} />

      {/* Glassmorphic Navbar */}
      <Navbar reduceMotion={reduceMotion} onToggleMotion={toggleMotion} />

      {/* Main Content Sections */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-20 sm:pt-24 space-y-16 sm:space-y-20 md:space-y-24 w-full overflow-x-hidden">
        <Hero />
        <AboutSection />
        <TechSection />
        <TerminalSection onToggleTheme={toggleTheme} />
        <ContactSection />
      </main>

      {/* Floating Theme Switcher */}
      <ThemeToggle isDark={isDark} onToggle={toggleTheme} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;

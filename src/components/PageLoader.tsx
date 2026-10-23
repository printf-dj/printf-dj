import React, { useEffect, useState } from 'react';

export const PageLoader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    // Inject Tenor embed script if not already present
    const scriptId = 'tenor-embed-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'https://tenor.com/embed.js';
      document.body.appendChild(script);
    }

    // Dismiss loader after display duration
    const timer = setTimeout(() => {
      setFadingOut(true);
      const unmountTimer = setTimeout(() => {
        setLoading(false);
      }, 500);
      return () => clearTimeout(unmountTimer);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      id="site-loader"
      className={`fixed inset-0 top-0 left-0 right-0 bottom-0 w-screen h-screen z-[999999] flex flex-col items-center justify-center bg-[#f0f4ff] dark:bg-[#0b132b] transition-all duration-500 ease-in-out select-none ${
        fadingOut ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      <div className="glass-card p-6 sm:p-8 rounded-3xl flex flex-col items-center justify-center shadow-2xl border border-emerald-500/30 max-w-[280px] sm:max-w-[320px] w-full mx-4 relative overflow-hidden">
        {/* Ambient Glow behind the GIF */}
        <div className="absolute w-36 h-36 rounded-full bg-emerald-500/20 blur-2xl pointer-events-none -z-10 animate-pulse" />

        {/* Tenor GIF Embed Container */}
        <div className="w-40 h-40 sm:w-48 sm:h-48 relative flex items-center justify-center rounded-2xl overflow-hidden shadow-inner bg-black/10 dark:bg-black/30">
          {/* Instant Direct GIF to prevent any delay */}
          <img
            src="https://media.tenor.com/cPvlCSJmlwYAAAAM/shapes.gif"
            alt="Shapes Green Transform"
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* Tenor Embed markup as requested */}
          <div
            className="tenor-gif-embed absolute inset-0 opacity-0 pointer-events-none"
            data-postid="15157741"
            data-share-method="host"
            data-aspect-ratio="1"
            data-width="100%"
          >
            <a href="https://tenor.com/view/shapes-green-transform-gif-15157741">Shapes Green GIF</a>
            from <a href="https://tenor.com/search/shapes-gifs">Shapes GIFs</a>
          </div>
        </div>

        {/* Brand & Loading Indicator */}
        <div className="mt-5 flex flex-col items-center space-y-2">
          <div className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-slate-800 dark:text-slate-100">
            <span className="text-emerald-600 dark:text-emerald-400">printf</span>
            <span>(&quot;welcome&quot;)</span>
          </div>

          <div className="flex items-center space-x-2 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
            <span className="tracking-widest">INITIALIZING...</span>
          </div>
        </div>

        {/* Subtle Progress Bar */}
        <div className="w-full h-1 bg-slate-200 dark:bg-slate-800 rounded-full mt-4 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-emerald-500 via-indigo-500 to-purple-500 rounded-full animate-[pulse_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
};

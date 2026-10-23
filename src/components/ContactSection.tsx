import React, { useState } from 'react';
import { MailCheck, ArrowUpRight, Share2, ShieldCheck, X, ArrowRight, Check } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [captchaOpen, setCaptchaOpen] = useState(false);
  const [num1, setNum1] = useState(5);
  const [num2, setNum2] = useState(3);
  const [userAnswer, setUserAnswer] = useState('');
  const [hasError, setHasError] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const openCaptcha = () => {
    const n1 = Math.floor(Math.random() * 8) + 2;
    const n2 = Math.floor(Math.random() * 8) + 1;
    setNum1(n1);
    setNum2(n2);
    setUserAnswer('');
    setHasError(false);
    setCaptchaOpen(true);
  };

  const handleVerify = () => {
    const val = parseInt(userAnswer.trim(), 10);
    if (val === num1 + num2) {
      setCaptchaOpen(false);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 4000);
      window.location.href = 'mailto:dixitjhinkwan@outlook.in';
    } else {
      setHasError(true);
      setUserAnswer('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleVerify();
    }
  };

  return (
    <>
      <section id="contact" className="space-y-6 sm:space-y-8 scroll-mt-24">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 border-b dark:border-white/10 border-indigo-200/50 pb-4">
          <div>
            <h2 className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">// Get In Touch</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold dark:text-slate-100 text-slate-900 mt-1">Let&apos;s Connect &amp; Build</h3>
          </div>
          <div className="dark:text-slate-400 text-slate-600 text-xs font-mono">
            Open for Frontend Engagements &amp; Collaboration
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Direct Email Card */}
          <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center text-emerald-500 mb-2 shadow-sm border border-emerald-500/20">
                <MailCheck className="w-6 h-6" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold dark:text-white text-slate-900">Direct Message &amp; Email</h4>
              <p className="dark:text-slate-300 text-slate-600 text-sm leading-relaxed">
                Have an interesting project, question, or opportunity? Feel free to reach out directly via email.
              </p>
            </div>

            <div className="p-4 rounded-2xl glass-card flex items-center justify-between gap-3 shadow-sm">
              <div className="overflow-hidden">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block">Primary Email</span>
                <span className="text-sm font-semibold font-mono text-slate-900 dark:text-emerald-400 truncate block">*****@####.in</span>
              </div>
              <button
                onClick={openCaptcha}
                className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs transition-colors shrink-0 flex items-center gap-1.5 shadow-md group cursor-pointer"
              >
                Send Email <ArrowUpRight className="w-3.5 h-3.5 ui-arrow" />
              </button>
            </div>
          </div>

          {/* Social Presence Grid */}
          <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl flex flex-col justify-between space-y-6 pb-8 sm:pb-8">
            <div className="space-y-2">
              <h4 className="text-xl font-bold dark:text-white text-slate-900 flex items-center gap-2">
                <Share2 className="w-5 h-5 text-indigo-500" /> Online Presence
              </h4>
              <p className="dark:text-slate-300 text-slate-600 text-sm">
                Connect with me across social platforms or inspect code repositories.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2 pb-1">
              {/* GitHub */}
              <div className="social-item" data-social="github">
                <a
                  href="https://github.com/printf-dj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn github-hover w-12 h-12 rounded-2xl glass-card flex items-center justify-center text-slate-700 dark:text-slate-200 shadow-sm"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <span className="social-label">GitHub</span>
              </div>

              {/* Twitter/X */}
              <div className="social-item" data-social="twitter">
                <a
                  href="https://twitter.com/printf_dj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn twitter-hover w-12 h-12 rounded-2xl glass-card flex items-center justify-center text-slate-700 dark:text-slate-200 shadow-sm"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <span className="social-label">Twitter</span>
              </div>

              {/* LinkedIn */}
              <div className="social-item" data-social="linkedin">
                <a
                  href="https://linkedin.com/in/dixitjhinkwan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn linkedin-hover w-12 h-12 rounded-2xl glass-card flex items-center justify-center text-slate-700 dark:text-slate-200 shadow-sm"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                  </svg>
                </a>
                <span className="social-label">LinkedIn</span>
              </div>

              {/* Instagram */}
              <div className="social-item" data-social="instagram">
                <a
                  href="https://instagram.com/printf_dj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn instagram-hover w-12 h-12 rounded-2xl glass-card flex items-center justify-center text-slate-700 dark:text-slate-200 shadow-sm"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <span className="social-label">Instagram</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive CAPTCHA Modal */}
      {captchaOpen && (
        <div
          className="fixed inset-0 top-0 left-0 right-0 bottom-0 w-screen h-screen w-full h-full min-h-screen min-w-full z-[99999] flex items-center justify-center p-4 bg-slate-950/60 dark:bg-slate-950/80 backdrop-blur-md transition-all duration-300"
          onClick={(e) => {
            if (e.target === e.currentTarget) setCaptchaOpen(false);
          }}
        >
          <div className="glass-card max-w-md w-full p-6 sm:p-8 rounded-3xl shadow-2xl relative space-y-6 border border-emerald-500/30 bg-white/70 dark:bg-[#161e31]/80">
            <button
              onClick={() => setCaptchaOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full glass-card hover:bg-rose-500/20 text-slate-700 dark:text-slate-300 hover:text-rose-500 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-card text-emerald-600 dark:text-emerald-400 text-xs font-mono shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5" /> Security Check
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">Verify to Send Email</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                Please solve the security challenge below to open your mail client.
              </p>
            </div>

            <div className="p-4 rounded-2xl glass-card flex items-center justify-between border border-emerald-500/25 shadow-sm bg-white/80 dark:bg-slate-900/50">
              <span className="text-base font-mono font-bold text-slate-900 dark:text-emerald-400">
                {num1} + {num2} = ?
              </span>
              <input
                type="number"
                value={userAnswer}
                onChange={(e) => {
                  setUserAnswer(e.target.value);
                  setHasError(false);
                }}
                onKeyDown={handleKeyDown}
                autoFocus
                className="w-28 px-3.5 py-2.5 rounded-xl glass-card text-center font-mono font-bold text-slate-900 dark:text-white outline-none border border-indigo-200/50 dark:border-white/10 focus:border-emerald-500 dark:focus:border-emerald-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none shadow-sm placeholder:text-slate-400 dark:placeholder:text-slate-500 bg-white/90 dark:bg-slate-900/80"
                placeholder="Ans"
                autoComplete="off"
              />
            </div>

            {hasError && (
              <div className="text-xs text-rose-600 dark:text-rose-400 font-mono">
                Incorrect answer. Please try again!
              </div>
            )}

            <button
              onClick={handleVerify}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 via-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
            >
              Verify &amp; Open Mail Client <ArrowRight className="w-4 h-4 ui-arrow" />
            </button>
          </div>
        </div>
      )}

      {/* Success Toast Notification */}
      <div
        className={`fixed bottom-6 right-6 z-[99999] glass-card px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-emerald-500/40 transition-all duration-300 ${
          showToast ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
        }`}
      >
        <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center">
          <Check className="w-4 h-4" />
        </div>
        <div>
          <div className="text-xs font-bold dark:text-white text-slate-900 font-mono">Verified Successfully!</div>
          <div className="text-xs text-slate-600 dark:text-slate-400">Opening email client to dixitjhinkwan@outlook.in</div>
        </div>
      </div>
    </>
  );
};

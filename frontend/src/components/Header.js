import React, { useState } from 'react';
import { LANGUAGES, THEMES } from '../data/vendorKnowledge';

export default function Header({
  currentLang,
  onLanguageChange,
  currentTheme,
  onThemeChange,
  onOpenSchemesModal,
  onOpenJudgeDrawer,
}) {
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const activeThemeObj = THEMES.find((t) => t.id === currentTheme) || THEMES[0];

  return (
    <header className="sticky top-0 z-40 bg-cream/90 backdrop-blur-lg border-b border-awning/10 px-4 sm:px-6 py-2.5 transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-awning to-awning-light flex items-center justify-center shadow-md shadow-awning/15 text-white group-hover:scale-105 transition">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M3 9l1.5-5h15L21 9M3 9v10a1 1 0 001 1h16a1 1 0 001-1V9M3 9h18M8 13v4M16 13v4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-2xl tracking-tight text-awning leading-none">
                  Waypoint
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-marigold-soft text-marigold-dark border border-marigold/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  v1.0 Live
                </span>
              </div>
              <p className="text-[10px] text-ink-muted hidden sm:block">
                Street Vendor Digitalization Agent
              </p>
            </div>
          </a>
        </div>

        {/* Center Nav Links (Hidden on small, visible on lg) */}
        <nav className="hidden lg:flex items-center gap-1 text-xs font-semibold text-ink-light">
          <a
            href="#hero"
            className="px-3 py-1.5 rounded-lg hover:text-awning hover:bg-awning/5 transition"
          >
            Overview
          </a>
          <a
            href="#story"
            className="px-3 py-1.5 rounded-lg hover:text-awning hover:bg-awning/5 transition"
          >
            The Problem
          </a>
          <a
            href="#architecture"
            className="px-3 py-1.5 rounded-lg hover:text-awning hover:bg-awning/5 transition"
          >
            Architecture
          </a>
          <a
            href="#impact"
            className="px-3 py-1.5 rounded-lg hover:text-awning hover:bg-awning/5 transition"
          >
            Impact
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          
          {/* Judge Tech Specs Button (Special for Hackathons!) */}
          <button
            onClick={onOpenJudgeDrawer}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-marigold-soft hover:bg-marigold text-awning-dark border border-marigold/40 transition active:scale-95 shadow-xs"
            title="Open Hackathon Judge Specs"
          >
            <span className="text-sm">⚖️</span>
            <span className="hidden sm:inline">Judge Specs</span>
            <span className="sm:hidden">Specs</span>
          </button>
          
          {/* Theme Palette Switcher */}
          <div className="relative">
            <button
              onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
              className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-awning/20 text-awning hover:border-marigold transition shadow-xs active:scale-95"
              title="Change Pantone Color Palette"
            >
              <div className="flex items-center -space-x-1">
                {activeThemeObj.swatches.map((color, i) => (
                  <span
                    key={i}
                    className="w-3 h-3 rounded-full border border-white"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <span className="hidden md:inline font-bold">Theme</span>
              <svg className="w-3 h-3 text-ink-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Theme Dropdown Popover */}
            {isThemeMenuOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setIsThemeMenuOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-awning/15 p-2 z-50 animate-fadeIn">
                  <div className="px-3 py-1.5 border-b border-awning/10 mb-1 text-[11px] font-bold text-ink-muted uppercase tracking-wider">
                    Pantone Color Schemes
                  </div>
                  <div className="space-y-1">
                    {THEMES.map((theme) => {
                      const isSelected = theme.id === currentTheme;
                      return (
                        <button
                          key={theme.id}
                          onClick={() => {
                            onThemeChange(theme.id);
                            setIsThemeMenuOpen(false);
                          }}
                          className={`w-full text-left p-2.5 rounded-xl transition flex items-center justify-between ${
                            isSelected
                              ? 'bg-awning/10 text-awning font-bold'
                              : 'hover:bg-cream text-ink'
                          }`}
                        >
                          <div className="space-y-0.5">
                            <div className="text-xs font-bold leading-tight">
                              {theme.name}
                            </div>
                            <div className="text-[10px] text-ink-muted leading-tight">
                              {theme.subname}
                            </div>
                            <div className="text-[9px] text-marigold-dark font-mono">
                              {theme.pantone}
                            </div>
                          </div>

                          <div className="flex items-center -space-x-1.5 pl-2 flex-shrink-0">
                            {theme.swatches.map((color, i) => (
                              <span
                                key={i}
                                className="w-4 h-4 rounded-full border-2 border-white shadow-xs"
                                style={{ backgroundColor: color }}
                              />
                            ))}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Schemes Guide Button */}
          <button
            onClick={onOpenSchemesModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-awning hover:bg-awning/5 transition border border-awning/20 active:scale-95"
          >
            <svg className="w-4 h-4 text-marigold-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="hidden md:inline">Govt Schemes Guide</span>
            <span className="md:hidden">Schemes</span>
          </button>

          {/* Language Selector */}
          <div className="relative inline-flex items-center">
            <svg className="w-3.5 h-3.5 text-ink-muted absolute left-2.5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            <select
              value={currentLang}
              onChange={(e) => onLanguageChange(e.target.value)}
              className="pl-8 pr-4 py-1.5 text-xs font-semibold bg-white border border-awning/15 rounded-lg text-ink focus:outline-none focus:ring-2 focus:ring-marigold/50 cursor-pointer shadow-sm hover:border-awning/30 transition"
            >
              {LANGUAGES.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.native} ({lang.label})
                </option>
              ))}
            </select>
          </div>
        </div>

      </div>
    </header>
  );
}

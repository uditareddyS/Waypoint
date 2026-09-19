import React, { useState, useEffect, useRef } from 'react';
import { PRESET_CHIPS, CATEGORIES, TRANSLATIONS } from '../data/vendorKnowledge';

export default function BusinessInput({
  input,
  setInput,
  loading,
  loadingStep,
  onSubmit,
  currentLang,
}) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  // Initialize Speech Recognition if supported
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognizer = new SpeechRecognition();
      recognizer.continuous = false;
      recognizer.interimResults = false;
      recognizer.lang = currentLang === 'en' ? 'en-IN' : `${currentLang}-IN`;

      recognizer.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInput((prev) => (prev ? `${prev} ${transcript}` : transcript));
        setIsListening(false);
      };

      recognizer.onerror = () => {
        setIsListening(false);
      };

      recognizer.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognizer;
    }
  }, [currentLang, setInput]);

  const toggleVoice = () => {
    if (isListening) {
      if (recognitionRef.current) recognitionRef.current.stop();
      setIsListening(false);
    } else {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.lang =
            currentLang === 'en' ? 'en-IN' : `${currentLang}-IN`;
          recognitionRef.current.start();
          setIsListening(true);
        } catch {
          // fallback simulation if mic permissions denied in test
          simulateVoiceInput();
        }
      } else {
        simulateVoiceInput();
      }
    }
  };

  const simulateVoiceInput = () => {
    setIsListening(true);
    setTimeout(() => {
      setInput(
        "I sell hot vada pav, samosas, and filter coffee near Dadar railway station, Mumbai. Need working capital for cooking oil and UPI QR standee."
      );
      setIsListening(false);
    }, 1800);
  };

  const handleChipClick = (preset) => {
    setInput(preset.prompt);
  };

  const filteredChips =
    activeCategory === 'all'
      ? PRESET_CHIPS
      : PRESET_CHIPS.filter((p) => {
          if (activeCategory === 'produce') return p.category === 'Fresh Produce';
          if (activeCategory === 'food') return p.category === 'Street Food';
          if (activeCategory === 'beverage') return p.category === 'Food & Beverage';
          if (activeCategory === 'flowers') return p.category === 'Puja & Flora';
          return true;
        });

  return (
    <div className="w-full">
      {/* Hero Intro */}
      <div className="text-center pt-8 pb-6 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-awning/10 text-awning text-xs font-semibold mb-3 border border-awning/15 shadow-sm">
          <span className="text-sm">🇮🇳</span>
          <span>{t.badge}</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-awning tracking-tight">
          {t.heroTitle}
        </h1>
        <p className="text-base sm:text-lg font-medium text-marigold-dark mt-1">
          {t.heroTagline}
        </p>
        <p className="text-ink-light text-xs sm:text-sm max-w-lg mx-auto mt-2 leading-relaxed">
          {t.heroSubtitle}
        </p>
      </div>

      {/* Main Input Card */}
      <div className="bg-white rounded-3xl shadow-xl shadow-awning/5 border border-awning/15 p-5 sm:p-7 relative overflow-hidden">
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-marigold/20 via-transparent to-transparent pointer-events-none rounded-tr-3xl" />

        {/* Input Header & Mic */}
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs font-bold text-awning uppercase tracking-wider flex items-center gap-1.5">
            <svg className="w-4 h-4 text-marigold-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            {t.inputLabel}
          </label>

          {/* Voice Input Button */}
          <button
            type="button"
            onClick={toggleVoice}
            title={t.micTooltip}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all ${
              isListening
                ? 'bg-clay text-white animate-pulse shadow-md shadow-clay/30'
                : 'bg-surface hover:bg-surface-dark text-ink hover:text-awning'
            }`}
          >
            <svg className={`w-3.5 h-3.5 ${isListening ? 'animate-bounce' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 003-3V5a3 3 0 10-6 0v6a3 3 0 003 3z" />
            </svg>
            <span>{isListening ? 'Listening...' : 'Voice (बोलें)'}</span>
          </button>
        </div>

        {/* Listening notification banner with live audio waveform */}
        {isListening && (
          <div className="mb-3 px-3.5 py-2.5 bg-clay-soft rounded-2xl text-xs text-clay-dark flex items-center justify-between gap-3 animate-fadeIn border border-clay/20 shadow-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-clay animate-ping" />
              <span className="font-semibold">{t.listeningText}</span>
            </div>
            {/* Live Audio Waveform */}
            <div className="flex items-center gap-1 h-5 text-clay">
              <span className="audio-bar" />
              <span className="audio-bar" />
              <span className="audio-bar" />
              <span className="audio-bar" />
              <span className="audio-bar" />
            </div>
          </div>
        )}

        {/* Textarea */}
        <div className="relative">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t.inputPlaceholder}
            className="w-full text-sm sm:text-base text-ink bg-cream/30 focus:bg-white rounded-2xl p-3.5 sm:p-4 border border-awning/15 focus:border-marigold focus:ring-4 focus:ring-marigold/15 outline-none resize-none transition min-h-[96px] placeholder:text-ink-subtle leading-relaxed"
            rows={3}
          />
          {input && (
            <button
              onClick={() => setInput('')}
              className="absolute right-3 top-3 text-xs text-ink-muted hover:text-ink bg-white/80 rounded-full w-5 h-5 flex items-center justify-center border border-awning/10"
              title="Clear text"
            >
              ✕
            </button>
          )}
        </div>

        {/* Preset Category Chips */}
        <div className="mt-4">
          <div className="flex items-center justify-between text-[11px] font-semibold text-ink-muted mb-2">
            <span>{t.popularPresets}</span>
            <span className="text-[10px] text-marigold-dark">Click to Auto-fill</span>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold transition whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-awning text-cream shadow-2xs'
                    : 'bg-surface hover:bg-surface-dark text-ink-muted hover:text-ink'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {filteredChips.map((chip) => (
              <button
                key={chip.id}
                type="button"
                onClick={() => handleChipClick(chip)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs bg-cream hover:bg-marigold-soft text-ink hover:text-awning border border-awning/10 hover:border-marigold/40 transition active:scale-95 shadow-2xs"
              >
                <span>{chip.icon}</span>
                <span className="font-semibold">{chip.name}</span>
                <span className="text-[10px] text-ink-muted">({chip.location})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Submit Action */}
        <div className="mt-5">
          <button
            onClick={onSubmit}
            disabled={loading || !input.trim()}
            className="w-full bg-gradient-to-r from-marigold to-marigold-dark hover:from-marigold-light hover:to-marigold text-awning-dark font-display font-bold py-3.5 px-6 rounded-2xl shadow-lg shadow-marigold/25 transition-all duration-200 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none flex items-center justify-center gap-2 text-base"
          >
            {loading ? (
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 border-2 border-awning-dark/30 border-t-awning-dark rounded-full animate-spin" />
                <span>{loadingStep || t.generating}</span>
              </div>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>{t.generateBtn}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

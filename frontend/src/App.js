import { useState } from 'react';

const PRESETS = [
  "I sell fruit in Pune's Camp area",
  "I run a tea stall near Andheri station",
  "I sell vegetables in Koramangala",
];

const PIPELINE = [
  { label: "Input", detail: "Voice/text parsed" },
  { label: "Bedrock", detail: "Extracts business profile" },
  { label: "OpenSearch", detail: "Retrieves matching schemes" },
  { label: "Bedrock", detail: "Synthesizes your kit" },
];

function App() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(-1);
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setResult(null);
    setStep(0);

    let s = 0;
    const interval = setInterval(() => {
      s += 1;
      setStep(s);
      if (s >= PIPELINE.length - 1) clearInterval(interval);
    }, 500);

    setTimeout(() => {
      clearInterval(interval);
      setResult({
        scheme: "PM SVANidhi",
        schemeDetail: "Eligible for ₹10,000 working capital loan — no collateral required.",
        upi: "Scan to activate your UPI merchant QR",
        promo: "आज ताज़ा फल! Camp area, Pune में सबसे अच्छे दाम पर।",
      });
      setLoading(false);
    }, 2200);
  };

  const handleCopy = () => {
    if (!result) return;
    navigator.clipboard.writeText(result.promo);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="min-h-screen bg-cream font-body text-ink">
      {/* Hero */}
      <header className="pt-14 pb-10 px-6 text-center border-b border-awning/10">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-awning mb-4 motion-safe:animate-[floatSlow_4s_ease-in-out_infinite]">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FDF8F0" strokeWidth="2">
            <path d="M3 9l1.5-5h15L21 9M3 9v10a1 1 0 001 1h16a1 1 0 001-1V9M3 9h18M8 13v4M16 13v4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h1 className="font-display text-4xl font-bold text-awning">Waypoint</h1>
        <p className="text-ink/60 mt-2 max-w-xs mx-auto text-[15px]">
          Tell us about your business. We'll build your digital starter kit.
        </p>
      </header>

      <main className="px-6 -mt-2 max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-awning/10 p-5 mt-8">
          <label className="text-xs font-semibold text-awning/70 tracking-wide">
            Describe your business
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="I sell fruit in Pune's Camp area"
            className="w-full mt-2 text-[15px] text-ink bg-transparent focus:outline-none resize-none placeholder:text-ink/30"
            rows={2}
          />

          <div className="flex flex-wrap gap-2 mt-3">
            {PRESETS.map((p, i) => (
              <button
                key={p}
                onClick={() => setInput(p)}
                style={{ animationDelay: `${i * 80}ms` }}
                className="text-xs px-3 py-1.5 rounded-full bg-surface text-awning/80 border border-awning/10
                           motion-safe:animate-[slideUpFade_0.4s_ease-out_backwards]
                           hover:bg-marigold/20 hover:border-marigold/40 transition-colors"
              >
                {p.length > 28 ? p.slice(0, 28) + '…' : p}
              </button>
            ))}
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="mt-4 w-full bg-marigold text-awning font-display font-bold py-3 rounded-xl
                       transition-all duration-150 active:scale-[0.98] active:brightness-95
                       hover:brightness-105 disabled:opacity-60 disabled:active:scale-100"
          >
            {loading ? "Generating..." : "Generate my kit"}
          </button>
        </div>

        {/* Architecture pipeline — visible during generation, tied to real steps */}
        {loading && (
          <div className="mt-6 bg-surface rounded-2xl p-5 motion-safe:animate-[slideUpFade_0.3s_ease-out]">
            <span className="text-xs uppercase tracking-wide text-awning/60 font-semibold block mb-4">
              Agent pipeline
            </span>
            <div className="flex items-center justify-between">
              {PIPELINE.map((node, i) => (
                <div key={i} className="flex items-center flex-1 last:flex-none">
                  <div className="flex flex-col items-center gap-1.5">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold
                                  transition-all duration-300
                                  ${i <= step
                                    ? 'bg-marigold text-awning scale-110'
                                    : 'bg-white text-ink/30 border border-awning/10'}`}
                    >
                      {i < step ? '✓' : i + 1}
                    </div>
                    <span className={`text-[10px] text-center leading-tight transition-colors
                                       ${i <= step ? 'text-awning font-semibold' : 'text-ink/40'}`}>
                      {node.label}
                    </span>
                  </div>
                  {i < PIPELINE.length - 1 && (
                    <div className={`h-0.5 flex-1 mx-1 rounded transition-colors duration-300
                                      ${i < step ? 'bg-marigold' : 'bg-awning/10'}`} />
                  )}
                </div>
              ))}
            </div>
            <p className="text-xs text-ink/50 mt-4 text-center">
              {PIPELINE[Math.min(step, PIPELINE.length - 1)]?.detail}
            </p>
          </div>
        )}

        {result && (
          <div className="mt-8 space-y-5">
            <div className="bg-awning text-cream rounded-2xl p-6 shadow-sm
                             motion-safe:animate-[slideUpFade_0.4s_ease-out_backwards]
                             motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-md transition-all">
              <span className="text-xs uppercase tracking-wide text-marigold font-semibold">
                Funding match
              </span>
              <h2 className="font-display text-2xl font-bold mt-1">{result.scheme}</h2>
              <p className="text-sm text-cream/80 mt-2">{result.schemeDetail}</p>
            </div>

            <div
              style={{ animationDelay: '100ms' }}
              className="bg-surface rounded-2xl p-5 flex items-center gap-4
                         motion-safe:animate-[slideUpFade_0.4s_ease-out_backwards]
                         motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-md transition-all"
            >
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border border-awning/10 flex-shrink-0">
                <span className="text-[10px] text-ink/40">QR</span>
              </div>
              <div>
                <h2 className="font-display font-bold text-awning text-sm">UPI setup</h2>
                <p className="text-sm text-ink/70 mt-0.5">{result.upi}</p>
              </div>
            </div>

            <div
              style={{
                animationDelay: '200ms',
                backgroundImage: 'repeating-linear-gradient(transparent, transparent 27px, rgba(26,60,52,0.06) 28px)',
              }}
              className="relative bg-white rounded-lg p-5 shadow-sm
                         motion-safe:animate-[slideUpFade_0.4s_ease-out_backwards]
                         motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-wide text-clay font-semibold">
                  Ready to share
                </span>
                <button onClick={handleCopy} className="text-xs text-awning font-semibold underline underline-offset-2">
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
              <p className="font-display text-lg text-ink leading-relaxed">{result.promo}</p>
              <div className="absolute -bottom-2 left-0 right-0 h-4"
                   style={{ background: 'radial-gradient(circle, #FDF8F0 60%, transparent 61%) 0 0/16px 16px repeat-x' }} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
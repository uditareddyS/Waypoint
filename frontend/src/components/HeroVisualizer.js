import React, { useState, useEffect } from 'react';

export default function HeroVisualizer({ onSimulatePing }) {
  const [liveSales, setLiveSales] = useState([
    { id: 1, item: '2x Chai + Bun Maska', amount: 50, time: 'Just now', type: 'UPI' },
    { id: 2, item: 'Fresh Seasonal Mangoes', amount: 140, time: '1m ago', type: 'UPI' },
    { id: 3, item: 'Coconut Water', amount: 60, time: '3m ago', type: 'UPI' },
  ]);
  const [dailyTotal, setDailyTotal] = useState(1450);
  const [isPulsing, setIsPulsing] = useState(false);

  // Periodic simulated live transaction to keep the hero feeling alive
  useEffect(() => {
    const interval = setInterval(() => {
      const sampleItems = [
        { item: 'Cold Sugarcane Juice', amount: 30 },
        { item: 'Spicy Sev Puri', amount: 50 },
        { item: 'Temple Jasmine Mala', amount: 80 },
        { item: 'Fruit Chaat Plate', amount: 60 },
      ];
      const random = sampleItems[Math.floor(Math.random() * sampleItems.length)];
      
      setLiveSales((prev) => [
        { id: Date.now(), item: random.item, amount: random.amount, time: 'Just now', type: 'UPI' },
        prev[0],
        prev[1],
      ]);
      setDailyTotal((prev) => prev + random.amount);
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 800);
    }, 4800);

    return () => clearInterval(interval);
  }, []);

  const handleManualTrigger = () => {
    const manualItem = { id: Date.now(), item: 'Special Combo Order', amount: 100, time: 'Just now', type: 'UPI' };
    setLiveSales((prev) => [manualItem, prev[0], prev[1]]);
    setDailyTotal((prev) => prev + 100);
    setIsPulsing(true);
    setTimeout(() => setIsPulsing(false), 800);
    if (onSimulatePing) onSimulatePing();
  };

  return (
    <div className="w-full relative group">
      {/* Outer ambient glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-marigold/30 via-awning/20 to-clay/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 -z-10" />

      {/* Main Glass Card */}
      <div className="bg-white/90 backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-awning/15 shadow-xl shadow-awning/5 relative overflow-hidden">
        
        {/* Top Status Telemetry Bar */}
        <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-awning/10 text-xs">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600" />
            </span>
            <span className="font-bold text-awning tracking-tight">
              Live Digital Cart Node • Pune East
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] font-mono text-ink-muted bg-cream px-2 py-0.5 rounded-md border border-awning/10">
            <span>NPCI UPI 2.0</span>
            <span>•</span>
            <span className="text-emerald-700 font-bold">ACTIVE</span>
          </div>
        </div>

        {/* Visual Transformation Node (The Cart ➔ Digital Node) */}
        <div className="bg-gradient-to-br from-awning to-awning-dark text-cream rounded-2xl p-4 sm:p-5 relative overflow-hidden mb-4">
          
          {/* Subtle background circuit pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none"
               style={{ backgroundImage: 'radial-gradient(#FDF8F0 1px, transparent 1px)', backgroundSize: '16px 16px' }} />

          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-marigold">
                Autonomous Business Agent
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mt-0.5">
                Stall #MH-PN-4092
              </h3>
              <p className="text-xs text-cream/70 mt-0.5">
                MG Road, Camp • Fruit & Juice Cart
              </p>
            </div>

            {/* Daily Digital Velocity Metric */}
            <div className="bg-white/10 backdrop-blur-sm px-3.5 py-2 rounded-xl border border-white/15 text-right">
              <span className="text-[10px] text-marigold font-bold uppercase tracking-wider block">
                Today's UPI Inflow
              </span>
              <span className="font-display font-bold text-2xl text-white tracking-tight">
                ₹{dailyTotal.toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          {/* SVANidhi Loan Eligibility Meter */}
          <div className="mt-4 pt-3.5 border-t border-cream/15">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-cream/85 font-medium flex items-center gap-1.5">
                <span>🏛️</span>
                <span>PM SVANidhi Qualification Status:</span>
              </span>
              <span className="text-marigold font-bold text-xs">
                Tier 2 Ready (₹20,000)
              </span>
            </div>

            {/* Segmented Progress Bar */}
            <div className="w-full bg-black/30 rounded-full h-2 p-0.5 flex gap-1">
              <div className="bg-emerald-400 h-full rounded-full w-1/3" title="Tier 1 Complete" />
              <div className="bg-marigold h-full rounded-full w-1/3 animate-pulse" title="Tier 2 Unlocking" />
              <div className="bg-white/20 h-full rounded-full w-1/3" title="Tier 3 Target" />
            </div>

            <div className="flex justify-between text-[10px] text-cream/60 mt-1 font-mono">
              <span>Tranche 1 (₹10k) ✓</span>
              <span className="text-marigold font-bold">Tranche 2 (₹20k) ⚡</span>
              <span>Tranche 3 (₹50k)</span>
            </div>
          </div>

        </div>

        {/* Live Transaction Stream */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-[11px] font-bold text-ink-muted uppercase tracking-wider">
            <span>Incoming Soundbox Telemetry</span>
            <span className="text-[10px] text-emerald-700 flex items-center gap-1">
              <span className={`w-1.5 h-1.5 rounded-full bg-emerald-600 ${isPulsing ? 'scale-150' : ''} transition`} />
              Auto-Reconciling
            </span>
          </div>

          <div className="space-y-1.5">
            {liveSales.map((sale) => (
              <div
                key={sale.id}
                className="flex items-center justify-between p-2.5 rounded-xl bg-surface/40 border border-awning/10 text-xs hover:border-marigold/40 transition animate-fadeIn"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-awning/10 text-awning flex items-center justify-center font-bold text-[11px]">
                    📲
                  </div>
                  <div>
                    <div className="font-semibold text-ink leading-none">{sale.item}</div>
                    <div className="text-[10px] text-ink-muted mt-0.5">{sale.time} • Instant Settlement</div>
                  </div>
                </div>
                <div className="font-display font-bold text-sm text-awning">
                  +₹{sale.amount}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Try Button */}
        <div className="flex items-center justify-between pt-2 border-t border-awning/10">
          <span className="text-[11px] text-ink-muted">
            ⚡ Tap to simulate instant customer payment:
          </span>
          <button
            type="button"
            onClick={handleManualTrigger}
            className="px-3 py-1 rounded-lg bg-marigold-soft hover:bg-marigold text-awning-dark text-xs font-bold transition active:scale-95 border border-marigold/40 shadow-xs"
          >
            + Add ₹100 Test Sale
          </button>
        </div>

      </div>
    </div>
  );
}

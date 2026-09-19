import React, { useState } from 'react';

export default function DailyKhata({ onShowToast }) {
  const [sales, setSales] = useState([
    { id: 1, time: '08:30 AM', item: 'Morning Special', type: 'cash', amount: 40 },
    { id: 2, time: '09:15 AM', item: 'Breakfast Order', type: 'upi', amount: 80 },
    { id: 3, time: '10:00 AM', item: 'Regular Pack', type: 'upi', amount: 150 },
    { id: 4, time: '11:20 AM', item: 'Midday Rush', type: 'cash', amount: 60 },
    { id: 5, time: '12:45 PM', item: 'Bulk Purchase', type: 'upi', amount: 240 },
  ]);
  const [activePaymentType, setActivePaymentType] = useState('upi');

  const addSale = (amount) => {
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newEntry = {
      id: Date.now(),
      time: timeStr,
      item: activePaymentType === 'upi' ? 'UPI QR Payment' : 'Cash Counter Sale',
      type: activePaymentType,
      amount,
    };
    setSales((prev) => [newEntry, ...prev]);
    if (onShowToast) {
      onShowToast(`Added ₹${amount} (${activePaymentType.toUpperCase()}) to Daily Khata!`);
    }
  };

  const cashTotal = sales
    .filter((s) => s.type === 'cash')
    .reduce((acc, s) => acc + s.amount, 0);

  const upiTotal = sales
    .filter((s) => s.type === 'upi')
    .reduce((acc, s) => acc + s.amount, 0);

  const totalTurnover = cashTotal + upiTotal;
  const upiPercentage = totalTurnover > 0 ? Math.round((upiTotal / totalTurnover) * 100) : 0;

  // Monthly projection
  const projectedMonthlyDigital = upiTotal * 30;

  return (
    <div className="space-y-6">
      {/* Khata Header & Summary Cards */}
      <div className="bg-white rounded-3xl p-6 border border-awning/15 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-marigold-dark bg-marigold-soft px-2.5 py-0.5 rounded-full">
              Vendor Ledger Simulator
            </span>
            <h3 className="font-display font-bold text-xl text-awning mt-1">
              Today's Daily Khata (बहीखाता)
            </h3>
            <p className="text-xs text-ink-muted">
              Logging daily cash vs UPI transactions builds the banking footprint needed for loan upgrades.
            </p>
          </div>
          <button
            onClick={() => setSales([])}
            className="text-xs text-clay hover:underline"
          >
            Clear Today's Log
          </button>
        </div>

        {/* 3 Metric Summary Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Total Turnover */}
          <div className="bg-cream/60 rounded-2xl p-4 border border-awning/10">
            <div className="text-[11px] font-semibold text-ink-muted">Today's Total Sales</div>
            <div className="font-display font-bold text-2xl text-awning mt-0.5">
              ₹{totalTurnover.toLocaleString('en-IN')}
            </div>
            <div className="text-[10px] text-ink-muted mt-1">{sales.length} transactions recorded</div>
          </div>

          {/* UPI Sales */}
          <div className="bg-emerald-50/70 rounded-2xl p-4 border border-emerald-200/50">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-emerald-800">Digital UPI Sales</span>
              <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded">
                {upiPercentage}% Digital
              </span>
            </div>
            <div className="font-display font-bold text-2xl text-emerald-700 mt-0.5">
              ₹{upiTotal.toLocaleString('en-IN')}
            </div>
            <div className="text-[10px] text-emerald-700/80 mt-1">
              Counts towards SVANidhi loan limit
            </div>
          </div>

          {/* Cash Sales */}
          <div className="bg-surface/50 rounded-2xl p-4 border border-awning/10">
            <div className="text-[11px] font-semibold text-ink-muted">Cash Counter Sales</div>
            <div className="font-display font-bold text-2xl text-ink mt-0.5">
              ₹{cashTotal.toLocaleString('en-IN')}
            </div>
            <div className="text-[10px] text-ink-muted mt-1">Physical cash in drawer</div>
          </div>
        </div>

        {/* Loan Impact Milestone Bar */}
        <div className="mt-5 p-4 bg-awning text-cream rounded-2xl">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-marigold">
              📈 Loan Readiness Projection:
            </span>
            <span className="font-mono text-cream/80">
              Est. Monthly UPI: ~₹{projectedMonthlyDigital.toLocaleString('en-IN')}
            </span>
          </div>
          <p className="text-xs text-cream/90 mt-1.5 leading-relaxed">
            By maintaining at least <strong>₹1,000/day</strong> in digital collections, banks classify your stall as a <em>Verified Micro-Enterprise</em>, unlocking the <strong>₹20,000 and ₹50,000 PM SVANidhi loans</strong> without visits from loan inspectors!
          </p>
        </div>
      </div>

      {/* Interactive Quick Add Transaction */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Quick Add Buttons (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-5 border border-awning/15 shadow-sm space-y-4">
          <h4 className="font-display font-bold text-base text-awning">
            Quick Add Sale
          </h4>
          <p className="text-xs text-ink-muted">
            Tap an amount to record an instant customer transaction:
          </p>

          {/* Type Toggle: UPI vs Cash */}
          <div className="grid grid-cols-2 gap-2 bg-cream/60 p-1 rounded-xl border border-awning/10">
            <button
              type="button"
              onClick={() => setActivePaymentType('upi')}
              className={`py-1.5 rounded-lg text-xs font-bold transition ${
                activePaymentType === 'upi'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              📲 Online UPI
            </button>
            <button
              type="button"
              onClick={() => setActivePaymentType('cash')}
              className={`py-1.5 rounded-lg text-xs font-bold transition ${
                activePaymentType === 'cash'
                  ? 'bg-awning text-cream shadow-sm'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              💵 Cash
            </button>
          </div>

          {/* Quick Amount Buttons */}
          <div className="grid grid-cols-2 gap-2.5">
            {[10, 20, 50, 100, 200, 500].map((amt) => (
              <button
                key={amt}
                type="button"
                onClick={() => addSale(amt)}
                className="py-3 px-3 bg-surface/50 hover:bg-marigold-soft hover:border-marigold/40 border border-awning/15 rounded-xl font-display font-bold text-base text-awning transition active:scale-95 flex items-center justify-between"
              >
                <span>+₹{amt}</span>
                <span className="text-[10px] text-ink-muted uppercase">Add</span>
              </button>
            ))}
          </div>
        </div>

        {/* Live Transaction Feed (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-5 border border-awning/15 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-display font-bold text-base text-awning">
              Transaction Feed
            </h4>
            <span className="text-xs text-ink-muted font-mono">
              Live Timestamp
            </span>
          </div>

          {sales.length === 0 ? (
            <div className="text-center py-10 text-ink-muted text-xs">
              No transactions recorded yet today. Tap an amount on the left to start logging!
            </div>
          ) : (
            <div className="space-y-2 max-h-[320px] overflow-y-auto pr-1">
              {sales.map((entry) => (
                <div
                  key={entry.id}
                  className="flex items-center justify-between p-3 rounded-xl bg-cream/40 border border-awning/10 hover:border-awning/25 transition"
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                        entry.type === 'upi'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-amber-100 text-amber-900'
                      }`}
                    >
                      {entry.type === 'upi' ? '📲' : '💵'}
                    </span>
                    <div>
                      <div className="text-xs font-bold text-ink">{entry.item}</div>
                      <div className="text-[10px] text-ink-muted">{entry.time}</div>
                    </div>
                  </div>
                  <div className="font-display font-bold text-sm text-awning">
                    +₹{entry.amount}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

import React, { useState } from 'react';

export default function ProblemSolutionSection() {
  const [activeTab, setActiveTab] = useState('loans');

  const COMPARISONS = {
    loans: {
      category: 'Working Capital & Credit',
      icon: '🏛️',
      before: {
        title: 'Predatory Informal Lenders',
        stats: '10% to 20% interest per month (120-240% APR)',
        desc: 'Street vendors borrow daily morning cash from informal moneylenders to buy wholesale inventory, forfeiting up to half their daily margins.',
        tag: 'CRIPPLING CYCLE',
      },
      after: {
        title: 'PM SVANidhi Micro-Credit Ladder',
        stats: '7% Interest Subsidy + 100% Collateral-Free',
        desc: 'Waypoint evaluates your stall footprint to unlock formal bank credit: ₹10,000 ➔ ₹20,000 ➔ ₹50,000 with zero property pledge and direct DBT cashback.',
        tag: 'GOVT BACKED',
      },
    },
    payments: {
      category: 'Daily Payment Collections',
      icon: '💳',
      before: {
        title: 'Cash Only & Change Shortages',
        stats: '15-20 minutes lost daily handling coins & disputes',
        desc: 'Lost sales from office workers carrying no physical cash. Fake currency notes and payment fraud during busy peak rush hours.',
        tag: 'HIGH FRICTION',
      },
      after: {
        title: 'Smart Standee + Voice Soundbox',
        stats: '0% MDR Fees + Dual-Language Audio Alerts',
        desc: 'Customized acrylic countertop QR standee with voice confirmation in Hindi & English, preventing customer fraud and accelerating checkout speeds.',
        tag: 'INSTANT SETTLEMENT',
      },
    },
    marketing: {
      category: 'Customer Outreach & Deals',
      icon: '📢',
      before: {
        title: 'Passive Sidewalk Foot-traffic',
        stats: 'Zero repeat customer database',
        desc: 'When weather disrupts the street or location shifts occur, vendors have no direct communication channel with their loyal daily customers.',
        tag: 'LOST DEMAND',
      },
      after: {
        title: 'Localized WhatsApp Studio',
        stats: 'Bilingual One-Tap Broadcasts',
        desc: 'Instant promotional deals formatted for WhatsApp groups in regional dialects with 1-click customer group sharing to announce fresh daily arrivals.',
        tag: 'HYPERLOCAL REACH',
      },
    },
    bookkeeping: {
      category: 'Credit Trail & Turnovers',
      icon: '📒',
      before: {
        title: 'Torn Paper Bahi-Khata',
        stats: 'Zero recognized credit footprint',
        desc: 'Commercial banks reject loan requests from street vendors because physical paper notebooks do not constitute verified business financial statements.',
        tag: 'UNBANKABLE',
      },
      after: {
        title: 'Automated Daily Digital Khata',
        stats: 'Bank-Grade UPI Verification',
        desc: 'Every QR transaction automatically reconciles into an official turnover report that directly qualifies the merchant for higher SVANidhi loan tiers.',
        tag: 'VERIFIED CREDIT',
      },
    },
  };

  const current = COMPARISONS[activeTab];

  return (
    <section id="story" className="my-16 sm:my-20">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 px-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-clay-soft text-clay-dark uppercase tracking-wider mb-2">
          <span>⚡</span>
          <span>From Informal Cash to Digital Powerhouse</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-awning tracking-tight">
          Solving the Real Economic Bottlenecks of India's Street Economy
        </h2>
        <p className="text-xs sm:text-sm text-ink-muted mt-2 leading-relaxed">
          How Waypoint bridges the critical gap between government welfare schemes, digital banking networks, and ground-level street vendors.
        </p>
      </div>

      {/* Navigation Pills */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-3 mb-8 px-4">
        {Object.entries(COMPARISONS).map(([key, item]) => (
          <button
            key={key}
            type="button"
            onClick={() => setActiveTab(key)}
            className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs sm:text-sm font-display font-bold transition active:scale-95 whitespace-nowrap ${
              activeTab === key
                ? 'bg-awning text-cream shadow-md'
                : 'bg-white hover:bg-surface text-ink-light hover:text-awning border border-awning/15'
            }`}
          >
            <span>{item.icon}</span>
            <span>{item.category}</span>
          </button>
        ))}
      </div>

      {/* Comparison Grid (Side by Side Contrast) */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 px-4">
        
        {/* The Struggle (Before) */}
        <div className="bg-white rounded-3xl p-6 border-2 border-clay/20 shadow-sm relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-24 h-24 bg-clay/5 rounded-bl-full pointer-events-none" />
          
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-red-100 text-red-800 px-2.5 py-0.5 rounded-full">
                {current.before.tag}
              </span>
              <span className="text-xs font-mono text-clay font-bold">Traditional Stumble</span>
            </div>

            <h3 className="font-display font-bold text-xl text-ink">
              {current.before.title}
            </h3>

            <div className="my-3 p-3 bg-red-50/70 border border-red-200/60 rounded-xl text-xs font-bold text-red-900">
              ⚠️ {current.before.stats}
            </div>

            <p className="text-xs text-ink-light leading-relaxed">
              {current.before.desc}
            </p>
          </div>

          <div className="mt-6 pt-3 border-t border-awning/10 flex items-center gap-2 text-[11px] text-ink-muted">
            <span>Result:</span>
            <span className="font-semibold text-clay">Trapped in low-margin subsistence</span>
          </div>
        </div>

        {/* The Waypoint Solution (After) */}
        <div className="bg-gradient-to-br from-awning via-awning to-awning-light text-cream rounded-3xl p-6 border-2 border-marigold/40 shadow-xl shadow-awning/15 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 bg-marigold/10 rounded-bl-full pointer-events-none" />
          
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-marigold text-awning-dark px-2.5 py-0.5 rounded-full">
                {current.after.tag}
              </span>
              <span className="text-xs font-mono text-marigold font-bold">Waypoint Advantage</span>
            </div>

            <h3 className="font-display font-bold text-xl text-white">
              {current.after.title}
            </h3>

            <div className="my-3 p-3 bg-cream/10 border border-cream/20 rounded-xl text-xs font-bold text-marigold">
              ✨ {current.after.stats}
            </div>

            <p className="text-xs text-cream/85 leading-relaxed">
              {current.after.desc}
            </p>
          </div>

          <div className="mt-6 pt-3 border-t border-cream/15 flex items-center gap-2 text-[11px] text-cream/75">
            <span>Outcome:</span>
            <span className="font-semibold text-marigold">Formalized, scalable micro-enterprise</span>
          </div>
        </div>

      </div>

    </section>
  );
}

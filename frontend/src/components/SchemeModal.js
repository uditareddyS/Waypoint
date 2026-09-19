import React from 'react';
import { SCHEMES_INFO } from '../data/vendorKnowledge';

export default function SchemeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-ink/50 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div 
        className="bg-cream-light w-full max-w-2xl rounded-3xl shadow-2xl border border-awning/15 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-awning px-6 py-5 text-cream flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-marigold/20 flex items-center justify-center text-marigold-light">
              🏛️
            </div>
            <div>
              <h3 className="font-display font-bold text-xl leading-snug">
                Official Govt Schemes for Street Vendors
              </h3>
              <p className="text-xs text-cream/70">
                Direct benefits, collateral-free credit & digital incentives
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-cream/10 hover:bg-cream/20 flex items-center justify-center text-cream transition"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* PM SVANidhi Feature Spotlight */}
          <div className="bg-white rounded-2xl p-5 border border-awning/10 shadow-sm">
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-marigold-soft text-marigold-dark uppercase tracking-wider">
                  Flagship Scheme
                </span>
                <h4 className="font-display font-bold text-xl text-awning mt-1">
                  PM SVANidhi (Street Vendor's AtmaNirbhar Nidhi)
                </h4>
              </div>
              <a
                href="https://pmsvanidhi.mohua.gov.in"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-clay hover:underline flex items-center gap-1 flex-shrink-0"
              >
                Official Portal ↗
              </a>
            </div>

            <p className="text-xs text-ink-light mt-2">
              Special Micro-Credit Facility launched by the Ministry of Housing and Urban Affairs to empower street vendors with affordable, collateral-free working capital.
            </p>

            {/* 3 Tranches */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <div className="bg-awning/5 rounded-xl p-3 border border-awning/10">
                <div className="text-[10px] font-bold text-awning uppercase">1st Loan</div>
                <div className="font-display font-bold text-lg text-awning">₹10,000</div>
                <div className="text-[11px] text-ink-muted">1 Year Tenure</div>
                <div className="text-[10px] text-marigold-dark font-medium mt-1">No collateral needed</div>
              </div>

              <div className="bg-awning/5 rounded-xl p-3 border border-awning/10">
                <div className="text-[10px] font-bold text-awning uppercase">2nd Loan</div>
                <div className="font-display font-bold text-lg text-awning">₹20,000</div>
                <div className="text-[11px] text-ink-muted">1.5 Year Tenure</div>
                <div className="text-[10px] text-marigold-dark font-medium mt-1">On timely repayment</div>
              </div>

              <div className="bg-awning/5 rounded-xl p-3 border border-awning/10">
                <div className="text-[10px] font-bold text-awning uppercase">3rd Loan</div>
                <div className="font-display font-bold text-lg text-awning">₹50,000</div>
                <div className="text-[11px] text-ink-muted">3 Year Tenure</div>
                <div className="text-[10px] text-marigold-dark font-medium mt-1">For business scaling</div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="mt-4 bg-marigold-soft/60 rounded-xl p-3 text-xs space-y-1.5 border border-marigold/20">
              <div className="flex items-center gap-2 text-ink">
                <span className="text-marigold-dark font-bold">✓</span>
                <span><strong>7% Interest Subsidy:</strong> Directly credited into your bank account quarterly.</span>
              </div>
              <div className="flex items-center gap-2 text-ink">
                <span className="text-marigold-dark font-bold">✓</span>
                <span><strong>Digital Cashback:</strong> Earn up to <strong>₹1,200/year</strong> (₹100/mo) for accepting UPI payments.</span>
              </div>
              <div className="flex items-center gap-2 text-ink">
                <span className="text-marigold-dark font-bold">✓</span>
                <span><strong>Zero Penalty:</strong> No prepayment penalties if paid early.</span>
              </div>
            </div>

            {/* Documents needed */}
            <div className="mt-4">
              <h5 className="text-xs font-bold text-awning uppercase tracking-wider">Required Documents:</h5>
              <ul className="mt-2 text-xs text-ink-light space-y-1">
                {SCHEMES_INFO[0].documents.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-awning font-bold">•</span>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* PM Vishwakarma & MUDRA */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-4 border border-awning/10 shadow-sm">
              <span className="text-[10px] font-bold bg-clay-soft text-clay-dark px-2 py-0.5 rounded-full">Artisan Grant</span>
              <h4 className="font-display font-bold text-base text-awning mt-1">PM Vishwakarma</h4>
              <p className="text-xs text-ink-light mt-1.5">
                ₹15,000 toolkits grant + up to ₹3,00,000 loan at only 5% subsidized interest rate for craftspeople and traditional stalls.
              </p>
              <a
                href="https://pmvishwakarma.gov.in"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-xs font-semibold text-awning hover:underline"
              >
                Learn More ↗
              </a>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-awning/10 shadow-sm">
              <span className="text-[10px] font-bold bg-awning/10 text-awning px-2 py-0.5 rounded-full">Micro Enterprise</span>
              <h4 className="font-display font-bold text-base text-awning mt-1">PMMY (MUDRA Shishu)</h4>
              <p className="text-xs text-ink-light mt-1.5">
                Collateral-free working capital loan up to ₹50,000 for purchasing raw goods, carts, packaging, and commercial gear.
              </p>
              <a
                href="https://www.mudra.org.in"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-xs font-semibold text-awning hover:underline"
              >
                Learn More ↗
              </a>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-cream px-6 py-4 border-t border-awning/10 flex items-center justify-between">
          <span className="text-xs text-ink-muted">
            All schemes are supported by Government of India.
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-awning text-cream text-xs font-bold hover:bg-awning-light transition"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}

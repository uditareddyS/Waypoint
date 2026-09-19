import React, { useState } from 'react';
import { SCHEMES_INFO } from '../data/vendorKnowledge';

export default function SchemeCard({ schemeData }) {
  const [selectedTranche, setSelectedTranche] = useState(0);
  const [checkedDocs, setCheckedDocs] = useState({
    doc0: true,
    doc1: false,
    doc2: true,
    doc3: true,
  });

  const scheme = SCHEMES_INFO[0]; // PM SVANidhi
  const activeTier = scheme.tiers[selectedTranche];

  const toggleDoc = (idx) => {
    setCheckedDocs((prev) => ({
      ...prev,
      [`doc${idx}`]: !prev[`doc${idx}`],
    }));
  };

  const totalDocsCount = scheme.documents.length;
  const checkedDocsCount = Object.values(checkedDocs).filter(Boolean).length;
  const readinessPercent = Math.round((checkedDocsCount / totalDocsCount) * 100);

  return (
    <div className="space-y-6">
      {/* Hero Scheme Card */}
      <div className="bg-gradient-to-br from-awning via-awning to-awning-light text-cream rounded-3xl p-6 sm:p-7 shadow-xl shadow-awning/15 border border-awning-light/30 relative overflow-hidden">
        {/* Background decorative pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-marigold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-marigold text-awning-dark tracking-wide uppercase shadow-sm">
              <span>🏛️</span>
              <span>Matched Scheme</span>
            </span>
            <span className="text-xs text-cream/70 font-mono">
              Scheme Code: MH-ULB-SVN
            </span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl font-bold mt-3 text-cream tracking-tight">
            {scheme.name}
          </h2>
          <p className="text-sm text-cream/80 mt-1 max-w-xl">
            {schemeData?.schemeDetail ||
              "Special Micro-Credit Facility: Collateral-free working capital loan to restart and scale your street business."}
          </p>

          {/* 3 Tranche Loan Progression Roadmap */}
          <div className="mt-6 pt-6 border-t border-cream/15">
            <div className="text-xs font-semibold text-marigold uppercase tracking-wider mb-3">
              Step-by-Step Credit Growth Ladder
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {scheme.tiers.map((tier, idx) => {
                const isSelected = selectedTranche === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedTranche(idx)}
                    className={`text-left p-4 rounded-2xl transition-all duration-200 relative ${
                      isSelected
                        ? 'bg-cream text-awning shadow-lg ring-2 ring-marigold scale-[1.02]'
                        : 'bg-cream/10 hover:bg-cream/15 text-cream border border-cream/10'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-bold uppercase tracking-wider ${isSelected ? 'text-marigold-dark' : 'text-marigold'}`}>
                        {tier.stage}
                      </span>
                      {idx === 0 && (
                        <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold ${isSelected ? 'bg-marigold text-awning-dark' : 'bg-marigold/20 text-marigold'}`}>
                          START HERE
                        </span>
                      )}
                    </div>
                    <div className={`font-display text-2xl font-bold mt-1 ${isSelected ? 'text-awning' : 'text-cream'}`}>
                      {tier.amount}
                    </div>
                    <div className={`text-xs mt-0.5 ${isSelected ? 'text-ink-muted' : 'text-cream/70'}`}>
                      {tier.tenure} • {tier.emi}
                    </div>
                    <p className={`text-[11px] mt-2 leading-tight ${isSelected ? 'text-ink' : 'text-cream/80'}`}>
                      {tier.perk}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Selected Tranche Detail Spotlight */}
            <div className="mt-4 bg-cream/10 rounded-2xl p-3 border border-cream/15 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-marigold animate-pulse" />
                <span className="font-bold text-marigold">{activeTier.stage} Breakdown:</span>
                <span className="text-cream/90 font-medium">Principal: {activeTier.amount} • Tenure: {activeTier.tenure}</span>
              </div>
              <div className="text-marigold font-mono text-[11px] font-bold">
                Estimated EMI: {activeTier.emi}
              </div>
            </div>
          </div>

          {/* Scheme Subsidies & Benefits Strip */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-cream/15">
            <div className="flex items-center gap-3 bg-cream/5 rounded-2xl p-3 border border-cream/10">
              <div className="w-10 h-10 rounded-xl bg-marigold/20 flex items-center justify-center text-marigold font-bold text-lg flex-shrink-0">
                %
              </div>
              <div>
                <div className="text-xs font-bold text-marigold">7% Interest Subsidy</div>
                <div className="text-[11px] text-cream/75">
                  Direct cash relief credited quarterly to your linked bank account.
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-cream/5 rounded-2xl p-3 border border-cream/10">
              <div className="w-10 h-10 rounded-xl bg-marigold/20 flex items-center justify-center text-marigold font-bold text-lg flex-shrink-0">
                ₹
              </div>
              <div>
                <div className="text-xs font-bold text-marigold">₹1,200 Annual Cashback</div>
                <div className="text-[11px] text-cream/75">
                  Earn up to ₹100/mo reward directly for accepting customer UPI payments.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Document Readiness & Eligibility Box */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-awning/15">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div>
            <h3 className="font-display font-bold text-lg text-awning">
              Loan Application Readiness
            </h3>
            <p className="text-xs text-ink-muted">
              Check off the documents you currently hold to verify qualification:
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-28 bg-surface rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-marigold-dark h-full transition-all duration-500 rounded-full"
                style={{ width: `${readinessPercent}%` }}
              />
            </div>
            <span className="text-xs font-bold text-awning">{readinessPercent}% Ready</span>
          </div>
        </div>

        {/* Checklist */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {scheme.documents.map((doc, idx) => {
            const isChecked = checkedDocs[`doc${idx}`] || false;
            return (
              <label
                key={idx}
                onClick={() => toggleDoc(idx)}
                className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition select-none ${
                  isChecked
                    ? 'bg-marigold-soft/40 border-marigold/40 text-ink'
                    : 'bg-cream/40 border-awning/10 text-ink-muted hover:border-awning/30'
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => {}}
                  className="mt-1 w-4 h-4 text-marigold rounded focus:ring-marigold accent-marigold"
                />
                <span className="text-xs font-medium leading-snug">{doc}</span>
              </label>
            );
          })}
        </div>

        {/* Action Button & Note */}
        <div className="mt-5 pt-4 border-t border-awning/10 flex flex-wrap items-center justify-between gap-3">
          <div className="text-[11px] text-ink-muted max-w-sm">
            💡 No Certificate of Vending? Visit your local Nagar Nigam / Ward Office to obtain a <strong>Letter of Recommendation (LOR)</strong>.
          </div>
          <a
            href="https://pmsvanidhi.mohua.gov.in"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-awning hover:bg-awning-light text-cream text-xs font-bold shadow-md shadow-awning/15 transition active:scale-95"
          >
            <span>Apply on Official Portal</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

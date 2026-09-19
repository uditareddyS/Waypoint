import React, { useState } from 'react';

export default function UpiStandee({ vendorName, location, onShowToast }) {
  const [vpaId, setVpaId] = useState(
    `${vendorName.toLowerCase().replace(/[^a-z0-9]/g, '') || 'vendor'}@okaxis`
  );
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [amountReceived, setAmountReceived] = useState(50);

  const displayBusinessName = vendorName || 'Apna Vyapar Kendra';
  const displayLocation = location || 'Market Stall';

  // Soundbox audio announcement test
  const playSoundboxAlert = (amt) => {
    if ('speechSynthesis' in window) {
      setIsPlayingAudio(true);
      window.speechSynthesis.cancel();

      // Dual language soundbox announcement
      const textToSpeak = `UPI पर ${amt} रुपये प्राप्त हुए। Fifty rupees received on UPI.`;
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.rate = 0.95;
      utterance.pitch = 1.05;

      utterance.onend = () => {
        setIsPlayingAudio(false);
      };
      utterance.onerror = () => {
        setIsPlayingAudio(false);
      };

      window.speechSynthesis.speak(utterance);
    } else {
      if (onShowToast) onShowToast('Soundbox audio simulation not supported on this browser.');
    }
  };

  const handleCopyVpa = () => {
    navigator.clipboard.writeText(vpaId);
    if (onShowToast) onShowToast(`Copied UPI ID: ${vpaId}`);
  };

  const handlePrintStandee = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Top Controls Bar */}
      <div className="bg-white rounded-2xl p-4 border border-awning/15 shadow-sm flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="font-display font-bold text-base text-awning">
            Merchant QR Standee & Smart Soundbox
          </h3>
          <p className="text-xs text-ink-muted">
            Personalized countertop QR display for high-volume daily customer payments.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyVpa}
            className="px-3.5 py-1.5 rounded-xl bg-surface hover:bg-surface-dark text-xs font-semibold text-ink border border-awning/15 transition active:scale-95 flex items-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5 text-awning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <span>Copy UPI ID</span>
          </button>

          <button
            onClick={handlePrintStandee}
            className="px-4 py-1.5 rounded-xl bg-awning hover:bg-awning-light text-cream text-xs font-bold shadow-sm transition active:scale-95 flex items-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            <span>Print Standee</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Printable Standee Display (Desktop 7 cols) */}
        <div className="lg:col-span-7 flex justify-center">
          <div className="printable-standee w-full max-w-sm bg-white rounded-3xl shadow-2xl border-4 border-awning overflow-hidden transition-all">
            
            {/* Standee Acrylic Top Header */}
            <div className="bg-gradient-to-r from-awning via-awning-light to-awning p-4 text-center text-cream relative">
              <div className="flex items-center justify-center gap-1.5 text-[11px] font-bold tracking-wider uppercase text-marigold">
                <span>✦</span>
                <span>BHARAT QR • ZERO CHARGES</span>
                <span>✦</span>
              </div>
              <h4 className="font-display font-bold text-xl tracking-tight text-white mt-1 uppercase">
                {displayBusinessName}
              </h4>
              <p className="text-[11px] text-cream/75 truncate">
                📍 {displayLocation}
              </p>
            </div>

            {/* Standee Main QR Section */}
            <div className="p-6 bg-white flex flex-col items-center text-center">
              
              {/* Authentic QR SVG Rendering */}
              <div className="relative p-4 bg-white rounded-2xl border-2 border-awning/20 shadow-inner">
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 100 100"
                  className="w-48 h-48 sm:w-52 sm:h-52"
                >
                  {/* Outer Background */}
                  <rect width="100" height="100" fill="#FFFFFF" />

                  {/* Top-Left Finder Eye */}
                  <rect x="6" y="6" width="26" height="26" rx="4" fill="#1A3C34" />
                  <rect x="10" y="10" width="18" height="18" rx="2" fill="#FFFFFF" />
                  <rect x="14" y="14" width="10" height="10" rx="1.5" fill="#C4522A" />

                  {/* Top-Right Finder Eye */}
                  <rect x="68" y="6" width="26" height="26" rx="4" fill="#1A3C34" />
                  <rect x="72" y="10" width="18" height="18" rx="2" fill="#FFFFFF" />
                  <rect x="76" y="14" width="10" height="10" rx="1.5" fill="#C4522A" />

                  {/* Bottom-Left Finder Eye */}
                  <rect x="6" y="68" width="26" height="26" rx="4" fill="#1A3C34" />
                  <rect x="10" y="72" width="18" height="18" rx="2" fill="#FFFFFF" />
                  <rect x="14" y="76" width="10" height="10" rx="1.5" fill="#C4522A" />

                  {/* Procedural Data Modules Pattern */}
                  <g fill="#1A3C34">
                    {/* Timing patterns */}
                    <rect x="36" y="8" width="4" height="4" rx="1" />
                    <rect x="44" y="8" width="4" height="4" rx="1" />
                    <rect x="52" y="8" width="4" height="4" rx="1" />
                    <rect x="60" y="8" width="4" height="4" rx="1" />

                    <rect x="8" y="36" width="4" height="4" rx="1" />
                    <rect x="8" y="44" width="4" height="4" rx="1" />
                    <rect x="8" y="52" width="4" height="4" rx="1" />
                    <rect x="8" y="60" width="4" height="4" rx="1" />

                    {/* Matrix density */}
                    <rect x="36" y="36" width="6" height="6" rx="1" fill="#E8A33D" />
                    <rect x="44" y="36" width="4" height="4" rx="1" />
                    <rect x="52" y="36" width="6" height="4" rx="1" />
                    <rect x="60" y="36" width="4" height="6" rx="1" />

                    <rect x="36" y="44" width="4" height="4" rx="1" />
                    <rect x="42" y="42" width="16" height="16" rx="4" fill="#1A3C34" />
                    <rect x="60" y="44" width="4" height="4" rx="1" />

                    <rect x="36" y="52" width="4" height="6" rx="1" />
                    <rect x="60" y="52" width="6" height="4" rx="1" />

                    <rect x="36" y="62" width="6" height="4" rx="1" fill="#E8A33D" />
                    <rect x="44" y="60" width="4" height="4" rx="1" />
                    <rect x="52" y="62" width="4" height="4" rx="1" />
                    <rect x="60" y="60" width="6" height="6" rx="1" />

                    <rect x="68" y="36" width="4" height="6" rx="1" />
                    <rect x="76" y="36" width="6" height="4" rx="1" />
                    <rect x="84" y="36" width="4" height="4" rx="1" />
                    <rect x="90" y="38" width="4" height="4" rx="1" />

                    <rect x="36" y="70" width="4" height="4" rx="1" />
                    <rect x="44" y="72" width="6" height="4" rx="1" />
                    <rect x="52" y="70" width="4" height="4" rx="1" />
                    <rect x="60" y="72" width="4" height="6" rx="1" />

                    <rect x="68" y="68" width="6" height="6" rx="1" />
                    <rect x="76" y="68" width="4" height="4" rx="1" />
                    <rect x="84" y="70" width="6" height="4" rx="1" />

                    <rect x="68" y="80" width="4" height="6" rx="1" />
                    <rect x="76" y="78" width="6" height="4" rx="1" />
                    <rect x="86" y="82" width="4" height="4" rx="1" fill="#E8A33D" />

                    <rect x="36" y="84" width="6" height="4" rx="1" />
                    <rect x="46" y="82" width="4" height="6" rx="1" />
                    <rect x="54" y="84" width="6" height="4" rx="1" />
                  </g>

                  {/* Center Emblem (UPI Icon badge) */}
                  <rect x="44" y="44" width="12" height="12" rx="3" fill="#FFFFFF" stroke="#1A3C34" strokeWidth="1" />
                  <polygon points="48,46 54,50 48,54" fill="#C4522A" />
                </svg>

                {/* Scan Pulse Ring */}
                <div className="absolute inset-2 border border-marigold/30 rounded-xl pointer-events-none" />
              </div>

              {/* VPA Display & Editable input */}
              <div className="mt-4 w-full">
                <div className="text-[10px] font-bold text-ink-muted uppercase tracking-wider mb-1">
                  UPI ID (Virtual Payment Address)
                </div>
                <div className="flex items-center justify-center gap-1">
                  <input
                    type="text"
                    value={vpaId}
                    onChange={(e) => setVpaId(e.target.value)}
                    className="font-mono text-xs font-bold text-awning bg-cream/70 rounded-lg py-1 px-2 border border-awning/20 text-center max-w-[200px] outline-none focus:ring-2 focus:ring-marigold"
                    title="Edit your UPI ID"
                  />
                </div>
              </div>

              {/* Accepted Apps Strip */}
              <div className="mt-5 w-full pt-4 border-t border-awning/10">
                <div className="text-[10px] font-bold text-ink-muted uppercase tracking-widest mb-2">
                  Accepted On Any Banking App
                </div>
                <div className="flex items-center justify-center gap-3 text-xs font-bold text-ink-light">
                  <span className="px-2 py-1 bg-surface rounded-md text-[11px]">GPay</span>
                  <span className="px-2 py-1 bg-surface rounded-md text-[11px]">PhonePe</span>
                  <span className="px-2 py-1 bg-surface rounded-md text-[11px]">Paytm</span>
                  <span className="px-2 py-1 bg-surface rounded-md text-[11px]">BHIM</span>
                </div>
              </div>

            </div>

            {/* Standee Base Footer */}
            <div className="bg-surface px-4 py-2.5 text-center border-t border-awning/10 flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span className="text-[11px] font-bold text-awning">
                Instant Bank Settlement • No Transaction Fees
              </span>
            </div>

          </div>
        </div>

        {/* Right Side: Soundbox Simulation & Features (Desktop 5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Smart Soundbox Unit */}
          <div className="bg-gradient-to-br from-white to-surface-light rounded-3xl p-5 border-2 border-awning/20 shadow-md">
            <div className="flex items-center justify-between pb-3 border-b border-awning/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-awning flex items-center justify-center text-marigold">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-awning">
                    Digital Soundbox Assistant
                  </h4>
                  <span className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    SIM 4G Connected
                  </span>
                </div>
              </div>
              <div className="px-2 py-0.5 rounded-full bg-awning/10 text-[10px] font-bold text-awning">
                Dual Audio
              </div>
            </div>

            {/* Soundbox speaker grille visual */}
            <div className="my-4 bg-awning/5 rounded-2xl p-4 border border-awning/10 flex flex-col items-center">
              <div className="flex items-center justify-center gap-1.5 my-2">
                <span className="w-2 h-2 rounded-full bg-awning/30" />
                <span className="w-2 h-2 rounded-full bg-awning/30" />
                <span className="w-2 h-2 rounded-full bg-awning/30" />
                <span className="w-2 h-2 rounded-full bg-awning/30" />
                <span className="w-2 h-2 rounded-full bg-awning/30" />
              </div>
              <div className="text-xs text-ink-light font-medium text-center">
                Instant Hindi & English voice confirmations prevent customer payment fraud.
              </div>
            </div>

            {/* Quick Test Amounts */}
            <div>
              <label className="text-[11px] font-bold text-ink-muted uppercase">
                Simulate Payment Alert:
              </label>
              <div className="grid grid-cols-3 gap-2 mt-1.5">
                {[20, 50, 100].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => {
                      setAmountReceived(amt);
                      playSoundboxAlert(amt);
                    }}
                    className={`py-2 rounded-xl text-xs font-bold border transition active:scale-95 ${
                      amountReceived === amt
                        ? 'bg-awning text-cream border-awning shadow-sm'
                        : 'bg-white hover:bg-cream border-awning/15 text-ink'
                    }`}
                  >
                    ₹{amt}
                  </button>
                ))}
              </div>
            </div>

            {/* Action button */}
            <button
              onClick={() => playSoundboxAlert(amountReceived)}
              disabled={isPlayingAudio}
              className="mt-4 w-full bg-marigold hover:bg-marigold-light text-awning-dark font-display font-bold py-2.5 px-4 rounded-xl text-xs shadow-md transition active:scale-95 flex items-center justify-center gap-2"
            >
              <svg className={`w-4 h-4 ${isPlayingAudio ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>
                {isPlayingAudio
                  ? 'Speaking: "₹' + amountReceived + ' प्राप्त हुए"...'
                  : `Test Alert for ₹${amountReceived}`}
              </span>
            </button>
          </div>

          {/* Setup Guide Checklist */}
          <div className="bg-white rounded-2xl p-4 border border-awning/15 text-xs space-y-2.5">
            <h5 className="font-display font-bold text-awning text-sm">
              Why setup your UPI Merchant QR?
            </h5>
            <div className="flex items-start gap-2 text-ink-light">
              <span className="text-marigold-dark font-bold">1.</span>
              <span><strong>Builds Proof of Turnover:</strong> Every ₹100 collected via UPI gets logged as official banking turnover for PM SVANidhi loans.</span>
            </div>
            <div className="flex items-start gap-2 text-ink-light">
              <span className="text-marigold-dark font-bold">2.</span>
              <span><strong>Monthly Cashback:</strong> Receive ₹100 direct cashback every month on 200+ monthly digital payments.</span>
            </div>
            <div className="flex items-start gap-2 text-ink-light">
              <span className="text-marigold-dark font-bold">3.</span>
              <span><strong>Eliminates Chutta / Change Hassles:</strong> No coin shortages during morning and evening rush hours.</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

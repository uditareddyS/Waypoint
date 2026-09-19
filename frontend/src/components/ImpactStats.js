import React, { useState, useEffect, useRef } from 'react';

export default function ImpactStats() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="impact" ref={containerRef} className="my-16 sm:my-20">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Banner Card */}
        <div className="bg-gradient-to-br from-awning via-awning to-awning-dark text-cream rounded-3xl p-8 sm:p-10 border-2 border-awning-light/30 shadow-2xl relative overflow-hidden">
          
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-marigold/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="max-w-2xl mb-8 relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-marigold">
              Verified Socio-Economic Impact
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-1 tracking-tight">
              Unlocking India's Informal Street Economy
            </h2>
            <p className="text-xs sm:text-sm text-cream/80 mt-2 leading-relaxed">
              Official metrics and welfare benchmarks aligned with the Ministry of Housing and Urban Affairs (MoHUA) & Digital India.
            </p>
          </div>

          {/* Metric Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
            
            {/* Metric 1 */}
            <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
              <div className="text-[11px] font-semibold text-cream/70 uppercase tracking-wider">
                Target Demographic
              </div>
              <div className="font-display font-bold text-3xl sm:text-4xl text-marigold mt-1">
                {isVisible ? '10M+' : '0'}
              </div>
              <div className="text-xs text-cream/85 mt-1 font-medium">
                Street Vendors in India
              </div>
              <p className="text-[10px] text-cream/60 mt-1">
                Census across Tier 1, 2, & 3 cities
              </p>
            </div>

            {/* Metric 2 */}
            <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
              <div className="text-[11px] font-semibold text-cream/70 uppercase tracking-wider">
                Credit Scaling Cap
              </div>
              <div className="font-display font-bold text-3xl sm:text-4xl text-white mt-1">
                {isVisible ? '₹50,000' : '0'}
              </div>
              <div className="text-xs text-cream/85 mt-1 font-medium">
                Pledge-Free Capital
              </div>
              <p className="text-[10px] text-cream/60 mt-1">
                PM SVANidhi 3rd Loan Tranche
              </p>
            </div>

            {/* Metric 3 */}
            <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
              <div className="text-[11px] font-semibold text-cream/70 uppercase tracking-wider">
                Direct Cash Subsidy
              </div>
              <div className="font-display font-bold text-3xl sm:text-4xl text-marigold mt-1">
                {isVisible ? '7.0%' : '0%'}
              </div>
              <div className="text-xs text-cream/85 mt-1 font-medium">
                Interest Subvention
              </div>
              <p className="text-[10px] text-cream/60 mt-1">
                Direct Benefit Transfer (DBT)
              </p>
            </div>

            {/* Metric 4 */}
            <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
              <div className="text-[11px] font-semibold text-cream/70 uppercase tracking-wider">
                Digital Rewards
              </div>
              <div className="font-display font-bold text-3xl sm:text-4xl text-white mt-1">
                {isVisible ? '₹1,200' : '0'}
              </div>
              <div className="text-xs text-cream/85 mt-1 font-medium">
                Annual UPI Cashback
              </div>
              <p className="text-[10px] text-cream/60 mt-1">
                ₹100/mo on 200+ transactions
              </p>
            </div>

          </div>

          {/* Ecosystem Trust Strip */}
          <div className="mt-8 pt-6 border-t border-cream/15 flex flex-wrap items-center justify-between gap-4 text-xs text-cream/75 relative z-10">
            <span className="font-bold text-marigold">
              Verified Compliance & Compatibility:
            </span>
            <div className="flex flex-wrap items-center gap-4 text-[11px]">
              <span className="px-2.5 py-1 bg-white/10 rounded-md border border-white/10">MoHUA PM SVANidhi</span>
              <span className="px-2.5 py-1 bg-white/10 rounded-md border border-white/10">NPCI Bharat QR Standard</span>
              <span className="px-2.5 py-1 bg-white/10 rounded-md border border-white/10">Digital India Stack</span>
              <span className="px-2.5 py-1 bg-white/10 rounded-md border border-white/10">ONDC Micro-Retail</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

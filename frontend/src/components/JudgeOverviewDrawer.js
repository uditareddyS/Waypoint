import React from 'react';

export default function JudgeOverviewDrawer({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-ink/60 backdrop-blur-sm flex justify-end animate-fadeIn">
      <div 
        className="bg-cream w-full max-w-lg h-full shadow-2xl border-l border-awning/20 flex flex-col animate-slideUp overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="bg-awning px-6 py-5 text-cream flex items-center justify-between border-b border-awning-light/30">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-marigold flex items-center justify-center text-awning-dark font-bold text-sm">
              ⚖️
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white leading-tight">
                Hackathon Judge & Tech Specs
              </h3>
              <p className="text-[11px] text-cream/75">
                Waypoint System Architecture & Evaluation Guide
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

        {/* Drawer Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-ink">
          
          {/* Executive Summary */}
          <div className="bg-white rounded-2xl p-4 border border-awning/15 shadow-xs">
            <span className="text-[10px] font-bold uppercase tracking-wider text-marigold-dark bg-marigold-soft px-2 py-0.5 rounded-md">
              Problem Statement
            </span>
            <h4 className="font-display font-bold text-base text-awning mt-2">
              The Informal Street Merchant Digital Divide
            </h4>
            <p className="text-xs text-ink-light mt-1 leading-relaxed">
              India has over <strong>10 million street vendors</strong> generating billions in unorganized daily economic activity. Despite transformative government schemes like <strong>PM SVANidhi</strong> and <strong>NPCI UPI</strong>, vendors remain trapped in informal debt due to lack of digital literacy, complex documentation, and zero technical support.
            </p>
          </div>

          {/* Core Innovation */}
          <div className="bg-white rounded-2xl p-4 border border-awning/15 shadow-xs space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-awning bg-awning/10 px-2 py-0.5 rounded-md">
              Waypoint Innovation
            </span>
            <h4 className="font-display font-bold text-base text-awning">
              Zero-Friction Autonomous Digitalization
            </h4>
            <div className="text-xs text-ink-light space-y-1.5 leading-relaxed">
              <p>• <strong>Voice-First Ingestion:</strong> Street vendors speak naturally in their native language; the system parses the trade, locality, and inventory cycle.</p>
              <p>• <strong>Automated Scheme Matching:</strong> Direct qualification mapping to PM SVANidhi 3-tier loan tranches (₹10k, ₹20k, ₹50k) with 7% interest subvention.</p>
              <p>• <strong>Instant Standee & Soundbox:</strong> Generates ready-to-print acrylic countertop QR displays with simulated audio voice alerts in Hindi and English.</p>
              <p>• <strong>Dialect WhatsApp Studio:</strong> Creates instant promotional campaigns that vendors can send directly into neighbourhood WhatsApp groups.</p>
            </div>
          </div>

          {/* Technical Stack */}
          <div className="bg-white rounded-2xl p-4 border border-awning/15 shadow-xs">
            <span className="text-[10px] font-bold uppercase tracking-wider text-clay-dark bg-clay-soft px-2 py-0.5 rounded-md">
              Production Architecture
            </span>
            <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-surface/50 border border-awning/10">
                <div className="font-bold text-awning">AI Reasoning</div>
                <div className="text-[11px] text-ink-muted">AWS Bedrock Generative Agent</div>
              </div>
              <div className="p-2.5 rounded-xl bg-surface/50 border border-awning/10">
                <div className="font-bold text-awning">Policy Vector RAG</div>
                <div className="text-[11px] text-ink-muted">Amazon OpenSearch Serverless</div>
              </div>
              <div className="p-2.5 rounded-xl bg-surface/50 border border-awning/10">
                <div className="font-bold text-awning">Client Engine</div>
                <div className="text-[11px] text-ink-muted">React 19 + Tailwind CSS</div>
              </div>
              <div className="p-2.5 rounded-xl bg-surface/50 border border-awning/10">
                <div className="font-bold text-awning">Voice & Audio</div>
                <div className="text-[11px] text-ink-muted">Web Speech & Web Audio APIs</div>
              </div>
            </div>
          </div>

          {/* Social Impact & Feasibility */}
          <div className="bg-gradient-to-br from-awning to-awning-dark text-cream rounded-2xl p-4 text-xs space-y-2">
            <div className="font-bold text-marigold text-sm">
              Scalability & Feasibility:
            </div>
            <p className="text-cream/85 leading-relaxed">
              Waypoint requires <strong>zero app installation</strong> for vendors—it runs as a lightweight Progressive Web App accessible on basic Android smartphones with zero storage overhead.
            </p>
          </div>

        </div>

        {/* Drawer Footer */}
        <div className="bg-surface px-6 py-4 border-t border-awning/15 flex items-center justify-between">
          <span className="text-xs text-ink-muted font-mono">
            Status: Hackathon Evaluation Ready
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-awning text-cream text-xs font-bold hover:bg-awning-light transition"
          >
            Close Briefing
          </button>
        </div>

      </div>
    </div>
  );
}

import React, { useState } from 'react';

export default function ArchitectureFlow() {
  const [selectedNode, setSelectedNode] = useState('bedrock');

  const NODES = {
    input: {
      step: '01',
      title: 'Multilingual Ingestion',
      tech: 'Web Speech API + NLP Tokenizer',
      desc: 'Accepts unstructured voice dictation and natural language text across 5 Indian languages (Hindi, Marathi, Tamil, Telugu, English).',
      badge: 'Client Edge',
      spec: 'Real-time audio waveform sampling with zero-latency fallback simulation.',
    },
    bedrock: {
      step: '02',
      title: 'AWS Bedrock Agent',
      tech: 'Generative AI Prompt Engine',
      desc: 'Extracts critical merchant entities (trade type, municipal ward location, inventory cycle, estimated daily turnover) into structured vendor profiles.',
      badge: 'AI Core',
      spec: 'Temperature 0.2 contextual reasoning with structured JSON schema outputs.',
    },
    opensearch: {
      step: '03',
      title: 'OpenSearch Vector RAG',
      tech: 'Amazon OpenSearch Serverless',
      desc: 'Performs semantic vector search across municipal guidelines, PM SVANidhi tranche rules, interest subvention calculators, and ULB eligibility criteria.',
      badge: 'Knowledge Retrieval',
      spec: 'k-NN dense embeddings matching vendor locality with local ward welfare schemes.',
    },
    npci: {
      step: '04',
      title: 'NPCI UPI & Standee Engine',
      tech: 'Dynamic SVG QR + Web Audio API',
      desc: 'Synthesizes verified Bharat QR merchant identities, creates acrylic printable countertop layouts, and primes dual-voice soundbox alert triggers.',
      badge: 'Fintech Rail',
      spec: 'NPCI UPI 2.0 compliant payload generation with print-optimized CSS rasterization.',
    },
    broadcast: {
      step: '05',
      title: 'WhatsApp Broadcast Studio',
      tech: 'WhatsApp Deep Linking + Dialect Copier',
      desc: 'Automates customer acquisition broadcasts in regional scripts with single-click group dispatching to turn sidewalk foot traffic into repeat customers.',
      badge: 'Growth Engine',
      spec: 'Zero-API friction URL encoding directly linking to vendor WhatsApp community groups.',
    },
  };

  const active = NODES[selectedNode];

  return (
    <section id="architecture" className="my-16 sm:my-20">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 px-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-awning/10 text-awning uppercase tracking-wider mb-2">
          <span>⚙️</span>
          <span>Technical Architecture</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-awning tracking-tight">
          How the Autonomous Agent Works Under the Hood
        </h2>
        <p className="text-xs sm:text-sm text-ink-muted mt-2 leading-relaxed">
          Powered by AWS Bedrock generative reasoning, OpenSearch Vector RAG, and NPCI Bharat QR rails.
        </p>
      </div>

      {/* Interactive Architecture Flow Diagram */}
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Horizontal Node Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-6">
          {Object.entries(NODES).map(([key, node]) => {
            const isSelected = selectedNode === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setSelectedNode(key)}
                className={`p-3.5 rounded-2xl text-left border transition-all duration-200 relative ${
                  isSelected
                    ? 'bg-awning text-cream border-awning shadow-lg scale-[1.02] ring-2 ring-marigold'
                    : 'bg-white hover:bg-surface text-ink border-awning/15'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono font-bold mb-1">
                  <span className={isSelected ? 'text-marigold' : 'text-ink-muted'}>
                    STEP {node.step}
                  </span>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-marigold animate-ping" />
                  )}
                </div>
                <div className="font-display font-bold text-xs leading-tight">
                  {node.title}
                </div>
                <div className={`text-[10px] mt-1 truncate ${isSelected ? 'text-cream/70' : 'text-ink-muted'}`}>
                  {node.badge}
                </div>
              </button>
            );
          })}
        </div>

        {/* Focused Architecture Inspector Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-awning/15 shadow-md relative overflow-hidden">
          
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-marigold-soft text-marigold-dark border border-marigold/30">
                  {active.tech}
                </span>
                <span className="text-xs text-ink-muted font-mono">
                  Module #{active.step}
                </span>
              </div>
              
              <h3 className="font-display font-bold text-2xl text-awning mt-2">
                {active.title}
              </h3>
              <p className="text-xs sm:text-sm text-ink-light mt-1 max-w-2xl leading-relaxed">
                {active.desc}
              </p>
            </div>

            {/* Spec Tag */}
            <div className="bg-surface/50 rounded-2xl p-4 border border-awning/10 max-w-xs text-left">
              <span className="text-[10px] font-bold uppercase tracking-wider text-awning block mb-1">
                Engineering Specification
              </span>
              <p className="text-xs text-ink-muted font-mono leading-relaxed">
                {active.spec}
              </p>
            </div>
          </div>

          {/* Connected Data Flow Indicator */}
          <div className="mt-6 pt-4 border-t border-awning/10 flex flex-wrap items-center justify-between gap-3 text-xs text-ink-muted">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Full Pipeline Execution: <strong>~1,400ms</strong></span>
            </div>
            <div className="font-mono text-[11px] text-marigold-dark font-bold">
              Production Architecture: AWS Lambda + Bedrock + OpenSearch
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

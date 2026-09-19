import React, { useEffect } from 'react';

export default function Toast({ message, onClose }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 3200);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slideUp">
      <div className="bg-awning text-cream px-4 py-3 rounded-2xl shadow-xl border border-marigold/30 flex items-center gap-3 max-w-sm text-xs">
        <span className="w-2 h-2 rounded-full bg-marigold animate-ping" />
        <span className="font-medium flex-1">{message}</span>
        <button
          onClick={onClose}
          className="text-cream/60 hover:text-cream ml-1 text-sm font-bold"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

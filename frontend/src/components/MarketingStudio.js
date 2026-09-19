import React, { useState } from 'react';

export default function MarketingStudio({ vendorName, location, businessDesc, onShowToast }) {
  const [selectedCampaign, setSelectedCampaign] = useState('fresh');
  const [copied, setCopied] = useState(false);

  const displayBusiness = vendorName || 'Apna Stall';
  const displayLoc = location || 'Main Market';

  const CAMPAIGNS = {
    fresh: {
      title: '🌅 Morning Fresh Arrival',
      badge: 'Daily Stock',
      hindi: `📢 *ताज़ा और सबसे शुद्ध! ${displayBusiness}* 📢\n\nआज सुबह का नया ताज़ा स्टॉक आ गया है! ${displayLoc} में सबसे उत्तम गुणवत्ता और किफ़ायती दाम पर।\n\n✨ ऑनलाइन UPI पेमेंट की सुविधा उपलब्ध है।\n📍 आइए और सेवा का अवसर दीजिए: *${displayLoc}*!\n📞 अग्रिम बुकिंग / ऑर्डर के लिए संपर्क करें।`,
      english: `📢 *Fresh & Best Quality at ${displayBusiness}!* 📢\n\nFresh morning arrivals are now available at our stall in ${displayLoc}! Best quality guaranteed.\n\n✨ UPI & Online payments accepted (Zero hassle).\n📍 Visit us today at *${displayLoc}*!\n\nThank you for supporting local street vendors! 🙏`,
    },
    combo: {
      title: '🔥 Evening Special Combo',
      badge: 'Rush Hour',
      hindi: `🔥 *शाम का स्पेशल कॉम्बो ऑफर — ${displayBusiness}!* 🔥\n\nआज शाम ${displayLoc} पर आइए और पाइए ताज़गी से भरपूर स्पेशल कॉम्बो!\n\n🏷️ आज का ऑफर: 2 लेने पर ₹10 की विशेष छूट!\n⚡ ऑनलाइन पेमेंट (GPay / PhonePe) करें और पाएं डिजिटल रसीद।\n📍 स्थान: *${displayLoc}*\n\nजल्दी आएं, स्टॉक सीमित है!`,
      english: `🔥 *Evening Rush Special at ${displayBusiness}!* 🔥\n\nDrop by our stall at ${displayLoc} this evening for our signature combo special!\n\n🏷️ Today's Deal: Buy 2 and get ₹10 off!\n⚡ Quick QR scan payment accepted via PhonePe/GPay.\n📍 Location: *${displayLoc}*\n\nVisit before stocks run out!`,
    },
    festival: {
      title: '🎉 Festival & Weekend Saver',
      badge: 'Weekend',
      hindi: `🎉 *त्योहार की शुभकामनाएं — ${displayBusiness}* 🎉\n\nइस पावन अवसर पर आपके और आपके परिवार के लिए विशेष शुद्ध व ताज़ा सामग्री!\n\n🎁 ₹200 से अधिक की ख़रीद पर विशेष उपहार/छूट।\n📲 डिजिटल UPI पेमेंट स्वीकार्य।\n📍 *${displayBusiness}*, ${displayLoc}.\n\nहमारे साथ त्योहार मनाएं और स्थानीय व्यापार को बढ़ावा दें!`,
      english: `🎉 *Festive Greetings from ${displayBusiness}!* 🎉\n\nCelebrate this festive weekend with the freshest products directly at ${displayLoc}!\n\n🎁 Special discounts on purchases above ₹200.\n📲 Scan UPI QR for quick, contactless payments.\n📍 *${displayBusiness}*, ${displayLoc}.\n\nCelebrate local, shop local!`,
    },
  };

  const currentPromo = CAMPAIGNS[selectedCampaign];

  const handleCopy = () => {
    const fullText = `${currentPromo.hindi}\n\n---\n${currentPromo.english}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    if (onShowToast) onShowToast('Promotional message copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppShare = () => {
    const fullText = `${currentPromo.hindi}\n\n---\n${currentPromo.english}`;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(fullText)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="space-y-6">
      {/* Campaign Selector Header */}
      <div className="bg-white rounded-2xl p-4 border border-awning/15 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div>
            <h3 className="font-display font-bold text-base text-awning">
              WhatsApp & Local Marketing Studio
            </h3>
            <p className="text-xs text-ink-muted">
              Pre-crafted promotional broadcasts to share with loyal customers and local WhatsApp groups.
            </p>
          </div>
          <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-marigold-soft text-marigold-dark">
            3 Ready Templates
          </span>
        </div>

        {/* Campaign Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {Object.entries(CAMPAIGNS).map(([key, campaign]) => (
            <button
              key={key}
              type="button"
              onClick={() => setSelectedCampaign(key)}
              className={`p-3 rounded-xl text-left border transition active:scale-98 ${
                selectedCampaign === key
                  ? 'bg-awning text-cream border-awning shadow-sm'
                  : 'bg-cream/50 hover:bg-cream border-awning/10 text-ink'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider">
                <span className={selectedCampaign === key ? 'text-marigold' : 'text-marigold-dark'}>
                  {campaign.badge}
                </span>
                {selectedCampaign === key && <span>✓ Active</span>}
              </div>
              <div className="font-display font-bold text-sm mt-0.5">
                {campaign.title}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Promo Preview & Receipt Ticket */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Ticket Flyer Preview (7 cols) */}
        <div className="lg:col-span-7">
          <div
            className="relative bg-white rounded-2xl p-6 sm:p-7 shadow-lg border border-awning/15 overflow-hidden"
            style={{
              backgroundImage:
                'repeating-linear-gradient(transparent, transparent 27px, rgba(26,60,52,0.05) 28px)',
            }}
          >
            {/* Top decorative header of receipt */}
            <div className="flex items-center justify-between border-b-2 border-dashed border-awning/20 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-marigold" />
                <span className="text-xs font-bold uppercase tracking-widest text-awning">
                  Customer Broadcast Ticket
                </span>
              </div>
              <span className="text-[10px] font-mono text-ink-muted">
                WP-MKT-{selectedCampaign.toUpperCase()}
              </span>
            </div>

            {/* Hindi Message */}
            <div className="mb-4 bg-cream/40 rounded-xl p-4 border border-awning/10">
              <div className="text-[10px] font-bold text-clay uppercase tracking-wider mb-1">
                Regional Language (Hindi / मराठी)
              </div>
              <p className="font-display text-base text-ink whitespace-pre-line leading-relaxed">
                {currentPromo.hindi}
              </p>
            </div>

            {/* English Message */}
            <div className="bg-surface/30 rounded-xl p-4 border border-awning/10">
              <div className="text-[10px] font-bold text-awning uppercase tracking-wider mb-1">
                English Translation
              </div>
              <p className="text-xs text-ink-light whitespace-pre-line leading-relaxed">
                {currentPromo.english}
              </p>
            </div>

            {/* Stamped Watermark */}
            <div className="mt-4 pt-3 border-t border-dashed border-awning/20 flex items-center justify-between text-xs text-ink-muted">
              <span>Verified Merchant Promo</span>
              <span className="font-mono text-[10px] text-marigold-dark font-bold">
                100% LOCAL VENDOR SUPPORT
              </span>
            </div>

            {/* Torn-edge cut-out effect at bottom */}
            <div
              className="absolute -bottom-2.5 left-0 right-0 h-5 pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle, var(--color-bg) 60%, transparent 61%) 0 0/16px 16px repeat-x',
              }}
            />
          </div>
        </div>

        {/* Action Panel & WhatsApp Sharing (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Quick Share Card */}
          <div className="bg-white rounded-3xl p-5 border border-awning/15 shadow-sm space-y-4">
            <h4 className="font-display font-bold text-base text-awning">
              Broadcast to Customers
            </h4>
            <p className="text-xs text-ink-muted">
              Send this deal directly into your neighbourhood WhatsApp groups, apartment communities, and loyal customer chats.
            </p>

            {/* WhatsApp Share Button */}
            <button
              onClick={handleWhatsAppShare}
              className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-display font-bold py-3 px-4 rounded-xl text-sm shadow-md transition active:scale-95 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>Share on WhatsApp</span>
            </button>

            {/* Copy Text Button */}
            <button
              onClick={handleCopy}
              className="w-full bg-surface hover:bg-surface-dark text-ink font-semibold py-2.5 px-4 rounded-xl text-xs border border-awning/15 transition active:scale-95 flex items-center justify-center gap-1.5"
            >
              <svg className="w-4 h-4 text-awning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Message Text'}</span>
            </button>
          </div>

          {/* Local Marketing Tips */}
          <div className="bg-marigold-soft/50 rounded-2xl p-4 border border-marigold/20 text-xs space-y-2 text-ink">
            <div className="font-bold text-marigold-dark flex items-center gap-1.5">
              <span>💡</span>
              <span>Pro-Vendor Tip:</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              Place your QR standee right next to this printed ticket on your cart. Customers love sharing daily deals with their office colleagues or family WhatsApp groups!
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

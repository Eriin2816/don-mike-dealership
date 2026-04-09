"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/config";

const SESSION_KEY = "donmike_popup_shown";
const DELAY_MS = 10000; // 10 seconds

export default function PopupLeadModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Don't show if already shown this session
    if (typeof window !== "undefined" && sessionStorage.getItem(SESSION_KEY)) {
      return;
    }

    const timer = setTimeout(() => {
      setVisible(true);
      sessionStorage.setItem(SESSION_KEY, "1");
    }, DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Get matched to your vehicle"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-[#0F172A]/60 backdrop-blur-sm"
        onClick={() => setVisible(false)}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-[650px] bg-white rounded-2xl shadow-[0_24px_64px_rgba(15,23,42,0.2)] overflow-hidden animate-fade-up max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#1E3A5F] px-7 pt-7 pb-5 relative">
          {/* Close */}
          <button
            onClick={() => setVisible(false)}
            aria-label="Close"
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-colors duration-150"
          >
            <CloseIcon />
          </button>

          <span className="inline-block text-[#4A7DB5] text-[10px] font-semibold tracking-[0.15em] uppercase mb-2">
            Quick Match
          </span>
          <h2 className="font-display font-black text-2xl text-white tracking-[-0.01em] leading-snug">
            Tell us what you&apos;re looking for —
            <br />
            we&apos;ll find the right fit.
          </h2>
          <p className="text-white/65 text-sm mt-2 leading-relaxed">
            Honda · Toyota · Mazda · GMC · Mercedes-Benz — no pressure, just guidance.
          </p>
        </div>

        {/* Embedded form — scrollable area so full form is always reachable */}
        <div className="bg-white flex-1 overflow-y-auto">
          {/* TODO: GHL form embed — replace src with actual form URL if dimensions change */}
          <iframe
            src={siteConfig.cta.formUrl}
            style={{
              width: "100%",
              height: 580,
              border: "none",
              display: "block",
            }}
            title="Don Mike Auto Dealership — vehicle match form"
            scrolling="yes"
          />
        </div>

        {/* Footer note */}
        <div className="px-7 pb-5 pt-2 bg-[#F8FAFC] border-t border-[#E2E8F0]">
          <p className="text-[#94A3B8] text-xs text-center">
            No obligation. We&apos;ll follow up by email or phone — whichever
            you prefer. Gainesville, FL.
          </p>
        </div>
      </div>
    </div>
  );
}

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18M6 6l12 12"/>
    </svg>
  );
}

"use client";

import { siteConfig } from "@/lib/config";

export default function BookingEmbedSection() {
  return (
    <section className="bg-white py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_4px_32px_rgba(15,23,42,0.08)] overflow-hidden">
          {/* Header */}
          <div className="bg-[#F0F6FF] border-b border-[#C8D6E5]/60 px-8 py-5">
            <h2 className="font-display font-black text-2xl text-[#1E3A5F]">
              Choose a Time That Works for You
            </h2>
            <p className="text-[#475569] text-sm mt-1">
              Select any available slot — our team will confirm within the hour.
            </p>
          </div>

          {/* Calendar embed — tall enough to show full calendar without scrolling */}
          {/* TODO: Adjust height if GHL calendar layout changes */}
          <div className="p-3 sm:p-4">
            <iframe
              src={siteConfig.cta.calendarUrl}
              style={{
                width: "100%",
                height: 900,
                border: "none",
                borderRadius: 8,
                display: "block",
              }}
              title="Book a call with Don Mike Auto Dealership"
              scrolling="no"
            />
          </div>

          {/* Fallback contact */}
          <div className="bg-[#F8FAFC] border-t border-[#E2E8F0] px-8 py-4">
            <p className="text-[#64748B] text-sm text-center">
              Prefer to reach us directly?{" "}
              <a
                href={siteConfig.business.phoneHref}
                className="text-[#1A56DB] font-semibold hover:text-[#1547C0] transition-colors duration-150"
              >
                {siteConfig.business.phone}
              </a>{" "}
              or{" "}
              <a
                href={siteConfig.business.emailHref}
                className="text-[#1A56DB] font-semibold hover:text-[#1547C0] transition-colors duration-150"
              >
                {siteConfig.business.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

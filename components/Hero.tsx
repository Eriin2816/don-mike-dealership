import { siteConfig } from "@/lib/config";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0D1620 0%, #142240 45%, #1F2837 100%)" }}
      aria-label="Hero"
    >
      {/* Background gradient fill */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0D1620 0%, #1A2C52 55%, #1F2837 100%)" }} />

      {/* Radial glow — top right electric blue */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(13,172,201,0.28) 0%, transparent 65%)" }}
      />
      {/* Secondary glow orb — mid right */}
      <div
        className="absolute top-1/3 right-[15%] w-72 h-72 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(52,212,240,0.18) 0%, transparent 70%)",
          filter: "blur(48px)",
        }}
      />
      {/* Bottom left anchor */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 0% 100%, rgba(10,18,38,0.8) 0%, transparent 60%)" }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Floating abstract visual — desktop only (right side) */}
      <div className="absolute right-0 top-0 bottom-0 hidden xl:flex items-center justify-end pr-16 pointer-events-none" aria-hidden="true">
        <div className="relative w-[480px] h-[520px]">
          {/* Outer ring */}
          <div
            className="absolute inset-0 rounded-3xl"
            style={{
              border: "1px solid rgba(13,172,201,0.12)",
              background: "rgba(13,172,201,0.03)",
            }}
          />
          {/* Inner panel — pipeline visualization */}
          <div className="absolute inset-4 rounded-2xl p-6 flex flex-col gap-4"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
            {/* Header bar */}
            <div className="flex items-center justify-between mb-1">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
              </div>
              <div className="w-24 h-2 rounded-full bg-white/8" />
            </div>
            {/* Pipeline stages */}
            {[
              { label: "New Lead", count: "12", color: "rgba(13,172,201,0.7)", w: "100%" },
              { label: "Contacted", count: "9", color: "rgba(52,212,240,0.5)", w: "75%" },
              { label: "Qualified", count: "6", color: "rgba(13,172,201,0.4)", w: "50%" },
              { label: "Booked", count: "4", color: "rgba(52,212,240,0.6)", w: "33%" },
            ].map((stage) => (
              <div key={stage.label} className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-white/40 text-xs font-medium">{stage.label}</span>
                  <span className="text-white/30 text-xs">{stage.count}</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: stage.w, background: stage.color }}
                  />
                </div>
              </div>
            ))}
            {/* Divider */}
            <div className="h-px bg-white/5 my-1" />
            {/* Notification rows */}
            {[
              { text: "New lead from Google Ads", time: "2m ago" },
              { text: "Follow-up sent via SMS", time: "5m ago" },
              { text: "Appointment confirmed", time: "12m ago" },
            ].map((n) => (
              <div key={n.text} className="flex items-center gap-3">
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: "rgba(13,172,201,0.7)" }}
                />
                <span className="text-white/35 text-xs flex-1">{n.text}</span>
                <span className="text-white/20 text-xs">{n.time}</span>
              </div>
            ))}
          </div>
          {/* Corner accent glow */}
          <div
            className="absolute -bottom-8 -right-8 w-40 h-40"
            style={{
              background: "radial-gradient(circle, rgba(13,172,201,0.25) 0%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-28 w-full">
        <div className="max-w-[650px] xl:max-w-[720px]">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 bg-[rgba(13,172,201,0.1)] border border-[rgba(13,172,201,0.2)] text-[#34D4F0] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 bg-[#34D4F0] rounded-full" style={{ animation: "pulse 3s ease-in-out infinite" }} />
            Automation-Driven Marketing
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-extrabold text-white leading-[1.04] tracking-[-0.035em] mb-6">
            The Lead Engine Built for{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #0DACC9 0%, #34D4F0 60%, #0DACC9 100%)" }}
            >
              High-Ticket Local Businesses
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/60 leading-[1.75] max-w-xl mb-10 font-light">
            From the first inquiry to the booked appointment — Adaptive Automations
            builds the connected systems that capture, follow up, and convert, so
            your team closes more and chases less.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-14">
            <a
              href={siteConfig.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-white font-semibold text-base px-7 py-4 rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#34D4F0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1620] hover:brightness-110"
              style={{
                background: "#0DACC9",
                boxShadow: "0 4px 24px rgba(13,172,201,0.35)",
              }}
            >
              {siteConfig.cta.label}
              <svg
                className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <a
              href="#how-it-works"
              className="group inline-flex items-center gap-2 text-white/55 hover:text-white text-sm font-medium transition-colors duration-200 px-2 py-1"
            >
              See How It Works
              <svg
                className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Trust bullets */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-5 border-t border-white/[0.07]">
            {["Fast Setup", "Proven Systems", "No Long-Term Lock-In"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-white/40">
                <svg
                  className="w-4 h-4 text-[#0DACC9] flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade to offwhite */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, #F5F3EC, transparent)" }}
      />
    </section>
  );
}

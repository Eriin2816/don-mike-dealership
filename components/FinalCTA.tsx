import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="bg-[#1A56DB] py-20 sm:py-24 relative overflow-hidden">
      {/* Background accent shapes */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 w-96 h-96 rounded-full bg-[#1E3A5F]/40 blur-3xl" />

      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
        backgroundSize: "28px 28px"
      }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-white/60 text-xs font-semibold tracking-[0.15em] uppercase mb-4">
          Ready to Start?
        </span>
        <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-[-0.02em] leading-tight mb-6">
          Find your vehicle.
          <br />
          Know your payment.
        </h2>
        <p className="text-white/75 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          A 20-minute call is all it takes. Tell us your budget, your lifestyle,
          and what you&apos;re driving now — we&apos;ll do the rest. No pressure.
          Gainesville-local. Multi-brand expertise.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/book-a-call"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F0F6FF] active:bg-[#EBF3FF] text-[#1A56DB] font-semibold text-base px-8 py-4 rounded-lg transition-colors duration-200 shadow-[0_4px_24px_rgba(0,0,0,0.15)]"
          >
            Schedule a Free Call
            <ArrowIcon />
          </Link>
          <Link
            href="/car-collections"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold text-base px-8 py-4 rounded-lg transition-colors duration-200"
          >
            Browse the Collection
          </Link>
        </div>

        {/* Reassurance */}
        <p className="text-white/50 text-sm mt-8">
          Free consultation · No commitment · Gainesville, FL
        </p>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6"/>
    </svg>
  );
}

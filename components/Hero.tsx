import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-dealership.jpg')" }}
        role="img"
        aria-label="Don Mike Auto Dealership — multi-brand vehicles on the lot in Gainesville, FL"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#1E3A5F]/75 to-[#1E3A5F]/30" />

      {/* Blue accent gradient — bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0F172A]/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-20">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-[#1A56DB]/20 border border-[#1A56DB]/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A56DB] animate-pulse" />
            <span className="text-white/90 text-xs font-medium tracking-[0.1em] uppercase">
              Gainesville&apos;s Multi-Brand Dealership
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] tracking-[-0.02em] mb-6">
            Find the{" "}
            <span className="text-[#4A7DB5]">Right Vehicle</span>
            <br />
            for Your Life.
          </h1>

          <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">
            Honda. Toyota. Mazda. GMC. Mercedes-Benz. One dealership, multiple
            brands, and a team that helps Gainesville-area buyers drive home in
            the right vehicle at the right payment.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/book-a-call"
              className="inline-flex items-center justify-center gap-2 bg-[#1A56DB] hover:bg-[#1547C0] active:bg-[#123DAA] text-white font-semibold text-base px-7 py-4 rounded-lg transition-colors duration-200 shadow-[0_4px_24px_rgba(26,86,219,0.5)] hover:shadow-[0_4px_32px_rgba(26,86,219,0.6)]"
            >
              Schedule a Free Call
              <ArrowIcon />
            </Link>
            <Link
              href="/car-collections"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 active:bg-white/25 text-white font-semibold text-base px-7 py-4 rounded-lg border border-white/25 hover:border-white/40 transition-colors duration-200"
            >
              Browse Collection
            </Link>
          </div>

          {/* Brand pills */}
          <div className="flex flex-wrap gap-2 mt-8">
            {["Honda", "Toyota", "Mazda", "GMC", "Mercedes-Benz"].map((b) => (
              <span
                key={b}
                className="bg-white/10 border border-white/20 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full tracking-wide"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60">
        <span className="text-white/50 text-[10px] tracking-[0.15em] uppercase">
          Scroll
        </span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

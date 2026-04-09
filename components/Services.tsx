import Link from "next/link";

const vehicles = [
  {
    make: "Honda",
    model: "Accord",
    tagline: "Gainesville's most versatile sedan",
    summary: "Refined, fuel-efficient, and built to last — a top pick for professionals and commuters across Alachua County.",
    image: "https://placehold.co/640x400/EBF3FF/1A56DB?text=Honda+Accord",
    alt: "Honda Accord — placeholder until real inventory photo is added",
  },
  {
    make: "Honda",
    model: "CR-V",
    tagline: "The family crossover that does everything",
    summary: "Spacious cabin, excellent safety ratings, and Honda's trusted reliability make the CR-V ideal for Gainesville families.",
    image: "https://placehold.co/640x400/EBF3FF/1A56DB?text=Honda+CR-V",
    alt: "Honda CR-V — placeholder until real inventory photo is added",
  },
  {
    make: "Toyota",
    model: "Camry",
    tagline: "Smooth, dependable, payment-friendly",
    summary: "One of Florida's top-selling sedans for good reason — strong resale value, comfortable ride, and long-term reliability.",
    image: "https://placehold.co/640x400/EBF3FF/1A56DB?text=Toyota+Camry",
    alt: "Toyota Camry — placeholder until real inventory photo is added",
  },
  {
    make: "Toyota",
    model: "RAV4",
    tagline: "Rugged, roomy, and fuel-smart",
    summary: "The RAV4 handles Gainesville's everyday needs and weekend adventures with equal confidence. Available in hybrid.",
    image: "https://placehold.co/640x400/EBF3FF/1A56DB?text=Toyota+RAV4",
    alt: "Toyota RAV4 — placeholder until real inventory photo is added",
  },
  {
    make: "GMC",
    model: "Sierra 1500",
    tagline: "Built for work. Refined for life.",
    summary: "North Florida demands truck capability — and the Sierra delivers with towing power, comfort, and class-leading features.",
    image: "https://placehold.co/640x400/EBF3FF/1A56DB?text=GMC+Sierra+1500",
    alt: "GMC Sierra 1500 — placeholder until real inventory photo is added",
  },
  {
    make: "Mercedes-Benz",
    model: "GLC",
    tagline: "Gainesville's step-up luxury SUV",
    summary: "For professionals and executives who want German engineering and premium comfort — the GLC is Gainesville's attainable luxury pick.",
    image: "https://placehold.co/640x400/EBF3FF/1A56DB?text=Mercedes+GLC",
    alt: "Mercedes-Benz GLC — placeholder until real inventory photo is added",
  },
];

export default function FeaturedVehicleGrid() {
  return (
    <section id="featured-vehicles" className="bg-[#F8FAFC] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="inline-block text-[#1A56DB] text-xs font-semibold tracking-[0.15em] uppercase mb-3">
              Featured Vehicles
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-[#0F172A] tracking-[-0.02em]">
              Popular picks for<br />Gainesville drivers.
            </h2>
          </div>
          <Link
            href="/car-collections"
            className="inline-flex items-center gap-2 text-[#1A56DB] font-semibold text-sm hover:text-[#1547C0] transition-colors duration-150 shrink-0"
          >
            View Full Collection
            <ArrowIcon />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((v) => (
            <div
              key={`${v.make}-${v.model}`}
              className="group bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden hover:shadow-[0_4px_24px_rgba(26,86,219,0.12)] hover:border-[#1A56DB]/20 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[16/10]">
                {/* TODO: Replace src with actual inventory photo for this model */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={v.image}
                  alt={v.alt}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
                {/* Brand badge */}
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#1E3A5F] text-xs font-semibold px-2.5 py-1 rounded-full border border-[#C8D6E5]/50">
                  {v.make}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-[#1A56DB] text-xs font-medium tracking-wide mb-1">
                  {v.tagline}
                </p>
                <h3 className="font-display font-bold text-xl text-[#1E3A5F] mb-2">
                  {v.make} {v.model}
                </h3>
                <p className="text-[#475569] text-sm leading-relaxed mb-5">
                  {v.summary}
                </p>
                <Link
                  href="/book-a-call"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#EBF3FF] hover:bg-[#1A56DB] text-[#1A56DB] hover:text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors duration-200"
                >
                  Inquire About This Vehicle
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link
            href="/book-a-call"
            className="inline-flex items-center justify-center gap-2 bg-[#1A56DB] hover:bg-[#1547C0] text-white font-semibold text-base px-8 py-4 rounded-lg transition-colors duration-200 shadow-blue"
          >
            Not sure which fits your budget? Let&apos;s talk.
          </Link>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6"/>
    </svg>
  );
}

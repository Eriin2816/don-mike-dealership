import Link from "next/link";

const segments = [
  {
    emoji: "🎓",
    label: "First-Time Buyers & Students",
    headline: "Your first car, done right.",
    body: "UF and Santa Fe students — we know budgets are tight. We specialize in reliable pre-owned and CPO vehicles under real payment targets, with guidance on credit and financing built for first-timers.",
    highlights: [
      "Pre-owned from $199/mo starting point",
      "Credit-building financing available",
      "No-pressure, no hidden fees",
    ],
    cta: "Talk to Us First",
  },
  {
    emoji: "💼",
    label: "Young Professionals",
    headline: "Move up without overpaying.",
    body: "Just landed a role at UF Health, Shands, or a growing Gainesville firm? We help working professionals step into a Mazda CX-5, Honda Accord, or Volkswagen that fits the career — and the payment.",
    highlights: [
      "Fuel-efficient commuter-ready picks",
      "Trade-in equity toward upgrade",
      "Low-friction, quick turnaround",
    ],
    cta: "Find My Upgrade",
  },
  {
    emoji: "👨‍👩‍👧",
    label: "Families",
    headline: "Room for everyone. Reliable everywhere.",
    body: "Gainesville families need space, safety ratings, and long-term value. Honda CR-V, Toyota RAV4, Mazda CX-9, GMC Acadia — we help you match the vehicle to your family size and monthly budget.",
    highlights: [
      "Top-rated safety-first selection",
      "Multi-row and SUV options",
      "Flexible financing for families",
    ],
    cta: "See Family Vehicles",
  },
  {
    emoji: "🔄",
    label: "Trade-In & Used Shoppers",
    headline: "Your current car is worth more than you think.",
    body: "Many Gainesville buyers have more equity in their trade than they realize. We provide honest appraisals and help you roll that value into your next vehicle — new, CPO, or pre-owned.",
    highlights: [
      "Transparent trade-in appraisal",
      "Apply equity to down payment",
      "Wide pre-owned selection",
    ],
    cta: "Get My Trade Value",
  },
];

export default function BuyerSegmentCards() {
  return (
    <section id="who-its-for" className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#1A56DB] text-xs font-semibold tracking-[0.15em] uppercase mb-3">
            Who We Serve
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-[#0F172A] tracking-[-0.02em] mb-4">
            Gainesville buyers, all types.
          </h2>
          <p className="text-[#475569] text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re a UF student buying your first car, a professional
            upgrading, or a family looking for space — we match vehicles to
            real budgets, not just sticker prices.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {segments.map((seg) => (
            <div
              key={seg.label}
              className="group relative bg-white border border-[#E2E8F0] rounded-2xl p-8 hover:border-[#1A56DB]/30 hover:shadow-[0_4px_24px_rgba(26,86,219,0.1)] transition-all duration-300"
            >
              {/* Emoji badge */}
              <div className="w-12 h-12 rounded-xl bg-[#EBF3FF] flex items-center justify-center text-2xl mb-5">
                {seg.emoji}
              </div>

              {/* Label */}
              <span className="text-[#1A56DB] text-xs font-semibold tracking-[0.12em] uppercase">
                {seg.label}
              </span>

              {/* Headline */}
              <h3 className="font-display font-bold text-2xl text-[#1E3A5F] mt-1 mb-3">
                {seg.headline}
              </h3>

              {/* Body */}
              <p className="text-[#475569] text-sm leading-relaxed mb-5">
                {seg.body}
              </p>

              {/* Highlights */}
              <ul className="flex flex-col gap-2 mb-6">
                {seg.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-[#334155]">
                    <span className="mt-0.5 w-4 h-4 rounded-full bg-[#EBF3FF] text-[#1A56DB] flex items-center justify-center shrink-0">
                      <CheckIcon />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/book-a-call"
                className="inline-flex items-center gap-2 text-[#1A56DB] font-semibold text-sm hover:text-[#1547C0] transition-colors duration-150"
              >
                {seg.cta}
                <ArrowIcon />
              </Link>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-[#1A56DB] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="m5 12 5 5L20 7"/>
    </svg>
  );
}
function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6"/>
    </svg>
  );
}

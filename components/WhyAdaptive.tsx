const reasons = [
  {
    title: "Multi-Brand Under One Roof",
    body: "Honda, Toyota, Mazda, GMC, and Mercedes-Benz — all represented by one team. You get honest multi-brand guidance, not a salesperson locked into pushing one make.",
    icon: <BrandsIcon />,
  },
  {
    title: "Payment-First Approach",
    body: "In a market where most buyers are budget-focused, we start with your payment target — not the sticker price. We build the deal around what works for your life.",
    icon: <PaymentIcon />,
  },
  {
    title: "No-Pressure, No Runaround",
    body: "Gainesville buyers are savvy. We don't run games. Transparent pricing, honest trade-in appraisals, and zero hidden fees — every time.",
    icon: <ShieldIcon />,
  },
  {
    title: "Real Local Knowledge",
    body: "We understand the Gainesville market — UF schedules, student financing, Shands commutes, and North Florida road conditions. Our guidance is local, not generic.",
    icon: <LocationIcon />,
  },
  {
    title: "Pre-Owned & CPO Specialists",
    body: "With low inventory driving many buyers to used vehicles, we maintain a curated pre-owned selection that meets quality standards and real payment targets.",
    icon: <CarIcon />,
  },
  {
    title: "Fast, Respectful Process",
    body: "Speed-to-answer matters. When you book a call, a real person responds quickly. We respect your time — because we know you have other things going on.",
    icon: <ClockIcon />,
  },
];

export default function WhyDonMike() {
  return (
    <section id="why-don-mike" className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — header */}
          <div>
            <span className="inline-block text-[#1A56DB] text-xs font-semibold tracking-[0.15em] uppercase mb-3">
              Why Don Mike
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-[#0F172A] tracking-[-0.02em] mb-6 leading-snug">
              A dealership built for how{" "}
              <span className="text-[#1A56DB]">Gainesville people</span>{" "}
              actually buy cars.
            </h2>
            <p className="text-[#475569] text-lg leading-relaxed mb-8">
              Too many dealerships treat Gainesville buyers like an afterthought
              — aggressive upsells, confusing fees, and a process that wears you
              down. Don Mike was built differently: transparent, local, and
              genuinely focused on your outcome.
            </p>
            <a
              href="/book-a-call"
              className="inline-flex items-center gap-2 bg-[#1E3A5F] hover:bg-[#1A56DB] text-white font-semibold text-base px-7 py-4 rounded-lg transition-colors duration-200"
            >
              Start with a Free Consultation
            </a>
          </div>

          {/* Right — reason grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="p-5 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] hover:border-[#1A56DB]/20 hover:bg-[#F0F6FF] transition-colors duration-200"
              >
                <div className="w-9 h-9 rounded-lg bg-[#EBF3FF] flex items-center justify-center text-[#1A56DB] mb-3">
                  {r.icon}
                </div>
                <h3 className="font-display font-bold text-[#1E3A5F] text-base mb-1.5">
                  {r.title}
                </h3>
                <p className="text-[#64748B] text-xs leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandsIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>;
}
function PaymentIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>;
}
function ShieldIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
}
function LocationIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
}
function CarIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17H5v-3l2.5-6h9L19 14v3z"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>;
}
function ClockIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
}

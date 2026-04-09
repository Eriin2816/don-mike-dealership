import Link from "next/link";

const points = [
  {
    title: "Payment-First Conversations",
    body: "We start with your monthly budget — not the MSRP. Once we know your target payment, we work backwards to the right vehicle, trim, and term.",
    icon: <DollarIcon />,
  },
  {
    title: "First-Time Buyer Programs",
    body: "Whether you&apos;re a UF student, recent grad, or buying your first car in the US — we know the lenders who specialize in building credit while putting you in a reliable vehicle.",
    icon: <GradIcon />,
  },
  {
    title: "Flexible Loan Terms",
    body: "Short term for lower total cost, longer term for lower monthly payments. We explain every option clearly so you can make the right call for your financial situation.",
    icon: <TermIcon />,
  },
  {
    title: "Wide Lender Network",
    body: "Less-than-perfect credit? We work with a broad network of lenders — not just one bank — which often means better rates and approval odds than going direct.",
    icon: <NetworkIcon />,
  },
];

export default function FinancingSection() {
  return (
    <section id="financing" className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — visual */}
          <div className="relative">
            <div className="bg-[#1E3A5F] rounded-2xl p-8 sm:p-10">
              {/* Heading in the card */}
              <span className="inline-block text-[#4A7DB5] text-xs font-semibold tracking-[0.15em] uppercase mb-3">
                Financing
              </span>
              <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-[-0.02em] leading-tight mb-6">
                Real budgets.
                <br />
                Real payments.
              </h2>
              <p className="text-white/70 text-base leading-relaxed mb-8">
                Gainesville&apos;s median income is lower than the state average — we
                know that. We don&apos;t push vehicles that don&apos;t fit your life.
                Our financing process is built around transparency and
                long-term affordability.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: "Multiple", label: "Lender Partners" },
                  { val: "No", label: "Hidden Fees" },
                  { val: "Same Day", label: "Pre-Qualification" },
                  { val: "0 Pressure", label: "Sales Approach" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-white/8 border border-white/10 rounded-xl p-4"
                  >
                    <div className="font-display font-black text-xl text-white">
                      {s.val}
                    </div>
                    <div className="text-white/55 text-xs mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              <Link
                href="/book-a-call"
                className="mt-8 inline-flex items-center gap-2 bg-[#1A56DB] hover:bg-[#1547C0] text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors duration-200"
              >
                Discuss My Payment Options
              </Link>
            </div>
          </div>

          {/* Right — points */}
          <div className="flex flex-col gap-6">
            {points.map((p) => (
              <div key={p.title} className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-[#EBF3FF] flex items-center justify-center text-[#1A56DB] mt-0.5">
                  {p.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-[#1E3A5F] text-lg mb-1">
                    {p.title}
                  </h3>
                  <p
                    className="text-[#475569] text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: p.body }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DollarIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>;
}
function GradIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>;
}
function TermIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>;
}
function NetworkIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="3"/><line x1="12" y1="8" x2="12" y2="12"/><circle cx="5" cy="19" r="3"/><circle cx="19" cy="19" r="3"/><path d="M5 16c0-3.87 3.13-7 7-7s7 3.13 7 7"/></svg>;
}

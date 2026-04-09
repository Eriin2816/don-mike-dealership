import Link from "next/link";

export default function TradeInSection() {
  return (
    <section id="trade-in" className="bg-[#F0F6FF] py-20 sm:py-24 border-y border-[#C8D6E5]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <span className="inline-block text-[#1A56DB] text-xs font-semibold tracking-[0.15em] uppercase mb-3">
              Trade-In & Appraisal
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-[#0F172A] tracking-[-0.02em] mb-5 leading-snug">
              Your current car<br />has more value<br />than you think.
            </h2>
            <p className="text-[#475569] text-lg leading-relaxed mb-6">
              Many Gainesville drivers — especially those with trucks, crossovers,
              and SUVs — are sitting on significant equity. We provide transparent
              appraisals and help you apply that value directly toward your next
              vehicle.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {[
                "Honest, no-pressure appraisal process",
                "Apply trade equity toward down payment",
                "Works for new and pre-owned purchases",
                "All makes and models accepted",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[#334155] text-sm">
                  <span className="w-5 h-5 rounded-full bg-[#1A56DB] text-white flex items-center justify-center shrink-0">
                    <CheckIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/book-a-call"
              className="inline-flex items-center gap-2 bg-[#1A56DB] hover:bg-[#1547C0] text-white font-semibold px-7 py-4 rounded-lg transition-colors duration-200 shadow-[0_4px_16px_rgba(26,86,219,0.35)]"
            >
              Get My Trade-In Value
              <ArrowIcon />
            </Link>
          </div>

          {/* Right — visual info card */}
          <div className="relative">
            <div className="bg-white rounded-2xl border border-[#C8D6E5]/70 p-8 shadow-[0_4px_24px_rgba(15,23,42,0.06)]">
              <h3 className="font-display font-bold text-[#1E3A5F] text-2xl mb-6">
                How our trade-in works
              </h3>
              <ol className="flex flex-col gap-5">
                {[
                  {
                    n: "1",
                    title: "Book a call",
                    desc: "Tell us your make, model, year, and rough mileage when you schedule. Takes two minutes.",
                  },
                  {
                    n: "2",
                    title: "We prepare your estimate",
                    desc: "Before the call, we pull market comps and prepare a fair-value range for your vehicle.",
                  },
                  {
                    n: "3",
                    title: "On the call, we review together",
                    desc: "We walk you through the number, explain how it factors into your deal, and answer questions.",
                  },
                  {
                    n: "4",
                    title: "Apply toward your next vehicle",
                    desc: "Trade equity goes directly toward your down payment, reducing your monthly payment or total financed.",
                  },
                ].map((step) => (
                  <li key={step.n} className="flex gap-4">
                    <span className="w-7 h-7 rounded-full bg-[#EBF3FF] text-[#1A56DB] font-display font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                      {step.n}
                    </span>
                    <div>
                      <p className="font-semibold text-[#1E3A5F] text-sm">{step.title}</p>
                      <p className="text-[#64748B] text-xs leading-relaxed mt-0.5">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-6 pt-6 border-t border-[#E2E8F0] flex items-start gap-3">
                <span className="text-[#1A56DB] mt-0.5">
                  <InfoIcon />
                </span>
                <p className="text-[#64748B] text-xs leading-relaxed">
                  We don&apos;t fabricate inflated trade values to get you in the door —
                  that&apos;s not how we operate. Our estimates are based on real
                  market data, and we explain every number.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L20 7"/></svg>;
}
function ArrowIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>;
}
function InfoIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>;
}

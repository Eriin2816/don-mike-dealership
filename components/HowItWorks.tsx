const steps = [
  {
    num: "01",
    title: "Schedule a Free Call",
    body: "Book a 20-minute consultation — no commitment required. Tell us what you&apos;re looking for: budget, lifestyle, trade-in, and which brands interest you.",
    icon: <PhoneCallIcon />,
  },
  {
    num: "02",
    title: "We Match You to the Right Vehicle",
    body: "Based on your payment target and needs, we pull together the best options across Honda, Toyota, Mazda, GMC, and Mercedes-Benz. We do the homework, not you.",
    icon: <MatchIcon />,
  },
  {
    num: "03",
    title: "Drive Home Confident",
    body: "No surprises. No pressure. We walk you through financing options, trade-in value, and monthly payments before you ever sign. Drive home knowing you made the right call.",
    icon: <CarIcon />,
  },
];

export default function ProcessSection() {
  return (
    <section id="how-it-works" className="bg-[#1E3A5F] py-20 sm:py-28 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
        backgroundSize: "32px 32px"
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#4A7DB5] text-xs font-semibold tracking-[0.15em] uppercase mb-3">
            The Process
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-[-0.02em] mb-4">
            Simple. Transparent. Fast.
          </h2>
          <p className="text-white/65 text-lg max-w-xl mx-auto leading-relaxed">
            We designed our process around one thing: getting Gainesville buyers
            into the right vehicle with zero runaround.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] right-0 h-px bg-white/10" />
              )}

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-colors duration-300">
                {/* Number + Icon */}
                <div className="flex items-center gap-4 mb-5">
                  <span className="font-display font-black text-4xl text-[#4A7DB5]/50 leading-none">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#1A56DB]/20 flex items-center justify-center text-[#4A7DB5]">
                    {step.icon}
                  </div>
                </div>

                <h3 className="font-display font-bold text-xl text-white mb-3">
                  {step.title}
                </h3>
                <p
                  className="text-white/65 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: step.body }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhoneCallIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.6 5.05 2 2 0 0 1 3.57 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.6a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}
function MatchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
    </svg>
  );
}
function CarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 17H5v-3l2.5-6h9L19 14v3z"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>
    </svg>
  );
}

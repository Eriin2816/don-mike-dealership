export default function TrustStrip() {
  const stats = [
    { value: "5+", label: "Brands Available" },
    { value: "100%", label: "No-Pressure Promise" },
    { value: "Local", label: "Gainesville, FL Team" },
    { value: "Free", label: "Consultation Call" },
  ];

  const badges = [
    {
      icon: <ShieldIcon />,
      title: "Family Owned",
      sub: "Locally trusted in Gainesville",
    },
    {
      icon: <StarIcon />,
      title: "5-Star Service",
      sub: "Rated by real local buyers",
    },
    {
      icon: <CheckIcon />,
      title: "Multi-Brand Selection",
      sub: "Honda, Toyota, Mazda, GMC & more",
    },
    {
      icon: <KeyIcon />,
      title: "Drive Home Today",
      sub: "Streamlined buying experience",
    },
  ];

  return (
    <section className="bg-[#F0F6FF] border-y border-[#C8D6E5]/60">
      {/* Stats strip */}
      <div className="border-b border-[#C8D6E5]/60 bg-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/10 w-full">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center text-center px-6 py-1"
              >
                <span className="font-display font-black text-2xl text-white tracking-tight">
                  {s.value}
                </span>
                <span className="text-white/60 text-xs tracking-wide mt-0.5">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust badges */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((b) => (
            <div
              key={b.title}
              className="flex flex-col items-center text-center gap-3 p-5 bg-white rounded-xl border border-[#C8D6E5]/50 shadow-[0_1px_3px_rgba(15,23,42,0.04),0_4px_12px_rgba(15,23,42,0.06)]"
            >
              <div className="w-11 h-11 rounded-full bg-[#EBF3FF] flex items-center justify-center text-[#1A56DB]">
                {b.icon}
              </div>
              <div>
                <p className="font-display font-semibold text-[#1E3A5F] text-sm">
                  {b.title}
                </p>
                <p className="text-[#64748B] text-xs mt-0.5 leading-snug">
                  {b.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  );
}
function StarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <path d="m9 11 3 3L22 4"/>
    </svg>
  );
}
function KeyIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="7.5" cy="15.5" r="5.5"/>
      <path d="m21 2-9.6 9.6"/>
      <path d="m15.5 7.5 3 3L22 7l-3-3"/>
    </svg>
  );
}

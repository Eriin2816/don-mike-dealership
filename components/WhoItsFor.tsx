import { siteConfig } from "@/lib/config";

const VERTICAL_ICONS: React.ReactNode[] = [
  // Smart Home
  <svg key="home" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
  </svg>,
  // EV Charger
  <svg key="ev" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>,
  // Restoration
  <svg key="restore" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
  </svg>,
  // Real Estate
  <svg key="realestate" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>,
  // Property Management
  <svg key="property" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
  </svg>,
  // High-Ticket Services
  <svg key="services" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
  </svg>,
];

export default function WhoItsFor() {
  return (
    <section
      id="who-its-for"
      className="relative bg-brand-slate py-24 px-6 overflow-hidden"
      style={{ background: "#1F2837" }}
      aria-label="Who this is for"
    >
      {/* Background accents */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 90% 10%, rgba(13,172,201,0.12) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 10% 90%, rgba(26,44,82,0.6) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="max-w-2xl mb-14">
          <p className="text-brand-electric text-xs font-semibold uppercase tracking-widest mb-3">
            Built For
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-[-0.03em]">
            Designed for the businesses where every lead counts
          </h2>
          <p className="mt-4 text-white/50 text-base leading-[1.75]">
            Our systems are built specifically for high-ticket local service businesses
            where qualified leads, fast follow-up, and trusted reputation directly drive
            revenue.
          </p>
        </div>

        {/* Verticals grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteConfig.verticals.map((v, i) => (
            <article
              key={i}
              className="group card-dark rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.07] hover:border-brand-electric/20 cursor-default"
            >
              {/* Icon container */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 text-brand-electric group-hover:bg-brand-electric group-hover:text-white transition-colors duration-300"
                style={{ background: "rgba(13,172,201,0.1)" }}
              >
                {VERTICAL_ICONS[i]}
              </div>

              <h3 className="text-white text-sm font-bold mb-2">{v.title}</h3>
              <p className="text-white/45 text-sm leading-[1.7]">{v.description}</p>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 flex items-start gap-3 p-5 rounded-xl border border-brand-electric/15 bg-brand-electric/5 max-w-2xl">
          <svg
            className="w-5 h-5 text-brand-electric flex-shrink-0 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-white/60 text-sm leading-[1.7]">
            If your business runs on appointments, operates locally, and sells a
            high-value service — you&apos;re in the right place.{" "}
            <a
              href={siteConfig.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-electric hover:text-brand-glow font-semibold underline underline-offset-2 transition-colors duration-200"
            >
              Book a call to confirm fit.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

import { siteConfig } from "@/lib/config";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "#1F2837" }}
      aria-label="Get started"
    >
      {/* Background accents */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(13,172,201,0.18) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 100% 100%, rgba(26,44,82,0.6) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-brand-electric/10 border border-brand-electric/20 text-brand-glow text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
          <span className="w-1.5 h-1.5 bg-brand-glow rounded-full animate-pulse-slow" />
          Ready to Start?
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-[-0.03em] mb-6">
          Let&apos;s build the system that books{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(135deg, #0DACC9 0%, #34D4F0 100%)",
            }}
          >
            more appointments
          </span>
        </h2>

        {/* Supporting copy */}
        <p className="text-white/55 text-lg leading-[1.75] max-w-2xl mx-auto mb-10">
          A strategy call costs nothing and takes under 30 minutes. By the end, you&apos;ll
          have a clear picture of where leads are being lost and what a connected
          system looks like for your business.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href={siteConfig.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-brand-electric hover:bg-brand-glow active:scale-[0.98] text-white font-semibold text-base px-8 py-4 rounded-xl transition-colors duration-200 shadow-electric hover:shadow-electric-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-glow focus-visible:ring-offset-2 focus-visible:ring-offset-brand-slate"
          >
            {siteConfig.cta.label}
            <svg
              className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Contact details */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 border-t border-white/[0.07]">
          <a
            href={siteConfig.business.phoneHref}
            className="flex items-center gap-2.5 text-white/45 hover:text-brand-electric text-sm font-medium transition-colors duration-200 group"
          >
            <span className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center group-hover:bg-brand-electric/10 transition-colors duration-200">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </span>
            {siteConfig.business.phone}
          </a>

          <a
            href={siteConfig.business.emailHref}
            className="flex items-center gap-2.5 text-white/45 hover:text-brand-electric text-sm font-medium transition-colors duration-200 group"
          >
            <span className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center group-hover:bg-brand-electric/10 transition-colors duration-200">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </span>
            {siteConfig.business.email}
          </a>

          <div className="flex items-center gap-2.5 text-white/35 text-sm">
            <span className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </span>
            {siteConfig.business.address}
          </div>
        </div>
      </div>
    </section>
  );
}

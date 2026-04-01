import { siteConfig } from "@/lib/config";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-brand-offwhite py-24 px-6"
      aria-label="How it works"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="max-w-xl mb-16">
          <p className="text-brand-electric text-xs font-semibold uppercase tracking-widest mb-3">
            The Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-slate leading-tight tracking-[-0.03em]">
            How we build your lead engine
          </h2>
          <p className="mt-4 text-brand-graphite text-base leading-[1.75]">
            A clear, systematic approach to getting your lead infrastructure built,
            live, and continuously improving.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-[3.25rem] left-[calc(16.666%+2rem)] right-[calc(16.666%+2rem)] h-px bg-gradient-to-r from-transparent via-brand-warmgray to-transparent" aria-hidden="true" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
            {siteConfig.howItWorks.map((step, i) => (
              <article key={i} className="relative flex flex-col">
                {/* Step number */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="relative w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, rgba(13,172,201,0.12) 0%, rgba(13,172,201,0.06) 100%)",
                      border: "1px solid rgba(13,172,201,0.2)",
                    }}
                  >
                    {/* Step dot indicator */}
                    <span
                      className="text-lg font-extrabold tracking-[-0.04em]"
                      style={{
                        background: "linear-gradient(135deg, #0DACC9, #34D4F0)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {step.step}
                    </span>
                  </div>

                  <div
                    className="hidden lg:flex items-center gap-2 flex-1"
                    aria-hidden="true"
                  >
                    {i < siteConfig.howItWorks.length - 1 && (
                      <div className="flex-1 h-px bg-brand-warmgray" />
                    )}
                  </div>
                </div>

                {/* Step content */}
                <div>
                  <h3 className="text-xl font-bold text-brand-slate mb-3 tracking-[-0.02em]">
                    {step.title}
                  </h3>
                  <p className="text-brand-graphite text-base leading-[1.75]">
                    {step.description}
                  </p>
                </div>

                {/* Mobile connector */}
                {i < siteConfig.howItWorks.length - 1 && (
                  <div
                    className="lg:hidden absolute -bottom-5 left-7 w-px h-10 bg-gradient-to-b from-brand-warmgray to-transparent"
                    aria-hidden="true"
                  />
                )}
              </article>
            ))}
          </div>
        </div>

        {/* CTA nudge */}
        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6 p-8 rounded-2xl bg-white border border-brand-warmgray"
          style={{ boxShadow: "0 1px 3px rgba(31,40,55,0.04), 0 4px 16px rgba(31,40,55,0.06)" }}>
          <div className="flex-1">
            <h3 className="text-brand-slate font-bold text-lg mb-1">
              Ready to see what this looks like for your business?
            </h3>
            <p className="text-brand-graphite text-sm leading-relaxed">
              A strategy call is the first step. We&apos;ll map out your current lead flow and show
              you exactly where the gaps are.
            </p>
          </div>
          <a
            href={siteConfig.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-brand-slate hover:bg-brand-navy text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric"
          >
            {siteConfig.cta.label}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

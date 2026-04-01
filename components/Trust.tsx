import Image from "next/image";
import { siteConfig } from "@/lib/config";

export default function Trust() {
  return (
    <section
      id="testimonials"
      className="bg-brand-offwhite py-24 px-6"
      aria-label="Testimonials"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="max-w-xl mb-14">
          <p className="text-brand-electric text-xs font-semibold uppercase tracking-widest mb-3">
            What Clients Say
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-slate leading-tight tracking-[-0.03em]">
            Results that speak for themselves
          </h2>
          <p className="mt-4 text-brand-graphite text-base leading-[1.75]">
            Local service businesses that replaced guesswork with connected systems.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteConfig.testimonials.map((t, i) => (
            <article
              key={i}
              className="group relative bg-white rounded-2xl p-8 border border-brand-warmgray hover:border-brand-electric/30 transition-all duration-300 hover:-translate-y-1 cursor-default"
              style={{
                boxShadow:
                  "0 1px 3px rgba(31,40,55,0.05), 0 4px 16px rgba(31,40,55,0.07)",
              }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: "0 8px 32px rgba(13,172,201,0.1)" }}
              />

              {/* Quote mark */}
              <div
                className="text-6xl leading-none text-brand-electric/20 font-serif mb-4 select-none"
                aria-hidden="true"
              >
                &ldquo;
              </div>

              {/* Quote text */}
              <blockquote className="text-brand-slate/80 text-base leading-[1.75] mb-8 relative">
                {t.quote}
              </blockquote>

              {/* Author */}
              <footer className="flex items-center gap-3">
                {/* Avatar */}
                <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-brand-electric/20">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="text-brand-slate text-sm font-semibold">{t.name}</p>
                  <p className="text-brand-graphite text-xs">{t.title}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>

        {/* Note about testimonials */}
        <p className="mt-8 text-center text-brand-graphite/50 text-xs">
          Testimonials are representative of typical client feedback and will be replaced with verified reviews.
        </p>
      </div>
    </section>
  );
}

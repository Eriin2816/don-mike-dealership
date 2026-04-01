import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6" aria-label="Adaptive Automations home">
              <Image
                src="/logo.png"
                alt="Adaptive Automations"
                width={240}
                height={72}
                className="object-contain h-[64px] w-auto"
              />
            </Link>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs mb-8">
              Automation-driven marketing systems for high-ticket local service businesses.
              We build the lead engine that turns traffic into booked appointments.
            </p>
            {/* Contact info */}
            <div className="flex flex-col gap-3">
              <a
                href={siteConfig.business.phoneHref}
                className="flex items-center gap-3 text-white/50 hover:text-brand-electric text-sm font-medium transition-colors duration-200 group"
              >
                <span className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center group-hover:bg-brand-electric/10 transition-colors duration-200">
                  <PhoneIcon />
                </span>
                {siteConfig.business.phone}
              </a>
              <a
                href={siteConfig.business.emailHref}
                className="flex items-center gap-3 text-white/50 hover:text-brand-electric text-sm font-medium transition-colors duration-200 group"
              >
                <span className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center group-hover:bg-brand-electric/10 transition-colors duration-200">
                  <EmailIcon />
                </span>
                {siteConfig.business.email}
              </a>
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <span className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center flex-shrink-0">
                  <LocationIcon />
                </span>
                {siteConfig.business.address}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white/80 text-xs font-semibold uppercase tracking-widest mb-5">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-white/45 hover:text-white text-sm transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA column */}
          <div>
            <h3 className="text-white/80 text-xs font-semibold uppercase tracking-widest mb-5">
              Get Started
            </h3>
            <p className="text-white/40 text-sm leading-relaxed mb-5">
              Ready to build a system that converts? Book a free strategy call.
            </p>
            <a
              href={siteConfig.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-electric hover:bg-brand-glow text-white text-sm font-semibold px-5 py-3 rounded-lg transition-colors duration-200 shadow-electric focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-glow"
            >
              {siteConfig.cta.label}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            &copy; {currentYear} {siteConfig.business.name}. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Automation-Driven Marketing for Local Businesses
          </p>
        </div>
      </div>
    </footer>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="w-4 h-4 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="w-4 h-4 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

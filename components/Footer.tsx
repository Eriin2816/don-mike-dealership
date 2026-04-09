import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-[#1E3A5F] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="relative w-[70px] h-[70px] shrink-0 bg-white rounded-xl p-1.5">
                <Image
                  src="/logo.png"
                  alt="Don Mike Auto Dealership logo"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-[15px] tracking-wide uppercase text-white">
                  Don Mike
                </span>
                <span className="font-sans text-[10px] tracking-[0.12em] uppercase text-white/60">
                  Auto Dealership
                </span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs mb-6">
              Gainesville&apos;s trusted multi-brand dealership. We help local
              drivers find the right vehicle — without the runaround.
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href={siteConfig.business.phoneHref}
                className="flex items-center gap-2.5 text-white/80 hover:text-white text-sm transition-colors duration-150"
              >
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#4A7DB5]">
                  <PhoneIcon />
                </span>
                {siteConfig.business.phone}
              </a>
              <a
                href={siteConfig.business.emailHref}
                className="flex items-center gap-2.5 text-white/80 hover:text-white text-sm transition-colors duration-150"
              >
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#4A7DB5]">
                  <EmailIcon />
                </span>
                {siteConfig.business.email}
              </a>
              <span className="flex items-center gap-2.5 text-white/70 text-sm">
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#4A7DB5]">
                  <LocationIcon />
                </span>
                {siteConfig.business.location}
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold text-sm tracking-[0.1em] uppercase text-white/50 mb-4">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5">
              {siteConfig.footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-white text-sm transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-display font-semibold text-sm tracking-[0.1em] uppercase text-white/50 mb-4">
              Get Started
            </h4>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              A quick call is the best way to find the right vehicle at the
              right payment. No pressure — just genuine guidance.
            </p>
            <Link
              href="/book-a-call"
              className="inline-flex items-center justify-center gap-2 bg-[#1A56DB] hover:bg-[#1547C0] active:bg-[#123DAA] text-white text-sm font-semibold px-5 py-3 rounded-lg transition-colors duration-200 shadow-[0_4px_14px_rgba(26,86,219,0.4)] hover:shadow-[0_4px_20px_rgba(26,86,219,0.5)] w-full"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Don Mike Auto Dealership. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="text-white/40 hover:text-white/70 text-xs transition-colors duration-150"
            >
              Privacy Policy
            </Link>
            <span className="text-white/20 text-xs">|</span>
            <Link
              href="/terms-and-conditions"
              className="text-white/40 hover:text-white/70 text-xs transition-colors duration-150"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.6 5.05 2 2 0 0 1 3.57 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.6a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

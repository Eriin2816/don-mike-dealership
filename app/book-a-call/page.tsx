import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingEmbedSection from "@/components/BookingEmbedSection";
import { siteConfig } from "@/lib/config";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book a Free Call | Don Mike Auto Dealership — Gainesville, FL",
  description:
    "Schedule a free 20-minute call with Don Mike Auto Dealership. Tell us your budget and vehicle needs — we'll match you to the right vehicle across Honda, Toyota, Mazda, GMC, and Mercedes-Benz.",
};

const whatToExpect = [
  {
    icon: "💬",
    title: "It's a conversation, not a sales call",
    body: "We ask about your budget, lifestyle, and what you're currently driving. You'll do most of the talking.",
  },
  {
    icon: "🔍",
    title: "We find your options",
    body: "Based on your payment target, we identify the best vehicles across all five brands we carry.",
  },
  {
    icon: "📋",
    title: "Clear next steps",
    body: "By the end of the call, you'll know exactly which vehicles fit your budget and what the process looks like.",
  },
];

export default function BookACallPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* Hero */}
        <div className="bg-[#1E3A5F] pt-28 pb-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="inline-block text-[#4A7DB5] text-xs font-semibold tracking-[0.15em] uppercase mb-3">
                Free Consultation
              </span>
              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-[-0.02em] leading-tight mb-4">
                Book a Free Call with Don Mike.
              </h1>
              <p className="text-white/70 text-lg leading-relaxed">
                A 20-minute call. No commitment. By the end, you&apos;ll have a
                clear picture of which vehicle fits your lifestyle — and what
                your payment looks like.
              </p>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-4 mt-6">
                {["No-pressure conversation", "Multi-brand expertise", "Payment-first approach"].map((t) => (
                  <span key={t} className="flex items-center gap-2 text-white/70 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1A56DB]" />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Booking embed */}
        <BookingEmbedSection />

        {/* What to expect */}
        <section className="bg-[#F8FAFC] py-16 border-t border-[#E2E8F0]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="inline-block text-[#1A56DB] text-xs font-semibold tracking-[0.15em] uppercase mb-2">
                What to Expect
              </span>
              <h2 className="font-display font-black text-3xl text-[#0F172A] tracking-[-0.02em]">
                A quick call that actually helps.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {whatToExpect.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-[0_1px_3px_rgba(15,23,42,0.04)]"
                >
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="font-display font-bold text-[#1E3A5F] text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#475569] text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Direct contact fallback */}
        <section className="bg-white py-14 border-t border-[#E2E8F0]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-display font-bold text-2xl text-[#1E3A5F] mb-3">
                  Prefer to reach us directly?
                </h3>
                <p className="text-[#475569] text-sm leading-relaxed mb-5">
                  Call or email anytime. Our team typically responds within the
                  same business day. We&apos;re local, and we pick up the phone.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href={siteConfig.business.phoneHref}
                    className="inline-flex items-center gap-3 text-[#1E3A5F] font-semibold hover:text-[#1A56DB] transition-colors duration-150"
                  >
                    <span className="w-9 h-9 rounded-full bg-[#EBF3FF] flex items-center justify-center text-[#1A56DB]">
                      <PhoneIcon />
                    </span>
                    {siteConfig.business.phone}
                  </a>
                  <a
                    href={siteConfig.business.emailHref}
                    className="inline-flex items-center gap-3 text-[#1E3A5F] font-semibold hover:text-[#1A56DB] transition-colors duration-150"
                  >
                    <span className="w-9 h-9 rounded-full bg-[#EBF3FF] flex items-center justify-center text-[#1A56DB]">
                      <EmailIcon />
                    </span>
                    {siteConfig.business.email}
                  </a>
                </div>
              </div>
              <div className="bg-[#F0F6FF] rounded-xl border border-[#C8D6E5]/60 p-6">
                <p className="text-[#64748B] text-sm leading-relaxed">
                  <strong className="text-[#1E3A5F]">Gainesville, FL</strong> —
                  We serve buyers across Alachua County, including Newberry,
                  High Springs, Alachua, and surrounding areas. If you&apos;re
                  unsure whether we can help with your situation, just ask.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function PhoneIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.6 5.05 2 2 0 0 1 3.57 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.6a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
}
function EmailIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
}

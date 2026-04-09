import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/config";
import Link from "next/link";

export const metadata: Metadata = {
  title: "You're Confirmed | Don Mike Auto Dealership",
  description:
    "Your call with Don Mike Auto Dealership is confirmed. Here's what happens next.",
  robots: { index: false, follow: false },
};

const nextSteps = [
  {
    icon: "📅",
    title: "Appointment confirmation",
    body: "You'll receive a confirmation message by email or SMS with your scheduled time. Check your inbox — it should arrive within a few minutes.",
  },
  {
    icon: "👋",
    title: "Pre-call questions welcome",
    body: "If you think of questions before the call — about a specific model, financing, or your trade-in — reply to your confirmation and we'll answer ahead of time.",
  },
  {
    icon: "📞",
    title: "Your call",
    body: "We'll call at your scheduled time from a Gainesville number. The conversation is 15-20 minutes — tell us your budget, lifestyle, and what you're looking for.",
  },
  {
    icon: "✅",
    title: "Clear next steps",
    body: "After the call, you'll have a clear list of vehicles that fit your payment target and a simple path forward — no pressure, no runaround.",
  },
];

export default function ThankYouPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* Hero confirmation */}
        <div className="bg-[#1E3A5F] pt-28 pb-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Checkmark */}
            <div className="w-16 h-16 rounded-full bg-[#1A56DB]/20 border-2 border-[#1A56DB]/40 flex items-center justify-center mx-auto mb-6">
              <span className="text-[#4A7DB5]">
                <CheckIcon />
              </span>
            </div>

            <span className="inline-block text-[#4A7DB5] text-xs font-semibold tracking-[0.15em] uppercase mb-3">
              Booking Confirmed
            </span>
            <h1 className="font-display font-black text-4xl sm:text-5xl text-white tracking-[-0.02em] mb-4">
              You&apos;re Confirmed.
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-xl mx-auto">
              Thank you for booking a call with the Don Mike Auto team. We&apos;ve
              received your request and a member of our team will reach out to
              confirm your appointment time.
            </p>
            <p className="text-white/45 text-sm mt-3">
              Your appointment is confirmed within 24 hours. We look forward to
              speaking with you.
            </p>
          </div>
        </div>

        {/* What happens next */}
        <section className="bg-[#F8FAFC] py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="inline-block text-[#1A56DB] text-xs font-semibold tracking-[0.15em] uppercase mb-2">
                What Happens Next
              </span>
              <h2 className="font-display font-black text-3xl text-[#0F172A] tracking-[-0.02em]">
                Here&apos;s what to expect.
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {nextSteps.map((step, i) => (
                <div
                  key={i}
                  className="flex gap-5 bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-[0_1px_3px_rgba(15,23,42,0.04)]"
                >
                  <div className="text-2xl shrink-0 mt-0.5">{step.icon}</div>
                  <div>
                    <h3 className="font-display font-bold text-[#1E3A5F] text-base mb-1">
                      {step.title}
                    </h3>
                    <p className="text-[#475569] text-sm leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTAs */}
        <section className="bg-white py-16 border-t border-[#E2E8F0]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="font-display font-bold text-2xl text-[#1E3A5F] mb-3">
              While you wait, browse the collection.
            </h3>
            <p className="text-[#475569] text-sm mb-8">
              Get familiar with the vehicles we carry before your call — it
              helps us have a more focused conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/car-collections"
                className="inline-flex items-center justify-center gap-2 bg-[#1A56DB] hover:bg-[#1547C0] text-white font-semibold px-7 py-4 rounded-lg transition-colors duration-200 shadow-[0_4px_14px_rgba(26,86,219,0.3)]"
              >
                Browse the Collection
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-[#F0F6FF] hover:bg-[#EBF3FF] text-[#1E3A5F] font-semibold px-7 py-4 rounded-lg border border-[#C8D6E5]/60 transition-colors duration-200"
              >
                Back to Home
              </Link>
            </div>

            {/* Contact fallback */}
            <p className="text-[#94A3B8] text-sm mt-10">
              Need to reach us sooner? Call{" "}
              <a
                href={siteConfig.business.phoneHref}
                className="text-[#1A56DB] font-medium hover:text-[#1547C0] transition-colors duration-150"
              >
                {siteConfig.business.phone}
              </a>{" "}
              or email{" "}
              <a
                href={siteConfig.business.emailHref}
                className="text-[#1A56DB] font-medium hover:text-[#1547C0] transition-colors duration-150"
              >
                {siteConfig.business.email}
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function CheckIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m5 12 5 5L20 7"/>
    </svg>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "Do you offer financing for first-time buyers and students?",
    a: "Yes — we specialize in it. We work with lenders who understand the Gainesville market, including students and early-career buyers building credit. We'll walk you through payment options before anything gets signed.",
  },
  {
    q: "What brands do you carry?",
    a: "We represent Honda, Toyota, Mazda, GMC, and Mercedes-Benz, plus a curated pre-owned selection that includes other makes. Whether you need a reliable sedan, a family SUV, a workhorse truck, or a luxury vehicle, we have options across price points.",
  },
  {
    q: "How does the free consultation call work?",
    a: "It's a 20-minute conversation — no commitment, no pitch. We ask about your budget, lifestyle, and what you're driving now. By the end, you'll have a clear picture of which vehicles match your payment target and what your next step looks like.",
  },
  {
    q: "Can I trade in my current vehicle?",
    a: "Absolutely. We provide transparent trade-in appraisals and help you apply that equity toward your next vehicle. Many Gainesville buyers are surprised by how much equity they have — especially in trucks and SUVs.",
  },
  {
    q: "Do you have pre-owned and CPO options?",
    a: "Yes. We maintain a strong pre-owned inventory that spans budget-friendly options for students all the way up to certified pre-owned luxury vehicles. We vet every vehicle for quality and present realistic payment estimates upfront.",
  },
  {
    q: "What if I have less-than-perfect credit?",
    a: "We work with a range of lenders and can often find financing paths that others can't. We'll be honest about what's possible for your situation and help you understand the terms before you commit to anything.",
  },
  {
    q: "How is Don Mike different from the big dealership groups on North Main?",
    a: "We operate with personal accountability — no corporate layers, no runaround. Our team knows the Gainesville market deeply, and we focus on matching the right vehicle to your real budget rather than maximizing the transaction. Transparent pricing, no hidden fees.",
  },
  {
    q: "What's the fastest way to get started?",
    a: "Book a free call. It takes under two minutes to schedule, and you'll hear from our team quickly. From there, we move at your pace — no pressure.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#F8FAFC] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left */}
          <div className="lg:col-span-2">
            <span className="inline-block text-[#1A56DB] text-xs font-semibold tracking-[0.15em] uppercase mb-3">
              FAQ
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-[#0F172A] tracking-[-0.02em] mb-5">
              Common questions.
            </h2>
            <p className="text-[#475569] text-base leading-relaxed mb-8">
              Real answers to the questions Gainesville buyers ask most. If
              yours isn&apos;t here, the fastest answer is a quick call.
            </p>
            <Link
              href="/book-a-call"
              className="inline-flex items-center gap-2 bg-[#1A56DB] hover:bg-[#1547C0] text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors duration-200 shadow-blue"
            >
              Ask Us Directly
            </Link>
          </div>

          {/* Right — accordion */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left group"
                  aria-expanded={open === i}
                >
                  <span className="font-display font-semibold text-[#1E3A5F] text-base group-hover:text-[#1A56DB] transition-colors duration-150">
                    {faq.q}
                  </span>
                  <span
                    className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 ${
                      open === i
                        ? "bg-[#1A56DB] text-white rotate-45"
                        : "bg-[#EBF3FF] text-[#1A56DB]"
                    }`}
                  >
                    <PlusIcon />
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    open === i ? "max-h-64" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-5">
                    <div className="h-px bg-[#E2E8F0] mb-4" />
                    <p className="text-[#475569] text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PlusIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14M5 12h14"/>
    </svg>
  );
}

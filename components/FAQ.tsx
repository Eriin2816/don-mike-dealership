"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/config";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      id="faq"
      className="bg-brand-offwhite py-24 px-6"
      aria-label="Frequently asked questions"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-16">
          {/* Left: header */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-brand-electric text-xs font-semibold uppercase tracking-widest mb-3">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-slate leading-tight tracking-[-0.03em] mb-5">
              Common questions, answered
            </h2>
            <p className="text-brand-graphite text-base leading-[1.75] mb-8">
              Not sure if this is the right fit or how the process works? These are the
              questions we hear most often.
            </p>
            <a
              href={siteConfig.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-electric hover:text-brand-navy font-semibold text-sm transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric rounded"
            >
              Still have questions? Book a call
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

          {/* Right: accordion */}
          <div className="flex flex-col divide-y divide-brand-warmgray">
            {siteConfig.faqs.map((faq, i) => (
              <div key={i} className="py-5">
                <button
                  className="w-full flex items-start justify-between gap-4 text-left group focus-visible:outline-none"
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                >
                  <span
                    className={`text-sm font-semibold leading-snug transition-colors duration-200 ${
                      openIndex === i ? "text-brand-electric" : "text-brand-slate group-hover:text-brand-electric"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 mt-0.5 ${
                      openIndex === i
                        ? "bg-brand-electric text-white rotate-45"
                        : "bg-brand-warmgray text-brand-graphite"
                    }`}
                    aria-hidden="true"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </span>
                </button>

                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === i ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-brand-graphite text-sm leading-[1.75] pr-10">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

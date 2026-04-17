import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mazda Collection | Don Mike Auto Dealership — Gainesville, FL",
  description:
    "Browse our full Mazda lineup — Mazda3, CX-5, CX-50, MX-5 Miata and more. Find the right Mazda for your budget in Gainesville, FL.",
  openGraph: {
    title: "Mazda Collection | Don Mike Auto Dealership",
    description: "Mazda3, CX-5, CX-50, MX-5 Miata and more — matched to Gainesville buyers.",
    images: [{ url: "https://don-mike-dealership.vercel.app/opengraph-image", width: 1200, height: 630, alt: "Don Mike Auto Dealership — Mazda Collection" }],
  },
};

const mazdaModels = [
  {
    model: "Mazda3 Sedan",
    type: "Sedan",
    tagline: "Premium feel, accessible payment",
    summary: "The Mazda3 Sedan punches above its price point — upscale interior, sport-tuned handling, and Zoom-Zoom DNA that Gainesville drivers love.",
    image: "https://placehold.co/640x400/EBF3FF/1A56DB?text=Mazda3+Sedan",
    alt: "Mazda3 Sedan — swap with real inventory photo",
  },
  {
    model: "Mazda3 Hatchback",
    type: "Hatchback",
    tagline: "Sporty, practical, head-turning",
    summary: "The hatchback body adds cargo versatility without sacrificing the Mazda3's signature driving character. Ideal for UF grads and young professionals.",
    image: "https://placehold.co/640x400/EBF3FF/1A56DB?text=Mazda3+Hatchback",
    alt: "Mazda3 Hatchback — swap with real inventory photo",
  },
  {
    model: "Mazda6",
    type: "Sedan",
    tagline: "The near-luxury mid-size sedan",
    summary: "Refined, elegant, and driver-focused — the Mazda6 delivers executive presence at a price that makes sense for Gainesville buyers.",
    image: "https://placehold.co/640x400/EBF3FF/1A56DB?text=Mazda6",
    alt: "Mazda6 — swap with real inventory photo",
  },
  {
    model: "CX-3",
    type: "SUV",
    tagline: "City-sized, feature-packed",
    summary: "Compact enough for Gainesville parking, loaded with premium features. The CX-3 is perfect for solo drivers and couples who want more.",
    image: "https://placehold.co/640x400/EBF3FF/1A56DB?text=Mazda+CX-3",
    alt: "Mazda CX-3 — swap with real inventory photo",
  },
  {
    model: "CX-30",
    type: "SUV",
    tagline: "The sweet spot in the lineup",
    summary: "Bigger than the CX-3, sportier than the CX-5 — the CX-30 hits the sweet spot for buyers who want Mazda style with crossover practicality.",
    image: "https://placehold.co/640x400/EBF3FF/1A56DB?text=Mazda+CX-30",
    alt: "Mazda CX-30 — swap with real inventory photo",
  },
  {
    model: "CX-5",
    type: "SUV",
    tagline: "Gainesville's near-premium crossover",
    summary: "A standout in the crowded SUV market — refined, sporty, and loaded with tech at a price that makes sense for North Florida families.",
    image: "https://placehold.co/640x400/EBF3FF/1A56DB?text=Mazda+CX-5",
    alt: "Mazda CX-5 — swap with real inventory photo",
  },
  {
    model: "CX-50",
    type: "SUV",
    tagline: "Adventure-ready, premium equipped",
    summary: "The CX-50 brings off-road capability and premium comfort together. Turbocharged power, i-Activ AWD, and Mazda's best interior yet.",
    image: "https://placehold.co/640x400/EBF3FF/1A56DB?text=Mazda+CX-50",
    alt: "Mazda CX-50 — swap with real inventory photo",
  },
  {
    model: "CX-9",
    type: "SUV",
    tagline: "Three rows, Mazda style",
    summary: "The CX-9 brings Mazda's premium design philosophy to a 3-row family SUV — quieter, more refined, and better driving than its rivals.",
    image: "https://placehold.co/640x400/EBF3FF/1A56DB?text=Mazda+CX-9",
    alt: "Mazda CX-9 — swap with real inventory photo",
  },
  {
    model: "MX-5 Miata",
    type: "Convertible",
    tagline: "Pure driving joy",
    summary: "The world's best-selling roadster. Lightweight, responsive, and built for the joy of driving — Florida weather makes the MX-5 a year-round thrill.",
    image: "https://placehold.co/640x400/EBF3FF/1A56DB?text=Mazda+MX-5+Miata",
    alt: "Mazda MX-5 Miata — swap with real inventory photo",
  },
];

export default function MazdaCollectionPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <div className="relative min-h-[50vh] flex items-end overflow-hidden bg-[#0F172A]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A5F] via-[#0F172A] to-[#1A56DB]/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(26,86,219,0.2),transparent_60%)]" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-36">
            <span className="inline-block text-white/60 text-xs font-semibold tracking-[0.15em] uppercase mb-3">
              Mazda Collection
            </span>
            <h1
              className="font-display font-black text-5xl sm:text-6xl text-white tracking-[-0.02em] mb-4 max-w-2xl"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}
            >
              Zoom-Zoom for<br />Every Driver.
            </h1>
            <p
              className="text-white/80 text-lg max-w-xl leading-relaxed"
              style={{ textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}
            >
              From the nimble Mazda3 to the adventure-ready CX-50 — browse our full
              Mazda lineup and find the model matched to your Gainesville lifestyle.
            </p>
          </div>
        </div>

        {/* Intro strip */}
        <div className="bg-[#F0F6FF] border-b border-[#C8D6E5]/60 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-[#475569] text-sm">
              <strong className="text-[#1E3A5F]">9 Mazda models shown</strong> — representative vehicles. Actual inventory varies. Book a call to check current availability and payments.
            </p>
            <Link
              href="/book-a-call"
              className="shrink-0 inline-flex items-center gap-2 bg-[#1A56DB] hover:bg-[#1547C0] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200"
            >
              Check Mazda Availability
            </Link>
          </div>
        </div>

        {/* Models grid */}
        <section className="bg-white py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mazdaModels.map((v) => (
                <div
                  key={v.model}
                  className="group bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden hover:shadow-[0_4px_32px_rgba(26,86,219,0.12)] hover:border-[#1A56DB]/25 transition-shadow transition-[border-color] duration-300"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-[16/9]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={v.image}
                      alt={v.alt}
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#1E3A5F] text-xs font-semibold px-2.5 py-1 rounded-full border border-[#C8D6E5]/50">
                      {v.type}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-[#1A56DB] text-xs font-medium tracking-wide mb-1">
                      {v.tagline}
                    </p>
                    <h3 className="font-display font-bold text-xl text-[#1E3A5F] mb-2">
                      Mazda {v.model}
                    </h3>
                    <p className="text-[#475569] text-sm leading-relaxed mb-5">
                      {v.summary}
                    </p>
                    <Link
                      href="/book-a-call"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#EBF3FF] hover:bg-[#1A56DB] text-[#1A56DB] hover:text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors duration-200"
                    >
                      Inquire About This Vehicle
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

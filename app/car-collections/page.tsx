import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VehicleCollectionGrid from "@/components/VehicleCollectionGrid";
import FinalCTA from "@/components/FinalCTA";
import PopupLeadModal from "@/components/PopupLeadModal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Car Collections | Don Mike Auto Dealership — Gainesville, FL",
  description:
    "Browse our curated multi-brand vehicle collection — Honda, Toyota, Mazda, GMC, and Mercedes-Benz. Find the right vehicle for your budget and lifestyle in Gainesville, FL.",
  openGraph: {
    title: "Car Collections | Don Mike Auto Dealership",
    description:
      "Honda, Toyota, Mazda, GMC, and Mercedes-Benz — vehicles matched to Gainesville buyers.",
    images: [{ url: "https://don-mike-dealership.vercel.app/opengraph-image", width: 1200, height: 630, alt: "Don Mike Auto Dealership — Car Collections" }],
  },
};

export default function CarCollectionsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <div className="relative min-h-[55vh] flex items-end overflow-hidden">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/hero-showroom.jpg')" }}
            role="img"
            aria-label="Don Mike Auto Dealership showroom — multiple vehicles on display"
          />
          {/* Strong base overlay for readability */}
          <div className="absolute inset-0 bg-[#0F172A]/70" />
          {/* Bottom-to-top gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#1E3A5F]/40 to-[#0F172A]/30" />
          {/* Top fade so navbar text stays readable */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0F172A]/60 to-transparent" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-36">
            <span className="inline-block text-white/60 text-xs font-semibold tracking-[0.15em] uppercase mb-3">
              Multi-Brand Collection
            </span>
            <h1 className="font-display font-black text-5xl sm:text-6xl text-white tracking-[-0.02em] mb-4 max-w-2xl"
                style={{ textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}>
              Every Model.<br />Matched to Your Life.
            </h1>
            <p className="text-white/80 text-lg max-w-xl leading-relaxed"
               style={{ textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}>
              Honda, Toyota, Mazda, GMC, and Mercedes-Benz — curated for
              Gainesville buyers across every budget and lifestyle.
            </p>
          </div>
        </div>

        {/* Intro strip */}
        <div className="bg-[#F0F6FF] border-b border-[#C8D6E5]/60 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-[#475569] text-sm">
              <strong className="text-[#1E3A5F]">Curated collection</strong> — representative vehicles shown. Actual inventory varies. Book a call to check current availability and payments.
            </p>
            <Link
              href="/book-a-call"
              className="shrink-0 inline-flex items-center gap-2 bg-[#1A56DB] hover:bg-[#1547C0] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200"
            >
              Check Current Inventory
            </Link>
          </div>
        </div>

        {/* Vehicle grid */}
        <VehicleCollectionGrid />

        {/* Final CTA */}
        <FinalCTA />
      </main>
      <Footer />
      {/* Popup appears after 10s — only on this page and Home */}
      <PopupLeadModal />
    </>
  );
}

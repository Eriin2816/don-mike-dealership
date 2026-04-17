import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All Brands Collection | Don Mike Auto Dealership — Gainesville, FL",
  description:
    "Browse GMC, Honda, Toyota, and Mercedes-Benz models at Don Mike Auto Dealership in Gainesville, FL. Find the right vehicle for your budget and lifestyle.",
  openGraph: {
    title: "All Brands Collection | Don Mike Auto Dealership",
    description: "GMC, Honda, Toyota, and Mercedes-Benz — models matched to Gainesville buyers.",
    images: [{ url: "https://don-mike-dealership.vercel.app/opengraph-image", width: 1200, height: 630, alt: "Don Mike Auto Dealership — All Brands Collection" }],
  },
};

interface BrandModel {
  model: string;
  type: string;
  tagline: string;
  summary: string;
  image: string;
  alt: string;
}

const brands: { name: string; models: BrandModel[] }[] = [
  {
    name: "GMC",
    models: [
      {
        model: "Sierra 1500",
        type: "Truck",
        tagline: "North Florida's working truck",
        summary: "The Sierra 1500 combines truck-grade capability with refined comfort — ideal for tradespeople, contractors, and weekend haulers across Alachua County.",
        image: "https://placehold.co/640x400/F0F6FF/1E3A5F?text=GMC+Sierra+1500",
        alt: "GMC Sierra 1500 — swap with real inventory photo",
      },
      {
        model: "Sierra 2500HD",
        type: "Truck",
        tagline: "Heavy-duty, no compromise",
        summary: "When the job demands more, the Sierra 2500HD delivers — maximum towing, Duramax diesel option, and ProGrade Trailering System.",
        image: "https://placehold.co/640x400/F0F6FF/1E3A5F?text=GMC+Sierra+2500HD",
        alt: "GMC Sierra 2500HD — swap with real inventory photo",
      },
      {
        model: "Yukon",
        type: "SUV",
        tagline: "Full-size presence, premium finish",
        summary: "The Yukon commands the road with bold GMC styling, three rows, and available Super Cruise hands-free driving technology.",
        image: "https://placehold.co/640x400/F0F6FF/1E3A5F?text=GMC+Yukon",
        alt: "GMC Yukon — swap with real inventory photo",
      },
      {
        model: "Yukon XL",
        type: "SUV",
        tagline: "Maximum room, maximum capability",
        summary: "The Yukon XL stretches the wheelbase for best-in-class passenger and cargo volume — perfect for large Gainesville families.",
        image: "https://placehold.co/640x400/F0F6FF/1E3A5F?text=GMC+Yukon+XL",
        alt: "GMC Yukon XL — swap with real inventory photo",
      },
      {
        model: "Acadia",
        type: "SUV",
        tagline: "Three rows, family-ready",
        summary: "Room for the whole family and then some. The Acadia delivers comfort, technology, and GMC dependability for Gainesville households.",
        image: "https://placehold.co/640x400/F0F6FF/1E3A5F?text=GMC+Acadia",
        alt: "GMC Acadia — swap with real inventory photo",
      },
      {
        model: "Terrain",
        type: "SUV",
        tagline: "Compact crossover, big attitude",
        summary: "The Terrain punches above its class with available turbocharged power, GMC Pro Safety, and a premium interior at an accessible price.",
        image: "https://placehold.co/640x400/F0F6FF/1E3A5F?text=GMC+Terrain",
        alt: "GMC Terrain — swap with real inventory photo",
      },
    ],
  },
  {
    name: "Honda",
    models: [
      {
        model: "Accord",
        type: "Sedan",
        tagline: "Gainesville's most versatile sedan",
        summary: "Refined, fuel-efficient, and built to last — the Accord is a top pick for professionals and commuters across Alachua County.",
        image: "https://placehold.co/640x400/EBF3FF/1A56DB?text=Honda+Accord",
        alt: "Honda Accord — swap with real inventory photo",
      },
      {
        model: "Civic",
        type: "Sedan",
        tagline: "The smart starter car",
        summary: "Sporty, efficient, and packed with Honda Sensing safety tech — the Civic is the go-to for first-time buyers and UF students.",
        image: "https://placehold.co/640x400/EBF3FF/1A56DB?text=Honda+Civic",
        alt: "Honda Civic — swap with real inventory photo",
      },
      {
        model: "CR-V",
        type: "SUV",
        tagline: "Florida families' top crossover",
        summary: "Versatile, safe, and cargo-smart. The CR-V handles school runs, road trips, and everything between with available AWD.",
        image: "https://placehold.co/640x400/EBF3FF/1A56DB?text=Honda+CR-V",
        alt: "Honda CR-V — swap with real inventory photo",
      },
      {
        model: "Pilot",
        type: "SUV",
        tagline: "Three rows, Honda dependability",
        summary: "The Pilot's 3-row interior and Honda's proven reliability make it a standout for Gainesville families who need room and peace of mind.",
        image: "https://placehold.co/640x400/EBF3FF/1A56DB?text=Honda+Pilot",
        alt: "Honda Pilot — swap with real inventory photo",
      },
      {
        model: "Odyssey",
        type: "Minivan",
        tagline: "The family road-trip machine",
        summary: "Magic Slide seats, CabinWatch rear camera, and Honda's reliability — the Odyssey makes long Florida road trips genuinely enjoyable.",
        image: "https://placehold.co/640x400/EBF3FF/1A56DB?text=Honda+Odyssey",
        alt: "Honda Odyssey — swap with real inventory photo",
      },
      {
        model: "HR-V",
        type: "SUV",
        tagline: "Compact, clever, connected",
        summary: "The HR-V's Magic Seat system packs surprising cargo flexibility into a compact footprint — perfect for Gainesville city driving.",
        image: "https://placehold.co/640x400/EBF3FF/1A56DB?text=Honda+HR-V",
        alt: "Honda HR-V — swap with real inventory photo",
      },
    ],
  },
  {
    name: "Toyota",
    models: [
      {
        model: "Camry",
        type: "Sedan",
        tagline: "Florida's dependable sedan",
        summary: "Class-leading resale value, smooth ride, and long-term dependability that Gainesville commuters have trusted for decades.",
        image: "https://placehold.co/640x400/F0F6FF/1E3A5F?text=Toyota+Camry",
        alt: "Toyota Camry — swap with real inventory photo",
      },
      {
        model: "Corolla",
        type: "Sedan",
        tagline: "Proven reliability, everyday value",
        summary: "The world's best-selling car — efficient, dependable, and low-cost to own. A smart first or second vehicle for any buyer.",
        image: "https://placehold.co/640x400/F0F6FF/1E3A5F?text=Toyota+Corolla",
        alt: "Toyota Corolla — swap with real inventory photo",
      },
      {
        model: "RAV4",
        type: "SUV",
        tagline: "Adventure-ready crossover",
        summary: "One of the best-selling crossovers in Florida — rugged enough for weekends, fuel-smart enough for daily driving, with hybrid available.",
        image: "https://placehold.co/640x400/F0F6FF/1E3A5F?text=Toyota+RAV4",
        alt: "Toyota RAV4 — swap with real inventory photo",
      },
      {
        model: "Highlander",
        type: "SUV",
        tagline: "Three rows, Toyota strong",
        summary: "The Highlander delivers 3-row family comfort with Toyota's legendary build quality — available hybrid trims keep fuel costs manageable.",
        image: "https://placehold.co/640x400/F0F6FF/1E3A5F?text=Toyota+Highlander",
        alt: "Toyota Highlander — swap with real inventory photo",
      },
      {
        model: "Tacoma",
        type: "Truck",
        tagline: "The mid-size truck leader",
        summary: "Best-in-class resale value and off-road capability — the Tacoma is North Florida's most sought-after mid-size pickup.",
        image: "https://placehold.co/640x400/F0F6FF/1E3A5F?text=Toyota+Tacoma",
        alt: "Toyota Tacoma — swap with real inventory photo",
      },
      {
        model: "4Runner",
        type: "SUV",
        tagline: "Built for the trail, refined for the road",
        summary: "Body-on-frame toughness, legendary trail capability, and a devoted following — the 4Runner is for drivers who demand more from their SUV.",
        image: "https://placehold.co/640x400/F0F6FF/1E3A5F?text=Toyota+4Runner",
        alt: "Toyota 4Runner — swap with real inventory photo",
      },
    ],
  },
  {
    name: "Mercedes-Benz",
    models: [
      {
        model: "C-Class",
        type: "Sedan",
        tagline: "German precision, Gainesville accessible",
        summary: "The entry point to Mercedes luxury — AMG styling, MBUX infotainment, and the prestige of the three-pointed star at an attainable payment.",
        image: "https://placehold.co/640x400/1E3A5F/FFFFFF?text=Mercedes+C-Class",
        alt: "Mercedes-Benz C-Class — swap with real inventory photo",
      },
      {
        model: "E-Class",
        type: "Sedan",
        tagline: "Executive presence, refined comfort",
        summary: "The E-Class is the benchmark mid-size luxury sedan — more tech, more space, and more presence for Gainesville executives.",
        image: "https://placehold.co/640x400/1E3A5F/FFFFFF?text=Mercedes+E-Class",
        alt: "Mercedes-Benz E-Class — swap with real inventory photo",
      },
      {
        model: "GLC",
        type: "SUV",
        tagline: "Luxury SUV without the compromise",
        summary: "Elevated ride, premium materials, and advanced tech — the GLC is the logical step-up for Gainesville professionals ready for their first Mercedes.",
        image: "https://placehold.co/640x400/1E3A5F/FFFFFF?text=Mercedes+GLC",
        alt: "Mercedes-Benz GLC — swap with real inventory photo",
      },
      {
        model: "GLE",
        type: "SUV",
        tagline: "Full-size luxury meets capability",
        summary: "The GLE offers a bigger footprint, available 3rd row, and commanding road presence — for families who refuse to compromise on luxury.",
        image: "https://placehold.co/640x400/1E3A5F/FFFFFF?text=Mercedes+GLE",
        alt: "Mercedes-Benz GLE — swap with real inventory photo",
      },
      {
        model: "A-Class",
        type: "Sedan",
        tagline: "Your first Mercedes moment",
        summary: "Compact, tech-forward, and unmistakably Mercedes — the A-Class puts the three-pointed star within reach for first-time luxury buyers.",
        image: "https://placehold.co/640x400/1E3A5F/FFFFFF?text=Mercedes+A-Class",
        alt: "Mercedes-Benz A-Class — swap with real inventory photo",
      },
      {
        model: "CLA",
        type: "Sedan",
        tagline: "Sporty, sleek, surprisingly attainable",
        summary: "Four-door coupe styling with AMG lines and MBUX tech — the CLA is the most striking entry point to the Mercedes family.",
        image: "https://placehold.co/640x400/1E3A5F/FFFFFF?text=Mercedes+CLA",
        alt: "Mercedes-Benz CLA — swap with real inventory photo",
      },
    ],
  },
];

export default function AllBrandsCollectionPage() {
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
              Multi-Brand Collection
            </span>
            <h1
              className="font-display font-black text-5xl sm:text-6xl text-white tracking-[-0.02em] mb-4 max-w-2xl"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}
            >
              GMC. Honda.<br />Toyota. Mercedes.
            </h1>
            <p
              className="text-white/80 text-lg max-w-xl leading-relaxed"
              style={{ textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}
            >
              Four trusted brands, one Gainesville dealership — browse every model
              and find the right fit for your budget and lifestyle.
            </p>
          </div>
        </div>

        {/* Intro strip */}
        <div className="bg-[#F0F6FF] border-b border-[#C8D6E5]/60 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-[#475569] text-sm">
              <strong className="text-[#1E3A5F]">24 models shown</strong> — representative vehicles. Actual inventory varies. Book a call to check current availability and payments.
            </p>
            <Link
              href="/book-a-call"
              className="shrink-0 inline-flex items-center gap-2 bg-[#1A56DB] hover:bg-[#1547C0] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200"
            >
              Check Current Inventory
            </Link>
          </div>
        </div>

        {/* Brands */}
        <section className="bg-white py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
            {brands.map((brand) => (
              <div key={brand.name}>
                {/* Brand header */}
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="font-display font-black text-3xl sm:text-4xl text-[#1E3A5F] tracking-[-0.02em]">
                    {brand.name}
                  </h2>
                  <div className="flex-1 h-px bg-[#E2E8F0]" />
                </div>

                {/* Model grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {brand.models.map((v) => (
                    <div
                      key={`${brand.name}-${v.model}`}
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
                          {brand.name} {v.model}
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
            ))}
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

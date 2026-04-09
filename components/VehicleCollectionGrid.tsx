import Link from "next/link";

interface Vehicle {
  make: string;
  model: string;
  type: string;
  tagline: string;
  summary: string;
  highlights: string[];
  image: string;
  alt: string;
}

const brands: { name: string; vehicles: Vehicle[] }[] = [
  {
    name: "Honda",
    vehicles: [
      {
        make: "Honda",
        model: "Accord",
        type: "Sedan",
        tagline: "The balanced choice",
        summary: "Refined commuter performance with Honda's proven reliability. A Gainesville favorite for young professionals and commuters.",
        highlights: ["Excellent fuel economy", "Available hybrid", "Spacious interior"],
        image: "https://placehold.co/640x400/EBF3FF/1A56DB?text=Honda+Accord",
        alt: "Honda Accord — swap with real inventory photo",
      },
      {
        make: "Honda",
        model: "CR-V",
        type: "SUV",
        tagline: "Florida families' top crossover",
        summary: "Versatile, safe, and cargo-smart. The CR-V handles school runs, road trips, and everything between.",
        highlights: ["5-star safety ratings", "Available AWD", "Honda Sensing standard"],
        image: "https://placehold.co/640x400/EBF3FF/1A56DB?text=Honda+CR-V",
        alt: "Honda CR-V — swap with real inventory photo",
      },
    ],
  },
  {
    name: "Toyota",
    vehicles: [
      {
        make: "Toyota",
        model: "Camry",
        type: "Sedan",
        tagline: "Florida's dependable sedan",
        summary: "Class-leading resale value, smooth ride, and long-term dependability that Gainesville commuters trust.",
        highlights: ["Top resale value", "Available V6", "Toyota Safety Sense"],
        image: "https://placehold.co/640x400/F0F6FF/1E3A5F?text=Toyota+Camry",
        alt: "Toyota Camry — swap with real inventory photo",
      },
      {
        make: "Toyota",
        model: "RAV4",
        type: "SUV",
        tagline: "Adventure-ready crossover",
        summary: "One of the best-selling crossovers in Florida. Rugged enough for weekends, fuel-smart enough for daily driving.",
        highlights: ["Available hybrid", "Spacious cargo", "Off-road capable trim"],
        image: "https://placehold.co/640x400/F0F6FF/1E3A5F?text=Toyota+RAV4",
        alt: "Toyota RAV4 — swap with real inventory photo",
      },
    ],
  },
  {
    name: "Mazda",
    vehicles: [
      {
        make: "Mazda",
        model: "Mazda3 Sedan",
        type: "Sedan",
        tagline: "Premium feel, accessible payment",
        summary: "The Mazda3 punches above its price point — Zoom-Zoom engineering, premium interior, and confident handling.",
        highlights: ["Upscale interior design", "Sport-tuned handling", "i-Activ AWD available"],
        image: "https://placehold.co/640x400/EBF3FF/1A56DB?text=Mazda3+Sedan",
        alt: "Mazda3 Sedan — swap with real inventory photo",
      },
      {
        make: "Mazda",
        model: "CX-5",
        type: "SUV",
        tagline: "Gainesville's near-premium crossover",
        summary: "A standout in the crowded SUV market. Refined, sporty, and loaded with tech — at a price that makes sense.",
        highlights: ["Award-winning design", "Turbocharged option", "Low cost of ownership"],
        image: "https://placehold.co/640x400/EBF3FF/1A56DB?text=Mazda+CX-5",
        alt: "Mazda CX-5 — swap with real inventory photo",
      },
    ],
  },
  {
    name: "GMC",
    vehicles: [
      {
        make: "GMC",
        model: "Sierra 1500",
        type: "Truck",
        tagline: "North Florida's working truck",
        summary: "The Sierra combines truck-grade capability with refined comfort — ideal for tradespeople, contractors, and weekend haulers.",
        highlights: ["Best-in-class towing", "MultiPro tailgate", "Available Duramax diesel"],
        image: "https://placehold.co/640x400/F0F6FF/1E3A5F?text=GMC+Sierra+1500",
        alt: "GMC Sierra 1500 — swap with real inventory photo",
      },
      {
        make: "GMC",
        model: "Acadia",
        type: "SUV",
        tagline: "Three rows, family-ready",
        summary: "Room for the whole family and then some. The Acadia delivers comfort, technology, and GMC dependability.",
        highlights: ["3-row seating", "Quiet cabin", "GMC Pro Safety Plus"],
        image: "https://placehold.co/640x400/F0F6FF/1E3A5F?text=GMC+Acadia",
        alt: "GMC Acadia — swap with real inventory photo",
      },
    ],
  },
  {
    name: "Mercedes-Benz",
    vehicles: [
      {
        make: "Mercedes-Benz",
        model: "C-Class",
        type: "Sedan",
        tagline: "German precision, Gainesville accessible",
        summary: "The Gainesville luxury sedan of choice — AMG styling, MBUX tech, and the prestige of the three-pointed star.",
        highlights: ["MBUX infotainment", "AMG sport option", "Available CPO certified"],
        image: "https://placehold.co/640x400/1E3A5F/FFFFFF?text=Mercedes+C-Class",
        alt: "Mercedes-Benz C-Class — swap with real inventory photo",
      },
      {
        make: "Mercedes-Benz",
        model: "GLC",
        type: "SUV",
        tagline: "Luxury SUV without the compromise",
        summary: "Elevated ride, premium materials, and advanced tech. The GLC is the logical step-up for Gainesville professionals.",
        highlights: ["Panoramic sunroof", "4MATIC AWD", "Advanced safety suite"],
        image: "https://placehold.co/640x400/1E3A5F/FFFFFF?text=Mercedes+GLC",
        alt: "Mercedes-Benz GLC — swap with real inventory photo",
      },
    ],
  },
];

export default function VehicleCollectionGrid() {
  return (
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

            {/* Vehicle cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {brand.vehicles.map((v) => (
                <div
                  key={`${v.make}-${v.model}`}
                  className="group bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden hover:shadow-[0_4px_32px_rgba(26,86,219,0.12)] hover:border-[#1A56DB]/25 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-[16/9]">
                    {/* TODO: Replace with actual inventory photo */}
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
                      {v.make} {v.model}
                    </h3>
                    <p className="text-[#475569] text-sm leading-relaxed mb-4">
                      {v.summary}
                    </p>

                    {/* Highlights */}
                    <ul className="flex flex-col gap-1.5 mb-5">
                      {v.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-xs text-[#334155]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1A56DB] shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>

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
  );
}

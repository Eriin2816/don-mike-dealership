import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/Trust";
import WhyDonMike from "@/components/WhyAdaptive";
import BuyerSegmentCards from "@/components/WhoItsFor";
import FinancingSection from "@/components/FinancingSection";
import TradeInSection from "@/components/TradeInSection";
import FeaturedVehicleGrid from "@/components/Services";
import ProcessSection from "@/components/HowItWorks";
import FAQSection from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import PopupLeadModal from "@/components/PopupLeadModal";

export const metadata: Metadata = {
  title: "Don Mike Auto Dealership | Multi-Brand Vehicles in Gainesville, FL",
  description:
    "Gainesville's multi-brand auto dealership — Honda, Toyota, Mazda, GMC, and Mercedes-Benz. Transparent pricing, payment-first conversations, and a no-pressure experience.",
  openGraph: {
    title: "Don Mike Auto Dealership | Gainesville, FL",
    description:
      "Find your perfect vehicle in Gainesville. Honda, Toyota, Mazda, GMC, and Mercedes-Benz — all in one place.",
    images: [{ url: "/hero-dealership.jpg", width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <WhyDonMike />
        <BuyerSegmentCards />
        <FinancingSection />
        <TradeInSection />
        <FeaturedVehicleGrid />
        <ProcessSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      {/* Popup appears after 10s — only rendered on this page */}
      <PopupLeadModal />
    </>
  );
}

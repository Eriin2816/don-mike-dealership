import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Services from "@/components/Services";
import WhoItsFor from "@/components/WhoItsFor";
import HowItWorks from "@/components/HowItWorks";
import WhyAdaptive from "@/components/WhyAdaptive";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Services />
        <WhoItsFor />
        <HowItWorks />
        <WhyAdaptive />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

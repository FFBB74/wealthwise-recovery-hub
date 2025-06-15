
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <div className="bg-gradient-to-b from-white via-[#f7fafc] to-white min-h-screen w-full pt-20">
    <Navbar />
    <main>
      <HeroSection />
      <ServicesSection />
    </main>
    <ContactSection />
  </div>
);

export default Index;


import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <div className="bg-white min-h-screen w-full">
    <Navbar />
    <main>
      <HeroSection />
      <ServicesSection />
    </main>
    <ContactSection />
  </div>
);

export default Index;


import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AffiliationsSection from "@/components/AffiliationsSection";
import CompanyDocumentsSection from "@/components/CompanyDocumentsSection";

const Index = () => (
  <div className="bg-white min-h-screen w-full">
    <Navbar />
    <main>
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <AffiliationsSection />
      <CompanyDocumentsSection />
    </main>
    <ContactSection />
  </div>
);

export default Index;

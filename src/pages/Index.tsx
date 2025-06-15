
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AffiliationsSection from "@/components/AffiliationsSection";
import CompanyDocumentsSection from "@/components/CompanyDocumentsSection";
import CustomFormSection from "@/components/CustomFormSection";
import FraudStatsSection from "@/components/FraudStatsSection";
import GetInvolvedSection from "@/components/GetInvolvedSection";

const Index = () => (
  <div className="bg-white min-h-screen w-full">
    <Navbar />
    <main>
      <HeroSection />
      <FraudStatsSection />
      <ServicesSection />
      <TestimonialsSection />
      <AffiliationsSection />
      <GetInvolvedSection />
      <CompanyDocumentsSection />
    </main>
    <ContactSection />
    <CustomFormSection />
  </div>
);

export default Index;

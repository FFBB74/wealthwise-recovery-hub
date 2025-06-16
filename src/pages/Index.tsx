
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
import PromoBanner from "@/components/PromoBanner";
import SecurityShowcaseSection from "@/components/SecurityShowcaseSection";
import WealthGrowthSection from "@/components/WealthGrowthSection";
import TechShowcaseSection from "@/components/TechShowcaseSection";

const Index = () => (
  <div className="bg-white min-h-screen w-full">
    <Navbar />
    <main>
      <HeroSection />
      <WealthGrowthSection />
      <FraudStatsSection />
      <ServicesSection />
      <SecurityShowcaseSection />
      <TechShowcaseSection />
      <TestimonialsSection />
      <AffiliationsSection />
      <PromoBanner />
      <GetInvolvedSection />
      <CompanyDocumentsSection />
    </main>
    <ContactSection />
    <CustomFormSection />
  </div>
);

export default Index;

"use client"

import { BrowserRouter as Router } from "react-router-dom"
import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import ServicesSection from "../components/ServicesSection"
import TestimonialsSection from "../components/TestimonialsSection"
import AffiliationsSection from "../components/AffiliationsSection"
import CompanyDocumentsSection from "../components/CompanyDocumentsSection"
import CustomFormSection from "../components/CustomFormSection"
import FraudStatsSection from "../components/FraudStatsSection"
import GetInvolvedSection from "../components/GetInvolvedSection"
import PromoBanner from "../components/PromoBanner"
import SecurityShowcaseSection from "../components/SecurityShowcaseSection"
import WealthGrowthSection from "../components/WealthGrowthSection"
import TechShowcaseSection from "../components/TechShowcaseSection"
import IntegrationsSection from "../components/IntegrationsSection"
import ContactSection from "../components/ContactSection"
import { Toaster } from "@/components/ui/toaster"

const Index = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <PromoBanner />
        <TestimonialsSection />
        <FraudStatsSection />
        <WealthGrowthSection />
        <SecurityShowcaseSection />
        <TechShowcaseSection />
        <AffiliationsSection />
        <CompanyDocumentsSection />
        <GetInvolvedSection />
        <CustomFormSection />
        <IntegrationsSection />
        <ContactSection />
        <Toaster />
      </div>
    </Router>
  )
}

export default Index

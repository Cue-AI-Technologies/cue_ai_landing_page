import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LogoCredibilitySection from "@/components/LogoCredibilitySection";
import WhyCueSection from "@/components/WhyCueSection";
import ImpactMetricsSection from "@/components/ImpactMetricsSection";
import BeforeCallSection from "@/components/BeforeCallSection";
import DuringCallSection from "@/components/DuringCallSection";
import AfterCallSection from "@/components/AfterCallSection";
import TestimonialSection from "@/components/TestimonialSection";
import CaseStudySection from "@/components/CaseStudySection";
import TrustSection from "@/components/TrustSection";
import ServicesSection from "@/components/ServicesSection";
import DifferentiationSection from "@/components/DifferentiationSection";
import ConversionIntelligenceStrip from "@/components/ConversionIntelligenceStrip";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <LogoCredibilitySection />
      <WhyCueSection />
      <ImpactMetricsSection />
      <BeforeCallSection />
      <DuringCallSection />
      <AfterCallSection />
      <TestimonialSection />
      <CaseStudySection />
      <TrustSection />
      <ServicesSection />
      <DifferentiationSection />
      <ConversionIntelligenceStrip />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  );
}

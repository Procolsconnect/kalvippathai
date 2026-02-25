import TopBar from "@/components/TopBar";
import AdsTicker from "@/components/AdsTicker";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection1 from "@/components/StatsSection1";
import CoursesSection from "@/components/CoursesSection";
import FeaturesSection from "@/components/FeaturesSection";
import ScholarshipSection from "@/components/ScholarshipSection";
import InfrastructureSection from "@/components/InfrastructureSection";
import PlacementSection from "@/components/PlacementSection";
import CompaniesSection from "@/components/CompaniesSection";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer1 from "@/components/Footer1"; 
import Marquee from "@/components/Marquee"

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <AdsTicker />
      <Navbar />
      <HeroSection />
      <Marquee/>
      <StatsSection1 />
      <CoursesSection />
      <FeaturesSection />
      <ScholarshipSection />
      <InfrastructureSection />
      <PlacementSection />
      <CompaniesSection />
      <FAQSection />
      <TestimonialsSection />
      <CTASection />
      <Footer1 />
    </div>
  );
};

export default Index;

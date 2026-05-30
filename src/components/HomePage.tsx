import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import HowCanIHelpSection from "@/components/sections/HowCanIHelpSection";
import AboutSection from "@/components/sections/AboutSection";
import CorporateSection from "@/components/sections/CorporateSection";
import AreasSection from "@/components/sections/AreasSection";
import TherapyHelpsSection from "@/components/sections/TherapyHelpsSection";
import FirstSessionSection from "@/components/sections/FirstSessionSection";
import LocationSection from "@/components/sections/LocationSection";
import DifferentialsSection from "@/components/sections/DifferentialsSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <Navbar />
      <HeroSection />
      <HowCanIHelpSection />
      <AboutSection />
      <CorporateSection />
      <AreasSection />
      <TherapyHelpsSection />
      <FirstSessionSection />
      <LocationSection />
      <DifferentialsSection />
      <ReviewsSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

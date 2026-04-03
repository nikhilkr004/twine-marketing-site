import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ScreenshotCarousel from "@/components/ScreenshotCarousel";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <FeaturesSection />
      <ScreenshotCarousel />
      <HowItWorks />
      <Footer />
    </main>
  );
};

export default Index;

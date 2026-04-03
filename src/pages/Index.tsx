import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ScreenshotCarousel from "@/components/ScreenshotCarousel";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <FeaturesSection />
      <ScreenshotCarousel />
      <Testimonials />
      <HowItWorks />
      <CtaBanner />
      <Footer />
    </main>
  );
};

export default Index;

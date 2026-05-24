import CertificationsSection from "./components/CertificationsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import JourneySection from "./components/JourneySection";
import Navbar from "./components/Navbar";

import ProductsSection from "./components/ProductsSection";
import StorytellingSection from "./components/StorytellingSection";
import WhyChooseSection from "./components/WhyChooseSection";

export default function Home() {
  return (
    <div className="bg-cream text-gray-800 font-sans antialiased overflow-x-hidden min-h-screen">
      <Navbar />
      <HeroSection />
      <StorytellingSection />
      <ProductsSection />
      <JourneySection />
      <WhyChooseSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

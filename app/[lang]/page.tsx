import { notFound } from "next/navigation";
import CertificationsSection from "../components/CertificationsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import JourneySection from "../components/JourneySection";
import Navbar from "../components/Navbar";
import ProductsSection from "../components/ProductsSection";
import StorytellingSection from "../components/StorytellingSection";
import WhyChooseSection from "../components/WhyChooseSection";
import { getDictionary, hasLocale } from "./dictionaries";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  // Hai Server Component nhận từ điển qua props, các section còn lại
  // lấy từ điển từ LocaleProvider.
  const dict = await getDictionary(lang);

  return (
    <div className="bg-cream text-gray-800 font-sans antialiased overflow-x-hidden min-h-screen">
      <Navbar />
      <HeroSection />
      <StorytellingSection />
      <JourneySection />
      <ProductsSection />
      <WhyChooseSection />
      <CertificationsSection dict={dict} />
      <ContactSection />
      <Footer dict={dict} />
    </div>
  );
}

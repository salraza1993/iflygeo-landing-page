import "@/app/assets/css/pages/company.css";
import HeroSection from "../components/company/HeroSection";
import HighlightSection from "../components/company/HighlightSection";
import AboutContentSection from "../components/company/AboutContentSection";
import ProductSection from "../components/company/ProductSection";
import WeServeSection from "../components/company/WeServeSection";
import CertificationSection from "../components/company/CertificationSection";
import AirlineLogosSection from "../components/AirlineLogosSection";
import ProductFeatures from "../components/home/ProductFeatures";
import AchievementsSections from "../components/AchievementsSections";
import FooterCTASection from "../components/FooterCTASection";

export default function AboutPage() {
  return (
    <main className="company-page">
      <HeroSection />
      <HighlightSection />
      <AboutContentSection />
      <ProductSection />
      <WeServeSection />
      <CertificationSection />
      <AirlineLogosSection />
      <AchievementsSections />
      <ProductFeatures />
      <FooterCTASection />
    </main>
  );
}
import "@/app/assets/css/pages/home.css";
import HeroSection from "./components/home/HeroSection";
import AirlineLogosSection from "./components/AirlineLogosSection";
import ProductSection from "./components/home/ProductSection";
import SuppliersSection from "./components/home/SuppliersSection";
import AchievementsSections from "./components/AchievementsSections";
import ProductFeatures from "./components/home/ProductFeatures";
import FooterCTASection from "./components/FooterCTASection";
import ProductHighlightSection from "./components/home/ProductHighlightSection";

export default function HomePage() {
  return (
    <main className="home-page">
      <HeroSection />
      <ProductHighlightSection />
      <AirlineLogosSection />
      <ProductSection />
      <SuppliersSection />
      <AchievementsSections />
      <ProductFeatures />
      <FooterCTASection />
    </main>
  );
}

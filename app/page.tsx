import "@/app/assets/css/pages/home.css";
import HeroSection from "./components/home/HeroSection";
import AirlineLogosSection from "./components/home/AirlineLogosSection";
import ProductSection from "./components/home/ProductSection";
import SuppliersSection from "./components/home/SuppliersSection";
import AchievementsSections from "./components/home/AchievementsSections";
import ProductFeatures from "./components/home/ProductFeatures";
import FooterCTASection from "./components/home/FooterCTASection";
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

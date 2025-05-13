import "@/app/assets/css/pages/career.css";
import HeroSection from "../components/career/HeroSection";
import CurrentOpening from "../components/career/CurrentOpening";
import AirlineLogosSection from "../components/AirlineLogosSection";
import AchievementsSections from "../components/AchievementsSections";
import ProductFeatures from "../components/home/ProductFeatures";
import FooterCTASection from "../components/FooterCTASection";
import ExtraSection from "../components/career/ExtraSection";
import CareerFormSection from "../components/career/CareerFormSection";

export default function CareerPage() {
  return (
    <>
      <HeroSection />
      <CurrentOpening />
      <ExtraSection />
      <CareerFormSection />
      <AirlineLogosSection isTitleRequired={false} />
      <AchievementsSections />
      <ProductFeatures />
      <FooterCTASection />
    </>
  );
}
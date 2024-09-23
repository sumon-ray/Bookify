import AboutSection from "@/Components/AboutSection";
import HeroSection from "@/Components/HeroSection";
import OfferSection from "@/Components/OfferSection";
import Slider from "@/Components/(Slider)/Slider";
import Category from "@/Components/(Category )/Category";


export default function Home() {
  return (
    <div>
      <Slider />
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <OfferSection></OfferSection>
      <Category/>
    </div>
  );
}

import AboutSection from "@/Components/AboutSection";
// import HeroSection from "@/Components/HeroSection";
import OfferSection from "@/Components/OfferSection";
import Slider from "@/Components/Slider";


export default function Home() {
  return (
    <div>
      <Slider />
      <OfferSection></OfferSection>
      {/* <HeroSection></HeroSection> */}
      <AboutSection></AboutSection>
    
    </div>
  );
}

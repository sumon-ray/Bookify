import AboutSection from "@/Components/AboutSection";
import HeroSection from "@/Components/HeroSection";
import OfferSection from "@/Components/OfferSection";
import Slider from "@/Components/Slider";
import Image from "next/image";

// aaaaaaaaa

export default function Home() {
  return (
    <div className="">
      <Slider />
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <OfferSection></OfferSection>
    </div>
  );
}

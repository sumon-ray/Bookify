import AboutSection from "@/Components/AboutSection";
// import HeroSection from "@/Components/HeroSection";
import OfferSection from "@/Components/OfferSection";
import Slider from "@/Components/(Slider)/Slider";
import Category from "@/Components/(Category )/Category";
// import TopAuthor from "@/Components/(TopAuthor)/TopAuthor";


export default function Home() {
  return (
    <div>
      <Slider />
      <OfferSection></OfferSection>
      {/* <HeroSection></HeroSection> */}
      <AboutSection></AboutSection>
      {/* <TopAuthor/> */}
      <Category/>
    </div>
  );
}

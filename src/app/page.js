// import HeroSection from "@/Components/HeroSection";
import AboutSection from "@/Components/AboutSection";
import NewsletterSection from "@/Components/NewsletterSection";
import OfferSection from "@/Components/OfferSection";
import Slider from "@/Components/(Slider)/Slider";
import Category from "@/Components/(Category )/Category";
import OurCollection from "@/Components/OurCollection";

// import '../Components/(Slider)/style.module.css'

// import TopAuthor from "@/Components/(TopAuthor)/TopAuthor";


export default function Home() {
  return (
    <div>
      <Slider />
      <OfferSection></OfferSection>
      <OurCollection/>
      
      {/* <HeroSection></HeroSection> */}
      <AboutSection></AboutSection>
      {/* <TopAuthor/> */}
      <Category/>
      <NewsletterSection/>
    </div>
  );
}

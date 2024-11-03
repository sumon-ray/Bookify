import Slider from "@/Components/(Slider)/Slider";
import OurCollection from "@/Components/OurCollection";
import OurLibrary from "@/Components/OurLibrary/OurLibrary";
import FaqSection from "@/Components/FaqSection";
import AudioBook from "@/Components/AudioBook/AudioBook";
import CommunityHighlights from "@/Components/CommunityHighlights";

export default function Home() {
  return (
    <>
      <Slider />
      <OurCollection />
      <OurLibrary />
      <AudioBook />
      <CommunityHighlights />
      <FaqSection />
    </>
  );
}

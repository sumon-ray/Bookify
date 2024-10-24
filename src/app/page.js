import Slider from "@/Components/(Slider)/Slider";
import OurCollection from "@/Components/OurCollection";
import OurLibrary from "@/Components/OurLibrary/OurLibrary";
import FaqSection from "@/Components/FaqSection";
// import BookReviews from "@/Components/BookReview/BookReviews";
import AudioBook from "@/Components/AudioBook/AudioBook";

// import '../Components/(Slider)/style.module.css'


export default function Home() {
  return (
    <div>
      <Slider />
      <OurCollection />
      <OurLibrary />
      <AudioBook />
      <FaqSection />
    </div>
  );
}

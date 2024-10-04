"use client";

import AboutSection from "./AboutSection"; 
import HowItWorks from "./HowItWorks/HowItWorks";
import OurJourney from "./OurJourney/OurJourney";

const AboutPage = () => {
  return (
    <div>
      <AboutSection />
      {/* <Review /> */}
      <OurJourney />
      <HowItWorks />
    </div>
  );
};

export default AboutPage;

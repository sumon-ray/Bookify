import React from "react";
import lottieImage from "../../../public/image/our_mission.json";
import Lottie from "lottie-react";
import { Button } from "flowbite-react";
import { FaRecycle, FaPeopleArrows, FaBookOpen } from "react-icons/fa"; // Importing icons

const OurMission = () => {
  return (
    <div className="container bg-[#fdf6f6] pb-6 px-8 lg:px-24 mx-auto text-center ">
      <div className="flex flex-col justify-center items-center">
        <Lottie 
          animationData={lottieImage}
          aria-label="Lottie animation" // Use aria-label for accessibility
          loop
          className="  w-[150px] :h-[200px]"
          autoplay
        />
        <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          At BookSwap, our mission is to promote a sustainable, community-driven
          exchange of books. We believe in the power of shared stories and the
          importance of fostering a global reading community.
        </p>
        <Button color="indigo" className="" size="lg">
          Join the Movement
        </Button>
        
      </div>

      {/* Additional Information Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
        {/* Icon 1: Sustainability */}
        <div className="flex flex-col items-center text-center">
          <FaRecycle className="text-5xl text-indigo-600 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Sustainability</h3>
          <p className="text-lg max-w-md mx-auto">
            We promote sustainability by encouraging the reuse and sharing of
            books, reducing waste, and minimizing our ecological footprint.
          </p>
        </div>

        {/* Icon 2: Community */}
        <div className="flex flex-col items-center text-center">
          <FaPeopleArrows className="text-5xl text-indigo-600 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Community</h3>
          <p className="text-lg max-w-md mx-auto">
            Our platform connects readers from around the world, fostering a
            community where everyone can share their love for literature.
          </p>
        </div>

        {/* Icon 3: Knowledge Sharing */}
        <div className="flex flex-col items-center text-center">
          <FaBookOpen className="text-5xl text-indigo-600 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Knowledge Sharing</h3>
          <p className="text-lg max-w-md mx-auto">
            We believe in the power of stories. Our mission is to create a
            platform where knowledge is shared and stories are celebrated.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;

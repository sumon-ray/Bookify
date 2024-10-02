import { Button } from "flowbite-react";
import React from "react";

const Banner = () => {
  const backgroundImageStyle = {
    backgroundImage: "url('/image/banner.png')",
    backgroundSize: "cover", // Ensures the image covers the entire div
    backgroundPosition: "center", // Centers the image
    height: "400px", // Adjust the height as needed
    width: "100%", // Full width
  };
  const backgroundImageStyle2 = {
    backgroundImage: "url('/image/RectangleLight.png')",
    backgroundSize: "cover", // Ensures the image covers the entire div
    backgroundPosition: "center", // Centers the image
    height: "400px", // Adjust the height as needed
    width: "50%", // Full width
  };

  return (
    <div style={backgroundImageStyle}>
      <div className="relative " style={backgroundImageStyle2}>
        <div className="absolute top-20 text-[#FFFFFF] flex flex-col justify-between items-center ">
          <h1 className="text-3xl pb-2 font-bold">A Book Is a gift you can <br /> open again and again</h1>
          <p className="w-2/3 mx-auto text-justify text-[#FFFFFF]">
            Dialogue is a many-sided critical concept; at once an ancient
            philosophical genre, a formal component of fiction and drama,
          </p>
          <div className="flex gap-2">
            <button className="bg-[#364957] px-2 py-2 rounded-md text-white ">
              Claim Discount
            </button>
            <button className="px-2 py-2 rounded-md text-[#364957] bg-[#FFFFFF]">
              Open Flash
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

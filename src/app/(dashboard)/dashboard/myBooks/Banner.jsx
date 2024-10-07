import { Button } from "flowbite-react";
import React from "react";

const Banner = () => {
  const backgroundImageStyle = {
    backgroundImage: "url('/image/banner.png')",
    backgroundSize: "cover", 
    backgroundPosition: "center", 
    height: "400px", 
    width: "100%",
  };
  const backgroundImageStyle2 = {
    backgroundImage: "url('/image/RectangleLight.png')",
    backgroundSize: "cover", 
    backgroundPosition: "center", 
    height: "400px", 
    width: "50%", 
  };

 
  const backgroundImageStyle3 = {
    backgroundImage: "url('/image/banner.png')",
    backgroundSize: "cover", 
    backgroundPosition: "center", 
    height: "400px", 
    width: "100%", 
  };

  const backgroundImageStyle4 = {
    backgroundImage: "url('/image/RectangleLight.png')",
    backgroundSize: "cover",
    backgroundPosition: "center", 
    height: "100%", 
    width: "100%",
  };



  return (

    <>
    
<div className="hidden md:flex">
<div style={backgroundImageStyle}>
      <div className="relative " style={backgroundImageStyle2}>
        <div className="absolute top-10 lg:top-20 text-[#FFFFFF] flex flex-col w-full justify-between items-center ">
          <h1 className="text-2xl text-center lg:text-3xl px-2 pb-2 font-bold">A Book Is a gift you can  open again and again</h1>
          <p className="my-4 w-2/3 mx-auto text-justify text-[#FFFFFF]">
            Dialogue is a many-sided critical concept; at once an ancient
            philosophical genre, a formal component of fiction and drama,
          </p>
          <div className="flex gap-6 ">
            <button className="bg-[#364957] px-2 py-2   rounded-md text-white ">
              Claim Discount
            </button>
            <button className="px-2 py-2   rounded-md text-[#364957] bg-[#FFFFFF]">
              Open Flash
            </button>
          </div>
        </div>
      </div>
    </div>
</div>

<div className="md:hidden relative w-full  h-[400px]" style={backgroundImageStyle3}>
      <div className="absolute inset-0 w-full  " style={backgroundImageStyle}>
        <div className="absolute bg-gray-500 bg-opacity-25  w-full h-[400px] py-20   text-[#FFFFFF] flex flex-col  justify-between items-center px-4 sm:px-0">
          <h1 className="text-3xl sm:text-3xl md:text-4xl pb-2 font-bold text-center">
            A Book Is a gift you can <br /> open again and again
          </h1>
          <p className=" w-full sm:w-2/3 mx-auto text-center sm:text-justify text-[#FFFFFF] text-sm sm:text-base">
            Dialogue is a many-sided critical concept; at once an ancient <br />
            philosophical genre, a formal component of fiction and drama.
          </p>
          <div className="flex  gap-2 w-80 mt-4">
            <button className="bg-[#364957]  rounded-md text-white w-full sm:w-auto">
              Claim Discount
            </button>
            <button className="px-4 py-2 rounded-md text-[#364957] bg-[#FFFFFF] w-full sm:w-auto">
              Open Flash
            </button>
          </div>
        </div>
      </div>
    </div>


    </>
  );
};

export default Banner;

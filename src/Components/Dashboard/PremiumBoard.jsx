import React from "react";
// import LottieAnimation from './LottieAnimation';
import Image from "next/image";
import img from "../../../src/assets/images/About/logo (1).png";
const PremiumBoard = () => {
  return (
    <div className="bottom-5 bg-gradient-to-r from-[#4a6a79] via-[#5b7f8f] to-[#364957] rounded-lg text-white text-center pb-2 space-y-2 absolute shadow-lg">
      <h1 className="font-bold flex flex-col  items-center">
        {/* <LottieAnimation /> */}
        <div>
          <Image
            src={img}
            className="h-[60px]  w-full "
            height={20}
            width={100}
          />
        </div>
        <p className="text-xl flex gap-1">
          Bookify Pro
          {/* <span className="bg-gray-200 bg-opacity-15 rounded-md px-2 font-bold">
          </span> */}
        </p>
      </h1>
      <p className="text-xs">Unlock access to all features on Tetumbas</p>
      <button className="bg-white text- text-black font-semibold px-2 py-1 rounded-full shadow-md hover:bg-gray-200 transition-all duration-300">
        Get Pro
      </button>
    </div>
  );
};

export default PremiumBoard;

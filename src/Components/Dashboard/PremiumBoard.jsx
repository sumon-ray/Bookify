import React from 'react';
import LottieAnimation from './LottieAnimation';

const PremiumBoard = () => {
  return (
    <div className="mt-1 bg-gradient-to-r from-[#4a6a79] via-[#5b7f8f] to-[#364957] rounded-lg text-white text-center pb-2 space-y-4 absolute shadow-lg">
      <h1 className="font-bold flex flex-col pt-2 items-center">
        <LottieAnimation />
        <p className="text-2xl mt-2 flex gap-1">
          Bookify 
          <span className="bg-gray-200 bg-opacity-15 rounded-md px-2 font-bold">
            Pro
          </span>
        </p>
      </h1>
      <p className="text-xs">
        Unlock access to all features on Tetumbas
      </p>
      <button className="bg-white text-black font-semibold px-4 py-2 rounded-full shadow-md hover:bg-gray-200 transition-all duration-300">
        Get Pro
      </button>
    </div>
  );
};

export default PremiumBoard;

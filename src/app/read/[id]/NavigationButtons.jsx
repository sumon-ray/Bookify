import React from "react";
import Image from "next/image";

const NavigationButtons = ({ currentPage, totalPages, handleNext, handlePrevious }) => {
  return (
    <div className="mt-4 flex justify-between">
      <Image
        src="/previous.svg"
        width={40}
        height={40}
        className={`cursor-pointer ${currentPage === 0 ? "opacity-50" : ""}`}
        onClick={handlePrevious}
        alt="Previous Page"
      />
      <Image
        src="/next.svg"
        width={50}
        height={50}
        className={`cursor-pointer ${currentPage >= totalPages - 2 ? "opacity-50" : ""}`}
        onClick={handleNext}
        alt="Next Page"
      />
    </div>
  );
};

export default NavigationButtons;

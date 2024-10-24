"use client";
import React from "react";
import Lottie from "lottie-react";
import lottieImage from "../../../../../public/my-book-cover.json";
const CoverImage = () => {
  return (
<>
<Lottie
      animationData={lottieImage}
      aria-label="Lottie animation"
      loop
      className="lg:w-[300px] lg:h-160px] "
      autoplay
    />

</>
  );
};

export default CoverImage;

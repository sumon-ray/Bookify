"use client";
import React from "react";
import Lottie from "lottie-react";
import lottieImage from "../../../public/get-pro-v4.json";
const LottieAnimation = () => {
  return (
<>
<Lottie
      animationData={lottieImage}
      aria-label="Lottie animation"
      loop
      className="lg:w-[120px] lg:h-[80px] "
      autoplay
    />

</>
  );
};

export default LottieAnimation;

"use client";
import React from "react";
import Lottie from "lottie-react";
import lottieImage from "../../../public/image/animate.json";
const LottieAnimation = () => {
  return (
    <Lottie
      animationData={lottieImage}
      aria-label="Lottie animation"
      loop
      className="lg:w-[700px] lg:h-[400px] "
      autoplay
    />
  );
};

export default LottieAnimation;

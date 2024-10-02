// components/LottieAnimation.js
"use client";

import React from 'react';
import Lottie from "lottie-react"; // Import Lottie from lottie-react
import lottieImage from "../../../../public/image/animate.json"; // Ensure the path to the JSON file is correct
const LottieAnimation = () => {
    return (
        <Lottie 
            animationData={lottieImage} // Use animationData prop to provide the JSON
           // Set the size of the animation
           
            aria-label="Lottie animation" // Use aria-label for accessibility
            loop 
            className='lg:w-[700px] lg:h-[400px] '
            autoplay 
        />
    );
};

export default LottieAnimation; // Export the component

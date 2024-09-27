"use client";

import Image from "next/image"; // Import Next.js Image component
import styles from "./style.module.css";
import { Button } from "flowbite-react";

// Import the image from the public directory directly
const Component = () => {
  return (
      <div 
      
      className={`bg-[url('https://i.ibb.co/XbWXrjV/sample-2.jpg')] bg-cover bg-center object-cover h-[400px] `}
      >
                

    <div className=" p-6 rounded-lg ">
      <div 
      
      className={`${styles.slideWrapper} flex md:flex-row justify-between items-center md:gap-6`}>
        <div className="flex-1 p-4 flex justify-center">
          {/* <Image
          className=" w-60 lg:w-96"
            src="/bookss.avif" // Reference the image directly from the public directory
            alt="Slide 1"
            width={500} // Set appropriate width
            height={350} // Reduced height
            // className={`${styles.responsiveImage} h-auto`} // Use h-auto to maintain aspect ratio
          /> */}
        </div>
        <div className=" md:flex flex flex-col flex-1 items-center text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
          J.D. Kurtness
            <span className="text-red-500"> De Vengeance</span>
          </h1>
          <p className=" text-gray-700 mb-6 w-full md:w-2/3 hidden md:flex">
          Cover up front of book and leave summary
          </p>
      
          <Button className="my-2 px-6 py-2 bg-zinc-500 text-white rounded hover:bg-red-600 transition duration-300">
            Shop Now
          </Button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Component;

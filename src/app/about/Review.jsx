import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { FaStar } from "react-icons/fa"; 
import Image from "next/image";
import { Sphere, Stars } from "@react-three/drei";


const Review = () => {
  const rating = 4; 

  return (
    <section className="relative container mx-auto lg:px-20 px-8 py-16">

<div className="relative flex flex-col lg:flex-row gap-4 items-center justify-center z-10">
        <div className="flex-shrink-0 lg:w-1/2">
          <Image
            src="/image/review.svg"
            width={290}
            height={190}
            alt="Customer Image"
 
          />
        </div>

        <div className="rounded-lg p-6 text-left flex flex-col items-center justify-center lg:w-1/2 bg-white shadow-lg">
          <h1 className="font-semibold text-3xl mb-4 text-center">
            What do customers say <br />
            about us?
          </h1>

          <div className="flex items-center text-left gap-2 mb-2">
            <div className="bg-indigo-400 rounded-full overflow-hidden">
              <Image
                src="/image/Mask2.svg"
                width={70}
                height={70}
                alt="Reviewer Image"
              />
            </div>
            <div>
              <h1 className="font-medium">Shakib Hasan Khan</h1>
              <p className="text-gray-500">Tangail, Dhaka</p>
            </div>
          </div>

          <div className="flex space-x-1 mb-2">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={`text-xl ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`} 
              />
            ))}
          </div>

          <p className="w-2/3 mx-auto text-center">
            Very satisfying service makes it comfortable, a beautiful place in the world.
          </p>
        </div>
      </div>
      {/* Review Content */}
 
    </section>
  );
};

export default Review;

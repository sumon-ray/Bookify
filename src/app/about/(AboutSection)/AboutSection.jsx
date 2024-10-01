// import { Canvas, useFrame } from '@react-three/fiber';
// import { extend } from '@react-three/fiber';
// import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

// import { BoxGeometry, MeshStandardMaterial } from 'three'; // Import the required Three.js objects
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
} from "react-icons/fa";
import { Button } from "flowbite-react";
// import React, { useRef } from 'react';
import LottieAnimation from "./LottieAnimation";
import OurMission from "../OurMission";

// Extend Three.js objects to be used declaratively in R3F
// extend({ BoxGeometry, MeshStandardMaterial });

const FloatingCube = () => {
  // const cubeRef = useRef();
  // Animation effect for floating and rotating the cube
  // useFrame(() => {
  //   if (cubeRef.current) {
  //     // Rotate the cube
  //     cubeRef.current.rotation.x += 0.01;
  //     cubeRef.current.rotation.y += 0.01;
  //     // Make it float up and down
  //     cubeRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.5; // Adjust for smoother floating
  //   }
  // });
  // return (
  //   <mesh ref={cubeRef} position={[0, 0, 0]}>
  //     <boxGeometry args={[1, 1, 1]} /> {/* Box size */}
  //     <meshStandardMaterial color="#4F46E5" />
  //   </mesh>
  // );
};

export default function AboutUs() {
  return (
    <section className="bg-[#fdf6f6]  pt-16 pb-6">
      <div className="container px-8 lg:px-20 mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="md:w-1/2 mb-10 md:mb-0 text-justify flex flex-col items-center justify-center   md:text-left px-4">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">
            Welcome to <span className="text-indigo-500">BookSwap</span>
          </h1>
          <p className="text-lg mb-6">
            BookSwap is a community-driven platform where readers exchange
            books, share knowledge, and discover new titles. Whether you want to
            swap, sell, or donate, we make the process easy, fun, and
            sustainable!
          </p>
          <p className=" text-lg mb-6">
            Join us in fostering a global community of passionate readers who
            believe in the power of books to connect people and ideas.
          </p>
          <Button color="purple" size="lg" className="mb-6">
            Get Started
          </Button>

          <div className="flex space-x-6 justify-center md:justify-start">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-2xl text-indigo-600 hover:text-indigo-800" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-2xl text-indigo-600 hover:text-indigo-800" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl text-indigo-600 hover:text-indigo-800" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl text-indigo-600 hover:text-indigo-800" />
            </a>
          </div>
        </div>

        {/* 3D Animation Section */}
        <div className="md:w-1/2 ">
          {/* <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <FloatingCube />
          </Canvas> */}

          <LottieAnimation />
        </div>
      </div>

      {/* Our Mission Section */}
 <OurMission />
    </section>
  );
}

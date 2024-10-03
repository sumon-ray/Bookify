import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
} from "react-icons/fa";
import { Button } from "flowbite-react";
import Social from "../Social_Icon/UseIcon";
import LottieAnimation from "./LottieAnimation";
import OurMission from "../OurMission"

export default function AboutUs() {
  return (
    <section className="bg-[#fdf6f6]  pt-16 ">
      <div className="container px-8 lg:px-20 mx-auto lg:gap-6 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="md:w-1/2 md:mb-0 text-justify flex flex-col items-center justify-center   md:text-left px-4">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">
            Welcome to <span className="text-[#364957]">Bookify</span>
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
          <Button color="#EFEEE9"  size="lg" className="mb-6 text-[#B7B7B7 ] text-white bg-[#364957] ">
            Get Started
          </Button>
          {/* <UseIcon */}

          <div className="flex space-x-6 justify-center md:justify-start">
            <Social />
          </div>
        </div>

        <div className="md:w-1/2 lg:translate-x-10">
          <LottieAnimation />
        </div>
      </div>

      {/* Our Mission Section */}
      <OurMission />
    </section>
  );
}

import { Button } from "flowbite-react";
import LottieAnimation from "./LottieAnimation";
import Social from "./Social_Icon/UseIcon";
import OurMission from "./OurMission";
import { motion } from "framer-motion";

// Define animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export default function AboutUs() {
  return (
    <motion.section
      className="md:pt-16 "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { transition: { staggerChildren: 0.3 } },
      }}
    >
      <div className="container px-8 lg:px-20 mx-auto lg:gap-6 flex flex-col-reverse md:flex-row items-center  justify-between">
        {/* Left Section */}
        <motion.div
          className="md:w-1/2 md:mb-0 text-justify flex flex-col items-center justify-center md:text-left px-4"
          variants={fadeInLeft}
        >
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">
            Welcome to <span className="">Bookify</span>
          </h1>
          <p className="text-lg mb-6">
            BookSwap is a community-driven platform where readers exchange
            books, share knowledge, and discover new titles. Whether you want to
            swap, sell, or donate, we make the process easy, fun, and
            sustainable!
          </p>
          <p className="text-lg mb-6">
            Join us in fostering a global community of passionate readers who
            believe in the power of books to connect people and ideas.
          </p>
          

          <div className="flex space-x-6 justify-center md:justify-start">
            <Social />
          </div>
        </motion.div>

        {/* Right Section with Animation */}
        <motion.div
          className="md:w-1/2  lg:translate-x-10"
          variants={fadeInUp}
        >
          <LottieAnimation />
        </motion.div>
      </div>

      {/* Our Mission Section */}
      <OurMission />
    </motion.section>
  );
}

import React from "react";
import { FaExchangeAlt, FaBook, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";
import signUpImage from '../../../../public/about/undraw_mobile_login_re_9ntv.svg'; 
import listBook from '../../../../public/about/undraw_to_do_list_re_9nt7.svg'; 
import connect from '../../../../public/about/undraw_social_interaction_re_dyjh.svg'; 
import transfer from '../../../../public/about/undraw_process_re_gws7.svg'; 
import Image from "next/image";

const steps = [
  {
    icon: <Image src={signUpImage} alt="Sign Up" width={200} height={200} />, // Use image here
    title: "Step 1: Sign Up",
    description:
      "Create an account on Bookify to start swapping books quickly and easily.",
  },
  {
    icon: <Image src={listBook} alt="Sign Up" width={230} height={230} />,
    title: "Step 2: List Your Books",
    description:
      "Add your books to the platform. Share your favorite reads and let others know what you have available for swap.",
  },
  {
    icon: <Image src={connect} alt="Sign Up" width={200} height={200} />,
    title: "Step 3: Connect with Readers",
    description:
      "Browse through other users’ listings and connect with fellow book lovers to arrange swaps.",
  },
  {
    icon: <Image src={transfer} alt="Sign Up" width={150} height={150} />,
    title: "Step 4: Swap Books",
    description:
      "Once you've found a book you'd like to swap, coordinate with the other user and enjoy your new read!",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-4xl font-bold mb-12 text-center">How It Works</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
      Discover how Bookify makes book swapping easy and fun. Follow these simple steps to start sharing and receiving amazing reads from fellow book lovers in your community!
    </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg "
              initial={{ opacity: 0, y: 50 }} // Increased initial y value for a more prominent motion
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2, // Increased duration
                delay: index * 0.2, // Slightly increased delay
                ease: "easeInOut", // Added easing for a smoother effect
              }}
            >
              <div className="mb-6">{step.icon}</div>
              <h3 className="text-2xl font-semibold text-[#364957] dark:text-gray-300 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

import React from "react";
import { FaExchangeAlt, FaBook, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
  {
    icon: <FaExchangeAlt className="text-6xl text-gray-600" />,
    title: "Step 1: Sign Up",
    description:
      "Create an account on Bookify to start swapping books quickly and easily.",
  },
  {
    icon: <FaBook className="text-6xl text-gray-600" />,
    title: "Step 2: List Your Books",
    description:
      "Add your books to the platform. Share your favorite reads and let others know what you have available for swap.",
  },
  {
    icon: <FaUsers className="text-6xl text-gray-600" />,
    title: "Step 3: Connect with Readers",
    description:
      "Browse through other users’ listings and connect with fellow book lovers to arrange swaps.",
  },
  {
    icon: <FaExchangeAlt className="text-6xl text-gray-600" />,
    title: "Step 4: Swap Books",
    description:
      "Once you've found a book you'd like to swap, coordinate with the other user and enjoy your new read!",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-4xl font-bold mb-12 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center  p-6 rounded-lg border border-gray-300"
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-6">{step.icon}</div>
              <h3 className="text-2xl font-semibold text-[#364957] mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
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

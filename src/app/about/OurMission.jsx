import React from "react";
import lottieImage from "../../../public/Animation.json";
import Lottie from "lottie-react";
import { Button } from "flowbite-react";
import { FaRecycle, FaPeopleArrows, FaBookOpen } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const OurMission = () => {
  return (
    <div className="container mt-10 lg:pb-6 px-8 lg:px-24 mx-auto text-center ">
      <div className="flex flex-col justify-center items-center">
        <motion.h2
          className="text-4xl flex items-center justify-center font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Mission
          {/* <Lottie 
            animationData={lottieImage}
            aria-label="Lottie animation"
            loop
            className="  w-[80px] :h-[200px]"
            autoplay
          /> */}
        </motion.h2>
        <motion.p
          className="text-lg max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          At BookSwap, our mission is to promote a sustainable, community-driven
          exchange of books. We believe in the power of shared stories and the
          importance of fostering a global reading community.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* <Button
            color=""
            className="outline outline-2 outline-[#364957]"
            size="lg"
          >
            Join the Movement
          </Button> */}
        </motion.div>
      </div>

      {/* Grid with Staggered Animation */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        <motion.div className="flex flex-col items-center text-center" variants={fadeInUpVariants}>
          <FaRecycle className="text-5xl text-[#364957] dark:text-gray-400 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Sustainability</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md mx-auto">
            We promote sustainability by encouraging the reuse and sharing of
            books, reducing waste, and minimizing our ecological footprint.
          </p>
        </motion.div>

        <motion.div className="flex flex-col items-center text-center" variants={fadeInUpVariants}>
          <FaPeopleArrows className="text-5xl text-[#364957] dark:text-gray-400 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Community</h3>
          <p className="text-lg max-w-md mx-auto text-gray-600 dark:text-gray-300"> 
            Our platform connects readers from around the world, fostering a
            community where everyone can share their love for literature.
          </p>
        </motion.div>

        <motion.div className="flex flex-col items-center text-center" variants={fadeInUpVariants}>
          <FaBookOpen className="text-5xl text-[#364957] dark:text-gray-400 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Knowledge Sharing</h3>
          <p className="text-lg max-w-md mx-auto text-gray-600 dark:text-gray-300">
            We believe in the power of stories. Our mission is to create a
            platform where knowledge is shared and stories are celebrated.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default OurMission;

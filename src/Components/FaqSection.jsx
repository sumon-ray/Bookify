"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaQuestion, FaRobot } from "react-icons/fa";
import {
  FiShoppingCart,
  FiSend,
  FiMessageCircle,
  FiHelpCircle,
  FiDollarSign,
  FiRepeat,
  FiUserCheck,
} from "react-icons/fi";
import { GiCardExchange } from "react-icons/gi";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineShoppingBag,
} from "react-icons/hi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IoIosArrowDown } from "react-icons/io";
import { RiSearchLine } from "react-icons/ri";
import Heading from "./Heading/Heading";

const FaqSection = () => {
  const [showMore, setShowMore] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedItems, setExpandedItems] = useState({});
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const faqItems = [
    {
      icon: (
        <GiCardExchange
          size={32}
          // style={{ color: "#4b5563", padding: "2px", borderRadius: "5px" }}
          className="text-[#4b5563] dark:text-gray-300 p-[2px] rounded-[5px]   border-[#e1dddd] border-2 border-e-chart-3 dark:border-e-chart-2  "
        />
      ),
      question: "How does the book exchange work?",
      answer:
        "Our platform allows users to exchange books with others. List your book, find a book you want, and arrange the exchange through our system.",
    },
    {
      icon: (
        <FiShoppingCart
          size={32}
          // style={{ color: "#4b5563", padding: "2px", borderRadius: "5px" }}
          className="text-[#4b5563] dark:text-gray-300 p-[2px] rounded-[5px]   border-[#e1dddd] border-2 border-e-chart-3 dark:border-e-chart-2  "
        />
      ),
      question: "Is there a fee to exchange books?",
      answer:
        "No, exchanging books is free. However, shipping fees may apply depending on the shipping method you choose.",
    },
    {
      icon: (
        <FiSend
          size={32}
          // style={{ color: "#4b5563", padding: "2px", borderRadius: "5px" }}
          className="text-[#4b5563] dark:text-gray-300 p-[2px] rounded-[5px]   border-[#e1dddd] border-2 border-e-chart-3 dark:border-e-chart-2  "
        />
      ),
      question: "How do I ship my books?",
      answer:
        "After an exchange is arranged, you’ll be provided with shipping options. You can use our integrated shipping services or choose your own.",
    },
    {
      icon: (
        <FiRepeat
          size={32}
          // style={{ color: "#4b5563", padding: "2px", borderRadius: "5px" }}
          className="text-[#4b5563] dark:text-gray-300 p-[2px] rounded-[5px]   border-[#e1dddd] border-2 border-e-chart-3 dark:border-e-chart-2  "
        />
      ),
      question: "Can I exchange multiple books at once?",
      answer:
        "Yes, you can exchange as many books as you like, as long as both parties agree to the terms of the exchange.",
    },
    {
      icon: (
        <FiDollarSign
          size={32}
          // style={{ color: "#4b5563", padding: "2px", borderRadius: "5px" }}
          className="text-[#4b5563] dark:text-gray-300 p-[2px] rounded-[5px]   border-[#e1dddd] border-2 border-e-chart-3 dark:border-e-chart-2  "
        />
      ),
      question: "Are there any hidden costs?",
      answer:
        "No hidden costs. The only cost you might incur is for shipping, if you choose to ship the book.",
    },
    {
      icon: (
        <FiUserCheck
          size={32}
          // style={{ color: "#4b5563", padding: "2px", borderRadius: "5px" }}
          className="text-[#4b5563] dark:text-gray-300 p-[2px] rounded-[5px]   border-[#e1dddd] border-2 border-e-chart-3 dark:border-e-chart-2  "
        />
      ),
      question: "How do I know the book I want is available?",
      answer:
        "Our platform will show the current availability of books listed by other users. You can also request to be notified if the book becomes available.",
    },
    {
      icon: (
        <FiHelpCircle
          size={32}
          // style={{ color: "#4b5563", padding: "2px", borderRadius: "5px" }}
          className="text-[#4b5563] dark:text-gray-300 p-[2px] rounded-[5px]   border-[#e1dddd] border-2 border-e-chart-3 dark:border-e-chart-2  "
        />
      ),
      question: "What if my book doesn’t arrive?",
      answer:
        "We provide customer support for these situations. If your book doesn’t arrive within the agreed time, contact our support team for assistance.",
    },
    {
      icon: (
        <FiMessageCircle
          size={32}
          // style={{ color: "#4b5563", padding: "2px", borderRadius: "5px" }}
          className="text-[#4b5563] dark:text-gray-300 p-[2px] rounded-[5px]   border-[#e1dddd] border-2 border-e-chart-3 dark:border-e-chart-2  "
        />
      ),
      question: "Can I communicate with the other user before exchanging?",
      answer:
        "Yes, our messaging system allows you to communicate with other users to finalize the details of the exchange.",
    },
    {
      icon: (
        <LiaShippingFastSolid
          size={32}
          className="text-[#4b5563] dark:text-gray-300 p-[2px] rounded-[5px] border-[#e1dddd]   border-2 border-e-chart-3  dark:border-e-chart-2 "
        />
      ),
      question: "How do I track my shipment?",
      answer:
        "After the book is shipped, you can track it directly through our platform using the tracking number provided.",
    },
    {
      icon: (
        <HiOutlineShoppingBag
          size={32}
          className="text-[#4b5563] dark:text-gray-300 p-[2px] rounded-[5px]   border-[#e1dddd] border-2 border-e-chart-3 dark:border-e-chart-2  "
        />
      ),
      question: "Is there a limit to the number of books I can list?",
      answer:
        "No, you can list as many books as you’d like. However, make sure to keep your listings updated to avoid confusion.",
    },
  ];

  const filteredFAQs = faqItems.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const visibleFAQs = showMore ? filteredFAQs : filteredFAQs.slice(0, 6);

  useEffect(() => {
    setExpandedItems({});
  }, [searchTerm]);

  return (
    <div className="px-8   lg:px-28 mx-auto dark:from-gray-900 dark:to-gray-800">
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <Heading heading="Frequently Asked Questions"></Heading>
        {/* <p className="text-lg text-gray-600 mb-8 dark:text-gray-300 max-w-2xl mx-auto">
          Find answers to common questions about our book exchange platform.
        </p> */}
      </motion.div>

      <div className="max-w-md mx-auto md:mb-8 relative">
        <RiSearchLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search FAQs..."
          // className="bg-[#EFEEE9] w-full border-0 focus:ring-[#EFEEE9] focus:outline-none focus:ring rounded-md py-2 px-4 pr-14"

          className="w-full px-10 py-3 rounded-lg border-0 border-gray-300  focus:ring-[#EFEEE9] focus:outline-none focus:ring dark:bg-[#0A0A0C] dark:text-white shadow-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 pt-10 lg:pt-8 lg:grid-cols-2 gap-8"
      >
        <AnimatePresence>
          {visibleFAQs.length > 0 ? (
            visibleFAQs.map((item, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className=" p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div
                  className="flex items-start space-x-4 cursor-pointer"
                  onClick={() =>
                    setExpandedItems((prev) => ({
                      ...prev,
                      [index]: !prev[index],
                    }))
                  }
                >
                  <span className="text-blue-500 dark:text-blue-400 mt-1 flex-shrink-0">
                    {item.icon}
                  </span>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                      {item.question}
                    </h3>
                    <AnimatePresence>
                      {expandedItems[index] && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-gray-600 dark:text-gray-400 mt-2 text-sm"
                        >
                          {item.answer}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  <IoIosArrowDown
                    className={`text-slate-800 transition-transform duration-300 ${
                      expandedItems[index] ? "transform rotate-180" : ""
                    }`}
                  />
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="col-span-2 text-center py-8"
            >
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                No results found for &ldquo;{searchTerm}&rdquo;.
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Try different keywords or{" "}
                <Link href="/ai-chat" className="text-blue-500 hover:underline">
                  ask our AI assistant
                </Link>{" "}
                for more specific help.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <div className="text-center mt-6">
        {!showMore && filteredFAQs.length > 6 && (
          <button
            className="px-6 py-2 border border-black mt-4 dark:border-white text-black dark:text-white rounded-lg hover:bg-gray-700 hover:text-white transition-colors duration-300"
            onClick={() => setShowMore(true)}
          >
            <span className="flex items-center justify-center   gap-1">
              Show more <HiOutlineArrowNarrowRight className="mt-1" />
            </span>
          </button>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col lg:flex-row justify-between items-center my-8 md:my-16 bg-white  dark:bg-[#0A0A0C] p-8 rounded-xl space-y-6 lg:space-y-0 lg:space-x-8 shadow-sm"
      >
        <div className="text-center lg:text-left max-w-2xl ">
          <h4 className="text-2xl font-bold flex justify-center lg:justify-start items-center mb-4">
            <span>Still have questions</span>
            <FaQuestion className="text-black dark:text-white" />
          </h4>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Can&apos;t find the answer you&apos;re looking for? Please{" "}
            <a href="/contact" className="text-blue-500 hover:underline">
              chat with our friendly team
            </a>
            , or try our AI-powered assistant for instant help.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            href="/contact"
            className="px-8 py-3  text-black dark:text-white border dark:border-white border-black rounded-lg hover:bg-gray-700 hover:text-white transition-colors duration-300 shadow-md hover:shadow-lg text-lg font-semibold flex items-center justify-center gap-2"
          >
            Contact Support <FiMessageCircle className="text-xl" />
          </Link>
          <Link href="/ai-chat" className="px-8 py-3 bg-[#364957] text-white rounded-lg hover:text-white border  hover:bg-gray-200 transition-colors duration-300 shadow-md hover:shadow-lg text-lg font-semibold flex items-center justify-center gap-2">
            Ask AI Assistant <FaRobot className="text-xl" />
          </Link>
        </div>
      </motion.div>
    </div>  
  );
};

export default FaqSection;

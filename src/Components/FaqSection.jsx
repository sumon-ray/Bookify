"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaDochub, FaGoogleWallet, FaQuestion, FaRobot, FaWallet } from "react-icons/fa";
import {
  FiBook,
  FiShoppingCart,
  FiSend,
  FiMessageCircle,
  FiHelpCircle,
  FiDollarSign,
  FiRepeat,
  FiUserCheck,
  FiExternalLink,
} from "react-icons/fi";
import { GiCardExchange } from "react-icons/gi";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineShoppingBag,
} from "react-icons/hi";
import { LiaShippingFastSolid } from "react-icons/lia";
const FaqSection = () => {
  const [showMore, setShowMore] = useState(false);

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

  const visibleFAQs = showMore ? faqItems : faqItems.slice(0, 6);

  return (
    <div className="px-8 p-6 lg:px-28 mx-auto space-y-10 ">
      <div className='p-2 rounded-tl-2xl rounded-br-2xl border border-black dark:border-gray-300 max-w-[410px] h-12 mx-auto'>
        <h1 className='text-2xl uppercase font-bold text-center  dark:text-white'>
        Frequently Asked Questions
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:pt-8 sm:grid-cols-2 gap-6 ">
        {visibleFAQs.map((item, index) => (
          <div key={index} className="flex items-start space-x-4  dark:text-white">
            <span className="text-white " color="white">
              {" "}
              {item.icon}
            </span>
            <div>
              <h3 className="font-bold">{item.question}</h3>
              <p className="dark:text-gray-400">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        {!showMore && (
          <button
            className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600" 
            onClick={() => setShowMore(true)}
          >
            <span className="flex items-center justify-center gap-1 ">
              {" "}
              Read more. <HiOutlineArrowNarrowRight className="mt-1" />
            </span>
          </button>
        )}
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center mt-12 bg-white p-6 rounded-md space-y-4 lg:space-y-0 lg:space-x-4 dark:bg-[#0A0A0C] dark:text-white">
        <div className="text-center lg:text-left ">
          <h4 className="font-bold flex justify-center lg:justify-start items-center space-x-1 mb-2 lg:mb-0">
            <span>Still have questions</span> <FaQuestion />
          </h4>
          <p>
            Can’t find the answer you’re looking for? Please{" "}
            <a href="/contact" className="text-blue-500">
              chat to our friendly team.
            </a>
            . Or try our AI-powered assistant for instant help.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
          {/* <button className="px-6 py-2 flex items-center justify-center rounded-lg">
            <FaDochub className="" />
            documentation <FiExternalLink className="ml-1" />
          </button> */}
          <button className="px-6 py-2 bg-gray-700 text-white rounded-lg">
            <Link href="/ai-chat">
            <p className="flex items-center gap-2">
Ask our AI Assistant   <FaRobot className="text-xl" /> 
</p>
    
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
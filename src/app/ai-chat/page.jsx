"use client";

import React, { useState } from "react";
import axios from "axios";
import { Button, Textarea } from "flowbite-react";
import { AiOutlineMessage, AiOutlineUser, AiOutlineBook } from "react-icons/ai";
import { MdHelp } from "react-icons/md";
import { FaExchangeAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import BookSpinner from "./BookSpinner";

const AiChat = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleAskAI = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setResponse("");
    try {
      // const res = await axios.post(
      //   "https://bookify-server-lilac.vercel.app/ask-ai",{ query }
        const res = await axios.post("https://bookify-server-lilac.vercel.app/generate-content", { prompt: query })


      setResponse(res.data.answer);
    } catch (error) {
      console.error("Error asking AI:", error);
      setResponse("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="my-4 md:my-28 flex gap-6 md:gap-0  px-8 lg:px-20 flex-col md:flex-row justify-center">
      <motion.div
        className="w-full md:w-1/3 p-6 bg-gray-100 dark:bg-[#27272733] dark:text-white   rounded-lg mr-6 shadow-lg transition-transform duration-200 transform hover:scale-105"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
          Why Exchange Books?
        </h3>
        <p className="text-gray-600 dark:text-white mb-4">
          Exchanging books allows you to refresh your library without spending
          money. Share your favorites with others and discover new gems!
        </p>
        <FaExchangeAlt className="h-12 w-12 text-[#364957] dark:text-white mb-2" />
        <h4 className="font-semibold text-gray-700 dark:text-white">Benefits:</h4>
        <ul className="list-disc pl-5 text-gray-600 dark:text-white">
          <li>Save money on new books.</li>
          <li>Reduce waste and promote sustainability.</li>
          <li>Connect with fellow readers.</li>
        </ul>
      </motion.div>

      <motion.div
        className="max-w-lg mx-auto p-6 bg-white dark:bg-[#27272733] dark:text-white shadow-lg rounded-lg flex flex-col space-y-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center mb-4">
          <AiOutlineMessage className="h-8 w-8 text-[#364957] dark:text-white  mr-2" />
          <h2 className="text-xl font-semibold">Ask AI</h2>
        </div>
        <p className="text-gray-600 dark:text-white mb-4">
          Get quick answers to your questions about book exchanges. Just type in
          your query below!
        </p>
        <Textarea
          value={query}
          onChange={handleQueryChange}
          placeholder="Ask a question about book exchanges..."
          rows="4"
          className="border-gray-300 border focus:ring-[#364957]  focus:border-[#364957] hover:border-[#364957] dark:focus:ring-[#364957] transition-all duration-200 p-2 shadow-sm"
        />
        <Button
          onClick={handleAskAI}
          disabled={loading}
          aria-label="Ask AI"
          className={`mt-4 w-full ${
            loading
              ? "bg-[#364957] dark:bg-[#27272733]  cursor-not-allowed"
              : "bg-[#364957] hover:bg-[#364957]"
          } transition-all duration-200`}
        >
          {loading ? "Asking..." : "Ask AI"}
        </Button>
        {loading && <BookSpinner />} 
        {response && (
          <motion.div
            className="response mt-4 p-4 bg-blue-50 dark:bg-[#27272733] dark:text-white border border-blue-200 rounded-md shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-bold text-indigo-500">AI Response:</h3>
            <p className="text-gray-800 dark:text-white ">{response}</p>
          </motion.div>
        )}
        <div className="mt-6">
          <h3 className="text-lg font-semibold dark:text-white text-gray-800">
            Tips for Book Exchange:
          </h3>
          <ul className="list-disc pl-5 text-gray-600 dark:text-white mt-2">
            <li>Check the condition of the book before exchanging.</li>
            <li>Always meet in a public place for safety.</li>
            <li>Consider writing a short review for books you exchange.</li>
            <li>
              Utilize our platform &apos s features to find the best matches for your
              books.
            </li>
          </ul>
        </div>
        <div className="mt-4 flex justify-between items-center text-gray-500 dark:text-white text-sm">
          <div className="flex items-center">
            <AiOutlineUser className="h-5 w-5 mr-1 dark:text-white text-[#364957]" />
            <span>Your question is kept private.</span>
          </div>
          <a href="#" className="text-[#364957] dark:text-white hover:underline">
            Learn More
          </a>
        </div>
        <div className="mt-4 flex items-center">
          <AiOutlineBook className="h-5 w-5 mr-2 dark:text-white text-[#364957]" />
          <span className="text-gray-700 dark:text-white">
            Explore our community of book lovers!
          </span>
        </div>
      </motion.div>

      <motion.div
        className="w-full md:w-1/3 p-6 bg-gray-100 dark:bg-[#27272733] dark:text-white rounded-lg shadow-lg transition-transform duration-200 transform hover:scale-105"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center mb-2">
          <AiOutlineUser className="h-8 w-8 dark:text-white text-[#364957] mr-2" />
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Join Us!</h3>
        </div>
        <p className="text-gray-600 dark:text-white mb-4">
          Become part of our vibrant book exchange community where readers
          connect, share, and discover new books. Enjoy the journey of
          exchanging books with fellow enthusiasts!
        </p>
        <ul className="list-disc pl-5 text-gray-600 dark:text-white">
          <li>Connect with like-minded readers.</li>
          <li>Access exclusive book recommendations.</li>
          <li>Participate in community events and challenges.</li>
          <li>Share your reading journey and reviews.</li>
        </ul>
        <p className="mt-4 text-gray-600 dark:text-white">
          Sign up now and start exchanging books to enrich your reading
          experience!
        </p>
      </motion.div>
    </div>
  );
};

export default AiChat;

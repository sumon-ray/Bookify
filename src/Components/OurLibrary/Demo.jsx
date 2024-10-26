"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
import img from "../../assets/images/About/ourLibreby.jpg";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiBookOpen, FiUser, FiTag } from "react-icons/fi";

const OurLibrary = () => {
  const [category, setCategory] = useState("All"); // Default is 'All' to show all books
  const [categories, setCategories] = useState([]); // To store unique categories
  const [currentPage, setCurrentPage] = useState(1); // State to track the current page
  const booksPerPage = 12; // Number of books per page

  // Fetch all books and extract unique categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          "https://bookify-server-lilac.vercel.app/books"
        );
        const books = res.data;
        // Extract unique genres from books, add 'All' at the beginning
        const uniqueCategories = ["All", ...new Set(books.map((book) => book.genre))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchCategories();
  }, []);

  // Fetch books based on selected category
  const { data: books } = useQuery({
    queryKey: ["our library", category],
    queryFn: async () => {
      const res = await axios.get(
        category === "All"
          ? "https://bookify-server-lilac.vercel.app/books" // Fetch all books if 'All' is selected
          : `https://bookify-server-lilac.vercel.app/books?genre=${category}` // Fetch books by genre
      );
      return res.data;
    },
  });

  // Calculate the total number of pages
  const totalPages = books ? Math.ceil(books.length / booksPerPage) : 0;

  // Get books for the current page
  const displayedBooks = books
    ? books.slice((currentPage - 1) * booksPerPage, currentPage * booksPerPage)
    : [];

  // Handle pagination navigation
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className='p-2 rounded-tl-2xl rounded-br-2xl border border-black dark:border-gray-300 max-w-[385px] h-12 mx-auto'>
        <h1 className='text-2xl uppercase font-bold text-center'>
          Explore Exchange Library
        </h1>
      </div>

      {/* Dynamic Category Selector */}
      <div className="py-4 lg:mt-2 px-5 md:pl-20 lg:pl-0 ">
        <select
          className="lg:w-[28%] md:w-[90%] border border-[#a1a5a8b1] focus:border-[#a1a5a8b1]  w-full p-3 px-4  rounded-md font-bold bg-[#ffffff] shadow-sm  focus:ring-[#EFEEE9] focus:outline-none focus:ring-2"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setCurrentPage(1); // Reset to first page when category changes
          }}
        >
          {categories.length > 0 ? (
            categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))
          ) : (
            <option>Loading categories...</option>
          )}
        </select>
      </div>

      {/* Book Display */}
      <div className="flex flex-col lg:flex-row items-start xl:gap-5 gap-4 mt-5">
        {/* Static Image */}
        <figure className="lg:w-1/4 w-full mb-6 lg:mb-0">
          <Image
            src={img}
            width={400}
            height={896}
            className="w-full h-auto lg:h-[975px] rounded-md object-cover"
            alt="Library Feature Image"
          />
        </figure>

        {/* Dynamic Book Grid */}
        <div className="lg:w-3/4 w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedBooks.map((book, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
            >
              <Link href={`/details/${book?._id}`} className="block h-full">
                <div className="relative aspect-[2/3] overflow-hidden group">
                  <Image
                    src={book?.coverImage}
                    layout="fill"
                    objectFit="cover"
                    alt={book?.title || "Book Cover"}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h2 className="font-bold text-lg mb-1 line-clamp-1" title={book?.title}>
                      {book?.title}
                    </h2>
                    <p className="text-sm opacity-90">{book?.author}</p>
                  </div>
                </div>
                {/* <div className="p-4">
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 mb-2">
                    <FiBookOpen className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm truncate">{book?.pageCount || 'N/A'} pages</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 mb-2">
                    <FiUser className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm truncate">{book?.author}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                    <FiTag className="w-4 h-4 flex-shrink-0" />
                    <span className="text-xs font-semibold py-1 px-2 rounded-full text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-200 truncate">
                      {book?.genre}
                    </span>
                  </div>
                </div> */}
                {/* <div className="px-4 pb-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
                  >
                    View Details
                  </motion.button>
                </div> */}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex md:justify-end justify-center items-center pt-8">
        <button
          className="p-2 mx-2 bg-[#EFEEE9] text-[#000000] rounded-md"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="p-2 font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="p-2 mx-2 bg-[#EFEEE9] text-[#000000] rounded-md"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default OurLibrary;

"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
import img from "../../assets/images/About/ourLibreby.jpg";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";

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
  const handlePrevPage = React.useCallback(() => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  }, [currentPage]);

  const handleNextPage = React.useCallback(() => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  }, [currentPage, totalPages]);

  return (
    <div className="max-w-7xl mx-auto py-16">

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
      <div className="flex lg:flex-row flex-col items-start xl:gap-5 gap-4 mt-5">
        {/* Static Image */}
        <figure className="lg:w-[30%] md:w-[90%] w-full px-5 md:pl-20 lg:pl-0 ">
          <Image
            src={img}
            width={400}
            height={100}
            className="lg:w-[400px] w-full lg:h-[896px] h-[300px] rounded-md bg-cover"
            alt="Library Feature Image"
          />
        </figure>

        {/* Dynamic Book Grid */}
        <div className="grid -translate-y-3 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:pl-20 lg:pl-0  lg:gap-8 gap-4 gap-y-4 lg:w-[70%] md:w-[700px] w-full items-center justify-center p-3">
          {displayedBooks.map((book, idx) => (
            <Link
              href={`/details/${book?._id}`}
              key={idx}
              className="w-auto h-auto bg-[#EFEEE9] dark:bg-[#272727CC] rounded-md"
            >
              <div className="space-y-3">
                <Image
                  src={book?.coverImage}
                  className="w-full h-[210px] rounded-t-md"
                  height={150}
                  width={200}
                  alt={book?.title || "Book Cover"}
                  unoptimized
                  quality={100}
                />
                <div className="text-left pl-2 pb-2">
                  <h1 className="font-bold md:uppercase" title={book?.title}>
                    {book?.title?.slice(0, 13)}...
                  </h1>
                  <h1 className="font-medium">{book?.author}</h1>
                </div>
              </div>
            </Link>
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

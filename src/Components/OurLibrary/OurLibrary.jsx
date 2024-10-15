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
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="max-w-7xl mx-auto py-16">
      <h1 className="md:text-4xl text-2xl font-bold text-center pb-9">
        Explore Our Library
      </h1>

      {/* Dynamic Category Selector */}
      <div className="py-4 px-5 md:pl-20 lg:pl-0">
        <select
          className="lg:w-[27%] md:w-[90%] w-full p-3 px-4  rounded-md font-bold bg-white border border-gray-300"
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
      <div className="flex lg:flex-row flex-col items-start xl:gap-8 gap-4 pt-2">
        {/* Static Image */}
        <figure className="lg:w-[30%] md:w-[90%] w-full px-5 md:pl-20 lg:pl-0 ">
          <Image
            src={img}
            width={400}
            height={100}
            className="lg:w-[400px] w-full lg:h-[910px] h-[300px] rounded-xl bg-cover"
            alt="Library Feature Image"
          />
        </figure>

        {/* Dynamic Book Grid */}
        <div className="md:grid flex flex-col lg:grid-cols-4 md:grid-cols-3 md:pl-20 lg:pl-0  lg:gap-8 gap-y-4 lg:w-[70%] md:w-[700px] w-full items-center justify-center ">
          {displayedBooks.map((book, i) => (
            <Link
              href={`/details/${book?._id}`}
              key={i}
              className="w-48 h-[284px] bg-[#EFEEE9] flex flex-col justify-center items-center rounded-lg p-4"
            >
              <div className="space-y-3">
                <Image
                  src={book?.coverImage}
                  className="w-40 h-44 rounded-lg"
                  height={150}
                  width={200}
                  alt={book?.title || "Book Cover"}
                />
                <div className="text-left pl-1">
                  <h1 className="font-bold md:uppercase" title={book?.title}>
                    {book?.title?.slice(0, 13)}...
                  </h1>
                  <h1 className="font-medium">{book?.owner}</h1>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex md:justify-end justify-center items-center pt-8">
        <button
          className="p-2 mx-2 bg-gray-300 rounded-md"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="p-2 font-bold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="p-2 mx-2 bg-gray-300 rounded-md"
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

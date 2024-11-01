"use client";

import React, { useEffect, useState } from "react";
import { useSearchContext } from "./SearchProvider";
import { FaFilter } from "react-icons/fa";
import Lottie from "lottie-react";
import lottieImage from "../../../..//../public/image/404.json";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const MyBookCard = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [error, setError] = useState(null);
  const { searchQuery } = useSearchContext();
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [genres, setGenres] = useState([]);

  // Fetch genres on component mount
  useEffect(() => {
    fetch("https://bookify-server-lilac.vercel.app/genres")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const genreList = data.map((item) => item.genre); 
          setGenres(["All", ...genreList]);
        } else {
          console.error("Expected an array of genres, but got:", data);
          setError("Failed to fetch genres");
        }
      })
      .catch((error) => {
        console.error("Error fetching genres:", error);
        setError("Failed to fetch genres");
      });
  }, []);

  useEffect(() => {
    fetchBooksByGenre(selectedGenre, currentPage);
  }, [selectedGenre, currentPage]);

  // Filter books based on search query
  useEffect(() => {
    if (searchQuery) {
      const filtered = allBooks.filter((book) =>
        book.title?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredBooks(filtered);
    } else {
      setFilteredBooks(allBooks);
    }
  }, [searchQuery, allBooks]);

  // Function to fetch books by genre with pagination
  const fetchBooksByGenre = (genre, page = 1, limit = 10) => {
    setError(null);
    fetch(
      `https://bookify-server-lilac.vercel.app/books/paginated?genre=${genre === "All" ? "" : genre}&page=${page}&limit=${limit}`
    )
      .then((response) => response.json())
      .then((data) => {
        const { books, totalPages } = data;

        if (!Array.isArray(books)) {
          throw new Error("Expected an array of books");
        }

        if (books.length === 0) {
          setAllBooks([]);
          setFilteredBooks([]);
          setTotalPages(0);
        } else {
          setAllBooks(books);
          setFilteredBooks(books);
          setTotalPages(totalPages);
        }
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        setError("Failed to fetch books. Please try again later.");
      });
  };

  // Handle genre selection change
  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
    setCurrentPage(1);
  };

  // Handle pagination changes
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    fetchBooksByGenre(selectedGenre, page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li key={i}>
          <a
            onClick={() => handlePageChange(i)}
            className={`flex items-center justify-center px-4 h-10 leading-tight ${
              currentPage === i
                ? "text-white bg-[#364957CC] rounded-md"
                : "text-gray-500 dark:text-gray-300 curser-pointer hover:text-gray-700"
            }`}
          >
            {i}
          </a>
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="container dark:text-gray-300 mx-auto px-8 md:px-0 pb-8">
      <div className="py-2 flex flex-col sm:flex-row items-center my-6 justify-between">
        <h1 className="text-[#000000] dark:text-gray-300 font-semibold text-[23px]  md:text-[18.61px] mb-5 md:mb-2 sm:mb-0">Best Popular</h1>
        <div className="flex items-center justify-center gap-4  py-1 relative w-full sm:w-auto">
          <FaFilter className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 text-[#364957] dark:text-gray-300 text-sm sm:text-lg" />
          <select
            value={selectedGenre}
            onChange={handleGenreChange}
            className="pr-4 py-2 w-full md:w-auto custom-select text-right text-xs sm:text-sm md:text-base text-black dark:text-gray-300 outline-none focus:outline-none focus:ring-0 border border-[#a1a5a8b1] focus:border-[#a1a5a8b1] rounded-lg bg-transparent"
          >
            {genres.map((genre) => (
              <option
                key={genre}
                value={genre}
                className="hover:bg-[#364957] dark:bg-[#272727CC] border pr-10 border-[#a1a5a8b1] focus:border-[#a1a5a8b1] !hover:text-white outline-none"
              >
                {genre}
              </option>
            ))}
          </select>

          <style jsx>{`
            .custom-select {
              -webkit-appearance: none; 
              -moz-appearance: none; 
              appearance: none;
              background-image: none; 
              background-color: transparent; 
            }
          `}</style>
        </div>
      </div>
      
      {error ? (
        <div className="text-center py-8">
          <p className="text-lg font-semibold text-red-600">{error}</p>
        </div>
      ) : filteredBooks.length === 0 ? (
        <div className="col-span-full flex flex-col items-center justify-center">
          <Lottie
            animationData={lottieImage}
            aria-label="Lottie animation"
            loop
            className="w-48 h-48"
            autoplay
          />
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">No books found</h2>
          <p className="text-gray-500 dark:text-gray-300">
            We couldn&apos;t find any books that match this genre or your search query.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredBooks.map((book, idx) => (
            <motion.div
              key={book._id}
              whileHover={{ y: -5 }} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl" // Updated styles
            >
              <Link href={`/details/${book?._id}`} className="block h-full">
                <div className="relative rounded-lg aspect-[2/3] overflow-hidden group">
                  <Image
                    src={book?.coverImage}
                    layout="fill"
                    objectFit="cover"
                    alt={book?.title || "Book Cover"}
                    className="transition-transform duration-300 group-hover:scale-110" // Image scaling on hover
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h2 className="font-bold text-lg mb-1 line-clamp-1" title={book?.title}>
                      {book?.title}
                    </h2>
                    <p className="text-sm opacity-90">{book?.owner}</p> {/* Changed author to owner */}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      )}

      <div className="flex justify-center mt-4">
        <div className="overflow-auto sm:overflow-visible"> {/* Added wrapper for overflow control */}
          <nav aria-label="Page navigation example">
            <ul className="inline-flex -space-x-px text-base h-10">
              <li>
                <a
                  onClick={() => handlePageChange(currentPage - 1)}
                  className={`cursor-pointer flex items-center justify-center px-3 mx-2 text-white rounded-lg h-10 leading-tight  ${
                    currentPage === 1
                      ? "text-gray-400 dark:text-gray-300"
                      : " hover:text-gray-700"
                  }`}
                  disabled={currentPage === 1}
                >
                 {/* <GrLinkPrevious className=""/> */}
                    <GrFormPrevious size={40} className="text-[#272727A6] dark:text-white " />

                </a>
              </li>
              {renderPageNumbers()}
              <li>
                <a
                  onClick={() => handlePageChange(currentPage + 1)}
                  className={`flex items-center justify-center cursor-pointer px-3 mx-2 rounded-lg h-10 leading-tight  text-white
                    ${
                    currentPage === totalPages
                      ? "text-gray-400 dark:text-gray-300"
                      : " hover:text-gray-700"
                  }`}
                  disabled={currentPage === totalPages}
                >
                  {/* <GrLinkNext/> */}
 <MdOutlineNavigateNext size={40} className="text-[#272727A6] dark:text-white " />

                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MyBookCard;

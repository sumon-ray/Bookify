"use client";

import React, { useEffect, useState } from "react";
import { useSearchContext } from "./SearchProvider";
import { FaFilter } from "react-icons/fa";
import Lottie from "lottie-react";
import lottieImage from "../../../..//../public/image/404.json";
import Image from "next/image";
import Link from "next/link";

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

  return (
    <div className="container dark:text-gray-300 mx-auto px-8 md:px-0 pb-8">
      <div className="py-2 flex items-center justify-between">
        <h1 className="text-[#000000] dark:text-gray-300 font-semibold text-[18.61px]">Best Popular</h1>
        <div className="flex items-center justify-center gap-4 px-2 py-1 relative">
          <FaFilter className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 text-[#364957] dark:text-gray-300 text-sm sm:text-lg" />
          <select
  value={selectedGenre}
  onChange={handleGenreChange}
  className="pr-4 py-2 w-auto custom-select text-right  text-xs sm:text-sm md:text-base text-black dark:text-gray-300 outline-none focus:outline-none focus:ring-0 border border-[#a1a5a8b1] focus:border-[#a1a5a8b1] rounded-lg bg-transparent"
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
          {filteredBooks.map((book) => (
            <Link
              href={`/details/${book?._id}`}
              key={book._id} 
              className="w-fit mx-auto flex flex-col justify-center items-center h-auto bg-[#EFEEE9] dark:bg-[#272727CC] rounded-md"
            >
              <div className="space-y-3 flex flex-col justify-center">
                <Image
                  src={book?.coverImage}
                  className="w-[200px] mx-auto h-[210px] rounded-t-md"
                  height={210}
                  width={150}
                  alt={book?.title || "Book Cover"}
                />
                <div className="text-left pl-2 pb-2">
                  <h1 className="font-bold md:uppercase" title={book?.title}>
                    {book?.title.slice(0, 13)}...
                  </h1>
                  <h1 className="font-medium">{book?.owner}</h1>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      <div className="flex justify-center mt-4">
        <nav aria-label="Page navigation example">
          <ul className="inline-flex -space-x-px text-base h-10">
            <li>
              <a
                onClick={() => handlePageChange(currentPage - 1)}
                className={`cursor-pointer flex items-center justify-center px-4 h-10 leading-tight ${
                  currentPage === 1
                    ? "text-gray-400 dark:text-gray-300"
                    : "hover:bg-gray-100 hover:text-gray-700"
                }`}
                disabled={currentPage === 1}
              >
                Previous
              </a>
            </li>
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index}>
                <a
                  onClick={() => handlePageChange(index + 1)}
                  className={`flex items-center justify-center px-4 h-10 leading-tight ${
                    currentPage === index + 1
                      ? "text-white bg-[#364957] rounded-md"
                      : "text-gray-500 dark:text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  }`}
                >
                  {index + 1}
                </a>
              </li>
            ))}
            <li>
              <a
                onClick={() => handlePageChange(currentPage + 1)}
                className={`flex items-center justify-center cursor-pointer px-4 h-10 leading-tight ${
                  currentPage === totalPages
                    ? "text-gray-400 dark:text-gray-300"
                    : "hover:bg-gray-100 hover:text-gray-700"
                }`}
                disabled={currentPage === totalPages}
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MyBookCard;

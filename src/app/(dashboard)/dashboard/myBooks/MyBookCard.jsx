"use client";
import { Dropdown } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useSearchContext } from "./SearchProvider";
import { FaFilter } from "react-icons/fa";
import { HiOutlineBookOpen } from "react-icons/hi";
import Lottie from "lottie-react";
import lottieImage from "../../../..//../public/image/404.json";
import { Pagination } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

const MyBookCard = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("Classic");
  const [error, setError] = useState(null);
  const { searchQuery } = useSearchContext();
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const genres = [
    "Classic",
    "Historical Fiction",
    "Modernist Fiction",
    "Fantasy",
    "Science Fiction",
    "Romance",
    "Thriller",
  ];

  useEffect(() => {
    fetchBooksByGenre(selectedGenre, currentPage);
  }, [selectedGenre, currentPage]);

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

  const fetchBooksByGenre = (genre, page = 1, limit = 10) => {
    setError(null);
    fetch(
      `https://bookify-server-lilac.vercel.app/books/paginated?genre=${genre}&page=${page}&limit=${limit}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data);
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

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    fetchBooksByGenre(selectedGenre, page);
  };

  return (
    <div className="container mx-auto px-8 md:px-0 pb-8">
      <div className="py-2 flex items-center justify-between">
        <h1 className="text-[#000000] font-semibold text-[18.61px]">
          Best Popular
        </h1>
        <div className="flex items-center justify-center gap-4 px-2 py-1 relative">
          <FaFilter className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 text-[#364957] text-sm sm:text-lg" />
          <select
            value={selectedGenre}
            onChange={handleGenreChange}
            className="pl-10 sm:pl-12 pr-4 py-2 text-center text-xs sm:text-sm md:text-base text-black outline-none focus:outline-none focus:ring-0 border border-[#a1a5a8b1] focus:border-[#a1a5a8b1] rounded-lg appearance-none bg-transparent custom-select focus:text-black"
          >
            {genres.map((genre) => (
              <option
                key={genre}
                value={genre}
                className="hover:bg-[#364957] border border-[#a1a5a8b1] focus:border-[#a1a5a8b1] !hover:text-white outline-none"
              >
                {genre}
              </option>
            ))}
          </select>
        </div>
      </div>

      <style jsx>{`
        .custom-select {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          background-image: none;
        }
      `}</style>

      {error ? (
        <div className="text-center py-8">
          <img
            src="/path_to_error_image/book_logo.png"
            alt="Error"
            className="mx-auto w-32 h-32 mb-4"
          />
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
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            No books found
          </h2>
          <p className="text-gray-500">
            We couldn't find any books that match this genre or your search
            query.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredBooks.map((book, index) => (
            <Link
            href={`/details/${book?._id}`}

              // card
              key={index}
              className=" flex flex-col justify-center items-center h-auto bg-[#EFEEE9]  rounded-md "
            >
              <div className="space-y-3">
                <Image
                  src={book?.coverImage}
                  className="w-[210px] h-[210px] pt-2 rounded-t-md"
                  height={150}
                  width={150}
                  alt={book?.Title || "Book Cover"}
                />
                <div className="text-left pl-2 pb-2 ">
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
                className={`flex items-center justify-center px-4 h-10 leading-tight ${
                  currentPage === 1
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
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
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  }`}
                >
                  {index + 1}
                </a>
              </li>
            ))}
            <li>
              <a
                onClick={() => handlePageChange(currentPage + 1)}
                className={`flex items-center justify-center px-4 h-10 leading-tight ${
                  currentPage === totalPages
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
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

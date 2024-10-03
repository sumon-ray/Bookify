"use client";
import { Dropdown } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useSearchContext } from "./SearchProvider";
import { FaFilter } from "react-icons/fa";
import { HiOutlineBookOpen } from "react-icons/hi";
import HomePagination from "./HomePagination";

const MyBookCard = () => {
  const [allBooks, setAllBooks] = useState([]); 
  const [filteredBooks, setFilteredBooks] = useState([]); 
  const [selectedGenre, setSelectedGenre] = useState("Classic");
  const [error, setError] = useState(null);
  const { searchQuery } = useSearchContext(); 

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
    fetchBooksByGenre(selectedGenre);
  }, [selectedGenre]);

  useEffect(() => {
    if (searchQuery) {
      const filtered = allBooks.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredBooks(filtered);
    } else {
      setFilteredBooks(allBooks); 
    }
  }, [searchQuery, allBooks]);

  const fetchBooksByGenre = (genre) => {
    setError(null); 
    fetch(`https://bookify-server-lilac.vercel.app/books?genre=${genre}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length === 0) {
          setAllBooks([]); 
          setFilteredBooks([]); 
        } else {
          setAllBooks(data); 
          setFilteredBooks(data); 
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

  return (
    <div className="container mx-auto pb-8">

      <div className="py-2 flex items-center justify-between">
        <h1 className="text-[#000000] font-semibold text-[18.61px]">
          Best Popular
        </h1>
        <div className="flex items-center justify-center gap-4 px-2 py-1 relative">
          {/* FaFilter Icon positioned to the left */}
          <FaFilter className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 text-[#364957] text-sm sm:text-lg" />

          <select
            value={selectedGenre}
            onChange={handleGenreChange}
            className="pl-10 sm:pl-12 pr-4 py-2 text-center text-xs sm:text-sm md:text-base text-black outline outline-[#364957] outline-1 rounded-lg appearance-none bg-transparent custom-select focus:outline-none focus:ring- 4 focus:ring-[#131515] focus:bg-white focus:text-black hover:bg-gray-100 custom-select"
          >
            {genres.map((genre) => (
              <option
                key={genre}
                value={genre}
                className="hover:bg-[#364957] !hover:text-white outline-none "
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
        <div className="col-span-full flex flex-col items-center justify-center py-16">
          <HiOutlineBookOpen className="w-20 h-20 text-gray-400 mb-4" />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            No books found
          </h2>
          <p className="text-gray-500">
            We couldn't find any books that match this genre or your search
            query.
          </p>
        </div>
      ) : (

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md transition-shadow hover:shadow-lg"
            >
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-full h-48 object-cover rounded-t-lg mb-2"
              />
              <h2 className="text-lg font-semibold mt-2">{book.title}</h2>
              <p className="text-sm text-gray-600">{book.author}</p>
              <p className="text-sm text-gray-500">{book.genre}</p>
            </div>
          ))}
        </div>
      )}

    <HomePagination />

    </div>
  );
};

export default MyBookCard;

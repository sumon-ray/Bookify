"use client"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/Select"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { IoIosSearch } from "react-icons/io"
import { motion } from "framer-motion";
import Image from "next/image"
import Link from "next/link"
import { MdOutlineNavigateNext } from "react-icons/md"
import { GrFormPrevious } from "react-icons/gr"
import { useState } from "react"

export default function Page() {
  const [allBooks, setAllBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const booksPerPage = 18;

  const { data, isLoading } = useQuery({
    queryKey: ['all books'],
    queryFn: async () => {
      const res = await axios(`https://bookify-server-lilac.vercel.app/books`);
      const data = await res.data;
      setAllBooks(data);
      return data;
    },
  });

  const uniqueCategories = [...new Set(data?.map(book => book?.genre))];

  // Filter books based on the selected category
  const filteredBooks = selectedCategory === 'All' 
    ? allBooks 
    : allBooks.filter(book => book.genre === selectedCategory);

  return (
    <div className="py-20 space-y-10">
      <div className="bg-[#EFEEE9] p-6 dark:bg-[#0A0A0C]">
        <h1 className="text-3xl font-black uppercase text-center dark:text-white">all books</h1>
      </div>
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="flex items-center md:justify-between">
          <div className="relative w-full lg:w-72 md:w-52 ">
            <input
              className="bg-[white] dark:bg-[#0A0A0C] w-full border-0 focus:ring-[#EFEEE9] dark:focus:ring-0 focus:outline-none focus:ring rounded-md py-2 px-4 pr-14"
              type="text"
              placeholder="Search by title..."
              // onChange={handleSearch} // Add search functionality as needed
            />
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
              <div className={`bg-[#364957] dark:bg-white p-2 rounded-bl-3xl rounded-md rounded-tl-none cursor-pointer`}>
                <IoIosSearch onClick={() => {}} className="text-white dark:text-white text-2xl" />
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <select 
              className="border-2 border-black focus:border-[#EFEEE9] w-full p-3 px-4 rounded-md font-bold bg-[#ffffff] dark:bg-[#0A0A0C] dark:border focus:ring-[#EFEEE9] focus:outline-none focus:ring-2"
              onChange={(e) => setSelectedCategory(e.target.value)}
              value={selectedCategory}
            >
              <option value="All">All</option>
              {uniqueCategories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center w-full items-center min-h-[51vh]">
            <div className='flex flex-col justify-center items-center gap-y-1'>
              <svg
                className="animate-spin [animation-duration:1.5s]"
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 30 30"
                fill="none"
              >
                {/* SVG for loading spinner */}
              </svg>
              <p className='font-semibold text-sm text-[#5D5D5D]'>Loading...</p>
            </div>
          </div>
        ) : (
          <div className="grid xl:grid-cols-6 gap-8">
            {filteredBooks?.slice((currentPage - 1) * booksPerPage, currentPage * booksPerPage).map((book, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="w-full bg-white dark:bg-gray-800 rounded-md shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
              >
                <Link href={`/details/${book?._id}`} className="block h-full">
                  <div className="relative aspect-[2/3] overflow-hidden group">
                    <Image
                      src={book?.coverImage}
                      layout="fill"
                      objectFit="cover"
                      alt={book?.title || "Book Cover"}
                      className="transition-transform duration-300 object-fill group-hover:scale-110"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h2 className="font-bold text-lg mb-1 line-clamp-1" title={book?.title}>
                        {book?.title}
                      </h2>
                      <p className="text-sm opacity-90">{book?.author}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
        
        <div className="flex justify-center items-center py-4 gap-3">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="  text-black rounded-md"
          >
           <GrFormPrevious size={40} className="text-[#272727A6] dark:text-white " />
          </button>
          <span className="font-semibold">
            Page {currentPage} of {Math.ceil(filteredBooks.length / booksPerPage)}
          </span>
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(filteredBooks.length / booksPerPage)))}
            disabled={currentPage === Math.ceil(filteredBooks.length / booksPerPage)}
            className="  text-black rounded-md"
          >
           <MdOutlineNavigateNext size={40} className="text-[#272727A6] dark:text-white " />
          </button>
        </div>
      </div>
    </div>
  );
}

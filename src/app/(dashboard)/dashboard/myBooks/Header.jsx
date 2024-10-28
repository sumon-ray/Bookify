import React from "react";
import CoverImage from "./CoverImage";
import Link from "next/link";
import { IoAdd } from "react-icons/io5";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-[#EFEEE9] to-[#D1CFCF] dark:bg-gradient-to-r dark:from-[#0A0A0C] dark:to-[#1A1A1A] dark:text-white rounded-md p-6 md:p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between space-y-5 md:space-y-0 shadow-lg">
      {/* Text Content */}
      <div className="md:w-1/2 space-y-4 text-center md:text-left">
        <h3 className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-snug text-[#364957] dark:text-[#EAEAEA]">
          Falling in love <br /> one page at a time.
        </h3>
        <p className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300">
          Lost in the pages, where every book is a new adventure <br />
          and love for stories grows deeper with each turn.
        </p>
        <Link href="/dashboard/addBook" className="inline-block">
          <button className="flex items-center justify-center gap-2 bg-[#2c3e50] text-white font-semibold px-6 py-2 rounded-lg hover:bg-[#364957] transition-all duration-300 ease-in-out shadow-md">
            <IoAdd className="text-white text-lg" />
            Add Book
          </button>
        </Link>
      </div>

      {/* Cover Image */}
      <figure className="md:w-1/2 flex justify-center md:justify-end">
        <CoverImage className="w-full max-w-xs md:max-w-md lg:max-w-lg" />
      </figure>
    </div>
  );
};




export default Header;

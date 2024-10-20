import React from "react";
import BookPage from "./BookPage";
import { motion } from "framer-motion";

const BookContent = ({ book, currentPage }) => {
  const totalPages = book?.content?.length || 0;

  const getLeftPage = () => book?.content[currentPage];
  const getRightPage = () => book?.content[currentPage + 1];

  return (
    <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-4">
      <motion.div
        key={`left-${currentPage}`} // Key to track left page changes
        initial={{ opacity: 0, x: -100 }} // Start off-screen
        animate={{ opacity: 1, x: 0 }} // Move to original position
        exit={{ opacity: 0, x: 100 }} // Exit off-screen
        transition={{ duration: 0.5 }} // Animation duration
      >
        <BookPage bookData={book} pageNumber={currentPage + 1} content={getLeftPage()} isLeft={true} />
      </motion.div>
      <motion.div
        key={`right-${currentPage + 1}`} // Key to track right page changes
        initial={{ opacity: 0, x: 100 }} // Start off-screen
        animate={{ opacity: 1, x: 0 }} // Move to original position
        exit={{ opacity: 0, x: -100 }} // Exit off-screen
        transition={{ duration: 0.5 }} // Animation duration
      >
        <BookPage pageNumber={currentPage + 2} content={getRightPage()} isLeft={false} />
      </motion.div>
    </div>
  );
};

export default BookContent;

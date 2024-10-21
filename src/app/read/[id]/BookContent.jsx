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
        key={`left-${currentPage}`}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
      >
        <BookPage
          bookData={book}
          pageNumber={currentPage + 1}
          content={getLeftPage()}
          isLeft={true}
        />
      </motion.div>
      <motion.div
        key={`right-${currentPage + 1}`}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        <BookPage
          pageNumber={currentPage + 2}
          content={getRightPage()}
          isLeft={false}
        />
      </motion.div>
    </div>
  );
};

export default BookContent;

import React from "react";
import { motion } from "framer-motion";

const BookPage = ({ pageNumber, bookData, content, isLeft }) => {
  return (
    <motion.div
      className={`flex-1 bg-white shadow-lg rounded-lg p-4 ${
        isLeft ? "mb-4 md:mb-0" : ""
      }`}
      style={{ height: "75vh", overflowY: "hidden" }}
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: isLeft ? 100 : -100 }}
      transition={{ duration: 0.5 }}
    >
      <h2
        className={`text-xs ${
          isLeft ? "text-left" : "text-right"
        } font-semibold`}
      >
        Page {pageNumber}
      </h2>
      {isLeft && (
        <div className="-translate-y-5">
          <h1 className="text-xl font-bold text-center">
            {bookData?.title || "Book Title"}
          </h1>
          <h2 className="text-md font-bold text-center">
            {bookData?.author || "Author Name"}
          </h2>
        </div>
      )}

      <div className="h-full overflow-y-auto text-gray-700 whitespace-pre-line">
        {content ? (
          <div dangerouslySetInnerHTML={{ __html: content.description }} />
        ) : (
          <p>No additional pages available.</p>
        )}
      </div>
    </motion.div>
  );
};

export default BookPage;

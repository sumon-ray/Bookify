import React from "react";
import { motion } from "framer-motion";

const BookPage = ({ pageNumber, bookData, content, isLeft }) => {
  return (
    <div
      className={`flex-1 bg-gray-50 dark:bg-[#27272733] dark:text-white shadow-lg rounded-lg border border-gray-200 dark:border-slate-700 p-6 no-scrollbar ${
        isLeft ? "mb-4 md:mb-0" : ""
      } page-container`}
      style={{ height: "75vh", overflowY: "hidden" }}
    >
      <h2
        className={`sticky top-0  text-xs ${
          isLeft ? "text-left" : "text-right"
        } font-semibold`}
      >
        Page {pageNumber}
      </h2>

      {pageNumber === 1 && isLeft && (
        <div className="-translate-y-5">
          <h1 className="text-2xl font-bold text-center">
            {bookData?.title || "Book Title"}
          </h1>
          <h2 className="text-md font-bold text-center">
            {bookData?.author || "Author Name"}
          </h2>
        </div>
      )}

      <div className="h-full overflow-y-auto no-scrollbar text-gray-800 dark:text-white text-sm leading-relaxed whitespace-pre-line">
        {content ? 
          <motion.div
            key={content.page}
            dangerouslySetInnerHTML={{ __html: content.description }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          />
        : (
          <p>No additional pages available.</p>
        )}
      </div>
    </div>
  );
};

export default BookPage;

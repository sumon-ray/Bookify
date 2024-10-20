import React from "react";
import BookPage from "./BookPage";

const BookContent = ({ book, currentPage }) => {
  const totalPages = book?.content?.length || 0;

  const getLeftPage = () => book?.content[currentPage];
  const getRightPage = () => book?.content[currentPage + 1];

  return (
    <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-4">
      <BookPage bookData={book} pageNumber={currentPage + 1} content={getLeftPage()} isLeft={true} />
      <BookPage pageNumber={currentPage + 2} content={getRightPage()} isLeft={false} />
    </div>
  );
};

export default BookContent;

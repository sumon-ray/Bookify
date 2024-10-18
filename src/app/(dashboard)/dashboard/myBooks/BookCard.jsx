import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookCard = () => {
  return (
    <div>
      <Link
        href={""}
        key={idx}
        className="w-auto h-auto bg-[#EFEEE9]  rounded-md "
      >
        <div className="space-y-3">
          <Image
            src={book?.coverImage}
            className="w-full h-[210px] rounded-t-md"
            height={150}
            width={200}
            alt={book?.Title || "Book Cover"}
          />
          <div className="text-left pl-2 pb-2 ">
            <h1 className="font-bold md:uppercase" title={book?.Title}>
              {book?.Title.slice(0, 13)}...
            </h1>

            <h1 className="font-medium">{book?.Author}</h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;

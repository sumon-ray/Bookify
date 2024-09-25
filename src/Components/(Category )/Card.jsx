import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Card = ({ book }) => {
    const { coverImage, title, author, genre, rating, location, price, publishYear, _id } = book;
    console.log(book);
    return (
        <Link href={`/details/${_id}`} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md: hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-fit">
            {/* Image */}
            <Image
                className="object-cover w-full  rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={coverImage}
                alt={title}
                height={500}
                width={500}
            />

            {/* Card Content */}
            <div className="flex flex-col justify-between lg:p-4 p-2 leading-normal">
                <h5 className="mb-2 lg:text-2xl md:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {`Author: ${author}`}
                </p>

                {/* Additional Details */}
                <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
                    {`Genre: ${genre} | Published: ${publishYear} | Location: ${location}`}
                </p>

                {/* Rating */}
                <div className="flex items-center mt-2.5 mb-5 sm:flex-wrap ">
                    <div className="flex items-center  space-x-1 rtl:space-x-reverse">
                        {[...Array(5)].map((_, index) => (
                            <svg
                                key={index}
                                className={`w-4 h-4 ${index < rating ? 'text-yellow-300' : 'text-gray-200 dark:text-gray-600'}`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                            >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        ))}
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                        {rating}
                    </span>
                </div>
            </div>






        </Link>
    )
};

export default Card;

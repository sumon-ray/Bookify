"use client";

import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { TbExchange } from "react-icons/tb";
import Link from "next/link";
import { useSession } from "next-auth/react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ImgDetails({ Book = {} }) {
  
  const router = useRouter()

  const {
    title,
    author,
    genre,
    condition,
    owner,
    coverImage,
    exchangeStatus,
    publishYear,
    totalPage,
    location,
    rating,
    _id,
    AuthorEmail
  } = Book;

  const [isLoading, setLoading] = useState(false);

  const session = useSession()

  const addToTakeBook = () => {
    // Check if the user is trying to exchange their own book
    if (AuthorEmail === session?.data?.user?.email) {
      toast.error("You cannot exchange your own book!");
      return;
    }

        // POST request to the server
        axios.post("https://bookify-server-lilac.vercel.app/take-book", {
            ...Book,
            requester: session?.data?.user?.email,
            bookId: _id,
        })
            .then(response => {
                // Handle success response
                toast.success("Added in exchange list")
                // router.push('/exchange')
            })
            .catch(error => {
                // Handle error response
                toast.error("Something went wrong! Please try again.");
            });
    };

  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-8 max-w-6xl mx-auto pt-1 pb-5 px-7">
      <figure className="md:w-[40%] bg-[#EFEEE9] px-7 py-[18px] flex items-center justify-center border border-black rounded-md">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-[370px] rounded-md"
        />
      </figure>

      <div className="md:w-[60%] py-2 space-y-2 pl-1 md:pl-0">
        <h1 className="font-bold text-xl md:text-2xl capitalize">{title}</h1>

        <div className="flex items-center mb-5">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className={`w-4 h-4 ms-1 ${rating > index ? "text-yellow-300" : "text-gray-300"
                }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          ))}
        </div>

        <p>
          <span className="font-bold mr-1">Writer:</span>
          {author}
        </p>
        <p>
          <span className="font-bold mr-1">Owner:</span>
          {owner}
        </p>
        <p>
          <span className="font-bold mr-1">Category:</span>
          {genre}
        </p>
        <p>
          <span className="font-bold mr-1">Condition:</span>
          {condition}
        </p>
        <p>
          <span className="font-bold mr-1">Exchange:</span>
          {exchangeStatus}
        </p>
        <p>
          <span className="font-bold mr-1">Published:</span>
          {publishYear}
        </p>
        <p>
          <span className="font-bold mr-1">Total Page:</span>
          {totalPage}
        </p>
        <p>
          <span className="font-bold mr-1">Rating:</span>
          {rating}
        </p>
        <p>
          <span className="font-bold mr-1">Location:</span>
          {location}
        </p>

        <div className="pt-1 flex items-center">
          <button onClick={addToTakeBook} type="button" className="btn_1 flex items-center">
            <TbExchange />
            Exchange
          </button>

          <>
            <button className="btn_2 flex items-center" onClick={()=>{
              if(AuthorEmail !== session?.data?.user?.email)return toast.error(`Only owner can edit`)
                router.push(`/update/${_id}`)
            }}>
              <FaEdit className="-mt-[0.5px]" /> Edit
            </button>
          </>
        </div>

        {isLoading && (
          <p className="text-blue-600 mt-4">Updating book data...</p>
        )}
      </div>
    </div>
  );
}
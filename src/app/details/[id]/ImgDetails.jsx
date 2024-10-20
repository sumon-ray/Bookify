"use client";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { TbExchange } from "react-icons/tb";
import { AiOutlineRead } from "react-icons/ai";
import Link from "next/link";
import { useSession } from "next-auth/react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Swal from "sweetalert2";

export default function ImgDetails({ Book = {} }) {
  const router = useRouter();
  const { data: session } = useSession();

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
    AuthorEmail,
  } = Book;

  const [isLoading, setLoading] = useState(false);

  const addToTakeBook = async () => {
    try {
      if (AuthorEmail === session?.user?.email) {
        setLoading(true);
        const res = await axios.post(
          `https://bookify-server-lilac.vercel.app/give-book?id=${_id}`,
          {
            ...Book,
            requester: session?.user?.email,
            bookId: _id,
          }
        );
        toast.success(res.data.message);
      } else {
        Swal.fire({
          title: "Are you sure?",
          text: `In this book exchange, all books must belong to ${owner}.`,
          icon: "info",
          showCancelButton: true,
          confirmButtonColor: "#364957",
          cancelButtonColor: "#364957CC",
          confirmButtonText: "Confirm",
        }).then(async (result) => {
          if (result.isConfirmed) {
            setLoading(true);
            const res = await axios.post(
              `https://bookify-server-lilac.vercel.app/take-book?email=${session?.user?.email}&AuthorEmail=${AuthorEmail}&id=${_id}`,
              {
                ...Book,
                requester: session?.user?.email,
                bookId: _id,
              }
            );
            toast.success(res.data.message);
            Swal.fire({
              title: "Exchange Confirmed!",
              text: `Successfully completed the exchange with ${owner}.`,
              icon: "success",
            });
          }
        });
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-8 max-w-6xl mx-auto pt-1 pb-5 px-7">
      <figure className="md:w-[40%] bg-[#EFEEE9] px-6 py-[18px] flex items-center justify-center border border-black rounded-md">
        <Image
          height={100}
          width={100}
          src={coverImage}
          alt={title}
          className="w-full h-[370px] rounded-md"
          unoptimized
        />
      </figure>

      <div className="md:w-[60%] py-3 space-y-4">
        <h1 className="font-bold text-2xl md:text-3xl capitalize text-gray-800">
          {title}
        </h1>

        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className={`w-5 h-5 ${
                rating > index ? "text-yellow-400" : "text-gray-300"
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

        <div className="space-y-1 text-gray-700">
          <p>
            <span className="font-semibold">Author:</span> {author}
          </p>
          <p>
            <span className="font-semibold">Owner:</span> {owner}
          </p>
          <p>
            <span className="font-semibold">Category:</span> {genre}
          </p>
          <p>
            <span className="font-semibold">Condition:</span> {condition}
          </p>
          <p>
            <span className="font-semibold">Exchange:</span> {exchangeStatus}
          </p>
          <p>
            <span className="font-semibold">Published:</span> {publishYear}
          </p>
          <p>
            <span className="font-semibold">Total Pages:</span> {totalPage}
          </p>
          <p>
            <span className="font-semibold">Location:</span> {location}
          </p>
          <p>
            <span className="font-semibold">Rating:</span> {rating}/5
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          {/* Exchange Button */}
          <button
            onClick={addToTakeBook}
            type="button"
            className="flex items-center btn_1 gap-2 px-4 py-2  text-white rounded-md ransition"
          >
            <TbExchange className="w-5 h-5" />
            Exchange
          </button>

          {/* Edit Button */}
          <button
            onClick={() => {
              if (AuthorEmail !== session?.user?.email)
                return toast.error(`Only owner can edit`);
              router.push(`/update/${_id}`);
            }}
            className="flex items-center btn_2 gap-2 px-4 py-2 text-white rounded-md transition"
          >
            <FaEdit className="w-5 h-5" />
            Edit
          </button>

          {/* Read Button */}
          <button
            onClick={() => router.push(`/read/${_id}`)}
            className="flex items-center btn_2 gap-2 px-4 py-2 text-white rounded-md transition"
          >
            <AiOutlineRead className="w-5 h-5" />
            Read
          </button>
        </div>

        {isLoading && <p className="text-blue-600 mt-4">Updating book data...</p>}
      </div>
    </div>
  );
}

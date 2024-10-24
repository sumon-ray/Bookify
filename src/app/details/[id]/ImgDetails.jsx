"use client";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { TbExchange } from "react-icons/tb";
import { AiOutlineRead } from "react-icons/ai";
import { useSession } from "next-auth/react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { Summarize } from "@mui/icons-material";
import BookSummaryModal from "./BookSummaryModal";

export default function ImgDetails({ Book = {} }) {
  const router = useRouter();
  const { data: session } = useSession();

  console.log(session.user.email)

  const { title, author, genre, condition, owner, coverImage, exchangeStatus, publishYear, totalPage, location, rating, _id, AuthorEmail } = Book;
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);


  const { data } = useQuery({
    queryKey: ['take books'],
    queryFn: async () => {
      const res = await axios(`https://bookify-server-lilac.vercel.app/take-book?email=${session?.user?.email}`)
      const data = await res.data;
      return data
    }
  })

  const addToBook = () => {
    if (AuthorEmail === session?.user?.email) {
      axios.post(`https://bookify-server-lilac.vercel.app/give-book?id=${_id}`, { ...Book, requester: session?.user?.email, bookId: _id, })
        .then(res => toast.success(res.data.message))
        .catch(error => toast.error(error.message))
    } else if (data?.length === 0) {
      Swal.fire({
        title: "Are you sure?",
        text: `In this exchange, all books must belong to ${owner}`,
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#364957",
        cancelButtonColor: "#364957CC",
        confirmButtonText: "Confirm",
      }).then(async (result) => {
        if (result.isConfirmed) {
          axios.post(`https://bookify-server-lilac.vercel.app/take-book?email=${session?.user?.email}&AuthorEmail=${AuthorEmail}&id=${_id}`, { ...Book, requester: session?.user?.email, bookId: _id, })
            .then(res => {
              if (res.data.message) {
                Swal.fire({
                  title: `${res?.data?.message}`,
                  text: `Successfully completed the exchange with ${owner}.`,
                  icon: "success",
                });
              }
            }).catch(error => toast.error(error.message))
        }
      }).catch(error => toast.error(error))
    } else {
      axios.post(`https://bookify-server-lilac.vercel.app/take-book?email=${session?.user?.email}&AuthorEmail=${AuthorEmail}&id=${_id}`, { ...Book, requester: session?.user?.email, bookId: _id, })
        .then(res => toast.success(res.data.message))
        .catch(error => toast.error(error.message))
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-8 max-w-6xl mx-auto pt-1 pb-5 px-7">
      <figure className="md:w-[40%] bg-[#EFEEE9] px-6 py-[10px] flex items-center justify-center border border-black rounded-md">
        <Image
          height={100}
          width={100}
          src={coverImage}
          alt={title}
          className="w-full h-[390px] rounded-md"
          unoptimized
        />
      </figure>

      <div className="md:w-[60%] py-2 space-y-3">
        <h1 className="font-bold text-2xl md:text-3xl capitalize">
          {title}
        </h1>

        <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className={`w-5 h-5 ${rating > index ? "text-yellow-400" : "text-gray-300"
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

        <div className="space-y-2 text-gray-700">
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
        <div className="flex gap-2 pt-1">
          {/* Exchange Button */}
          <button
            onClick={addToBook}
            type="button"
            className="flex items-center btn_1 gap-1 py-2  text-white rounded-md transition">
            <TbExchange className="text-xl" />
            Exchange
          </button>

          {/* Edit Button */}
          <button
            onClick={() => {
              if (AuthorEmail !== session?.user?.email) return toast.error(`Only owner can edit`);
              router.push(`/update/${_id}`)
            }}
            className="flex items-center btn_2 gap-1 px-2 py-2 text-white rounded-md transition">
            <FaEdit className="text-xl" />
            Edit
          </button>

          {/* Read Button */}
          <button
            onClick={() => router.push(`/read/${_id}`)}
            className="flex items-center btn_2 gap-1 px-2 py-2 text-white rounded-md transition">
            <AiOutlineRead className="text-xl" />
            Read
          </button>


          <button onClick={() => setModalOpen(true)} className="flex items-center btn_2 gap-1 px-2 py-2 text-white rounded-md transition">
            <Summarize className="text-xl" />
            Summary
          </button>
        </div>

        {isLoading && <p className="text-blue-600 mt-4">Updating book data...</p>}

      </div>
      <BookSummaryModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} book={Book} />
    </div>
  );
}

"use client"; 
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { GrSend } from "react-icons/gr";
import { useRouter } from "next/navigation"; 
const UpdateBook = ({ params }) => {
  const { id } = params; 
  const router = useRouter();
  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    publicationDate: "",
    description: "",
    author: "",
    rating: "",
    publishYear: "",
    condition: "",
    exchangeStatus: "",
    genre: "",
    totalPage: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(
          `https://bookify-server-lilac.vercel.app/book/${id}`
        );
        if (!response.ok) {
          setBook(null);
        } else {
          const data = await response.json();
          setBook(data); // Set the book details in the state
        }
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch book details:", error);
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://bookify-server-lilac.vercel.app/book/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(book),
        }
      );
      if (response.ok) {
        toast.custom((t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex-1 w-0 p-4">✅ Book updated done</div>

            <div className="flex border-l border-gray-200">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-black hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Close
              </button>
            </div>
          </div>
        ));
        router.push(`/details/${id}`);
      } else {
        toast.custom((t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex-1 w-0 p-4">❌ Book update Failed</div>

            <div className="flex border-l border-gray-200">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-black hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Close
              </button>
            </div>
          </div>
        ));
      }
    } catch (error) {
      console.error("Failed to update book:", error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!book) {
    return <p>Book not found</p>;
  }

  return (
    <section className="space-y-6 px-8 lg:px-20 pb-12">
      <div className="bg-[#EFEEE9] rounded-md p-6">
        <h1 className="text-3xl font-black uppercase text-center">Edit Book</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 *:space-y-0.5">
          <div className="col-span-full sm:col-span-2">
            <label className="text-sm uppercase">Title</label>
            <input
              type="text"
              name="title"
              value={book.title}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 text-black focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9] pl-2.5"
            />
          </div>

          <div className="col-span-full sm:col-span-2">
            <label className="text-sm uppercase">Author</label>
            <input
              type="text"
              name="author"
              value={book.author}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 text-black focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9] pl-2.5"
            />
          </div>

          <div className="col-span-full sm:col-span-2">
            <label className="text-sm uppercase">Genre</label>
            <input
              type="text"
              name="genre"
              value={book.genre}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 text-black focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9] pl-2.5"
            />
          </div>

          <div className="col-span-full sm:col-span-2">
            <label className="text-sm uppercase">Publication Date</label>
            <input
              type="date"
              name="publicationDate"
              value={book.publicationDate}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 text-black focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9] pl-2.5"
            />
          </div>

          <div className="col-span-full sm:col-span-2">
            <label className="text-sm uppercase">total Page</label>
            <input
              name="totalPage"
              value={book.totalPage}
              onChange={handleChange}
              id="totalPage"
              type="number"
              placeholder="Total Page"
              className="w-full rounded-lg border border-gray-300 text-black focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9] pl-2.5"
            />
          </div>

          <div className="col-span-full sm:col-span-2 uppercase">
            <div className="flex items-center gap-3">
              <div className="w-full">
                <label className="text-sm">Rating</label>
                <input
                  name="rating"
                  value={book.rating}
                  onChange={handleChange}
                  id="rating"
                  type="number"
                  placeholder="Rating"
                  className="w-full rounded-lg border border-gray-300 text-black focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9] pl-2.5"
                />
              </div>
            </div>
          </div>

          <div className="col-span-full sm:col-span-2 uppercase">
            <label className="text-sm">Published Year</label>
            <input
              name="publishYear"
              value={book.publishYear}
              onChange={handleChange}
              type="number"
              placeholder="Published Year"
              className="w-full rounded-lg border border-gray-300 text-black focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9] pl-2.5"
            />
          </div>
          {/* condition */}
          <div className="col-span-full sm:col-span-2">
            <label className="text-sm uppercase">Condition</label>
            <select
              value={book.condition}
              onChange={handleChange}
              className="border border-gray-300 text-gray-700 mb-6 text-sm rounded-lg  block w-full p-2.5 focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9]"
            >
              <option value={"Good"}>Good</option>
              <option value={"normal"}>used</option>
            </select>
          </div>

          <div className="col-span-full sm:col-span-2">
            <label className="text-sm uppercase">exchange Status</label>
            <select className="border border-gray-300 text-gray-700 mb-6 text-sm rounded-lg  block w-full p-2.5 focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9]">
              <option value={"Available"}>Available</option>
              <option value={"Not Available"}>Not Available</option>
            </select>
          </div>

          <div className="col-span-full lg:col-span-3 sm:col-span-3">
            <label className="text-sm uppercase">Description</label>
            <textarea
              name="description"
              value={book.description}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 text-black focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9] pl-2.5"
            />
          </div>

          <div className="  col-span-full  lg:col-span-3 sm:col-span-3 md:relative">
            <label className="hidden  text-sm uppercase">Description</label>

            <button
              type="submit"
              className="flex items-center justify-between gap-x-1 text-white text-sm font-bold bg-[#364957] rounded-lg w-full md:h-[65.5%] md:absolute px-4 p-4 md:bottom-0 focus:ring-[#ffffff] focus:outline-none focus:ring focus:border-[#ffffff]"
            >
              <span>Update Book</span>
              <GrSend className="text-xl" />
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default UpdateBook;
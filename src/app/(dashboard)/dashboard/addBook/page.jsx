"use client"
import axios from "axios";
import './file.css';
import { IoSend } from "react-icons/io5";
import { GrSend } from "react-icons/gr";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";

const AddBook = () => {

  const { data } = useQuery({
    queryKey: ['genre'],
    queryFn: async () => {
      const res = await axios.get(`https://bookify-server-lilac.vercel.app/books`)
      const data = await res.data
      return data
    }
  })
  const uniqueGenre = [...new Set(data?.map((book) => book?.genre))]
  const uniqueCity = [...new Set(data?.map(book => book?.location))];
  const [Genre, setGenre] = useState('');
  const [location, setLocation] = useState('')

  async function addBook(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const AuthorEmail = e.target.email.value;
    const description = e.target.description.value;
    const author = e.target.Writer.value;
    const rating = e.target.rating.value;
    const publishYear = e.target.publishedYear.value;
    const condition = 'Good';
    const exchangeStatus = 'Available';
    const genre = Genre;
    const totalPage = e.target.totalPage.value;
    const image = e.target.file.files[0];
    const formData = new FormData();
    formData.append('image', image)
    const { data } = await axios.post('https://api.imgbb.com/1/upload?key=52396a4930fb920fb80bbebb2b3fe41d', formData)
    axios.post('https://bookify-server-lilac.vercel.app/test', {
      coverImage: data.data.display_url,
      location,
      title,
      AuthorEmail,
      description,
      author,
      rating,
      publishYear,
      condition,
      exchangeStatus,
      genre,
      totalPage,
      owner: 'me',
      AuthorProfile: '2'
    }).then(data => {
      if (data.data.insertedId) {
        toast.custom((t) => (
          <div
            className={`${t.visible ? 'animate-enter' : 'animate-leave'
              } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}>
            <div className="flex-1 w-0 p-4">
              ✅ Book added done
            </div>

            <div className="flex border-l border-gray-200">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-black hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Close
              </button>
            </div>
          </div>
        ))
        e.target.reset()
      }
    })

  }




  return (
    <section className="space-y-6 pb-12">

      <div className="bg-[#EFEEE9] rounded-md p-6">
        <h1 className="text-3xl font-black uppercase text-center">Add your book</h1>
      </div>

      <form onSubmit={addBook}>
        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 *:space-y-0.5">

          <div className="col-span-full  sm:col-span-2 ">
            <label className="text-sm uppercase">Title</label>
            <input required id="title" type="text" placeholder="Title" className="w-full rounded-lg border border-gray-300 text-black focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9] pl-2.5" />
          </div>

          <div className="col-span-full sm:col-span-2">
            <label className="text-sm uppercase">email</label>
            <input required type="email" name="email" placeholder="Email" className="w-full rounded-lg border border-gray-300 text-black focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9] pl-2.5" />
          </div>

          <div className="col-span-full sm:col-span-2">
            <label className="text-sm uppercase">description</label>
            <input required id="description" type="text" placeholder="Description" className="w-full rounded-lg border border-gray-300 text-black focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9] pl-2.5" />
          </div>

          <div className="col-span-full sm:col-span-2">
            <label className="text-sm uppercase">Writer</label>
            <input required id="Writer" type="text" placeholder="Writer" className="w-full rounded-lg border border-gray-300 text-black focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9] pl-2.5" />
          </div>

          <div className="col-span-full sm:col-span-2 uppercase">
            <div className="flex items-center gap-3">
              <div className="w-1/2">
                <label className="text-sm">Rating</label>
                <input required id="rating" type="number" min={'1'} max={'5'} placeholder="Rating" className="w-full rounded-lg border border-gray-300 text-black focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9] pl-2.5" />
              </div>
              <div className="w-1/2">
                <label className="text-sm">published Year</label>
                <input required id="publishedYear" type="month" placeholder="published Year" className="w-full rounded-lg border border-gray-300 text-black focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9] pl-2.5" />
              </div>
            </div>
          </div>

          {/* condition */}
          <div className="col-span-full sm:col-span-2">
            <label className="text-sm uppercase">Condition</label>
            <select required className="border border-gray-300 text-gray-700 mb-6 text-sm rounded-lg  block w-full p-2.5 focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9]">
              <option value={'Good'}>Good</option>
            </select>
          </div>

          <div className="col-span-full sm:col-span-2">
            <label className="text-sm uppercase">exchange Status</label>
            <select required className="border border-gray-300 text-gray-700 mb-6 text-sm rounded-lg  block w-full p-2.5 focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9]">
              <option value={'Available'}>Available</option>
            </select>
          </div>

          {/* genre */}
          <div className="col-span-full sm:col-span-2">
            <label className="text-sm uppercase">Genre</label>
            <select required onChange={(e) => setGenre(e.target.value)} className="border border-gray-300 text-gray-700 mb-6 text-sm rounded-lg  block w-full p-2.5 focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9]">
              {
                uniqueGenre?.map((book, idx) => <option value={book} key={idx}>{book}</option>)
              }
            </select>
          </div>

          <div className="col-span-full sm:col-span-2">
            <label className="text-sm uppercase">total Page</label>
            <input required id="totalPage" type="text" placeholder="Total Page" className="w-full rounded-lg border border-gray-300 text-black focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9] pl-2.5" />
          </div>

          {/* photo */}
          <div className="col-span-full sm:col-span-2">
            <label className="text-sm uppercase block pb-0.5">Photo url</label>
            <input required type="file" id="file" className="block bg-white w-full text-sm border border-gray-300 text-gray-700 rounded-lg focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9]" />
          </div>

          {/* location */}
          <div className="col-span-full sm:col-span-2">
            <label className="text-sm uppercase">location</label>
            <select required onChange={(e) => setLocation(e.target?.value)} className="border border-gray-300 text-gray-700 mb-6 text-sm rounded-lg  block w-full p-2.5 focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9]">
              {
                uniqueCity?.map((book, idx) => <option key={idx} value={book}>{book}</option>)
              }
            </select>
          </div>

          <div className="col-span-full sm:col-span-2 md:relative">
            <button type="submit" className="flex items-center justify-between gap-x-1 text-black text-sm font-bold bg-[#EFEEE9] rounded-lg  w-full md:h-[65.5%] md:absolute px-4 p-4  md:bottom-0 focus:ring-[#ffffff] focus:outline-none focus:ring focus:border-[#ffffff]">
              <span>
                Add Book
              </span>
              <GrSend className="text-xl" />
            </button>
          </div>

        </div>
      </form>

    </section>
  );
};

export default AddBook;
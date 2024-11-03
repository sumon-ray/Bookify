"use client"
import axios from "axios";
import { IoSend } from "react-icons/io5";
import { GrSend } from "react-icons/gr";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";

const AddBook = () => {

  const { data } = useQuery({
    queryKey: ['genre'],
    queryFn: async () => {
      const res = await axios.get(`https://bookify-server-lilac.vercel.app/books`)
      const data = await res.data
      return data
    }
  })
  const session = useSession()
  const uniqueGenre = [...new Set(data?.map((book) => book?.genre))]
  const uniqueCity = [...new Set(data?.map(book => book?.location))];
  const [Genre, setGenre] = useState('');
  const [location, setLocation] = useState('')
  const [loading, setLoading] = useState(true)

  async function addBook(e) {
    setLoading(true)
    e.preventDefault();
    const title = e.target.title.value;
    const AuthorEmail = e.target.email.value;
    const description = e.target.description.value;
    const author = e.target.Writer.value;
    const rating = e.target.rating.value;
    const publishYear = e.target.publishedYear.value.split('-')[0];
    const condition = 'Good';
    const exchangeStatus = 'Available';
    const genre = Genre;
    const totalPage = e.target.totalPage.value;
    const image = e.target.file.files[0];
    const formData = new FormData();
    formData.append('image', image)
    const { data } = await axios.post('https://api.imgbb.com/1/upload?key=52396a4930fb920fb80bbebb2b3fe41d', formData)

    axios.post('https://bookify-server-lilac.vercel.app/book', {
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
      owner: session?.data?.user?.name || '',
      AuthorProfile: session?.data?.user?.image || '',
    }).then(data => {
      if (data.data.insertedId) {
        toast.success('Book added done')
        e.target.reset()
        setLoading(false)
      }
    })
      .catch(error => toast.error(error.message))
  }

  return (
    <section className="space-y-6 pb-12">

      <div className="bg-[#EFEEE9] dark:bg-[#1A1A1A] rounded-md p-6">
        <h1 className="text-xl md:text-3xl font-black uppercase text-center dark:text-white">Add your book</h1>
      </div>

      <form onSubmit={addBook}>
        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 *:space-y-0.5 px-6 md:px-0">

          <div className="col-span-full  sm:col-span-2 ">
            <label className="text-sm uppercase dark:text-white">Title</label>
            <input required id="title" type="text" placeholder="Title" className="w-full rounded-lg border border-gray-300 text-black focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9] pl-2.5 dark:bg-[#1A1A1A] dark:text-white dark:placeholder-white dark:border-0 dark:focus:border-0 dark:focus:ring-0" />
          </div>

          <div className="col-span-full sm:col-span-2">
            <label className="text-sm uppercase dark:text-white">email</label>
            <input required type="email" name="email" placeholder="Email" value={session?.data?.user?.email} className="w-full rounded-lg border border-gray-300 text-black focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9] pl-2.5 dark:bg-[#1A1A1A] dark:text-white dark:placeholder-white dark:border-0 dark:focus:border-0 dark:focus:ring-0" />
          </div>

          <div className="col-span-full sm:col-span-2">
            <label className="text-sm uppercase dark:text-white">description</label>
            <input required id="description" type="text" placeholder="Description" className="w-full rounded-lg border border-gray-300 text-black focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9] pl-2.5 dark:bg-[#1A1A1A] dark:text-white dark:placeholder-white dark:border-0 dark:focus:border-0 dark:focus:ring-0" />
          </div>

          <div className="col-span-full sm:col-span-2">
            <label className="text-sm uppercase dark:text-white">Writer</label>
            <input required id="Writer" type="text" placeholder="Writer" className="w-full rounded-lg border border-gray-300 text-black focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9] pl-2.5 dark:bg-[#1A1A1A] dark:text-white dark:placeholder-white dark:border-0 dark:focus:border-0 dark:focus:ring-0" />
          </div>

          <div className="col-span-full sm:col-span-2 uppercase">
            <div className="flex items-center gap-3">
              <div className="w-1/2">
                <label className="text-sm dark:text-white">Rating</label>
                <input required id="rating" type="number" min={'1'} max={'5'} placeholder="Rating" className="w-full rounded-lg border border-gray-300 text-black focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9] pl-2.5 dark:bg-[#1A1A1A] dark:text-white dark:placeholder-white dark:border-0 dark:focus:border-0 dark:focus:ring-0" />
              </div>
              <div className="w-1/2">
                <label className="text-sm dark:text-white">published</label>
                <input required id="publishedYear" type="month" placeholder="published Year" className="w-full rounded-lg border border-gray-300 text-black focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9] pl-2.5 dark:bg-[#1A1A1A] dark:text-white dark:placeholder-white dark:border-0 dark:focus:border-0 dark:focus:ring-0" />
              </div>
            </div>
          </div>

          {/* condition */}
          <div className="col-span-full sm:col-span-2">
            <label className="text-sm uppercase dark:text-white">Condition</label>
            <select required className="border border-gray-300 text-gray-700 mb-6 text-sm rounded-lg  block w-full p-2.5 focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9] dark:bg-[#1A1A1A] dark:text-white dark:placeholder-white dark:border-0 dark:focus:border-0 dark:focus:ring-0">
              <option value={'Good'}>Good</option> dark:bg-[#1A1A1A] dark:text-white dark:placeholder-white dark:border-white
            </select>
          </div>

          <div className="col-span-full sm:col-span-2">
            <label className="text-sm uppercase dark:text-white">exchange Status</label>
            <select required className="border border-gray-300 text-gray-700 mb-6 text-sm rounded-lg  block w-full p-2.5 focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9] dark:bg-[#1A1A1A] dark:text-white dark:placeholder-white dark:border-0 dark:focus:border-0 dark:focus:ring-0">
              <option value={'Available'}>Available</option>
            </select>
          </div>

          {/* genre */}
          <div className="col-span-full sm:col-span-2">
            <label className="text-sm uppercase dark:text-white">Genre</label>
            <select required onChange={(e) => setGenre(e.target.value)} className="border border-gray-300 text-gray-700 mb-6 text-sm rounded-lg  block w-full p-2.5 focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9] dark:bg-[#1A1A1A] dark:text-white dark:placeholder-white dark:border-0 dark:focus:border-0 dark:focus:ring-0">
              {
                uniqueGenre?.map((book, idx) => <option value={book} key={idx}>{book}</option>)
              }
            </select>
          </div>

          <div className="col-span-full sm:col-span-2">
            <label className="text-sm uppercase dark:text-white">total Page</label>
            <input required id="totalPage" type="number" placeholder="Total Page" className="w-full rounded-lg border border-gray-300 text-black focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9] pl-2.5 dark:bg-[#1A1A1A] dark:text-white dark:placeholder-white dark:border-0 dark:focus:border-0 dark:focus:ring-0" />
          </div>

          {/* photo */}
          <div className="col-span-full sm:col-span-2">
            <label className="text-sm uppercase block pb-0.5 dark:text-white">Photo url</label>
            <input required type="file" id="file" className="block bg-white w-full text-sm border border-gray-300 text-gray-700 rounded-lg focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9] dark:bg-[#1A1A1A] dark:text-white dark:placeholder-white dark:border-0 dark:focus:border-0 dark:focus:ring-0" />
          </div>

          {/* location */}
          <div className="col-span-full sm:col-span-2">
            <label className="text-sm uppercase dark:text-white">location</label>
            <select required onChange={(e) => setLocation(e.target?.value)} className="border border-gray-300 text-gray-700 mb-6 text-sm rounded-lg  block w-full p-2.5 focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9] dark:bg-[#1A1A1A] dark:text-white dark:placeholder-white dark:border-0 dark:focus:border-0 dark:focus:ring-0">
              {
                uniqueCity?.map((book, idx) => <option key={idx} value={book}>{book}</option>)
              }
            </select>
          </div>

          <div className="col-span-full sm:col-span-2 md:relative">
            <button type="submit" className="flex items-center justify-between gap-x-1 text-white text-sm font-bold  bg-[#364957] rounded-lg  w-full md:h-[65.5%] md:absolute px-4 p-4  md:bottom-0 focus:ring-[#ffffff] focus:outline-none focus:ring focus:border-[#ffffff] dark:bg-[#1A1A1A] dark:text-white dark:placeholder-white dark:border-0 dark:focus:border-0 dark:focus:ring-0">
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
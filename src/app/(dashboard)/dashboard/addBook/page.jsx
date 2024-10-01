"use client"
import axios from "axios";
import './file.css';
import { IoSend } from "react-icons/io5";
import { GrSend } from "react-icons/gr";

const AddBook = () => {

  function addBook(e) {
    e.preventDefault();
    // const name = e.target.name.value;
    // const email = e.target.email.value;
    // const description = e.target.description.value;
    // const rating = e.target.rating.value;
    // const Genre = e.target.Genre.value;
    // const Writer = e.target.Writer.value;
    // const Condition = e.target.Condition.value;
    // const exchange = e.target.exchange.value;
    // const totalPage = e.target.totalPage.value;


    // alert(name)

  }


  return (
    <section className="space-y-6 pb-12">

      <div className="bg-[#EFEEE9] rounded-md p-6">
        <h1 className="text-3xl font-black uppercase text-center">Add your book</h1>
      </div>

      <form onSubmit={addBook}>
        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 *:space-y-0.5">

          <div className="col-span-full  sm:col-span-2 ">
            <label className="text-sm uppercase">name</label>
            <input id="name" type="text" placeholder="Name" className="w-full rounded-lg border border-gray-300 text-black focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9] pl-2.5" />
          </div>

          <div className="col-span-full sm:col-span-2">
            <label className="text-sm uppercase">email</label>
            <input type="email" name="email" placeholder="Email" className="w-full rounded-lg border border-gray-300 text-black focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9] pl-2.5" />
          </div>

          <div className="col-span-full sm:col-span-2">
            <label className="text-sm uppercase">description</label>
            <input id="description" type="text" placeholder="Description" className="w-full rounded-lg border border-gray-300 text-black focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9] pl-2.5" />
          </div>

          <div className="col-span-full sm:col-span-2">
            <label className="text-sm uppercase">Writer</label>
            <input id="Writer" type="text" placeholder="Writer" className="w-full rounded-lg border border-gray-300 text-black focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9] pl-2.5" />
          </div>

          <div className="col-span-full sm:col-span-2 uppercase">
            <div className="flex items-center gap-3">
              <div className="w-1/2">
                <label className="text-sm">Rating</label>
                <input id="rating" type="number" min={'1'} max={'5'} placeholder="Rating" className="w-full rounded-lg border border-gray-300 text-black focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9] pl-2.5" />
              </div>
              <div className="w-1/2">
                <label className="text-sm">published Year</label>
                <input id="published Year" type="month" placeholder="published Year" className="w-full rounded-lg border border-gray-300 text-black focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9] pl-2.5" />
              </div>
            </div>
          </div>
          {/* condition */}
          <div className="col-span-full sm:col-span-2">
            <label className="text-sm uppercase">Condition</label>
            {/* <input id="Condition" type="text" placeholder="Condition" className="w-full rounded-md pl-1 text-black" /> */}
            <select className="border border-gray-300 text-gray-700 mb-6 text-sm rounded-lg  block w-full p-2.5 focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9]">
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>

          <div className="col-span-full sm:col-span-2">
            <label className="text-sm uppercase">exchange Status</label>
            <input id="exchange" type="text" placeholder='Status'
              className="w-full rounded-lg border border-gray-300 text-black focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9] pl-2.5" />
          </div>
          {/* genre */}
          <div className="col-span-full sm:col-span-2">
            <label className="text-sm uppercase">Genre</label>
            {/* <input id="Genre" type="text" placeholder="Genre" className="w-full rounded-md text-black pl-1 " /> */}
            <select className="border border-gray-300 text-gray-700 mb-6 text-sm rounded-lg  block w-full p-2.5 focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9]">
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>

          <div className="col-span-full sm:col-span-2">
            <label className="text-sm uppercase">total Page</label>
            <input id="totalPage" type="text" placeholder="Total Page" className="w-full rounded-lg border border-gray-300 text-black focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9] pl-2.5" />
          </div>
          {/* photo */}
          <div className="col-span-full sm:col-span-2">
            <label className="text-sm uppercase block pb-0.5">Photo url</label>
            <input type="file" className="block bg-white w-full text-sm border border-gray-300 text-gray-700 rounded-lg focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9]" />
          </div>
          {/* location */}
          <div className="col-span-full sm:col-span-2">
            <label className="text-sm uppercase">location</label>
            {/* <input id="location" type="text" placeholder="Location" className="w-full rounded-md text-black pl-1 " /> */}
            <select className="border border-gray-300 text-gray-700 mb-6 text-sm rounded-lg  block w-full p-2.5 focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9]">
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
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
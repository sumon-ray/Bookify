"use client";
import { useQueries, useQuery } from "@tanstack/react-query";
import axios from "axios";
import img from "../../../../assets/images/About/studying.png";
import Image from "next/image";
import { IoAdd } from "react-icons/io5";

export default function MyBooks() {
  const { data } = useQuery({
    queryKey: ["my books"],
    queryFn: async () => {
      const res = await axios(
        `https://bookify-server-lilac.vercel.app/books?email=${"abcd@gmail.com"}`
      );
      const data = await res.data;
      return data;
    },
  });

  return (
    <section className="space-y-8 pb-8 md:pb-12 px-5 md:px-0">
      <div className="bg-[#EFEEE9] rounded-md p-5 md:p-2 flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-20">
        <div className="space-y-3 pt-5 md:pt-0">
          <h3 className="text-xl md:text-5xl font-bold">
            Falling in love <br />
            one page at a time
          </h3>
          <p className="text-balance">
            Lost in the pages, where every book is a new adventure <br /> and
            love for stories grows deeper with each turn
          </p>
          <button className="flex items-center justify-center gap-0.5 bg-black text-white font-medium px-4 py-1.5 rounded-lg">
            <IoAdd className="text-white text-lg" />
            Add Book
          </button>
        </div>

        <figure>
          <Image
            height={10}
            width={300}
            className="h-[270px] w-[520px]"
            src={img}
            alt=""
          />
        </figure>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {data?.map((book) => (
          <div
            key={book?._id}
            className="w-56 md:w-auto bg-[#ffffff] border border-[#00000099] flex flex-col justify-center items-center rounded-lg p-5"
          >
            <div className="space-y-3">
              <Image
                src={book?.coverImage}
                className="w-44 md:w-56 h-48 md:h-52 rounded-lg"
                height={150}
                width={200}
                alt=""
              />

              <div className="text-black text-left pl-1">
                <h1 className="font-bold md:uppercase">{book?.title}</h1>
                <h1 className="font-medium">{book?.owner}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";
import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import './style.css';
import img from '../../assets/images/About/Purple Watercolor Notebook Book Cover.png';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Link from 'next/link';

const OurLibrary = () => {
  const [category, setCategory] = useState('Classic');

  const { data } = useQuery({
    queryKey: ['our library', category],
    queryFn: async () => {
      const res = await axios.get(
        `https://bookify-server-lilac.vercel.app/books?genre=${category}`
      );
      const data = res.data;
      return data;
    },
  });

  return (
    <div className="max-w-7xl mx-auto py-16">
      <h1 className="md:text-4xl text-2xl font-bold text-center pb-9">Explore Our Library</h1>

      {/* Tab Buttons */}
      <div className="space-x-3 py-4">
        <button
          className={`p-3 px-4 rounded-md font-bold ${category === 'Classic' ? 'bg-[#364957] text-white' : 'bg-white'}`}
          onClick={() => setCategory('Classic')}
        >
          Classic
        </button>
        <button
          className={`p-3 px-4 rounded-md font-bold ${category === 'Historical Fiction' ? 'bg-[#364957] text-white' : 'bg-white'}`}
          onClick={() => setCategory('Historical Fiction')}
        >
          Historical Fiction
        </button>
        <button
          className={`p-3 px-4 rounded-md font-bold ${category === 'Dystopian' ? 'bg-[#364957] text-white' : 'bg-white'}`}
          onClick={() => setCategory('Dystopian')}
        >
          Dystopian
        </button>
      </div>

      {/* Book Display */}
      <div className="flex lg:flex-row flex-col items-start  gap-12 pt-2">
        {/* Static Image */}
        <figure className="lg:w-[30%] w-full ">
          <Image
            src={img}
            width={400}
            height={100}
            className="lg:w-[400px] w-full lg:h-auto h-[300px] rounded-2xl bg-cover"
            alt="Library Feature Image"
          />
        </figure>

        {/* Dynamic Book Grid */}
        <div className="md:grid flex flex-col md:grid-cols-4 gap-8 lg:w-[70%] md:w-[750px] w-full items-center justify-center">
          {data?.slice(0, 12).map((book, i) => (
            <Link
              href={`/details/${book?._id}`}
              key={i}
              className="w-48 h-[284px] bg-[#EFEEE9] flex flex-col justify-center items-center rounded-lg p-4"
            >
              <div className="space-y-3">
                <Image
                  src={book?.coverImage}
                  className="w-40 h-44 rounded-lg"
                  height={150}
                  width={200}
                  alt={book?.title || 'Book Cover'}
                />
                <div className="text-left pl-1">
                  <h1 className="font-bold md:uppercase" title={book?.title}>
                    {book?.title.slice(0, 13)}...
                  </h1>
                  <h1 className="font-medium">{book?.owner}</h1>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurLibrary;

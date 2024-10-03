"use client";
import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import './style.css';
import img from '../../assets/images/About/Purple Watercolor Notebook Book Cover.png'
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Link from 'next/link';

const OurLibrary = () => {

    const [category, setCategory] = useState('Classic')
    const { data } = useQuery({
        queryKey: ['our library',category],
        queryFn: async () => {
            const res = await axios(`https://bookify-server-lilac.vercel.app/books?genre=${category}`)
            const data = await res.data
            return data
        }
    })




    return (
        <div className='max-w-7xl mx-auto py-16'>

            <h1 className='text-4xl font-bold text-center pb-9'>Explore Our Library</h1>

            {/* Tab Buttons */}
            <div className='space-x-3 py-4 *:text-white'>
                <button className={`bg-[#364957${category === 'Classic' ? '' :'B3'}] p-3 px-4 rounded-md font-bold`} onClick={() => setCategory('Classic')}>Classic</button>
                <button className={`bg-[#364957${category === 'Historical Fiction'?'':'B3'}] p-3 px-4 rounded-md font-bold`} onClick={() => setCategory('Historical Fiction')}>Historical Fiction</button>
                <button className={`bg-[#364957${category === 'Dystopian' ? '' :'B3'}] p-3 px-4 rounded-md font-bold`} onClick={() => setCategory('Dystopian')}>Dystopian</button>
            </div>

            {/* Book Display */}
            <div className='flex items-start gap-12 pt-2'>

                <figure className='w-[30%]'>
                    <Image src={img} width={400} height={100} className='w-[400px] h-auto rounded-2xl' />
                </figure>

                <div className='grid md:grid-cols-4 gap-8 w-[70%]'>
                    {data?.slice(0, 12).map((book, i) =>
                        <Link href={`/details/${book?._id}`} key={i} className="w-48 h-[284px] bg-[#EFEEE9] flex flex-col justify-center items-center rounded-lg p-4">
                            <div className="space-y-3">
                                <Image src={book?.coverImage} className="w-40 h-44 rounded-lg" height={150} width={200} alt="" />
                                <div className="text-black text-left pl-1">
                                    <h1 className="font-bold md:uppercase" title={book?.title}>{book?.title.slice(0, 13)}...</h1>
                                    <h1 className="font-medium">{book?.owner}</h1>
                                </div>
                            </div>
                        </Link>)}
                </div>

            </div>

        </div>
    );
};

export default OurLibrary;

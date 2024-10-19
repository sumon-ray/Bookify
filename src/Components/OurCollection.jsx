"use client"
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Link from 'next/link';
import React from 'react';
import { BsArrowBarRight } from 'react-icons/bs';
import { FaArrowRight } from 'react-icons/fa';
import { IoIosArrowRoundForward } from 'react-icons/io';

const OurCollection = () => {


    const { data } = useQuery({
        queryKey: ['home rent books'],
        queryFn: async () => {
            const res = await axios('https://bookify-server-lilac.vercel.app/rent')
            const data = await res.data.result
            return data
        }
    })



    return (
        <div className="max-w-7xl mx-auto  mt-[100px] mb-14  space-y-6">

            <div className='p-2 rounded-tl-2xl rounded-br-2xl border border-black max-w-[380px] h-12 mx-auto'>
                <h1 className='text-2xl uppercase font-bold text-center'>
                    Explore Rent Collection
                </h1>
            </div>

            <div className=' lg:flex flex flex-wrap w-full   justify-center items-center gap-8  '>
                {
                    data?.slice(0, 5)?.map(book => 
                    <div key={book?._id} className="w-[210px] md:w-[225px] h-[203px] rounded-2xl bg-[#EFEEE9] mt-36 flex flex-col items-center">
                        <div className="w-[175px] h-[260px] mt-[-130px] hover:mt-[-150px] hover:duration-700  rounded-xl bg-cover bg-center"
                            style={{
                                backgroundImage: `url('${book?.coverImage}')`
                            }}>
                        </div>
                        <div className='text-center p-3'>
                            <h3 className='text-xl font-bold text-[#000000]'>{book?.Genre.split(' ')[0]}</h3>
                            <Link href={'/rentbooks'} className='flex items-center justify-center'>More <IoIosArrowRoundForward className='-mb-1 text-2xl' /></Link>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default OurCollection;
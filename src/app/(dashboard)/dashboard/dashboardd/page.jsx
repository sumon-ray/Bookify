"use client";
import Visitor from './Visitor';
import React, { useEffect, useState } from 'react';
import { GiCardExchange } from "react-icons/gi";
import { IoIosBookmarks } from "react-icons/io";
import { FaFileAudio } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import Reviews from './Reviews';
import CustomerSatisfaction from './CustomerSatisfaction';
import axios from 'axios';
import TopBooks from './TopBooks';
import TotalReviews from './TotalReviews';

const Page = () => {
    const [overview, setOverview] = useState([])
    const {exchangeBooks, rentBooks, audioBooks, totalUsers, topBooks, totalReview} = overview
    // fetch data 
    useEffect(() => {
        const dashboardData = async () => {
            try{
                const response = await axios.get('https://bookify-server-lilac.vercel.app/dashboard')
                setOverview(response.data)
            }catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        dashboardData()
    },[])
    // console.log(overview);
    return (
        <div className=' grid grid-cols-12 gap-4'>
            
            {/* 1 */}
            <div className='rounded-xl dark:bg-[#1a1a1a] bg-white pt-3 pb-4 px-4 lg:col-span-8 col-span-12 h-[310px]'>
                <div className='my-2 mb-4'>
                <h1 className='text-2xl font-bold '>Website Overview</h1>
                <p>Update Summery</p>
                </div>
                <div className='lg:flex md:flex grid grid-cols-2 lg:gap-3 gap-2  '>

                    <div className=' w-full lg:h-[200px] md:h-[150px] h-[100px] bg-[#ffe2e6] lg:p-8 md:p-6 p-2 lg:pl-6  md:pl-4 pl-2 rounded-xl space-y-1'>
                        <div className=' bg-[#fa5a7e] rounded-full lg:w-[50px] w-[30px]  lg:h-[50px] h-[30px] flex justify-center items-center'>
                            <GiCardExchange  className='lg:text-2xl md:text-xl text-white' />
                        </div>
                        <h1 className='lg:text-2xl  text-xl font-bold dark:text-black'>{exchangeBooks}</h1>
                        <p className='text-gray-500 lg:font-bold md:font-medium'>Exchange Books</p>
                    </div>

                    <div className=' w-full lg:h-[200px] md:h-[150px] h-[100px] bg-[#fff4de] lg:p-8 md:p-6 p-2 lg:pl-6  md:pl-4 pl-2 rounded-xl space-y-1'>
                        <div className=' bg-[#fe947a] rounded-full lg:w-[50px] w-[30px]  lg:h-[50px] h-[30px] flex justify-center items-center'>
                            <IoIosBookmarks className='lg:text-2xl md:text-xl text-white' />
                        </div>
                        <h1 className='lg:text-2xl text-xl font-bold dark:text-black'>{rentBooks}</h1>
                        <p className='text-gray-500 lg:font-bold md:font-medium'>Trending Books</p>
                    </div>

                    <div className=' w-full lg:h-[200px] md:h-[150px] h-[100px] bg-[#dcfce7] lg:p-8 md:p-6 p-2 lg:pl-6  md:pl-4 pl-2 rounded-xl space-y-1'>
                        <div className=' bg-[#3cd757] rounded-full lg:w-[50px] w-[30px]  lg:h-[50px] h-[30px] flex justify-center items-center'>
                            <FaFileAudio className='lg:text-2xl md:text-xl text-white' />
                        </div>
                        <h1 className='lg:text-2xl text-xl font-bold dark:text-black'>{audioBooks}</h1>
                        <p className='text-gray-500 lg:font-bold md:font-medium'>Audio Books</p>
                    </div>

                    <div className='w-full lg:h-[200px] md:h-[150px] h-[100px] bg-[#f4e8ff] lg:p-8 md:p-6 p-2 lg:pl-6  md:pl-4 pl-2 rounded-xl space-y-1'>
                        <div className=' bg-[#bf83ff] rounded-full lg:w-[50px] w-[30px]  lg:h-[50px] h-[30px] flex justify-center items-center'>
                            <FaUserFriends className='lg:text-2xl md:text-xl text-white' />
                        </div>
                        <h1 className='lg:text-2xl text-xl font-bold dark:text-black'>{totalUsers}</h1>
                        <p className='text-gray-500 lg:font-bold md:font-medium'>Total Users</p>
                    </div>

                </div>
            </div>

            {/* 2 */}<div className='lg:col-span-4 h-[310px] col-span-12'>
               <TopBooks topBooks={topBooks}/>
            </div>
            
            {/* 3 */}<div className=' rounded-xl lg:col-span-4 lg:h-[310px] col-span-12 md:mb-4'>
                <Visitor/>
            </div>

            {/* 4<div className='rounded-b-lg lg:col-span-4 col-span-12 lg:h-[310px]]'>
                <TotalReviews totalReview={totalReview}/>
            </div> */}
             <div className='rounded-b-lg lg:col-span-4 col-span-12 lg:h-[310px]'>
                <Reviews totalReview={totalReview}/>
            </div>

            {/* 6 */}<div className='rounded-b-lg lg:col-span-4 col-span-12 lg:h-[310px]'>
                <CustomerSatisfaction totalReviews={totalReview}/>
            </div>
           

        </div>
    );
};

export default Page;
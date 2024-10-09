import Visitor from '@/app/(dashboard)/dashboard/dashboardM/Visitor';
import React from 'react';
import { GiCardExchange } from "react-icons/gi";
import { IoIosBookmarks } from "react-icons/io";
import { FaCodePullRequest } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa";
import TopBooks from './TopBooks';
import Reviews from './Reviews';
import CustomerSatisfaction from './CustomerSatisfaction';

const page = () => {
    return (
        <div className=' grid grid-cols-12 gap-4'>
            
            {/* 1 */}
            <div className='rounded-xl  bg-white pt-3 pb-4 px-4 lg:col-span-8 col-span-12 h-[310px]'>
                <div className='my-2 mb-4'>
                <h1 className='text-2xl font-bold '>Today's Update</h1>
                <p>Update Summery</p>
                </div>
                <div className='lg:flex md:flex grid grid-cols-2 lg:gap-3 gap-2  '>

                    <div className=' w-full lg:h-[200px] md:h-[150px] h-[100px] bg-[#ffe2e6] lg:p-8 md:p-6 p-2 lg:pl-6  md:pl-4 pl-2 rounded-xl space-y-1'>
                        <div className=' bg-[#fa5a7e] rounded-full lg:w-[50px] w-[30px]  lg:h-[50px] h-[30px] flex justify-center items-center'>
                            <GiCardExchange className='lg:text-2xl md:text-xl text-white' />
                        </div>
                        <h1 className='lg:text-2xl  text-xl font-bold'>132</h1>
                        <p className='text-gray-500 lg:font-bold md:font-medium'>Total Exchange</p>
                    </div>

                    <div className=' w-full lg:h-[200px] md:h-[150px] h-[100px] bg-[#fff4de] lg:p-8 md:p-6 p-2 lg:pl-6  md:pl-4 pl-2 rounded-xl space-y-1'>
                        <div className=' bg-[#fe947a] rounded-full lg:w-[50px] w-[30px]  lg:h-[50px] h-[30px] flex justify-center items-center'>
                            <IoIosBookmarks className='lg:text-2xl md:text-xl text-white' />
                        </div>
                        <h1 className='lg:text-2xl text-xl font-bold'>231</h1>
                        <p className='text-gray-500 lg:font-bold md:font-medium'>Total Reant</p>
                    </div>

                    <div className=' w-full lg:h-[200px] md:h-[150px] h-[100px] bg-[#dcfce7] lg:p-8 md:p-6 p-2 lg:pl-6  md:pl-4 pl-2 rounded-xl space-y-1'>
                        <div className=' bg-[#3cd757] rounded-full lg:w-[50px] w-[30px]  lg:h-[50px] h-[30px] flex justify-center items-center'>
                            <FaCodePullRequest className='lg:text-2xl md:text-xl text-white' />
                        </div>
                        <h1 className='lg:text-2xl text-xl font-bold'>99</h1>
                        <p className='text-gray-500 lg:font-bold md:font-medium'>Total Request</p>
                    </div>

                    <div className='w-full lg:h-[200px] md:h-[150px] h-[100px] bg-[#f4e8ff] lg:p-8 md:p-6 p-2 lg:pl-6  md:pl-4 pl-2 rounded-xl space-y-1'>
                        <div className=' bg-[#bf83ff] rounded-full lg:w-[50px] w-[30px]  lg:h-[50px] h-[30px] flex justify-center items-center'>
                            <FaUserPlus className='lg:text-2xl md:text-xl text-white' />
                        </div>
                        <h1 className='lg:text-2xl text-xl font-bold'>151</h1>
                        <p className='text-gray-500 lg:font-bold md:font-medium'>Total Users</p>
                    </div>

                </div>
            </div>

            {/* 2 */}<div className='lg:col-span-4 h-[310px] col-span-12'>
                <TopBooks />
            </div>
            
            {/* 3 */}<div className='bg-white lg:col-span-4 lg:h-[310px] col-span-12 md:mb-4'>
                <Visitor/>
            </div>

            {/* 4 */}<div className='bg-white lg:col-span-4 col-span-12 lg:h-[310px]'>
                <Reviews/>
            </div>

            {/* 6 */}<div className='bg-white lg:col-span-4 col-span-12 lg:h-[310px]'>
                <CustomerSatisfaction/>
            </div>
           

        </div>
    );
};

export default page;
"use client"
import { useState } from 'react';
import Review from './Review';
import { Divider, Rating } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import PeopleReview from './PeopleReview';

export default function DetailsTab({ Book }) {

    const [open, setOpen] = useState(1);
    const { title, author, genre, condition, exchangeStatus, totalPage, location, description , _id} = Book || {}

    const { data , refetch , isLoading} = useQuery({
        queryKey: ['review'],
        queryFn: async () => {
            const res = await axios(`http://localhost:5000/reviews?bookId=${_id}`)
            const data = await res.data;
            return data
        }

    })


    return (
        <div className='max-w-6xl mx-auto pb-10'>

            {/* tabs */}
            <div className="text-sm font-medium text-center text-black border-b-2 border-[#ffffff] dark:border-[#0A0A0C] dark:text-white *:dark:text-white">
                <ul className="flex flex-wrap justify-center -mb-px">
                    <li className="me-2" onClick={() => {
                        setOpen(1)
                    }}>
                        <p className={`inline-block p-4 ${open === 1 ? 'border-b-2 border-black dark:border-white rounded-t-lg' : ''}`}>Description </p>
                    </li>
                    <li className="me-2" onClick={() => {
                        setOpen(2)
                    }}>
                        <p className={`inline-block p-4 ${open === 2 ? 'border-b-2 border-black dark:border-white rounded-t-lg' : ''}`}>Details</p>
                    </li>
                    <li className="me-2" onClick={() => {
                        setOpen(3)
                    }}>
                        <p className={`inline-block p-4 ${open === 3 ? 'border-b-2 border-black dark:border-white rounded-t-lg' : ''}`}>Reviews</p>
                    </li>
                </ul>
            </div>

            {/* content */}
            <div className='text-balance pt-4 px-4 md:px-0 *:dark:text-white '>

                {/* summary */}
                <p className={open === 1 ? 'block text-center' : 'hidden'}>
                    {description}
                </p>
                {/*Specification */}
                <div className={open === 2 ? 'block max-w-6x' : 'hidden'}>

                    <div className="relative overflow-x-auto ">
                        <table className="w-full text-sm text-left rtl:text-right ">
                            <tbody>

                                <tr className='text-black border-t border-[#B7B7B7] dark:border-white dark:text-white '>
                                    <th className="px-6 w-[30%] py-4 font-medium whitespace-nowrap bg-[#EFEEE9] border-l border-[#B7B7B7] dark:border-white dark:text-white dark:bg-[#0A0A0CCC]">
                                        Title
                                    </th>
                                    <td className="px-6 py-4 w-[70%] bg-white border-x border-[#B7B7B7] dark:border-white dark:text-white dark:bg-[#0A0A0C]">{title}</td>
                                </tr>

                                <tr className='text-black border-t border-[#B7B7B7] dark:border-white dark:text-white '>
                                    <th className="px-6 w-[30%] py-4 font-medium whitespace-nowrap bg-[#EFEEE9] border-l border-[#B7B7B7] dark:border-white dark:text-white dark:bg-[#0A0A0CCC]">
                                        Writer
                                    </th>
                                    <td className="px-6 py-4 w-[70%] bg-white border-x border-[#B7B7B7] dark:border-white dark:text-white dark:bg-[#0A0A0C]">{author}</td>
                                </tr>

                                <tr className='text-black border-t border-[#B7B7B7] dark:border-white dark:text-white '>
                                    <th className="px-6 w-[30%] py-4 font-medium whitespace-nowrap bg-[#EFEEE9] border-l border-[#B7B7B7] dark:border-white dark:text-white dark:bg-[#0A0A0CCC]">
                                        Owner
                                    </th>
                                    <td className="px-6 py-4 w-[70%] bg-white border-x border-[#B7B7B7] dark:border-white dark:text-white dark:bg-[#0A0A0C]">{'Jordan walk'}</td>
                                </tr>

                                <tr className='text-black border-t border-[#B7B7B7] dark:border-white dark:text-white '>
                                    <th className="px-6 w-[30%] py-4 font-medium whitespace-nowrap bg-[#EFEEE9] border-l border-[#B7B7B7] dark:border-white dark:text-white dark:bg-[#0A0A0CCC]">
                                        Category
                                    </th>
                                    <td className="px-6 py-4 w-[70%] bg-white border-x border-[#B7B7B7] dark:border-white dark:text-white dark:bg-[#0A0A0C]">{genre}</td>
                                </tr>

                                <tr className='text-black border-t border-[#B7B7B7] dark:border-white dark:text-white '>
                                    <th className="px-6 w-[30%] py-4 font-medium whitespace-nowrap bg-[#EFEEE9] border-l border-[#B7B7B7] dark:border-white dark:text-white dark:bg-[#0A0A0CCC]">
                                        Condition
                                    </th>
                                    <td className="px-6 py-4 w-[70%] bg-white border-x border-[#B7B7B7] dark:border-white dark:text-white dark:bg-[#0A0A0C]">{condition}</td>
                                </tr>

                                <tr className='text-black border-t border-[#B7B7B7] dark:border-white dark:text-white '>
                                    <th className="px-6 w-[30%] py-4 font-medium whitespace-nowrap bg-[#EFEEE9] border-l border-[#B7B7B7] dark:border-white dark:text-white dark:bg-[#0A0A0CCC]">
                                        Exchange
                                    </th>
                                    <td className="px-6 py-4 w-[70%] bg-white border-x border-[#B7B7B7] dark:border-white dark:text-white dark:bg-[#0A0A0C]">{exchangeStatus}</td>
                                </tr>

                                <tr className='text-black border-t border-[#B7B7B7] dark:border-white dark:text-white '>
                                    <th className="px-6 w-[30%] py-4 font-medium whitespace-nowrap bg-[#EFEEE9] border-l border-[#B7B7B7] dark:border-white dark:text-white dark:bg-[#0A0A0CCC]">
                                        Total Page
                                    </th>
                                    <td className="px-6 py-4 w-[70%] bg-white border-x border-[#B7B7B7] dark:border-white dark:text-white dark:bg-[#0A0A0C]">{totalPage}</td>
                                </tr>

                                <tr className='text-black border-y border-[#B7B7B7] dark:border-white dark:text-white '>
                                    <th className="px-6 w-[30%] py-4 font-medium whitespace-nowrap bg-[#EFEEE9] border-l border-[#B7B7B7] dark:border-white dark:text-white dark:bg-[#0A0A0CCC]">
                                        location
                                    </th>
                                    <td className="px-6 py-4 w-[70%] bg-white border-x border-[#B7B7B7] dark:border-white dark:text-white dark:bg-[#0A0A0C]">{location}</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                </div>
                {/* Review */}
                <div className={open === 3 ? 'block' : 'hidden'}>
                    <Review Data={data} refetch={refetch} />
                    <Divider orientation="horizontal" className='py-2.5' />
                    {/* reviews */}
                    <>

                        {
                            data?.map((review, i) => <PeopleReview key={i} data={review}  isLoading={isLoading}/>)
                        }

                    </>
                </div>

            </div>

        </div>
    )
}

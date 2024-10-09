"use client"
import { useState } from 'react';

export default function DetailsTab({ Book }) {

    const [open, setOpen] = useState(1);
    const { title, author, genre, condition, exchangeStatus, totalPage, location, description } = Book || {}

    return (
        <div className='max-w-6xl mx-auto pb-10'>

            {/* tabs */}
            <div className="text-sm font-medium text-center text-black border-b-2 border-[#ffffff]">
                <ul className="flex flex-wrap justify-center -mb-px">
                    <li className="me-2" onClick={() => {
                        setOpen(1)
                    }}>
                        <p className={`inline-block p-4 ${open === 1 ? 'border-b-2 border-black rounded-t-lg' : ''}`}>Summary</p>
                    </li>
                    <li className="me-2" onClick={() => {
                        setOpen(2)
                    }}>
                        <p className={`inline-block p-4 ${open === 2 ? 'border-b-2 border-black rounded-t-lg' : ''}`}>Specification</p>
                    </li>
                    <li className="me-2" onClick={() => {
                        setOpen(3)
                    }}>
                        <p className={`inline-block p-4 ${open === 3 ? 'border-b-2 border-black rounded-t-lg' : ''}`}>Reviews</p>
                    </li>
                </ul>
            </div>

            {/* content */}
            <div className='text-balance pt-4 px-4 md:px-0'>

                {/* summary */}
                <p className={open === 1 ? 'block text-center' : 'hidden'}>
                    {description}
                </p>
                {/*Specification */}
                <div className={open === 2 ? 'block max-w-6x' : 'hidden'}>

                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right">
                            <tbody>

                                <tr className='text-black border-t border-[#B7B7B7]'>
                                    <th className="px-6 w-[30%] py-4 font-medium whitespace-nowrap bg-[#EFEEE9] border-l border-[#B7B7B7]">
                                        Title
                                    </th>
                                    <td className="px-6 py-4 w-[70%] bg-white border-x border-[#B7B7B7]">{title}</td>
                                </tr>

                                <tr className='text-black border-t border-[#B7B7B7] '>
                                    <th className="px-6 w-[30%] py-4 font-medium whitespace-nowrap bg-[#EFEEE9] border-l border-[#B7B7B7]">
                                        Writer
                                    </th>
                                    <td className="px-6 py-4 w-[70%] bg-white border-x border-[#B7B7B7]">{author}</td>
                                </tr>

                                <tr className='text-black border-t border-[#B7B7B7] '>
                                    <th className="px-6 w-[30%] py-4 font-medium whitespace-nowrap bg-[#EFEEE9] border-l border-[#B7B7B7]">
                                        Owner
                                    </th>
                                    <td className="px-6 py-4 w-[70%] bg-white border-x border-[#B7B7B7]">{'Jordan walk'}</td>
                                </tr>

                                <tr className='text-black border-t border-[#B7B7B7] '>
                                    <th className="px-6 w-[30%] py-4 font-medium whitespace-nowrap bg-[#EFEEE9] border-l border-[#B7B7B7]">
                                        Category
                                    </th>
                                    <td className="px-6 py-4 w-[70%] bg-white border-x border-[#B7B7B7]">{genre}</td>
                                </tr>

                                <tr className='text-black border-t border-[#B7B7B7] '>
                                    <th className="px-6 w-[30%] py-4 font-medium whitespace-nowrap bg-[#EFEEE9] border-l border-[#B7B7B7]">
                                        Condition
                                    </th>
                                    <td className="px-6 py-4 w-[70%] bg-white border-x border-[#B7B7B7]">{condition}</td>
                                </tr>

                                <tr className='text-black border-t border-[#B7B7B7] '>
                                    <th className="px-6 w-[30%] py-4 font-medium whitespace-nowrap bg-[#EFEEE9] border-l border-[#B7B7B7]">
                                        Exchange
                                    </th>
                                    <td className="px-6 py-4 w-[70%] bg-white border-x border-[#B7B7B7]">{exchangeStatus}</td>
                                </tr>

                                <tr className='text-black border-t border-[#B7B7B7] '>
                                    <th className="px-6 w-[30%] py-4 font-medium whitespace-nowrap bg-[#EFEEE9] border-l border-[#B7B7B7]">
                                        Total Page
                                    </th>
                                    <td className="px-6 py-4 w-[70%] bg-white border-x border-[#B7B7B7]">{totalPage}</td>
                                </tr>

                                <tr className='text-black border-y border-[#B7B7B7] '>
                                    <th className="px-6 w-[30%] py-4 font-medium whitespace-nowrap bg-[#EFEEE9] border-l border-[#B7B7B7]">
                                        location
                                    </th>
                                    <td className="px-6 py-4 w-[70%] bg-white border-x border-[#B7B7B7]">{location}</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                </div>
                {/* Author */}
                <p className={open === 3 ? 'block' : 'hidden'}>Coming soon</p>

            </div>

        </div>
    )
}

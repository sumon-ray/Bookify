"use client"
import * as React from 'react';
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { IoSearchSharp } from 'react-icons/io5';
import { Pagination, Stack } from '@mui/material';
import Link from 'next/link';
import { FaCartPlus } from 'react-icons/fa6';
import './pagination.css'

function valuetext(value) {
    return `${value}°C`;
}



export default function AllBooks() {
    const [currentPage, setCurrentPage] = React.useState(1)
    const [value, setValue] = React.useState([20, 37]);

    const { data, refetch } = useQuery({
        queryKey: ['rent data', currentPage],
        queryFn: async () => {
            const res = await axios(`http://localhost:4000/rent?limit=10&currentPage=${currentPage}`)
            const data = await res.data
            return data
        }
    })
    const uniqueGenre = [...new Set(data?.result?.map(book => book.Genre))];


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handlePageChange = (e, page) => {
        setCurrentPage(page)
        refetch()
    }



    return (
        <div className='pt-7 max-w-7xl mx-auto'>

            <div className='flex flex-col md:flex-row gap-10'>

                {/* filter option */}
                <div className='hidden md:block md:w-[22%] space-y-3'>
                    <h3 className='text-lg font-bold'>Filter Option</h3>
                    <div className='space-y-2.5'>

                        <select className='w-[270px] border border-[#EFEEE9] rounded-md'>
                            <option value="volvo" selected disabled>Author</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>

                        <select className='w-[270px] border border-[#EFEEE9] rounded-md'>
                            <option value="volvo" selected disabledselected disabled>Publisher</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>

                        <select className='w-[270px] border border-[#EFEEE9] rounded-md'>
                            <option value="volvo" selected disabled>Publish Year</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>

                        <select className='w-[270px] border border-[#EFEEE9] rounded-md'>
                            <option value="volvo" selected disabled>Language</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>

                        {/* check box */}
                        <div>
                            <ul className="text-sm font-medium border rounded-md bg-white p-1 pb-1.5">
                                <h3 className="ps-3 pt-2 pb-1">Category</h3>
                                {/* checkbox */}
                                <div className='flex'>
                                    <div>
                                        {
                                            uniqueGenre?.slice(0, 6).map(book => <li className="w-full">
                                                <div className="flex items-center ps-3">
                                                    <input type="checkbox" className="w-4 h-4 text-[#364957] bg-white rounded focus:ring-[#364957]" />
                                                    <label className="w-full py-2 ms-2 text-sm font-medium ">
                                                        {book.split(' ').slice(0, 1)}
                                                    </label>
                                                </div>
                                            </li>)
                                        }
                                    </div>

                                    <div>
                                        {
                                            uniqueGenre?.slice(6, 12).map(book => <li className="w-full">
                                                <div className="flex items-center ps-3">
                                                    <input type="checkbox" className="w-4 h-4 text-[#364957] bg-white rounded focus:ring-[#364957]" />
                                                    <label className="w-full py-2 ms-2 text-sm font-medium ">
                                                        {book.split(' ').slice(0, 1)}
                                                    </label>
                                                </div>
                                            </li>)
                                        }
                                    </div>
                                </div>
                            </ul>
                        </div>

                        {/* price range taker */}
                        <div className='bg-white rounded-md border p-4 py-2 space-y-1'>
                            <h3 className='font-medium'>Price Range</h3>
                            <div className='flex justify-center'>
                                <Box sx={{ width: 225 }} >
                                    <Slider
                                        getAriaLabel={() => 'Temperature range'}
                                        value={value}
                                        onChange={handleChange}
                                        valueLabelDisplay="auto"
                                        getAriaValueText={valuetext}
                                        color="#000000"
                                    />
                                </Box>
                            </div>
                        </div>

                        {/* search button */}


                    </div>
                </div>
                {/* filter option */}
                <div className='block md:hidden md:w-[22%] space-y-3'>
                    <h3 className='text-lg font-bold text-center'>Filter Option</h3>
                    <div className='space-y-2.5 flex flex-col md:flex-none items-center md:items-start'>

                        <select className='w-[270px] border border-[#EFEEE9] rounded-md'>
                            <option value="volvo" selected disabled>Author</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>

                        <select className='w-[270px] border border-[#EFEEE9] rounded-md'>
                            <option value="volvo" selected disabledselected disabled>Publisher</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>

                        <select className='w-[270px] border border-[#EFEEE9] rounded-md'>
                            <option value="volvo" selected disabled>Publish Year</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>

                        <select className='w-[270px] border border-[#EFEEE9] rounded-md'>
                            <option value="volvo" selected disabled>Language</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>

                        {/* check box */}
                        <div>
                            <ul className="text-sm font-medium border rounded-md bg-white p-1 pb-1.5">
                                <h3 className="ps-3 pt-2 pb-1">Category</h3>
                                {/* checkbox */}
                                <div className='flex'>
                                    <div>
                                        {
                                            uniqueGenre?.slice(0, 6).map(book => <li className="w-full">
                                                <div className="flex items-center ps-3">
                                                    <input type="checkbox" className="w-4 h-4 text-[#364957] bg-white rounded focus:ring-[#364957]" />
                                                    <label className="w-full py-2 ms-2 text-sm font-medium ">
                                                        {book.split(' ').slice(0, 1)}
                                                    </label>
                                                </div>
                                            </li>)
                                        }
                                    </div>

                                    <div>
                                        {
                                            uniqueGenre?.slice(6, 12).map(book => <li className="w-full">
                                                <div className="flex items-center ps-3">
                                                    <input type="checkbox" className="w-4 h-4 text-[#364957] bg-white rounded focus:ring-[#364957]" />
                                                    <label className="w-full py-2 ms-2 text-sm font-medium ">
                                                        {book.split(' ').slice(0, 1)}
                                                    </label>
                                                </div>
                                            </li>)
                                        }
                                    </div>
                                </div>
                            </ul>
                        </div>

                        {/* price range taker */}
                        <div className='bg-white rounded-md border p-4 py-2 space-y-1'>
                            <h3 className='font-medium'>Price Range</h3>
                            <div className='flex justify-center'>
                                <Box sx={{ width: 225 }} >
                                    <Slider
                                        getAriaLabel={() => 'Temperature range'}
                                        value={value}
                                        onChange={handleChange}
                                        valueLabelDisplay="auto"
                                        getAriaValueText={valuetext}
                                        color="#000000"
                                    />
                                </Box>
                            </div>
                        </div>

                        {/* search button */}


                    </div>
                </div>

                {/* Books */}
                <div className='md:w-[80%] space-y-3 flex flex-col items-center md:items-start'>
                    <h3 className='text-xl md:text-lg font-bold'>Books</h3>
                    <div className='grid grid-cols-2 md:grid-cols-5 gap-6'>
                        {
                            data?.result?.slice(0, 10).map((book, idx) =>
                                <Link
                                    href={''}
                                    key={idx}
                                    className="md:w-[180px] h-auto bg-[#EFEEE9]  rounded-md "
                                >
                                    <div className="space-y-3">
                                        <Image
                                            src={book?.coverImage}
                                            className="w-full h-[205px] rounded-t-md"
                                            height={150}
                                            width={200}
                                            alt={book?.Title || 'Book Cover'}
                                        />
                                        <div className="text-left pl-2 pb-2 relative">
                                            <h1 className="font-bold md:uppercase" title={book?.Title}>
                                                {book?.Title.slice(0, 13)}...
                                            </h1>

                                            <div className='flex items-center justify-between pr-2'>
                                                <h1 className="font-medium">{book?.Price}$</h1>
                                                <span className='bg-[#364957] rounded-tl-2xl rounded-br-md text-white p-2 absolute right-0 bottom-0'><FaCartPlus className='text-lg' /></span>
                                            </div>

                                        </div>
                                    </div>
                                </Link>
                            )
                        }
                    </div>
                </div>

            </div>

            <div className='flex items-center justify-center md:justify-between gap-x-32 md:gap-x-0 pt-5 md:pt-3'>

                <button className='bg-[#364957] text-white w-[21%] py-2 rounded-md flex items-center justify-between px-3 gap-x-1'>
                    <span>Search</span>
                    <span><IoSearchSharp /></span>
                </button>

                <Stack spacing={0}>
                    <Pagination
                        count={data?.totalPages}
                        variant="outline"
                        page={currentPage}
                        onChange={handlePageChange}
                        sx={{
                            '& .MuiPaginationItem-root': {
                                color: 'black',
                                borderColor: 'white',
                            },
                            '& .Mui-selected': {
                                backgroundColor: '#364957',
                                color: 'white',
                            },
                        }} />
                </Stack>

            </div>

        </div >
    )
}
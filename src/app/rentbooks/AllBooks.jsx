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
    const [value, setValue] = React.useState([1, 500]);
    const [mainData, setMainData] = React.useState([])
    // select state
    const [Author, setAuthor] = React.useState('');
    const [Publisher, setPublisher] = React.useState('');
    const [PublishYear, setPublishYear] = React.useState('');
    const [Language, setLanguage] = React.useState('');
    const [SelectedCategories, setSelectedCategories] = React.useState([]);
    const [search, setSearch] = React.useState(false)
    const limit = 10

    // alert(typeof(PublishYear))

    const { data, refetch } = useQuery({
        queryKey: ['rent data', currentPage, search],
        queryFn: async () => {
            const res = await axios(`https://bookify-server-lilac.vercel.app/rent?limit=${limit}&currentPage=${currentPage}&Author=${Author}&Publisher=${Publisher}&PublishYear=${PublishYear}&Language=${Language}&Genre=${SelectedCategories}&Price=${value}`)
            const data = await res.data
            return data
        }
    })

    React.useEffect(() => {
        axios(`https://bookify-server-lilac.vercel.app/rent-values`)
            .then(data => setMainData(data.data))
            .catch(error => console.log(error))
    }, [])


    const uniqueGenre = [...new Set(mainData?.map(book => book?.Genre))];
    const uniqueAuthor = [...new Set(mainData?.map(book => book?.Author))];
    const uniquePublisher = [...new Set(mainData?.map(book => book?.Publisher))];
    const uniqueYear = [...new Set(mainData?.map(book => book['Year of Publication']))]
    const uniqueLanguage = [...new Set(mainData?.map(book => book?.Language))]
    const uniqueNumber = [...new Set(mainData?.map(book => book?.Price))]
    const maxNumber = Math.max(...uniqueNumber)
    const minNumber = Math.min(...uniqueNumber)

    const handleChange = (event, newValue) => {
        setValue(newValue);
        refetch()
    };
    const handlePageChange = (e, page) => {
        setCurrentPage(page)
    }

    // select function 
    const handleAuthor = function (e) {
        setAuthor(e.target.value)
    }
    const handlePublisher = function (e) {
        setPublisher(e.target.value)
    }
    const handlePublishYear = function (e) {
        setPublishYear(e.target.value)
    }
    const handleLanguage = function (e) {
        setLanguage(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        const checkboxes = Array.from(e.target.querySelectorAll('input[name="checkbox"]:checked'));
        const selectedValues = checkboxes.map(checkbox => checkbox.value);
        setSelectedCategories(selectedValues)
        setSearch(!search)
        refetch()
    }



    return (
        <form onSubmit={handleSubmit} className='pt-7 max-w-7xl mx-auto'>

            <div className='flex flex-col-reverse lg:flex-row gap-7'>

                {/* filter option big device*/}
                <div className='hidden lg:block md:w-[22%] space-y-3'>
                    <h3 className='text-lg font-bold'>Filter Option</h3>
                    <div className='space-y-2.5'>

                        <select required onChange={handleAuthor} className='w-[270px] bg-[#EFEEE9] border-0 rounded-md focus:ring-[#ffffff] focus:outline-none focus:ring focus:border-[#ffffff]'>
                            <option value="volvo" selected disabled>Author</option>
                            <option value="">All</option>
                            {uniqueAuthor?.map((author, i) => <option key={i} value={author}>{author}</option>)}
                        </select>

                        <select required onChange={handlePublisher} className='w-[270px] bg-[#EFEEE9] border-0 rounded-md focus:ring-[#ffffff] focus:outline-none focus:ring focus:border-[#ffffff]'>
                            <option value="volvo" selected disabled>Publisher</option>
                            <option value="">All</option>
                            {uniquePublisher?.map((publisher, i) => <option key={i} value={publisher}>{publisher}</option>)}
                        </select>

                        <select required onChange={handlePublishYear} className='w-[270px] bg-[#EFEEE9] border-0 rounded-md focus:ring-[#ffffff] focus:outline-none focus:ring focus:border-[#ffffff]'>
                            <option value="volvo" selected disabled>Publish Year</option>
                            <option value="">All</option>
                            {uniqueYear?.map((Year, i) => <option key={i} value={Year}>{Year}</option>)}
                        </select>

                        <select required onChange={handleLanguage} className='w-[270px] bg-[#EFEEE9] border-0 rounded-md focus:ring-[#ffffff] focus:outline-none focus:ring focus:border-[#ffffff]'>
                            <option value="volvo" selected disabled>Language</option>
                            {uniqueLanguage?.map((Language, i) => <option key={i} value={Language}>{Language}</option>)}
                        </select>

                        {/* check box */}
                        <div>
                            <ul className="text-sm font-medium rounded-md bg-[#EFEEE9] p-1 pb-1.5">
                                <h3 className="ps-3 pt-2 pb-1">Category</h3>
                                {/* checkbox */}
                                <div className='flex'>
                                    <div>
                                        {
                                            uniqueGenre?.slice(0, 6).map(book => <li className="w-full">
                                                <div className="flex items-center ps-3">
                                                    <input type="checkbox" value={book} name='checkbox' className="w-4 h-4 text-[#364957] bg-white rounded focus:ring-[#364957]" />
                                                    <label className="w-full py-2 ms-2 text-sm font-medium ">
                                                        {book.split(' ').slice(0, 1)}
                                                    </label>
                                                </div>
                                            </li>)
                                        }
                                    </div>

                                    <div>
                                    {
    uniqueGenre?.slice(0, 6).map((book, i) => (
        <li key={i} className="w-full">
            <div className="flex items-center ps-3">
                <input type="checkbox" value={book} name='checkbox' className="w-4 h-4 text-[#364957] bg-white rounded focus:ring-[#364957]" />
                <label className="w-full py-2 ms-2 text-sm font-medium">
                    {book.split(' ').slice(0, 1)}
                </label>
            </div>
        </li>
    ))
}
{
    uniqueGenre?.slice(6, 12).map((book, i) => (
        <li key={i} className="w-full">
            <div className="flex items-center ps-3">
                <input type="checkbox" value={book} name='checkbox' className="w-4 h-4 text-[#364957] bg-white rounded focus:ring-[#364957]" />
                <label className="w-full py-2 ms-2 text-sm font-medium">
                    {book.split(' ').slice(0, 1)}
                </label>
            </div>
        </li>
    ))
}

                                    </div>
                                </div>
                            </ul>
                        </div>

                        {/* price range taker */}
                        <div className='bg-[#EFEEE9] rounded-md p-4 py-2 space-y-1'>
                            <h3 className='font-medium'>Price Range</h3>
                            <div className='flex justify-center text-[#364957]'>
                                <Box sx={{ width: 225 }} >
                                    <Slider
                                        getAriaLabel={() => 'Range'}
                                        value={value}
                                        onChange={handleChange}
                                        valueLabelDisplay="auto"
                                        getAriaValueText={valuetext}
                                        color="white"
                                        min={minNumber}
                                        max={maxNumber}
                                    />
                                </Box>
                            </div>
                        </div>

                    </div>
                </div>

                {/* filter option small device */}
                <div className='block lg:hidden lg:w-[22%] space-y-3'>
                    <h3 className='text-lg font-bold text-center'>Filter Option</h3>
                    <div className='space-y-2.5 flex flex-col lg:flex-none items-center lg:items-start'>

                        <select required onChange={handleAuthor} className='w-[270px] bg-[#EFEEE9] border-0 rounded-md focus:ring-[#ffffff] focus:outline-none focus:ring focus:border-[#ffffff]'>
                            <option value="volvo" selected disabled>Author</option>
                            <option value="">All</option>
                            {uniqueAuthor?.map((author, i) => <option key={i} value={author}>{author}</option>)}
                        </select>

                        <select required onChange={handlePublisher} className='w-[270px] bg-[#EFEEE9] border-0 rounded-md focus:ring-[#ffffff] focus:outline-none focus:ring focus:border-[#ffffff]'>
                            <option value="volvo" selected disabled>Publisher</option>
                            <option value="">All</option>
                            {uniquePublisher?.map((publisher, i) => <option key={i} value={publisher}>{publisher}</option>)}
                        </select>

                        <select required onChange={handlePublishYear} className='w-[270px] bg-[#EFEEE9] border-0 rounded-md focus:ring-[#ffffff] focus:outline-none focus:ring focus:border-[#ffffff]'>
                            <option value="volvo" selected disabled>Publish Year</option>
                            <option value="">All</option>
                            {uniqueYear?.map((Year, i) => <option key={i} value={Year}>{Year}</option>)}
                        </select>

                        <select required onChange={handleLanguage} className='w-[270px] bg-[#EFEEE9] border-0 rounded-md focus:ring-[#ffffff] focus:outline-none focus:ring focus:border-[#ffffff]'>
                            <option value="volvo" selected disabled>Language</option>
                            {uniqueLanguage?.map((Language, i) => <option key={i} value={Language}>{Language}</option>)}
                        </select>

                        {/* check box */}
                        <div>
                            <ul className="text-sm font-medium rounded-md bg-[#EFEEE9] w-[271px] pl-3 pb-1.5">
                                <h3 className="ps-3 pt-2 pb-1">Category</h3>
                                {/* checkbox */}
                                <div className='flex gap-x-2'>
                                    <div>
                                        {
                                            uniqueGenre?.slice(0, 6).map(book => <li className="w-full">
                                                <div className="flex items-center ps-3">
                                                    <input type="checkbox" value={book} name='checkbox' className="w-4 h-4 text-[#364957] bg-white rounded focus:ring-[#364957]" />
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
                                                    <input type="checkbox" name='checkbox' value={book} className="w-4 h-4 text-[#364957] bg-white rounded focus:ring-[#364957]" />
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
                        <div className='bg-[#EFEEE9] rounded-md p-6 py-2 space-y-1'>
                            <h3 className='font-medium'>Price Range</h3>
                            <div className='flex justify-center text-[#364957]'>
                                <Box sx={{ width: 225 }} >
                                    <Slider
                                        getAriaLabel={() => 'Range'}
                                        value={value}
                                        onChange={handleChange}
                                        valueLabelDisplay="auto"
                                        getAriaValueText={valuetext}
                                        color="white"
                                        min={minNumber}
                                        max={maxNumber}
                                    />
                                </Box>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Books */}
                <div className='w-full lg:w-[80%] space-y-3 flex flex-col items-center lg:items-start px-4 lg:px-0'>
                    <h3 className='text-xl md:text-lg font-bold'>Books</h3>
                    <div className='grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-5 md:gap-3 lg:gap-6 lg:gap-y-7'>
                        {
                            data?.result?.slice(0, limit).map((book, idx) =>
                                <Link
                                    href={''}
                                    key={idx}
                                    className="w-[189px] md:w-auto lg:w-[185px] h-auto bg-[#EFEEE9]  rounded-md "
                                    title={book?.Title}
                                >
                                    <div className="">
                                        <Image
                                            src={book?.coverImage}
                                            className="w-full h-[220px] rounded-t-md"
                                            height={150}
                                            width={220}
                                            alt={book?.Title || 'Book Cover'}
                                        />
                                        <div className="text-left pl-2 pb-[5.5px] pt-[4.5px] relative">
                                            <div className='flex items-center justify-between pr-2'>
                                                <h1 className="font-medium">{book?.Price}$</h1>
                                                <span className='bg-[#364957] rounded-tl-2xl rounded-bl-2xl rounded-br-md text-white p-2 absolute right-0 bottom-0'><FaCartPlus className='text-lg' /></span>
                                            </div>

                                        </div>
                                    </div>
                                </Link>
                            )
                        }
                    </div>
                </div>

            </div>

            <div className='flex flex-col md:flex-row items-center justify-center md:justify-between  pt-3.5 md:pt-3 gap-y-2 px-0 md:px-4 lg:px-0'>

                <button type='submit' className='bg-[#364957] text-white w-[270px] md:w-[21%] py-2 rounded-md flex items-center justify-between px-3 gap-x-1'>
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

        </form >
    )
}
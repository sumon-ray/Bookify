"use client"
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';



export default function Details({ params }) {

    const { data, error, isLoading } = useQuery({
        queryKey: ['details of book'],
        queryFn: async () => {
            const res = await axios(`https://bookify-server-lilac.vercel.app/book/${params?.id}`)
            const data = await res.data
            return data
        }
    })

    const { title, author, genre, condition, description, coverImage, exchangeStatus, publishYear, totalPage, location, rating } = data || {}

    return (
        <section className="space-y-10">

            {/* title of details */}
            <div className="bg-[#EFEEE9] p-6">
                <h1 className="text-3xl font-black uppercase text-center">Book Details</h1>
            </div>

            {/* img and details */}
            <div className="flex gap-x-10 max-w-6xl mx-auto pt-4 pb-8">

                {/* img */}
                <figure className="w-[40%] bg-[#EFEEE9] flex items-center justify-center">
                    <img src={coverImage} alt="" className='w-[90%] h-[400px]' />
                </figure>
                {/* details */}
                <div className="w-[60%] py-3 space-y-2">
                    <h1 className="font-bold text-2xl capitalize">{title}</h1>
                    <div className="flex items-center mb-5">
                        <svg className="w-4 h-4 ms-1 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="w-4 h-4 ms-1 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="w-4 h-4 ms-1 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="w-4 h-4 ms-1 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    </div>
                    <p><span className="font-bold mr-1">Author:</span>{author}</p>
                    <p><span className="font-bold mr-1">category:</span>{genre}</p>
                    <p><span className="font-bold mr-1">Condition:</span>{condition}</p>
                    <p><span className="font-bold mr-1">Exchange:</span>{exchangeStatus}</p>
                    <p><span className="font-bold mr-1">Published:</span>{publishYear}</p>
                    <p><span className="font-bold mr-1">Total Page:</span>{totalPage}</p>
                    <p><span className="font-bold mr-1">location:</span>{location}</p>
                    <p className="text-balance"><span className="font-bold mr-1">Description:</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam pariatur voluptatibus maxime ab veritatis id inventore necessitatibus quae in sapiente dolores deserunt, sit officiis earum voluptate perspiciatis tempore adipisci non!</p>
                    {/* button */}
                    <div className='pt-1'>
                        <button type="button" className="text-white bg-black  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 ">Dark</button>
                        <button type="button" class="text-black bg-white border border-black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2">Light</button>
                    </div>

                </div>

            </div>

            {/* tabs */}
            <div className='max-w-6xl mx-auto pb-20'>

                <div className="text-sm font-medium text-center text-black border-b border-[#00000099] dark:text-gray-400 dark:border-gray-700">
                    <ul className="flex flex-wrap justify-center -mb-px">
                        <li className="me-2">
                            <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Summary</a>
                        </li>
                        <li className="me-2">
                            <a href="#" className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Specification</a>
                        </li>
                        <li className="me-2">
                            <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Author</a>
                        </li>
                    </ul>
                </div>

            </div>

        </section>
    )
}

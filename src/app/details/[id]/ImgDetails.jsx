import axios from "axios"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import toast from "react-hot-toast"
import { FaEdit } from "react-icons/fa"
import { TbExchange } from "react-icons/tb"


export default function ImgDetails({ Book }) {
    // const router = useRouter()
    const { title, author, genre, condition, owner, coverImage, exchangeStatus, publishYear, totalPage, location, rating, AuthorEmail, _id } = Book || {}

    const session = useSession()

    const addToTakeBook = () => {
        // Check if the user is trying to exchange their own book
        if (AuthorEmail === session?.data?.user?.email) {
            toast.error("You cannot exchange your own book!");
            return;
        }

        // POST request to the server using Axios
        axios.post("https://bookify-server-lilac.vercel.app/take-book", {
            ...Book,
            requester: session?.data?.user?.email,
            bookId: _id,
        })
            .then(response => {
                // Handle success response
                toast.success("The book has been added to your exchange list!")
                // router.push('/exchange')
            })
            .catch(error => {
                // Handle error response
                toast.error("Something went wrong! Please try again.");
            });
    };


    return (

        <div className="flex flex-col md:flex-row gap-x-5 max-w-6xl mx-auto pt-1 pb-5 px-7 ">

            {/* img */}
            <figure className="md:w-[40%] bg-[#EFEEE9] px-7 py-[18px] flex items-center justify-center border border-black rounded-md">
                <img src={coverImage} alt="" className='w-full h-[370px] rounded-md' />
            </figure>
            <div></div>
            {/* details */}
            <div className="md:w-[60%] py-2 space-y-2 pl-1 md:pl-0">
                <h1 className="font-bold text-xl md:text-2xl capitalize ">{title}</h1>

                {/* star */}
                <div className="flex items-center mb-5">
                    <svg className={`w-4 h-4 ms-1 ${rating >= 1 ? 'text-yellow-300' : 'text-gray-300'} `} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className={`w-4 h-4 ms-1 ${rating >= 2 ? 'text-yellow-300' : 'text-gray-300'} `} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className={`w-4 h-4 ms-1 ${rating >= 3 ? 'text-yellow-300' : 'text-gray-300'} `} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className={`w-4 h-4 ms-1 ${rating >= 4 ? 'text-yellow-300' : 'text-gray-300'} `} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className={`w-4 h-4 ms-1 ${rating >= 5 ? 'text-yellow-300' : 'text-gray-300'} `} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                </div>

                <p><span className="font-bold mr-1">Writer:</span>{author}</p>
                <p><span className="font-bold mr-1">Owner:</span>{owner}</p>
                <p><span className="font-bold mr-1">Category:</span>{genre}</p>
                <p><span className="font-bold mr-1">Condition:</span>{condition}</p>
                <p><span className="font-bold mr-1">Exchange:</span>{exchangeStatus}</p>
                <p><span className="font-bold mr-1">Published:</span>{publishYear}</p>
                <p><span className="font-bold mr-1">Total Page:</span>{totalPage}</p>
                <p><span className="font-bold mr-1">Rating:</span>{rating}</p>
                <p><span className="font-bold mr-1">location:</span>{location}</p>
                {/* button */}
                <div className='pt-1 flex items-center'>
                    <button onClick={addToTakeBook} type="button" className="btn_1 flex items-center">
                        <TbExchange />Exchange
                    </button>
                    <button type="button" className="btn_2 flex items-center"><FaEdit className="-mt-[0.5px]" />Edit</button>
                </div>

            </div>

        </div>

    )
}

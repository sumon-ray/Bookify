'use client'
import Image from "next/image";
import img from '../../assets/images/Our-books/read.png'
import { useQuery } from "@tanstack/react-query";
import CategoryCard from "./CategoryCard";
import axios from "axios";


export default function Categories() {

    const { data, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await axios('https://bookify-server-lilac.vercel.app/rent')
            const data = await res.data.result
            return data
        }
    })


    return (
        <div className="max-w-7xl mx-auto space-y-12 px-6 pt-4 md:pt-28">
            {/* view all categories */}
            <div className="flex items-center justify-center lg:justify-between dark:text-white">
                <h1 className="text-xl font-bold">Top Categories</h1>
                <div className=" hidden lg:flex items-center justify-between w-3/4">
                    <div className="w-full border border-[#EFEEE9] dark:border-[#0A0A0C] -mr-5"></div>
                    <Image src={img} height={50} width={100} className="w-24 h-[75px] -mt-5" alt="Read" />
                </div>
            </div>

            {/* categories grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 ">
                {

                data?.slice(0, 6)?.map(book => <CategoryCard key={book?._id} img={book?.coverImage} genre={book?.Genre} />)

                }
            </div>
        </div>
    )
}

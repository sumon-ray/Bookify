'use client'
import Image from "next/image";
import img from '../../assets/images/Our-books/read.png'
import img1 from "../../assets/images/Our-books/s.png"
import img2 from "../../assets/images/Our-books/R.png"
import img3 from "../../assets/images/Our-books/a.png"
import img4 from "../../assets/images/Our-books/D.png"
import img5 from "../../assets/images/Our-books/j.jpg"
import img6 from "../../assets/images/Our-books/T.png"
import { useQuery } from "@tanstack/react-query";
import CategoryCard from "./CategoryCard";
import axios from "axios";


export default function Categories() {

    const { data } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await axios('https://bookify-server-lilac.vercel.app/books')
            const data = await res.data
            return data
        }
    })

    // const uniqueCategories = [...new Set(data?.map(book => book?.genre))];



    return (
        <div className="max-w-7xl mx-auto space-y-12 px-6">
            {/* view all categories */}
            <div className="flex items-center justify-center lg:justify-between dark:text-white">
                <h1 className="text-xl font-bold">Top Categories</h1>
                <div className=" hidden lg:flex items-center justify-between w-3/4">
                    <div className="w-full border border-[#EFEEE9] dark:border-[#0A0A0C] -mr-5"></div>
                    <Image src={img} height={50} width={100} className="w-24 h-[75px] -mt-5" />
                </div>
            </div>

            {/* categories grid */}
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-12">
                <CategoryCard img={img2} genre={'Learn'}/>
                <CategoryCard img={img3} genre={'Motivation'}/>
                <CategoryCard img={img4} genre={'Family'}/>
                <CategoryCard img={img5} genre={'programming'}/>
                <CategoryCard img={img1} genre={'Idea'}/>
                <CategoryCard img={img6} genre={'Cartoon'}/>
            </div>

        </div>
    )
}

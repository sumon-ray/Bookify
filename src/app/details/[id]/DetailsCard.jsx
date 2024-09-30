'use client'
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";

export default function DetailsCard({ genre }) {

    const { data } = useQuery({
        queryKey: ['details card'],
        queryFn: async () => {
            const res = await axios(`https://bookify-server-lilac.vercel.app/books?genre=${genre}`)
            const data = await res.data
            return data;
        }
    })

    // const { title, author, genre, condition, description, coverImage, exchangeStatus, publishYear, totalPage, location, rating } 
    // = data || {}


    return (
        <div className="max-w-6xl mx-auto flex items-center flex-wrap gap-8">
            {
                data?.map(book => <div key={book?._id} className="max-w-xs overflow-hidden bg-white px-5 pt-5 pb-2 rounded-xl border">
                    <Image
                        className="object-cover w-full rounded-xl h-[400px]"
                        src={book?.coverImage}
                        height={1000}
                        width={1000} />
                    <div className="text-left ">
                        <h1 className="font-black text-center pt-1.5">{book?.title}</h1>
                    </div>
                </div>)
            }
        </div>
    )
}

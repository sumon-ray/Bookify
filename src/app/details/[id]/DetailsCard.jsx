'use client'
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

export default function DetailsCard({ genre, id }) {

    const { data } = useQuery({
        queryKey: ['details card'],
        queryFn: async () => {
            const res = await axios(`https://bookify-server-lilac.vercel.app/books?genre=${genre}`)
            const data = await res.data
            return data;
        }
    })
    const relatedBook = data?.filter(v => v._id !== id)


    return (
        <div className="max-w-6xl mx-auto flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-16">
                {
                    relatedBook?.map(book => <Link 
                        href={`/details/${book?._id}`}
                        key={book?._id}
                        className="w-44 h-[250px] bg-[#EFEEE9] flex flex-col justify-center items-center rounded-lg p-4">
                        <div className="space-y-3">
                            <Image
                                src={book?.coverImage}
                                className="w-36 h-40 rounded-lg"
                                height={150}
                                width={200}
                                alt={book?.title || 'Book Cover'}
                            />
                            <div className="pl-1 text-center text-black">
                                <h1 className="font-bold md:uppercase" title={book?.title}>
                                    {book?.title?.split(' ').slice(0, 2).join(' ')}
                                </h1>
                                <h1 className="font-normal">{book?.author?.split(' ').slice(0, 2).join(' ')}</h1>
                            </div>
                        </div>
                    </Link>)
                }
            </div>
        </div>
    )
}




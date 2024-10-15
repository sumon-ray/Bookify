'use client'
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { MdDelete } from "react-icons/md";

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
        <div className="max-w-6xl mx-auto ">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
                {
                    relatedBook?.map((book,i) =>  <Link
                        href={`/details/${book?._id}`}
                        key={i}
                        className="w-auto h-auto bg-[#EFEEE9]  rounded-md "
                      >
                        <div className="space-y-3">
                          <Image
                            src={book?.coverImage}
                            className="w-full h-[210px] rounded-t-md"
                            height={150}
                            width={200}
                            alt={book?.title || 'Book Cover'}
                          />
                          <div className="text-left pl-2 pb-2 ">
                            <h1 className="font-bold md:uppercase" title={book?.title}>
                              {book?.title.slice(0, 13)}...
                            </h1>
            
                            <div className='flex items-center justify-between'>
                              <h1 className="font-medium">{book?.owner}</h1>
                              {/* <div><MdDelete className='text-xl' /></div> */}
                            </div>
            
                          </div>
                        </div>
                      </Link>)
                }
            </div>
        </div>
    )
}




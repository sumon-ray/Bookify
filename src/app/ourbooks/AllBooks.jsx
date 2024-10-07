"use client"
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'lucide-react'
import Image from 'next/image'



export default function AllBooks() {

    const { data } = useQuery({
        queryKey: ['rent data'],
        queryFn: async () => {
            const res = await axios(`https://bookify-server-lilac.vercel.app/rent`)
            const data = await res.data
            return data
        }
    })

    console.log(data)



    return (
        <div className='pt-7 max-w-7xl mx-auto flex gap-10'>

            {/* filter option */}
            <div className='w-[18%] space-y-2'>
                <h3 className='text-lg font-bold'>Filter Option</h3>
                <div className='border '>

                </div>
            </div>

            {/* Books */}
            <div className='w-[82%] space-y-2'>
                <h3 className='text-lg font-bold'>Books</h3>
                <div className='grid grid-cols-5 gap-8'>
                    {
                        data?.map((book, idx) => 
                        <div
                            href={``}
                            key={idx}
                            className="w-44 h-[284px] bg-[#ffffff] flex flex-col justify-center items-center rounded-lg p-4">
                            <div className="space-y-3">
                                <Image
                                    src={book?.coverImage}
                                    className="w-36 h-44 rounded-lg"
                                    height={150}
                                    width={200}
                                    alt={book?.title || 'Book Cover'}
                                />
                                <div className="pl-1 text-center">
                                    <h1 className="font-bold md:uppercase" title={book?.Title}>
                                        {book?.Title?.split(' ').slice(0,2).join(' ')}
                                    </h1>
                                    <h1 className="font-normal">{book?.Author?.split(' ').slice(0,2).join(' ')}</h1>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>

        </div>
    )
}

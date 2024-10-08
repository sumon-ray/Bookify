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





    return (
        <div className='pt-7 max-w-7xl mx-auto flex gap-10'>

            {/* filter option */}
            <div className='w-[18%] space-y-2'>
                <h3 className='text-lg font-bold'>Filter Option</h3>
                <div className='h-96 space-y-4'>

                    <select className='w-56 border border-[#EFEEE9] rounded-md'>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>

                    <select className='w-56 border border-[#EFEEE9] rounded-md'>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>

                    <select className='w-56 border border-[#EFEEE9] rounded-md'>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>

                    <select className='w-56 border border-[#EFEEE9] rounded-md'>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>


                    {/* check box */}
                    <div>
                        <ul className="w-56 text-sm font-medium border rounded-md">
                            <h3 className="ps-3 pt-1">Category</h3>
                            <li className="w-full">
                                <div className="flex items-center ps-3">
                                    <input type="checkbox" className="w-4 h-4 text-[#364957] bg-white rounded focus:ring-[#364957]" />
                                    <label className="w-full py-3 ms-2 text-sm font-medium ">
                                        Vue JS
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>

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
                                className="w-44 h-[250px] bg-[#ffffff] flex flex-col justify-center items-center rounded-lg p-4 border ">
                                <div className="space-y-3">
                                    <Image
                                        src={book?.coverImage}
                                        className="w-36 h-40 rounded-lg"
                                        height={150}
                                        width={200}
                                        alt={book?.title || 'Book Cover'}
                                    />
                                    <div className="pl-1 text-center">
                                        <h1 className="font-bold md:uppercase" title={book?.Title}>
                                            {book?.Title?.split(' ').slice(0, 2).join(' ')}
                                        </h1>
                                        <h1 className="font-normal">{book?.Author?.split(' ').slice(0, 2).join(' ')}</h1>
                                        <div>

                                        </div>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
            </div>

        </div>
    )
}

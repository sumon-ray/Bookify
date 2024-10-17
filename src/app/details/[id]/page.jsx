"use client"
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ImgDetails from './ImgDetails';
import DetailsTab from './DetailsTab';
import DetailsCard from './DetailsCard';
import { ImBooks } from "react-icons/im";
import { FaBook } from 'react-icons/fa';



export default function Details({ params }) {

    const { data  } = useQuery({
        queryKey: ['details of book'],
        queryFn: async () => {
            const res = await axios(`https://bookify-server-lilac.vercel.app/book/${params?.id}`)
            const data = await res.data
            return data 
        }
    })
 
    return (
        <section className="space-y-8 mt-0 md:mt-20 mb-16 md:mb-20">
            {/* title */}
            <div className="bg-[#EFEEE9] p-6 ">
                <h1 className="text-3xl font-black uppercase text-center">Book Details</h1>
            </div>

            <ImgDetails Book={data} />
            <DetailsTab Book={data} />

            {/* related book title */}
            <div className='p-2 rounded-tl-2xl rounded-br-2xl border border-black max-w-72 mx-auto'>
                <h1 className='flex items-center justify-center text-2xl uppercase font-bold '>
                    <FaBook className='text-xl -mb-0.5' /> Related Books
                </h1>
            </div>

            <DetailsCard genre={data?.genre} id={params?.id} />

        </section>
    )
}

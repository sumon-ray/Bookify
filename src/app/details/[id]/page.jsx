"use client"
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import ImgDetails from './ImgDetails';
import DetailsTab from './DetailsTab';


export default function Details({ params }) {


    const { data } = useQuery({
        queryKey: ['details of book'],
        queryFn: async () => {
            const res = await axios(`https://bookify-server-lilac.vercel.app/book/${params?.id}`)
            const data = await res.data
            return data
        }
    })


    return (
        <section className="space-y-10 pb-20">
            {/* title of details */}
            <div className="bg-[#EFEEE9] p-6">
                <h1 className="text-3xl font-black uppercase text-center">Book Details</h1>
            </div>
            <ImgDetails Book={data} />
            <DetailsTab Book={data} />
        </section>
    )
}

"use client"
import { useQuery } from "@tanstack/react-query";
import MyBookCard from "./MyBookCard";
import axios from "axios";

export default function MyBooks() {

    // for now show only classic category data update on future
    const { data, error, isLoading } = useQuery({
        queryKey: ['My books'],
        queryFn: async () => {
            const res = await axios(`https://bookify-server-lilac.vercel.app/books?genre=Classic`)
            const data = await res.data
            return data
        }
    })

    return (
        <section className="space-y-12">

            {/* my book page title and filter */}
            <div className="bg-[#EFEEE9] flex items-center justify-between rounded-md p-6">
                <h1 className="text-3xl font-black uppercase text-center">My books</h1>
                {/* filter function */}
                <div>
                    <form className="max-w-sm mx-auto">
                        <select id="countries" className="bg-gray-50  border-[#EFEEE9] border text-black font-bold text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 ">
                            <option value="US">Fiction</option>
                            <option value="CA">Classic</option>
                            <option value="FR">Modernist</option>
                        </select>
                    </form>
                </div>
            </div>

            {/* cards */}
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-x-16 gap-y-10 pb-12">

                {
                    data?.map((book, idx) => <MyBookCard key={idx} book={book}/>)
                }

            </div>

        </section>
    )
}

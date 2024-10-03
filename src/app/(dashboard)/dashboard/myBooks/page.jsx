'use client'
import { useQueries, useQuery } from "@tanstack/react-query";
import axios from "axios";
import img from '../../../../assets/images/About/studying.png'
import Image from "next/image";
import { IoAdd } from "react-icons/io5";

export default function MyBooks() {


    const {data}=useQuery({
        queryKey:['my books']
    })

    return (
        <section>
            {/* banner and some title */}
            <div className="bg-[#EFEEE9] rounded-md p-5 flex items-center justify-between px-20">

                <div className="space-y-3 ">
                    <h3 className="text-5xl font-bold">Falling in love <br />one page at a time</h3>
                    <p className="text-balance">Lost in the pages, where every book is a new  adventure <br />  and love for stories grows deeper with each turn</p>
                    <button className="flex items-center justify-center gap-0.5 bg-black text-white font-medium px-4 py-1.5 rounded-lg">
                        <IoAdd className="text-white text-lg" />
                        Add Book</button>
                </div>

                <figure>
                    <Image height={10} width={300} className="h-[270px] w-[520px]" src={img} alt="" />
                </figure>

            </div>

            {/* grid */}
            <div className="grid grid-cols-4">

                {/* card */}

                <div>
                    <Image src="" alt="" />
                </div>

            </div>

        </section>
    )
}

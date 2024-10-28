// import img from "./writers/w2.jpg"

import Image from "next/image";


export default function Writers() {
    return (
        <div className="space-y-4 max-w-7xl mx-auto pb-10 px-5 lg:px-3 ">

            {/* title */}
            <div className="flex items-center justify-center xl:justify-between dark:text-white">
                <h2 className="text-xl font-bold">Writers</h2>
                <h2 className="hidden xl:block">See more...</h2>
            </div>

            <div className="flex items-center justify-center xl:justify-between gap-10 flex-wrap">

                <figure>
                    <Image height={100} width={100} unoptimized className="size-[135px] object-center object-cover rounded-full" src={`./writers/w2.jpg`} />
                </figure>

                <figure>
                    <Image height={100} width={100} unoptimized className="size-[135px] object-center object-cover rounded-full" src={`./writers/w3.jpeg`} />
                </figure>

                <figure>
                    <Image height={100} width={100} unoptimized className="size-[135px] object-center object-cover rounded-full" src={`./writers/w4.jpeg`} />
                </figure>

                <figure>
                    <Image height={100} width={100} unoptimized className="size-[135px] object-center object-cover rounded-full" src={`./writers/w5.jpg`} />
                </figure>

                <figure>
                    <Image height={100} width={100} unoptimized className="size-[135px] object-center object-cover rounded-full" src={`./writers/w6.jpeg`} />
                </figure>

                <figure>
                    <Image height={100} width={100} unoptimized className="size-[135px] object-center object-cover rounded-full" src={`./writers/w11.jpeg`} />
                </figure>

                <figure>
                    <Image height={100} width={100} unoptimized className="size-[135px] object-center object-cover rounded-full" src={`./writers/w8.jpeg`} />
                </figure>

                {/*                 
                <figure>
                    <Image height={100} width={100} unoptimized className="size-[110px] object-center object-cover rounded-full" src={``} />
                </figure> */}


            </div>


        </div>
    )
}

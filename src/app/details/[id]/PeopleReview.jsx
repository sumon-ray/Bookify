import { Rating } from "@mui/material";
import Image from "next/image";

export default function PeopleReview({ data }) {
    return (
        <div>
            <div className="p-6 space-y-2">
                <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
                    <Image src={data?.profile} height={10} width={10} alt="" className="self-center flex-shrink-0 w-14 h-14 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-300" />
                    <div className="flex flex-col">
                        <h4 className="text-lg font-semibold text-center md:text-left">{data?.name}</h4>
                        <Rating name="read-only" className="pt-2" value={data?.rating} size="small" readOnly />
                    </div>
                </div>

                <div>
                    {data?.review}
                </div>

            </div>
        </div>
    )
}

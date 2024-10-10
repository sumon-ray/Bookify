import { Rating } from "@mui/material";

export default function PeopleReview() {
    return (
        <div>
            <div className="p-6 space-y-2">
                <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
                    <img src="https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg=" alt="" className="self-center flex-shrink-0 w-14 h-14 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-300" />
                    <div className="flex flex-col">
                        <h4 className="text-lg font-semibold text-center md:text-left">Leroy Jenkins</h4>
                        <Rating name="read-only" className="pt-2" value={2.5} precision={0.5} size="small" readOnly />
                    </div>
                </div>

                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi corporis reiciendis modi fuga magnam unde debitis eum ab amet veritatis, repudiandae expedita! Qui, illum rerum modi voluptates impedit ab totam.
                </div>

            </div>
        </div>
    )
}

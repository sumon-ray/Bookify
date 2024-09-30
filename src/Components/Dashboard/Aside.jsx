import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { FaBookBookmark } from "react-icons/fa6";
import { IoAddCircleOutline } from "react-icons/io5";



export default function Aside() {
    return (
        <>

            <aside className="fixed top-0 left-0 z-40 min-w-[165px] h-screen pt-20 transition-transform -translate-x-full bg-white  sm:translate-x-0">

                <div className="h-full px-3 overflow-y-auto">
                    <ul className="space-y-2 font-medium">
                        {/* 
                        <li>
                            <div className="flex items-center gap-1 p-2 rounded-lg hover:bg-gray-100">
                                <CgProfile className="text-xl" />
                                <span className="font-bold">My Profile</span>
                            </div>
                        </li> */}

                        <li>
                            <Link href={`/dashboard/myBooks`} className="flex items-center gap-1 p-2 rounded-lg hover:bg-gray-100">
                                <FaBookBookmark />
                                <span className="font-bold">My Books</span>
                            </Link>
                        </li>

                        <li>
                            <Link href={`/dashboard/addBook`} className="flex items-center gap-1 p-2 rounded-lg hover:bg-gray-100">
                                <IoAddCircleOutline className="text-xl" />
                                <span className="font-bold">Add Book</span>
                            </Link>
                        </li>

                    </ul>
                </div>

            </aside>

        </>
    )
}

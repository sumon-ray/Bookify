import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { FaBookBookmark } from "react-icons/fa6";
import { IoAddCircleOutline } from "react-icons/io5";



export default function Aside() {
    return (
        <>

            <aside className="fixed top-0 left-0 z-40 min-w-[165px] h-screen pt-[78px] transition-transform -translate-x-full bg-white  md:translate-x-0">

                <div className="h-full pl-3 pr-2 overflow-y-auto">
                    <ul className="space-y-1 font-medium">

                        
                        <li>
                            <div className="flex items-center gap-1 p-2 ">
                                <CgProfile className="text-xl" />
                                <span className="font-bold">My Profile</span>
                            </div>
                        </li>
                        
                        <li>
                            <Link href={`/dashboard/myBooks`} className="flex items-center gap-1 p-2 ">
                                <FaBookBookmark />
                                <span className="font-bold">My Books</span>
                            </Link>
                        </li>

                        <li>
                            <Link href={`/dashboard/addBook`} className="flex items-center gap-1 p-2 ">
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

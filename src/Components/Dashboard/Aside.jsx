import Link from "next/link";
import { GiBookmarklet } from "react-icons/gi";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineAddCircleOutline, MdOutlineMessage } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdMenuBook } from "react-icons/md";
import { PiBooks } from "react-icons/pi";
import { TbExchange, TbUserShield } from "react-icons/tb";





export default function Aside() {
    return (
        <>

            <aside className="fixed top-0 left-0 z-40 min-w-[175px] h-screen pt-[78px] transition-transform -translate-x-full bg-white  md:translate-x-0">

                <div className="h-full pl-3 pr-2 overflow-y-auto relative">

                    <ul className="space-y-1 font-medium">

                        <li>
                            <Link href={``} className="flex items-center gap-1 px-2 py-1 ">
                                <LuLayoutDashboard />
                                <span className="font-bold">Dashboard</span>
                            </Link>
                        </li>

                        <li>
                            <Link href={`/dashboard`} className="flex items-center gap-1 px-2 py-1">
                                <IoHomeOutline />
                                <span className="font-bold">Home</span>
                            </Link>
                        </li>

                        <li>
                            <Link href={`/dashboard/myBooks`} className="flex items-center gap-1 px-2 py-1 ">
                                <PiBooks />
                                <span className="font-bold">My Books</span>
                            </Link>
                        </li>

                        <li>
                            <Link href={`/dashboard/addBook`} className="flex items-center gap-1 p-2 ">
                                <MdOutlineAddCircleOutline className="text-xl" />
                                <span className="font-bold">Add Book</span>
                            </Link>
                        </li>

                        <li>
                            <Link href={``} className="flex items-center gap-1 p-2 ">
                                <TbExchange className="text-xl" />
                                <span className="font-bold">Exchange</span>
                            </Link>
                        </li>

                        <li>
                            <Link href={``} className="flex items-center gap-1 p-2 ">
                                <MdMenuBook OpenReader className="text-xl" />
                                <span className="font-bold">Our Books</span>
                            </Link>
                        </li>

                        <li>
                            <Link href={``} className="flex items-center gap-1 p-2 ">
                                <MdOutlineMessage OpenReader className="text-xl" />
                                <span className="font-bold">Message</span>
                            </Link>
                        </li>

                        <li>
                            <Link href={'/dashboard/users'} className="flex items-center gap-1 p-2 ">
                                <TbUserShield OpenReader className="text-xl" />
                                <span className="font-bold">Users</span>
                            </Link>
                        </li>

                    </ul>

                    <div className="bg-[#EFEEE9] rounded-md text-black text-center p-3 space-y-0.5 absolute bottom-8">
                        <h1 className="font-bold flex flex-col items-center">
                            <GiBookmarklet className="text-3xl font-bold -mb-0.5" />
                            Bookify pro</h1>
                        <p className="text-xs pb-1.5">Get access to all <br />
                            features on tetumbas</p>
                        <button className="bg-[#B7B7B7BF bg-white font-semibold py-1 px-3 rounded-md ">Get pro</button>
                    </div>

                </div>

            </aside>

        </>
    )
}

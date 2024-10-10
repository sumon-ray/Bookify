"use client"

import { usePathname } from 'next/navigation';
import Link from "next/link";
import { GiBookmarklet } from "react-icons/gi";
import { IoHomeOutline } from "react-icons/io5";
import { MdMenuBook, MdOutlineAddCircleOutline, MdOutlineMessage } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiBooks } from "react-icons/pi";
import { TbExchange, TbUserShield } from "react-icons/tb";
import { FiBookOpen } from "react-icons/fi";
import PremiumBoard from "./PremiumBoard";

export default function Aside() {
  const pathname = usePathname(); 

  const checkActive = (route) => {
    return pathname === route ? 'text-[#FFFFFF] bg-[#364957] rounded-md' : 'text-black';
  };

  return (
    <aside className="fixed top-1 left-0 z-40 min-w-[175px] h-screen pt-[78px] transition-transform -translate-x-full bg-white md:translate-x-0">
      <div className="h-full pl-3 pr-2 overflow-y-auto relative">
        <ul className="space-y-1 font-medium">
          <li>
            <Link href={`/dashboard/dashboardd`} className={`flex items-center gap-2 px-2 py-1 ${checkActive('/dashboard/dashboardM')}`}>
              <LuLayoutDashboard />
              <span className="font-bold">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className={`flex items-center gap-2 px-2 py-1 ${checkActive('/dashboard')}`}>
              <IoHomeOutline />
              <span className="font-bold">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/myBooks" className={`flex items-center gap-2 px-2 py-1 ${checkActive('/dashboard/myBooks')}`}>
              <PiBooks />
              <span className="font-bold">My Books</span>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/addBook" className={`flex items-center gap-2 p-2 ${checkActive('/dashboard/addBook')}`}>
              <MdOutlineAddCircleOutline className="text-xl" />
              <span className="font-bold">Add Book</span>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/exchange" className={`flex items-center gap-2 p-2 ${checkActive('/dashboard/exchange')}`}>
              <TbExchange className="text-xl" />
              <span className="font-bold">Exchange</span>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/ourBooks" className={`flex items-center gap-2 p-2 ${checkActive('/dashboard/ourBooks')}`}>
              <MdMenuBook className="text-xl" />
              <span className="font-bold">Our Books</span>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/messages" className={`flex items-center gap-2 p-2 ${checkActive('/dashboard/messages')}`}>
              <MdOutlineMessage className="text-xl" />
              <span className="font-bold">Message</span>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/users" className={`flex items-center gap-2 p-2 ${checkActive('/dashboard/users')}`}>
              <TbUserShield className="text-xl" />
              <span className="font-bold">Users</span>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/myshelf" className={`flex items-center gap-2 p-2 ${checkActive('/dashboard/myshelf')}`}>
              <FiBookOpen className="text-xl" />
              <span className="font-bold">My Shelf</span>
            </Link>
          </li>
        </ul>

        <PremiumBoard />
      </div>
    </aside>
  );
}

"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoHomeOutline } from "react-icons/io5";
import { PiBooks, PiBooksDuotone } from "react-icons/pi";
import { MdOutlineAddCircleOutline, MdOutlineMessage } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { TbExchange, TbUserShield } from "react-icons/tb";
import PremiumBoard from "./PremiumBoard";
import useUsers from "@/hooks/useUsers";
import { useSession } from "next-auth/react";
import { HiUsers } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";

export default function Aside() {
  const pathname = usePathname();
  const session = useSession();
  const { data: users, isLoading, isError, error } = useUsers();
  const loggedInEmail = session?.data?.user?.email;
  const loggedInUser = users?.find((user) => user.email === loggedInEmail);

  const checkActive = (route) => {
    return pathname === route ||
      (route === "/dashboard" && pathname === "/dashboard/home")
      ? "text-[#FFFFFF] bg-[#364957] rounded-md"
      : "text-black";
  };

  // Motion variants for hover effect
  const hoverEffect = {
    rest: { scale: 1, opacity: 1 },
    hover: {
      scale: 1.05,
      opacity: 1,
      transition: { type: "spring", stiffness: 400 },
    },
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <aside className="fixed top-1 left-0 z-40 w-[184px] h-screen pt-[78px] transition-transform -translate-x-full bg-white dark:bg-[#272727E6] dark:shadow-[#2f2c2cfb] dark:text-gray-300  md:translate-x-0">
      <div className="h-full pl-3 pr-2 overflow-y-auto relative">
        <ul className="space-y-1 font-medium">
          {loggedInUser?.role === "admin" && (
            <motion.li
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={hoverEffect}
            >
              <Link
                href="/dashboard/dashboardd"
                className={`flex items-center gap-2 px-2 py-1 ${checkActive(
                  "/dashboard/dashboardd"
                )}`}
              >
                <RxDashboard className="dark:text-white" />
                <span className="font-bold dark:text-white">Dashboard</span>
              </Link>
            </motion.li>
          )}

          <motion.li
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={hoverEffect}
          >
            <Link
              href="/dashboard"
              className={`flex items-center gap-2 px-2 py-1 ${checkActive(
                "/dashboard"
              )}`}
            >
              <IoHomeOutline className="dark:text-white" />
              <span className="font-bold dark:text-white">Home</span>
            </Link>
          </motion.li>

          <motion.li
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={hoverEffect}
          >
            <Link
              href="/dashboard/myBooks"
              className={`flex items-center gap-2 p-2 ${checkActive(
                "/dashboard/myBooks"
              )}`}
            >
              <PiBooksDuotone className="text-xl dark:text-white" />
              <span className="font-bold dark:text-white">My Book</span>
            </Link>
          </motion.li>
          <motion.li
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={hoverEffect}
          >
            
            <Link
              href="/dashboard/addBook"
              className={`flex items-center gap-2 p-2 ${checkActive(
                "/dashboard/addBook"
              )}`}
            >
              <MdOutlineAddCircleOutline className="text-xl dark:text-white" />
              <span className="font-bold dark:text-white">Add Book</span>
            </Link>
          </motion.li>

          <motion.li
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={hoverEffect}
          >
            <Link
              href="/dashboard/exchange-request"
              className={`flex items-center gap-2 p-2 ${checkActive(
                "/dashboard/exchange-request"
              )}`}
            >
              <TbExchange className="text-xl dark:text-white" />
              <span className="font-bold dark:text-white">Request</span>
            </Link>
          </motion.li>
          {loggedInUser?.role === "admin" && (
            <motion.li
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={hoverEffect}
            >
              <Link
                href="/dashboard/users"
                className={`flex items-center gap-2 p-2 ${checkActive(
                  "/dashboard/users"
                )}`}
              >
                <HiUsers className="text-xl dark:text-white" />
                <span className="font-bold dark:text-white">Users</span>
              </Link>
            </motion.li>
          )}
          <motion.li
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={hoverEffect}
          >
            <Link
              href="/dashboard/profile"
              className={`flex items-center gap-2 px-2 py-1 ${checkActive(
                "/dashboard/profile"
              )}`}
            >
              <FaUserCircle className="dark:text-white" />
              <span className="font-bold dark:text-white">Profile</span>
            </Link>
          </motion.li>
        </ul>
        <PremiumBoard />
      </div>
    </aside>
  );
}
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoHomeOutline } from "react-icons/io5";
import { PiBooks } from "react-icons/pi";
import { MdOutlineAddCircleOutline, MdOutlineMessage } from "react-icons/md";
import { TbUserShield } from "react-icons/tb";
import PremiumBoard from "./PremiumBoard";
import useUsers from "@/hooks/useUsers";
import { useSession } from "next-auth/react";

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
    <aside className="fixed top-1 left-0 z-40 w-[184px] h-screen pt-[78px] transition-transform -translate-x-full bg-white md:translate-x-0">
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
                <IoHomeOutline />
                <span className="font-bold">Dashboard</span>
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
              <IoHomeOutline />
              <span className="font-bold">Home</span>
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
              className={`flex items-center gap-2 px-2 py-1 ${checkActive(
                "/dashboard/myBooks"
              )}`}
            >
              <PiBooks />
              <span className="font-bold">My Books</span>
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
              <MdOutlineAddCircleOutline className="text-xl" />
              <span className="font-bold">Add Book</span>
            </Link>
          </motion.li>

          <motion.li
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={hoverEffect}
          >
            <Link
              href="/dashboard/messages"
              className={`flex items-center gap-2 p-2 ${checkActive(
                "/dashboard/messages"
              )}`}
            >
              <MdOutlineMessage className="text-xl" />
              <span className="font-bold">Message</span>
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
                <TbUserShield className="text-xl" />
                <span className="font-bold">Users</span>
              </Link>
            </motion.li>
          )}
        </ul>
        <PremiumBoard />
      </div>
    </aside>
  );
}

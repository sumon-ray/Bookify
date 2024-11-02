"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import img from "../../src/assets/images/About/logo (1).png";
import img2 from "../../src/assets/images/About/bookdark.png";
import { FaChalkboardTeacher, FaSignOutAlt, FaUserEdit } from "react-icons/fa";
import ProfileUpdateModal from "./ProfileUpdateModal";
import toast from "react-hot-toast";
import { TbExchange } from "react-icons/tb";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import NavbarDrawer from "./Navbar/NavbarDrawer";
import Toggle from "./Toggle/Toggle";
import ToggleMenu from "../Components/ToggleMenu/ToggleMenu";

const Navbar = () => {
  const session = useSession();
  const pathName = usePathname();
  const [down, setDown] = useState(false);
  // console.log(pathName);

  // State for controlling Menu component
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  // Handle menu open/close
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setDown(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setDown(false);
  };

  const { data } = useQuery({
    queryKey: ["exchange value"],
    queryFn: async () => {
      const res = await axios(
        `https://bookify-server-lilac.vercel.app/take-book?email=${session?.data?.user?.email}`
      );
      const data = await res.data;
      return data;
    },
  });

  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Exchange",
      path: "/exchange",
    },
    {
      title: "Audio books",
      path: "/audiobooks",
    },
    {
      title: "All Books",
      path: "/all-books",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "About",
      path: "/about",
    },
  ];

  // State for handling mobile menu toggle
  let [open, setOpen] = useState(false);

  // for PathName
  if (
    pathName.includes("/dashboard") ||
    pathName.includes("/login") ||
    pathName.includes("/signup")
  ) {
    return <div></div>;
  }

  return (
    <div className="overflow-hidden">
      <nav className="md:flex items-center md:justify-between bg-[#F3F2ED] border-b border-black  dark:border-white dark:bg-[#272727E6] py-1.5 lg:pr-10 lg:pl-5 md:fixed z-50 w-full top-0">
        {/* bookify logo */}
        <div className="flex md:flex-none items-center justify-between">
          <>
            <div className="dark:hidden">
              <Image
                src={img}
                className="h-14 md:h-[68px] w-28  md:w-36"
                height={20}
                width={200}
                unoptimized
                alt="Logo"
              />
            </div>

            <div className="hidden dark:block">
              <Image
                src={img2}
                className="h-14 md:h-[68px] w-28  md:w-36"
                height={20}
                width={200}
                unoptimized
                alt="Logo"
              />
            </div>
          </>

          {/* Hamburger icon for mobile */}
          <div className="flex dark:text-white items-center">
            {/* Adjusted the positioning of the NavbarDrawer */}
            <div className=" cursor-pointer md:hidden flex items-center justify-center">
              <div className="">
                <Toggle className="p-4" />
              </div>

              <NavbarDrawer className="" />
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <ul
            className={`hidden md:flex font-normal gap-x-6 md:bg-none lg:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[10] left-0 w-1/2 md:w-auto md:pl-0 pl-9 transition-all duration-200 ease-in`}
          >
            {links.slice(0, 1).map((link) => (
              <li
                key={link.path}
                className={`${
                  pathName === link.path && "font-black"
                } lg:text-[16px] md:my-0 my-7`}
              >
                <Link
                  href={link.path}
                  className="text-[black] dark:text-white duration-500"
                >
                  {link.title}
                </Link>
              </li>
            ))}

            <li className="lg:text-[16px] md:my-0 my-7 font-normal">
              {links?.slice(1, 2).map((link, index) => (
                <Link
                  key={index}
                  href={link?.path}
                  className={`flex items-center ${
                    pathName === link?.path ? "font-black" : ""
                  }`}
                >
                  <p>{link?.title}</p>
                  {/* <Badge
                    color="primary"
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                  > */}
                  <TbExchange className="text-xl -mb-1" />
                  {/* </Badge> */}
                </Link>
              ))}
            </li>

            {/* Contact and remaining links without TbExchange icon */}
            {links.slice(2).map((link) => (
              <li
                key={link.path}
                className={`${
                  pathName === link.path && " font-black"
                } lg:text-[16px] md:my-0 my-7 flex items-center`}
              >
                <Link
                  href={link.path}
                  className="text-[black] dark:text-white duration-500 flex items-center"
                >
                  {link.title}
                </Link>
              </li>
            ))}

            <li className="text-[black] duration-500 md:hidden">
              {session?.status === "unauthenticated" && (
                <Link href="/login">Sign In</Link>
              )}
            </li>

            <li>
              {session?.status === "authenticated" && (
                <ul
                  className="pt-1 md:hidden"
                  aria-labelledby="user-menu-button"
                >
                  <li className="ml-2 text-left ">
                    <p className="block text-sm font-normal space-x-6">
                      {session?.data?.user?.name}
                    </p>
                    <p className="block text-[12px] text-gray-500 truncate">
                      {session?.data?.user?.email}
                    </p>
                  </li>
                  <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                    <FaChalkboardTeacher className="mr-1" />
                    <Link href="/dashboard">Dashboard</Link>
                  </li>
                  <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                    <FaUserEdit className="mr-1" />
                    <ProfileUpdateModal />
                  </li>
                  <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex rounded-b items-center">
                    <FaSignOutAlt className="mr-1" />
                    <button
                      onClick={() => {
                        signOut();
                        toast.success("Signed out successfully!");
                      }}
                    >
                      Sign out
                    </button>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>

        <div className="hidden md:flex gap-2 md:justify-center items-center">
          <Toggle />
          <div className="flex items-center gap-2">
            {session?.status === "unauthenticated" && (
              <Link href="/login">
                <button className="btn text-[16px] md:block hidden font-semibold  text-white p-3 px-4 rounded-lg bg-[#374956] dark:bg-[#fefefe]   dark:text-black">
                  Sign In
                </button>
              </Link>
            )}
            {session?.status === "authenticated" && (
              <>
                <ToggleMenu session={session}></ToggleMenu>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import React, { useState } from "react";
import { FaBookOpen } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Logout from "@/Components/Authentication/Logout";
// import { CircleUserRound } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { CircleUserRound } from "lucide-react";

const Navbar = () => {
  const { data: session } = useSession();
  // Extracting name and email
  const loggedInUser = session?.user;
  const userName = loggedInUser?.name;
  // const image = session?.user?.image;
  // console.log(image);

  const pathName = usePathname();

  // console.log(userName);

  const links = [
    {
      title: "Home",
      path: "/",
    },
    // {
    //   title: "About",
    //   path: "/about",
    // },
    {
      title: "Contact",
      path: "/contact",
    },
    // {
    //     title: "Blogs",
    //     path: '/blogs'
    // },
    // {
    //     title: "Category",
    //     path: '/category'
    // },
    {
      title: "Dashboard",
      path: "/dashboard",
    },
  ];

  // State for handling mobile menu toggle
  let [open, setOpen] = useState(false);
  // for PathName
  if (pathName.includes("/dashboard")) {
    return <div></div>;
  }

  return (
    <div>
      {/*  */}
      <nav className="md:flex items-center justify-center lg:justify-between bg-[white] py-4 md:px-10 px-7">
        <div className="flex items-center text-blue-500">
          <FaBookOpen className=" text-3xl font-bold" />
          <h1 className="font-black text-2xl  uppercase -mt-1">Bookify</h1>
        </div>

        {/* Hamburger icon for mobile */}
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <GiHamburgerMenu />
        </div>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#ffffff] md:z-auto z-[10] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-16" : "top-[-490px]"
          }`}
        >
          {links.map((link) => (
            <li
              key={link.path}
              className={`${
                pathName === link.path &&
                "text-white font-extrabold border-b-2 border-black"
              } md:ml-8 lg:text-[16px] md:my-0 my-7`}
            >
              <Link
                href={link.path}
                className="text-[#064532] hover:text-gray-400 font-bold duration-500"
              >
                {link.title}
              </Link>
            </li>
          ))}
          <button className=" lg:hidden block bg-transparent border-2 border-[#064532] p-3 rounded-lg">
            Login
          </button>
        </ul>

        <div>
          <ul className="flex pt-1 items-center justify-center">
            {userName ? (
              <li className="flex gap-1">
                <Link href="/">
                  {session?.user?.image ? (
                    <Image
                      src={session?.user?.image}
                      alt={session?.user?.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  ) : (
                    <CircleUserRound className="mt-4 mx-2" />
                  )}
                </Link>
                <Logout></Logout>
              </li>
            ) : (
              <>
                <li className="mx-2">
                  <Link href="/login">
                    <button
                      className="btn text-[16px] lg:block hidden border-2
                    border-[#064532] p-3 px-4 rounded-lg"
                    >
                      Login
                    </button>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

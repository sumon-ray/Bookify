"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const session = useSession();
  const pathName = usePathname();

  // console.log(session);
  // Define navigation links
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
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

  return (
    <div>
      {/*  */}
      <nav className="md:flex items-center justify-center lg:justify-between bg-[white] py-4 md:px-10 px-7">
        <div className=" cursor-pointer ">
          <img
            className="lg:w-[150px] w-[120px]"
            src="https://i.ibb.co.com/r5ZT3xQ/bookify1-removebg-preview.png"
            alt="Bookify"
          />
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
                pathName === link.path && "text-white font-extrabold"
              } md:ml-8 lg:text-[16px] md:my-0 my-7`}
            >
              <a
                href={link.path}
                className="text-[#064532] hover:text-gray-400 font-bold duration-500"
              >
                {link.title}
              </a>
            </li>
          ))}
          <button className=" lg:hidden block bg-transparent border-2 border-[#064532] p-3 rounded-lg">
            Login
          </button>
        </ul>

        <div className="flex gap-2">
          {session.status === "authenticated" ? (
            <>
              <div className="flex">
                <Image
                  src={session?.data?.user?.image}
                  width={50}
                  height={50}
                  className="rounded-full"
                  alt="profile-image"
                ></Image>
                <div>
                  <h3>{session?.data?.user?.email}</h3>
                  <h3>{session?.data?.user?.type}</h3>
                </div>
              </div>
              <button
                onClick={() => signOut()}
                className="btn text-[16px] lg:block hidden border-2 border-[#064532] p-3 px-4 rounded-lg"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="api/auth/signup">
                <button className="btn text-[16px] lg:block hidden border-2 border-[#064532] p-3 px-4 rounded-lg">
                  Sign Up
                </button>
              </Link>
              <Link href="/api/auth/signin">
                <button className="btn text-[16px] lg:block hidden border-2 border-[#064532] p-3 px-4 rounded-lg">
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

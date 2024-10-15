"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import img from "../../src/assets/images/About/logo (1).png";
import { FaChalkboardTeacher, FaSignOutAlt, FaUserEdit } from "react-icons/fa";
import ProfileUpdateModal from "./ProfileUpdateModal";

const Navbar = () => {
  const session = useSession();
  const pathName = usePathname();
  const [toggle, setToggle] = useState(false);
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Our Books",
      path: "/ourbooks",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Dashboard",
      path: "/dashboard"
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
  // console.log(session);

  return (
    <div>
      <nav className="md:flex items-center justify-center lg:justify-between bg-[white] py-1.5 md:px-10 px-7 || md:fixed z-50 w-full top-0 md:rounded-br-ful md:rounded-bl-ful">
        {/* bookify logo */}
        <div>
          <Image src={img} className="h-[68px] w-36" height={20} width={200} />
        </div>

        {/* Hamburger icon for mobile */}
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <GiHamburgerMenu />
        </div>

        {/* Navigation Links */}
        <div>
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
                  "text-white font-extrabold border-b-2 md:w-auto w-fit  border-black"
                } md:ml-8 lg:text-[16px] md:my-0 my-3`}
              >
                <Link
                  href={link.path}
                  className="text-black hover:text-gray-400 font-bold duration-500"
                >
                  {link.title}
                </Link>
              </li>
            ))}
            <li className="lg:hidden text-black hover:text-gray-400 font-bold duration-500">
              {session?.status === "unauthenticated" && (
                <Link href="/login">Sign In</Link>
              )}
            </li>

            <li className="md:hidden text-black hover:text-gray-400 font-bold duration-500">
              {session?.status === "authenticated" && (
                <button onClick={() => signOut()}>Sign Out</button>
              )}
            </li>
          </ul>
        </div>

        <div className="flex lg:justify-center   items-center gap-2">
          {session?.status === "unauthenticated" && (
            <Link href="/login">
              <button className="btn text-[16px] lg:block hidden font-semibold bg-[#364957]  text-white p-3 px-4 rounded-lg">
                Sign In
              </button>
            </Link>
          )}

          {session?.status === "authenticated" && (
            <>
              <div className="relative  text-left hidden md:block">
                <button
                  type="button"
                  className="flex text-sm "
                  onClick={() => setToggle(!toggle)}
                >
                  {session?.data?.user.image ? (
                    <>
                      <Image
                        src={session?.data?.user?.image}
                        width={32}
                        height={32}
                        className="rounded-full hover:border-2"
                        alt="profile-image"
                      ></Image>
                    </>
                  ) : (
                    <>
                      <CgProfile className="text-black font-black text-3xl" />
                    </>
                  )}
                </button>
              </div>

              {toggle ? (
                <>
                  <div className="z-50 absolute top-[70px] right-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow">
                    <div className="px-4 py-2">
                      <span className="block text-sm   ">
                        {session?.data?.user?.name}
                      </span>
                      <span className="block text-sm  text-gray-500 truncate">
                        {session?.data?.user?.email}
                      </span>
                    </div>
                    <ul className="pt-1" aria-labelledby="user-menu-button">
                      <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                        <FaChalkboardTeacher className="mr-1" />
                        <Link href="/dashboard">Dashboard</Link>
                      </li>                    
                      <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center ">
                        <FaUserEdit className="mr-1" />
                      <ProfileUpdateModal></ProfileUpdateModal>
                      </li>
                      <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex rounded-b items-center">
                        <FaSignOutAlt className="mr-1" />
                        <button onClick={() => signOut()}>Sign out</button>
                      </li>
                    </ul>
                  </div>

                  
               
              </>
            ) : (
              <></>
            )}
          </>
        )}
      </div>
    </nav>
    </div>
  );
};

export default Navbar;

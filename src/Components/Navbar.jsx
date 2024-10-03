"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { GiBookmarklet, GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const session = useSession();
  const pathName = usePathname();
  const [toggle, setToggle] = useState(false);
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
    {
      title: "About",
      path: "/about",
    },
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
      <nav className="md:flex items-center justify-center lg:justify-between bg-[white] py-4 md:px-10 px-7">
        {/* bookify logo */}
        <div className="flex items-center text-[#B7B7B7]">
          <GiBookmarklet className="text-3xl font-bold -mb-1.5" />
          <h1 className="font-black text-2xl uppercase -mt-1">Bookify</h1>
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
            <li className="lg:hidden text-[#064532] hover:text-gray-400 font-bold duration-500">
              {session?.status === "unauthenticated" && (
                <Link href="/login">Sign In</Link>
              )}
            </li>

            <li className="lg:hidden text-[#064532] hover:text-gray-400 font-bold duration-500">
              {session?.status === "authenticated" && (
                <button onClick={() => signOut()}>Sign Out</button>
              )}
            </li>
          </ul>
        </div>

        <div className="flex lg:justify-center   items-center gap-2">
          {session?.status === "unauthenticated" && (
            <Link href="/login">
              <button className="btn text-[16px] lg:block hidden border-2 font-semibold bg-[#B7B7B7]  text-[#064532] p-3 px-4 rounded-lg">
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
                    <div className="px-4 py-3">
                      <span className="block text-sm  text-gray-900 dark:text-white">
                        {session?.data?.user?.name}
                      </span>
                      <span className="block text-sm  text-gray-500 truncate">
                        {session?.data?.user?.email}
                      </span>
                    </div>
                    <ul className="pt-2" aria-labelledby="user-menu-button">
                      <li>
                        <Link
                          href="/dashboard"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                        >
                          Dashboard
                        </Link>
                      </li>

                      <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
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

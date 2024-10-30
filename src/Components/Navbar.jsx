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
import toast from "react-hot-toast";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { Menu, MenuItem } from "@mui/material"; // Import Menu and MenuItem from Material UI
import { TbExchange } from "react-icons/tb";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import NavbarDrawer from "./Navbar/NavbarDrawer";
import Cart from "./cart/Cart";
// import Toggle from './Toggle/Toggle';

const Navbar = () => {
  const session = useSession();
  const pathName = usePathname();
  const [toggle, setToggle] = useState(false);
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
      title: "Rent Books",
      path: "/rentbooks",
    },
    {
      title: "Audio Books",
      path: "/audiobooks",
    },
    {
      title: "Exchange",
      path: "/exchange",
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
      <nav className="md:flex items-center md:justify-between bg-[#F3F2ED] dark:bg-[#272727E6] py-1.5 lg:pr-10 lg:pl-5 md:fixed z-50 w-full top-0">
        {/* bookify logo */}
        <div className="flex md:flex-none items-center justify-between">
          <div>
            <Image
              src={img}
              className="h-14 md:h-[68px] w-28  md:w-36"
              height={20}
              width={200}
              unoptimized
              alt="Logo"
            />
          </div>

          {/* Hamburger icon for mobile */}
          <div className="flex items-center">
            <Link href={"/cart"} className="md:hidden mr-0">
              <Cart />
            </Link>
            <div className="text-3xl cursor-pointer md:hidden">
              <NavbarDrawer />
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <ul
            className={`hidden md:flex font-normal md:bg-none lg:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[10] left-0 w-1/2 md:w-auto md:pl-0 pl-9 transition-all duration-200 ease-in`}
          >
            {links.slice(0, 1).map((link) => (
              <li
                key={link.path}
                className={`${
                  pathName === link.path && "font-black"
                } md:ml-8 lg:text-[16px] md:my-0 my-7`}
              >
                <Link
                  href={link.path}
                  className="text-[black] dark:text-white duration-500"
                >
                  {link.title}
                </Link>
              </li>
            ))}

            {/* our store */}
            <li className="md:ml-8 lg:text-[16px] md:my-0 my-7 font-normal">
              <button
                className={`flex items-center ${
                  (pathName === "/rentbooks" ||
                    pathName.includes("/audiobooks")) &&
                  "font-black "
                }`}
                onClick={handleClick}
              >
                Our store{" "}
                {down ? (
                  <IoIosArrowDown className="-mb-1" />
                ) : (
                  <IoIosArrowForward className="-mb-1" />
                )}
              </button>
              <div>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={openMenu}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  {links?.slice(1, 3).map((link, index) => (
                    <MenuItem
                      key={index}
                      onClick={handleClose}
                      style={{ fontWeight: "", fontSize: "15px" }}
                    >
                      <Link
                        className={`${
                          pathName === link?.path ? "font-black" : ""
                        }`}
                        href={link?.path}
                      >
                        {link?.title}
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            </li>

            <li className="md:ml-4 lg:text-[16px] md:my-0 my-7 font-normal">
              {links?.slice(3, 4).map((link, index) => (
                <Link
                  key={index}
                  href={link?.path}
                  className={`flex items-center ${
                    pathName === link?.path ? "font-black" : ""
                  }`}
                >
                  <p>{link?.title}</p>
                  <Badge
                    // sx={{backgroundImage:'#364957'}}
                    // badgeContent={data?.length || "0"}
                    color="primary"
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                  >
                    <TbExchange className="text-xl -mb-1" />
                  </Badge>
                </Link>
              ))}
            </li>

            {/* Contact and remaining links */}
            {links.slice(4).map((link) => (
              <li
                key={link.path}
                className={`${
                  pathName === link.path && " font-black"
                } md:ml-8 lg:text-[16px] md:my-0 my-7`}
              >
                <Link
                  href={link.path}
                  className="text-[black] dark:text-white duration-500"
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

        <div className="flex lg:justify-center   items-center gap-2">
          <Link href={"/cart"} className="mr-2 hidden md:block">
            <Cart />
          </Link>
          {session?.status === "unauthenticated" && (
            <Link href="/login">
              <button className="btn text-[16px] md:block hidden font-semibold bg-[#364957]  text-white p-3 px-4 rounded-lg">
                Sign In
              </button>
            </Link>
          )}

          {session?.status === "authenticated" && (
            <>
              <div className="relative text-left hidden md:block ">
                <button
                  type="button"
                  className="flex items-center text-sm"
                  onClick={() => setToggle(!toggle)}
                  onChange={() => setToggle(!toggle)}
                >
                  {session?.data?.user.image ? (
                    <Image
                      src={session?.data?.user?.image}
                      width={32}
                      height={32}
                      className="rounded-full hover:border-2"
                      alt="profile-image"
                    />
                  ) : (
                    <CgProfile className="text-black font-black text-3xl" />
                  )}
                </button>
              </div>

              {toggle ? (
                <div className="z-50 absolute top-[70px] right-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow">
                  <ul className="pt-1" aria-labelledby="user-menu-button">
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
                </div>
              ) : null}
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

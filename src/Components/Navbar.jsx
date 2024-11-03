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
      path: "/audiobooks/671e8aa0cc79bac9d2cf7419",
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
                className={`${pathName === link.path && "font-black"
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
                  className={`flex items-center ${pathName === link?.path ? "font-black" : ""
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
                className={`${pathName === link.path && " font-black"
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

        <div className="hidden md:flex gap-x-2 items-center">
            <Toggle />
          {
              session?.status === 'loading'
              ? <svg
                class="animate-spin [animation-duration:1.5s]"
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  filerule="evenodd"
                  clipRule="evenodd"
                  d="M14.4304 0.0323927C14.0002 0.172039 13.7522 0.420298 13.6321 0.825659C13.5643 1.05258 13.5527 1.58013 13.5527 4.33426C13.5527 7.98251 13.5488 7.93596 13.9208 8.30835C14.4187 8.80487 15.5812 8.80487 16.0792 8.30835C16.4511 7.93596 16.4473 7.98251 16.4473 4.33426C16.4473 0.804324 16.4415 0.742259 16.1547 0.400903C15.9145 0.115792 15.6568 0.0207556 15.0775 0.00523939C14.8614 -0.00695113 14.6447 0.00214369 14.4304 0.0323927ZM24.4026 3.89593C24.1643 4.00648 23.7574 4.38857 21.816 6.33779C20.0316 8.12797 19.4872 8.70595 19.4 8.89602C19.3276 9.05362 19.2902 9.2251 19.2905 9.39857C19.2909 9.57205 19.3289 9.74338 19.4019 9.9007C19.5376 10.1916 19.9832 10.6494 20.2835 10.8065C20.5877 10.9655 21.0391 10.9636 21.3549 10.8026C21.6785 10.6358 26.1541 6.15547 26.3207 5.83157C26.4001 5.66482 26.4417 5.4826 26.4427 5.29788C26.4437 5.11317 26.404 4.93051 26.3265 4.7629C26.1121 4.40396 25.8092 4.10611 25.4469 3.89787C25.2865 3.81116 25.1072 3.7656 24.925 3.76526C24.7427 3.76492 24.5633 3.80982 24.4026 3.89593ZM22.2559 13.5858C21.9939 13.6581 21.7571 13.8017 21.5719 14.0009C21.3065 14.3597 21.2232 15.0889 21.3898 15.6029C21.5022 15.952 21.785 16.2352 22.1338 16.3477C22.3702 16.4253 22.7557 16.435 25.6406 16.435C28.4093 16.435 28.9189 16.4233 29.1475 16.3554C29.719 16.1848 29.998 15.7348 30 14.9842C30 14.2375 29.7152 13.7894 29.1242 13.611C28.9247 13.5509 28.2989 13.5392 25.6484 13.5431C23.8698 13.547 22.343 13.5664 22.2559 13.5858ZM20.3339 19.3811C20.0277 19.5207 19.5763 19.963 19.4194 20.2772C19.3393 20.4342 19.2957 20.6073 19.2916 20.7836C19.2876 20.9599 19.3233 21.1348 19.3961 21.2954C19.5395 21.6154 24.0422 26.1384 24.3968 26.3188C24.8986 26.5767 25.4139 26.4507 25.9332 25.9425C26.4447 25.4421 26.5803 24.899 26.3207 24.3928C26.1405 24.0379 21.6223 19.5304 21.3026 19.3869C21.1498 19.3207 20.9853 19.286 20.8188 19.285C20.6524 19.284 20.4874 19.3167 20.3339 19.3811ZM14.5059 21.342C14.2442 21.4158 14.0076 21.56 13.822 21.759C13.5546 22.1197 13.5527 22.1449 13.5527 25.6322C13.5527 28.4096 13.5643 28.9197 13.6321 29.1485C13.8026 29.7207 14.254 30 15 30C15.7459 30 16.1973 29.7207 16.3678 29.1485C16.488 28.7374 16.486 22.5018 16.364 22.143C16.3264 21.9983 16.2577 21.8636 16.1627 21.7484C16.0676 21.6331 15.9485 21.5401 15.8137 21.4758C15.6006 21.3594 15.4766 21.3303 15.1104 21.3167C14.9086 21.3046 14.706 21.313 14.5059 21.342Z"
                  fill="#364957" className="dark:fill-white"
                />
                <path
                  filerule="evenodd"
                  clipRule="evenodd"
                  d="M4.83402 3.86487C4.5279 4.00452 4.07647 4.44673 3.91953 4.76093C3.83948 4.918 3.79581 5.09111 3.79179 5.2674C3.78776 5.44369 3.82348 5.61861 3.89628 5.77918C4.03965 6.0992 8.54237 10.6222 8.89693 10.8026C9.39873 11.0605 9.91411 10.9344 10.4334 10.4263C10.9448 9.92589 11.0805 9.38282 10.8208 8.8766C10.6407 8.52167 6.12245 4.01421 5.80276 3.87069C5.65 3.80447 5.48545 3.76982 5.31899 3.76882C5.15252 3.76782 4.98757 3.80049 4.83402 3.86487ZM0.85443 13.6129C0.282873 13.7933 0 14.2491 0 14.9842C0.00193748 15.7348 0.280935 16.1847 0.852493 16.3554C1.08112 16.4233 1.59067 16.4349 4.35934 16.4349C7.24425 16.4349 7.62981 16.4252 7.86618 16.3477C8.03981 16.2905 8.19761 16.1934 8.32684 16.064C8.45607 15.9347 8.55313 15.7767 8.61018 15.6029C8.7768 15.0889 8.69349 14.3596 8.42805 13.9989C8.32166 13.8831 8.19656 13.7861 8.058 13.7118L7.79256 13.5644L4.4349 13.5528C1.73211 13.545 1.03268 13.5567 0.85443 13.6129ZM8.90274 19.4121C8.66443 19.5227 8.25756 19.9047 6.3162 21.854C4.53177 23.6442 3.98734 24.2221 3.90016 24.4122C3.82771 24.5698 3.79037 24.7413 3.7907 24.9148C3.79104 25.0882 3.82904 25.2596 3.90209 25.4169C4.03772 25.7078 4.48334 26.1655 4.78365 26.3226C5.08783 26.4817 5.53927 26.4797 5.85508 26.3188C6.17864 26.152 10.6542 21.6717 10.8208 21.3478C10.9002 21.181 10.9419 20.9988 10.9429 20.8141C10.9439 20.6294 10.9042 20.4467 10.8267 20.2791C10.6122 19.9201 10.3094 19.6223 9.94704 19.414C9.7867 19.3273 9.60738 19.2818 9.42513 19.2814C9.24289 19.2811 9.06341 19.326 8.90274 19.4121Z"
                  fill="#364957" className="dark:fill-white"
                />
              </svg>
              : <div className="flex items-center ">
                {session?.status === "unauthenticated" && (
                  <Link href="/login">
                    <button className="btn md:block hidden font-semibold  text-white p-2 rounded-md bg-[#374956] dark:bg-[#fefefe] dark:text-black">
                      Login
                    </button>
                  </Link>
                )}
                {session?.status === "authenticated" && (
                  <>
                    <ToggleMenu session={session}></ToggleMenu>
                  </>
                )}
              </div>}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
"use client";
import React, { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { GiBookmarklet } from "react-icons/gi";
import TemporaryDrawer from "./Drawer";
import { usePathname } from "next/navigation";
import { IoIosSearch, IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineKeyboardVoice, MdOutlineMessage, MdOutlineWbSunny } from "react-icons/md";
import { useSearchContext } from "@/app/(dashboard)/dashboard/myBooks/SearchProvider";
import Link from "next/link";
import img from "../../assets/images/About/logo (1).png";
import Image from "next/image";
import Lottie from "lottie-react";
import lottieImage from "../../../public/voice3.json";
import { signOut, useSession } from "next-auth/react";
import { FaSignOutAlt, FaUserEdit } from "react-icons/fa";
import ProfileUpdateModal from "../ProfileUpdateModal";
let recognition; // Declare the recognition variable outside of the component
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IoMoonOutline } from "react-icons/io5";
import { RiMessage2Line } from "react-icons/ri";
import { TbFocusCentered } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import Toggle from './../Toggle/Toggle';





export default function DashboardNavbar() {
  const session = useSession();
  const [isListening, setIsListening] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }

  const { setSearchQuery: updateSearchContext } = useSearchContext();

  let pathName = usePathname().split("/");
  pathName = pathName[pathName.length - 1];

  const [recognition, setRecognition] = useState(null);

  // Set up speech recognition in useEffect to avoid SSR issues
  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognitionInstance = SpeechRecognition
        ? new SpeechRecognition()
        : null;
      setRecognition(recognitionInstance);
    }
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    updateSearchContext(query);
    setIsSearching(false);
  };

  const handleVoiceInput = () => {
    if (recognition) {
      if (!isListening) {
        setIsListening(true);
        recognition.start();
      }
    } else {
      alert("Speech recognition not supported in this browser.");
    }
  };

  const handleSearchClick = () => {
    updateSearchContext(searchQuery);
    setIsSearching(true);
  };

  useEffect(() => {
    if (recognition) {
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSearchQuery(transcript);
      };

      recognition.onerror = (event) => {
        console.error("Voice recognition error:", event.error);
        setIsListening(false);
      };
      recognition.onend = () => {
        setIsListening(false);
      };
    }
  }, [recognition]);

  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-white">
        <div className="py-1 pr-3.5">

          <div className="flex items-center justify-between">

            {/* logo and drawer */}
            <div className="">

              <div className="md:hidden">
                <TemporaryDrawer />
              </div>

              <Link href={"/"} className="hidden md:flex">
                <Image src={img} className="h-[60px] max-w-[150px] -mr-6" height={20} width={200} />
              </Link>

            </div>

            <div className="flex items-center justify-between w-[86%]">

              {/* search */}
              <div className="hidden md:flex items-center justify-center ">
                <div className=" relative w-40 lg:w-72 md:w-52 ">
                  <input
                    className="bg-[#EFEEE9] w-full border-0 focus:ring-[#EFEEE9] focus:outline-none focus:ring rounded-md py-2 px-4 pr-14"
                    type="text"
                    placeholder="Search..."
                    onChange={handleSearch}
                    value={searchQuery}
                  />
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                    <IoIosSearch
                      className="text-xl cursor-pointer"
                      onClick={handleSearchClick}
                    />
                    <div
                      className={`bg-[#364957]   p-2 rounded-bl-3xl rounded-md rounded-tl-none cursor-pointer ${isListening ? "" : ""
                        }`}
                      onClick={handleVoiceInput}
                    >
                      {isListening ? (
                        <Lottie
                          animationData={lottieImage}
                          aria-label="Lottie animation"
                          loop
                          className="w-full h-[24px]"
                          autoplay
                        />
                      ) : (
                        <MdOutlineKeyboardVoice className="text-2xl text-white hover:text-green-500" />
                      )}
                    </div>
                  </div>
                </div>
              </div>


              {/* all menu */}
              <div className="hidden md:flex items-center gap-x-6 ">


                {/* Toggle Button for Theme */}
                  <div className="flex items-center gap-4">
                    <Toggle />
                </div>

                <div>
                  <button className="bg-[#36495733] text-black rounded-full p-2"
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    size="small"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}>
                    <IoMdNotificationsOutline className="text-xl" />
                  </button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Menu>
                </div>

                <div>
                  <button className="bg-[#36495733] text-black rounded-full p-2"
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    size="small"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}>
                    <MdOutlineMessage className="text-xl" />
                  </button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Menu>
                </div>

                <div>
                  <button className="bg-[#36495733] text-black rounded-full p-2"
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    size="small"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}>
                    <TbFocusCentered className="text-xl" />
                  </button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Menu>
                </div>

                {/* profile */}
                <div>
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
                  <div className="ml-2 text-left ">
                    <p className="block text-sm font-normal space-x-6">
                      {session?.data?.user?.name}
                    </p>
                    <p className="block text-[12px] text-gray-500 truncate">
                      {session?.data?.user?.email}
                    </p>
                  </div>
                </button>
                </div>

                      {toggle ? (
                        <>
                          <div className="z-50 absolute top-[70px] right-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow">
                         
                            <ul className="pt-1" aria-labelledby="user-menu-button">
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

                <div className="border-l border-black pl-4">
                  <FiSettings className="text-2xl animate-spin [animation-duration:2s]" />
                </div>

              </div>

            </div>

            <Link href={"/"} className="flex md:hidden mr-2">
              <Image src={img} className="h-[52px] max-w-[135px] -mr-6" height={20} width={200} />
            </Link>

          </div>

        </div>
      </nav>
    </div>
  );
}

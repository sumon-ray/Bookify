"use client";
import React, { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";

import TemporaryDrawer from "./Drawer";
import { usePathname, useRouter } from "next/navigation";
import { IoIosSearch, IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineKeyboardVoice, MdOutlineMessage, MdOutlineWbSunny } from "react-icons/md";
import { useSearchContext } from "@/app/(dashboard)/dashboard/myBooks/SearchProvider";
import Link from "next/link";
import img from "../../assets/images/About/logo (1).png";
import img2 from "../../assets/images/About/bookdark.png";
import Image from "next/image";
import Lottie from "lottie-react";
import lottieImage from "../../../public/voice3.json";
import { signOut, useSession } from "next-auth/react";
import { FaSignOutAlt, FaUserEdit } from "react-icons/fa";
import ProfileUpdateModal from "../ProfileUpdateModal";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import axios from "axios";


export default function DashboardNavbar() {
  const session = useSession();
  const [notificationApprove, setNotificationApprove] = useState([])
  const [notification, setNotification] = useState([])
  const [notificationSeen, setNotificationSeen] = useState(true)
  const [isListening, setIsListening] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const router = useRouter();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setNotificationSeen(false)
  }

  const { setSearchQuery: updateSearchContext } = useSearchContext();

  let pathName = usePathname().split("/");
  pathName = pathName[pathName.length - 1];

  const [recognition, setRecognition] = useState(null);

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

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const [response1, response2] = await Promise.all([
          axios.get(`https://bookify-server-lilac.vercel.app/notifications?owner=${session?.data?.user?.email}`),
          axios.get(`https://bookify-server-lilac.vercel.app/notifications?approved=${session?.data?.user?.email}`)
        ]);


        setNotification([...response1.data, ...response2.data]);

      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, [session?.data?.user?.email]);

  // route to request page 
  const routeToRequestPage = () => {
    router.push('/dashboard/exchange-request')
    handleClose()
  }

  return (
    <div>
      <nav className="fixed top-0 z-50 w-full py-1 bg-white dark:bg-[#272727E6] dark:shadow-md dark:shadow-[#2f2c2cfb]">
        <div className="py-1 pr-3.5">

          <div className="flex items-center justify-between">

            {/* logo and drawer */}
            <div className="">

              <div className="md:hidden">
                <TemporaryDrawer />
              </div>

              <Link href={"/"} className="hidden md:flex">
                <Image src={img} unoptimized className="dark:hidden h-[60px] max-w-[150px] -mr-6" height={20} width={200} />
                <Image src={img2} unoptimized className="hidden dark:block h-[60px] max-w-[150px] -mr-6" height={20} width={200} />
              </Link>

            </div>

            <div className="flex items-center justify-between w-full md:w-[86%]">

              {/* all menu */}
              <div className="flex items-center justify-between w-full"> {/* Adjusted to take full width */}
                <div className="flex items-center  lg:-translate-x-7 gap-x-6 md:gap-x-2"> {/* Adjusted gap for smaller screens */}

                  {/* Search Input */}
                  <div className="relative translate-x-4 w-40 sm:w-72 md:w-48 lg:w-72 md:translate-x-14   lg:translate-x-0  md:mr-4 lg:mr-0 ">
                    <input
                      className="bg-[#EFEEE9] w-full border-0 focus:ring-[#EFEEE9] focus:outline-none focus:ring rounded-md py-2 px-4 pr-14"
                      type="text"
                      placeholder="Search..."
                      onChange={handleSearch}
                      value={searchQuery}
                    />
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                      <IoIosSearch
                        className="text-xl cursor-pointer dark:text-black"
                        onClick={handleSearchClick}
                      />
                      <div
                        className={`bg-[#364957] p-2 rounded-bl-3xl rounded-md rounded-tl-none cursor-pointer ${isListening ? "" : ""
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

                {/* Icons moved to the right side */}
                <div className="flex items-center gap-2 md:gap-4"> {/* Adjusted gap for smaller screens */}


                  {/* Notification Button */}
                  <div className="relative">
                    <div>
                      <button className="relative bg-[#36495733] dark:bg-gray-700 dark:text-white text-black rounded-full p-2"
                        id="notification-button"
                        aria-controls={open ? 'notification-menu' : undefined}
                        aria-haspopup="true"
                        size="small"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}>
                        <IoMdNotificationsOutline className="text-xl" />

                      </button>
                      {notificationSeen && <p className="absolute top-0 -mt-1 right-0 bg-[#364957] text-white rounded-full text-sm  px-[5px]">{notification.length > 0 ? notification.length : <></>}</p>}
                    </div>
                    <Menu
                      id="notification-menu"
                      className=""
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'notification-button',
                      }}
                    >
                      {/* request Notification */}
                      {notification.length > 0 || notificationApprove.length > 0 ? notification.map((notification, index) => (
                        <MenuItem className="dark:bg-[#272727] dark:text-white" key={notification.id} onClick={routeToRequestPage}>
                          {notification?.RequesterName ? <p className="p-2">{`${index + 1}. ${notification?.RequesterName} requested to exchange book `} {/* Display index */}</p>
                            : <p className="p-2">{`${index + 1}. ${notification?.approverName} approve your exchange reques`} </p>}
                        </MenuItem>

                      )) : <MenuItem onClick={handleClose}>No Notifications !!!!</MenuItem>}

                    </Menu>
                  </div>


                  {/* Profile Button */}
                  <div className="relative">
                    {session?.status === "authenticated" && (
                      <>
                        <button
                          type="button"
                          className="flex items-center text-sm"
                          onClick={() => setToggle(!toggle)}
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
                          <div className="ml-2 text-left hidden md:block"> {/* Hide name on small screens */}
                            <p className="block text-sm font-normal space-x-6">
                              {session?.data?.user?.name}
                            </p>
                            <p className="block text-[12px] text-gray-500 truncate">
                              {session?.data?.user?.email}
                            </p>
                          </div>
                        </button>

                        {toggle && (
                          <div className="z-50 absolute top-[70px] right-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow">
                            <ul className="pt-1" aria-labelledby="user-menu-button">
                              <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center ">
                                <FaUserEdit className="mr-1" />
                                <ProfileUpdateModal />
                              </li>
                              <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex rounded-b items-center">
                                <FaSignOutAlt className="mr-1" />
                                <button onClick={() => signOut()}>Sign out</button>
                              </li>
                            </ul>
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  {/* Message Button */}
                  <div className="relative hidden ">
                    <button className="bg-[#36495733] dark:bg-gray-700 dark:text-white text-black rounded-full p-2"
                      id="message-button"
                      aria-controls={open ? 'message-menu' : undefined}
                      aria-haspopup="true"
                      size="small"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}>
                      <MdOutlineMessage className="text-xl " />
                    </button>
                    {/* <Menu
                      id="message-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'message-button',
                      }}
                    >
                      <MenuItem onClick={handleClose}>Profile</MenuItem>
                      <MenuItem onClick={handleClose}>My account</MenuItem>
                      <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu> */}
                  </div>

                  {/* Settings Icon */}
                  {/* <div className="border-l border-black pl-4 hidden md:block"> 
                    <FiSettings className="text-2xl animate-spin [animation-duration:2s]" />
                  </div> */}
                </div>

              </div>

            </div>

            <div className="flex md:hidden mr-2">
              <div className="hidden md:flex items-center justify-center ">
                <div className=" relative w-40 lg:w-72 md:w-48 md:mr-4">
                  <input
                    className="bg-[#EFEEE9]  w-full border-0 focus:ring-[#EFEEE9] focus:outline-none focus:ring rounded-md py-2 px-4 pr-14"
                    type="text"
                    placeholder="Search..."
                    onChange={handleSearch}
                    value={searchQuery}
                  />
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                    <IoIosSearch
                      className="text-xl cursor-pointer dark:text-black"
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
            </div>

          </div>

        </div>
      </nav>
    </div>
  );
}

"use client";
import { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { GiBookmarklet } from "react-icons/gi";
import TemporaryDrawer from "./Drawer";
import { usePathname } from "next/navigation";
import { IoIosSearch, IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineKeyboardVoice } from "react-icons/md";
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

export default function DashboardNavbar() {
  const session = useSession();
  const [isListening, setIsListening] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [toggle, setToggle] = useState(false);

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
        <div className="py-2.5 lg:py-4 pl-4 pr-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <div className="md:hidden">
                <TemporaryDrawer />
              </div>

              <Link href={"/"} className="hidden md:flex">
                <Image src={img} className=" w-40" height={20} width={200} />
              </Link>

              <h3 className="text-xl font-bold pl-8 uppercase hidden md:block">
                {pathName}
              </h3>
            </div>

            <div className="flex items-center justify-center w-full">
              <div className=" relative w-40 lg:w-72 md:w-52 ">
                <input
                  className="bg-[#EFEEE9CC] w-full
              outline-none focus:outline-none focus:ring-0 border border-[#a1a5a8b1] 
             focus:border-[#a1a5a8b1] rounded-md py-2 px-4 pr-14"
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
                    className={`bg-[#0000001A] p-2 rounded-bl-3xl rounded-md rounded-tl-none cursor-pointer ${
                      isListening ? "" : ""
                    }`}
                    onClick={handleVoiceInput}
                  >
                    {isListening ? (
                      <Lottie
                        animationData={lottieImage}
                        aria-label="Lottie animation"
                        loop
                        className="w-[40px] h-[24px]"
                        autoplay
                      />
                    ) : (
                      <MdOutlineKeyboardVoice className="text-2xl text-black" />
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex md:hidden items-center text-[#B7B7B7]">
              <GiBookmarklet className="text-3xl font-bold -mb-1.5" />
              <h1 className="font-black text-2xl uppercase -mt-1">Bookify</h1>
            </div>

            <div className="flex items-center gap-4">
              <p>
                <IoMdNotificationsOutline className="text-2xl" />
              </p>
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
                            width={50}
                            height={50}
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
          </div>
        </div>
      </nav>
    </div>
  );
}

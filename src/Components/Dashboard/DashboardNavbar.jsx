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

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = SpeechRecognition ? new SpeechRecognition() : null;

export default function DashboardNavbar() {
  const [isListening, setIsListening] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const { setSearchQuery: updateSearchContext } = useSearchContext();

  let pathName = usePathname().split("/");
  pathName = pathName[pathName.length - 1];

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
  }, [updateSearchContext]);

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
                <Image
                  src={img}
                  className="h-12 w-36 -ml-3"
                  height={20}
                  width={200}
                />
              </Link>

              <h3 className="text-xl font-bold pl-8 uppercase hidden md:block">
                {pathName}
              </h3>
            </div>

            <div className="hidden md:flex items-center">
              <input
                className="bg-[#EFEEE9CC] 
                                outline-none focus:outline-none focus:ring-0 focus:outline-gray-600 border-none rounded-md pr-16"
                type="text"
                placeholder="Search..."
                onChange={handleSearch}
                value={searchQuery}
              />
              <div className="flex items-center gap-1 -ml-[65px]">
                <IoIosSearch className="text-xl" onClick={handleSearchClick} />
                <div
                  className={`bg-[#0000001A] p-2.5 rounded-bl-3xl rounded-md rounded-tl-none ${
                    isListening ? "animate-pulse" : ""
                  }`}
                  onClick={handleVoiceInput}
                >
                  <MdOutlineKeyboardVoice className="text-xl text-black" />
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
              <div>
                <button
                  type="button"
                  className="flex text-sm "
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-user"
                >
                  <CgProfile className="text-black font-black text-3xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

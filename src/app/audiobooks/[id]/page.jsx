"use client";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaBookmark, FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import Image from "next/image";
import { useRef, useState } from "react";
import { FaShareFromSquare } from "react-icons/fa6";
import SocialSharingButtons from "@/Components/AudioBook/SocialSharingButtons";
import AllAudioBooks from "./AllAudioBooks";
import ChapterList from "../ChapterList";
import LoadingSpiner from "./LoadingSpiner";
import ReactAudioPlayer from 'react-audio-player';
import { LiaHandPointDown } from "react-icons/lia";

export default function Page({ params }) {
  const [currentAudio, setCurrentAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["audioBooks"],
    queryFn: async () => {
      const res = await axios.get("https://bookify-server-lilac.vercel.app/audiobook");
      const data = await res.data;
      return data
    },
  });

  if (isLoading) {
    return (
      <LoadingSpiner />
    );
  }

  const currentAudioBook = data?.find((book) => book._id === params?.id);

  // Function to handle playing a new audio
  const handlePlay = (audioURL, id) => {
    if (currentAudio === id) {

      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    } else {
      setCurrentAudio(id);
      audioRef.current.src = audioURL;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="min-h-screen px-6 md:px-0  max-w-7xl mx-auto pt-5 md:pt-24 lg:pt-20">
      <div id="Main">
        <div className="relative z-10">
          {/* Cover Image */}
          <div className=" border-slate-100 transition-all duration-500     pb-6 sm:p-10 sm:pb-8 lg:p-6 xl:p-10 xl:pb-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8   dark:text-white dark:border-[#0A0A0C]">
            {currentAudioBook && (
              <div className="flex flex-col lg:flex-row items-start space-x-2 md:space-x-6 relative">
                <div className="flex-shrink-0 sm:w-full w-full h-[400px] md:w-[700px] mx-auto md:h-[700px] lg:w-[300px] lg:h-[400px] overflow-hidden rounded-lg bg-slate-100">
                  <Image
                    src={currentAudioBook?.audioBookCover}
                    alt={currentAudioBook?.title || "Audiobook Cover"}
                    className="  w-full h-full"
                    width={300}
                    height={400}
                    priority
                    quality={80}
                  />
                </div>
                <div className=" lg:-translate-y-2  mt-4 md:mt-0 md:pt-3 lg:pt-0 min-w-0 flex-auto font-semibold h-auto flex flex-col justify-between">
                  <div className="space-y-3 ">
                    <div className="flex flex-col md:flex-row justify-between">
                      <p className="text-3xl font-semibold text-gray-900 dark:text-white">
                        {currentAudioBook.title}
                      </p>
                      {/*  <button className="text-2xl text-[#364957]">
                        <FaBookmark></FaBookmark>
                      </button> */}
                    </div>
                    <h2 className="  text-sm  truncate">
                      By:
                      <span className=" cursor-pointer ml-1">
                        {currentAudioBook.author}
                      </span>
                    </h2>
                    <h2 className="  text-sm  truncate">
                      Publisher:
                      <span className=" cursor-pointer ml-1">
                        Bookify
                      </span>
                    </h2>
                    {/* Rating section */}
                    <div className="flex cursor-pointer mt-2">
                      <svg
                        className="w-4 h-4 text-yellow-300 ms-1 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300 ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300 ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300 ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold">Description:</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        {currentAudioBook?.description.slice(0, 600)}
                      </p>
                    </div>
                  </div>
                  <div className="text-[#364957] mt-[31px] flex gap-2 flex-col dark:text-white dark:border-[#0A0A0C]">
                    <div className="flex items-center">
                      {/* <FaShareFromSquare className="text-2xl" /> */}
                      <h2 className="ml-2 flex  items-center justify-center gap-2">Share on <LiaHandPointDown className="mt-2" /> </h2>
                    </div>
                    <SocialSharingButtons
                      currentAudioBook={currentAudioBook}
                    ></SocialSharingButtons>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* audio player */}
          <div className="w-full  mx-auto px-4 sm:px-6  transition-all duration-500 dark:text-white dark:border-[#0A0A0C]">
            <ReactAudioPlayer
              src={currentAudioBook?.audioURL}
              autoPlay={false}
              controls
              onEnded={() => setIsPlaying(false)}
              className="w-full"
            />
          </div>
        </div>

        {/* Audio Books chapter List Div */}
        <ChapterList className=''
          chapters={currentAudioBook?.chapters}
          currentAudio={currentAudio}
          handlePlay={handlePlay}
          isPlaying={isPlaying}
          audioBookCover={currentAudioBook?.audioBookCover}
        />

        {/* All Audio Books section */}
        <AllAudioBooks data={data} />
      </div>
    </div>
  );
}
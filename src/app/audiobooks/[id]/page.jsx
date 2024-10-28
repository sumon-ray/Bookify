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

export default function Page({ params }) {
  const [currentAudio, setCurrentAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["audioBooks"],
    queryFn: async () => {
      const res = await axios.get(
        "https://bookify-server-lilac.vercel.app/audiobook"
      );
      return res.data;
    },
  });

  if (isLoading) {
    return (
 <LoadingSpiner />
    );
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const currentAudioBook = data.find((book) => book._id === params.id);

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
    <div className="min-h-screen max-w-7xl mx-auto">
      <div id="Main">
        <div className="mt-14 sm:mt-10 pt-14 relative z-10 rounded-xl ">
          {/* Cover Image */}
          <div className="bg-white border-slate-100 transition-all duration-500  border-b rounded-t-xl p-4 pb-6 sm:p-10 sm:pb-8 lg:p-6 xl:p-10 xl:pb-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8  dark:bg-[#0A0A0C] dark:text-white dark:border-[#0A0A0C]">
            {currentAudioBook && (
              <div className="flex flex-col lg:flex-row items-start space-x-6 relative">
                <div className="flex-shrink-0 w-full lg:w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg bg-slate-100">
                  <Image
                    src={currentAudioBook?.audioBookCover}
                    alt={currentAudioBook?.title || "Audiobook Cover"}
                    className="object-cover w-full h-full"
                    width={300}
                    height={400}
                    priority
                    quality={80}
                  />
                </div>
                <div className="min-w-0 flex-auto space-y-2 font-semibold mt-2 h-[400px] flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between">
                      <p className="text-3xl font-semibold leading-6 text-gray-900 dark:text-white">
                        {currentAudioBook.title}
                      </p>
                      {/*  <button className="text-2xl text-[#364957]">
                        <FaBookmark></FaBookmark>
                      </button> */}
                    </div>
                    <h2 className="text-slate-500 dark:text-gray-400 text-sm leading-6 truncate">
                      By:
                      <span className="underline cursor-pointer ml-1">
                        {currentAudioBook.author}
                      </span>
                    </h2>
                    <h2 className="text-slate-500 dark:text-gray-400 text-sm leading-6 truncate">
                      Publisher:
                      <span className="underline cursor-pointer ml-1">
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
                        {currentAudioBook?.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-[#364957] mt-2 flex gap-1 items-center justify-between dark:text-white dark:border-[#0A0A0C]">
                    <div className="flex items-center">
                      <FaShareFromSquare className="text-2xl" />
                      <h2 className="ml-2">Share</h2>
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
          <div className="w-full mx-auto px-6 bg-white transition-all duration-500 dark:text-white dark:border-[#0A0A0C]">
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
<ChapterList 
        chapters={currentAudioBook?.chapters} 
        currentAudio={currentAudio} 
        handlePlay={handlePlay} 
        isPlaying={isPlaying} 
        audioBookCover={currentAudioBook.audioBookCover} 
      />

        {/* All Audio Books section */}
        <AllAudioBooks data={data} />
      </div>
    </div>
  );
}

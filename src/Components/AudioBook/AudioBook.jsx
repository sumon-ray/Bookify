"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import React, { useRef, useState, useCallback } from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import Heading from "../Heading/Heading";
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const AudioBook = () => {
  const [currentAudio, setCurrentAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [favorites, setFavorites] = useState({});
  const audioRef = useRef(null);
  const router = useRouter();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["audioBooks"],
    queryFn: async () => {
      const res = await axios.get(
        "https://bookify-server-lilac.vercel.app/audioBook"
      );
      return res.data;
    },
  });

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

  const handleFavorite = useCallback((id) => {
    setFavorites((prev) => {
      const newFavorites = { ...prev, [id]: !prev[id] };
      return newFavorites;
    });
  }, []);

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto md:px-6 dark:text-white">
      <Heading heading="Explore Audio Collection" />
      {isLoading ? (
        <div className="flex justify-center items-center pt-1 dark:text-white">
          <div className="flex flex-col justify-center items-center gap-y-1">
            <svg
              className="animate-spin [animation-duration:1.5s]"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 30 30"
              fill="#364957"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.4304 0.0323927C14.0002 0.172039 13.7522 0.420298 13.6321 0.825659C13.5643 1.05258 13.5527 1.58013 13.5527 4.33426C13.5527 7.98251 13.5488 7.93596 13.9208 8.30835C14.4187 8.80487 15.5812 8.80487 16.0792 8.30835C16.4511 7.93596 16.4473 7.98251 16.4473 4.33426C16.4473 0.804324 16.4415 0.742259 16.1547 0.400903C15.9145 0.115792 15.6568 0.0207556 15.0775 0.00523939C14.8614 -0.00695113 14.6447 0.00214369 14.4304 0.0323927ZM24.4026 3.89593C24.1643 4.00648 23.7574 4.38857 21.816 6.33779C20.0316 8.12797 19.4872 8.70595 19.4 8.89602C19.3276 9.05362 19.2902 9.2251 19.2905 9.39857C19.2909 9.57205 19.3289 9.74338 19.4019 9.9007C19.5376 10.1916 19.9832 10.6494 20.2835 10.8065C20.5877 10.9655 21.0391 10.9636 21.3549 10.8026C21.6785 10.6358 26.1541 6.15547 26.3207 5.83157C26.4001 5.66482 26.4417 5.4826 26.4427 5.29788C26.4437 5.11317 26.404 4.93051 26.3265 4.7629C26.1121 4.40396 25.8092 4.10611 25.4469 3.89787C25.2865 3.81116 25.1072 3.7656 24.925 3.76526C24.7427 3.76492 24.5633 3.80982 24.4026 3.89593ZM22.2559 13.5858C21.9939 13.6581 21.7571 13.8017 21.5719 14.0009C21.3065 14.3597 21.2232 15.0889 21.3898 15.6029C21.5022 15.952 21.785 16.2352 22.1338 16.3477C22.3702 16.4253 22.7557 16.435 25.6406 16.435C28.4093 16.435 28.9189 16.4233 29.1475 16.3554C29.719 16.1848 29.998 15.7348 30 14.9842C30 14.2375 29.7152 13.7894 29.1242 13.611C28.9247 13.5509 28.2989 13.5392 25.6484 13.5431C23.8698 13.547 22.343 13.5664 22.2559 13.5858ZM20.3339 19.3811C20.0277 19.5207 19.5763 19.963 19.4194 20.2772C19.3393 20.4342 19.2957 20.6073 19.2916 20.7836C19.2876 20.9599 19.3233 21.1348 19.3961 21.2954C19.5395 21.6154 24.0422 26.1384 24.3968 26.3188C24.8986 26.5767 25.4139 26.4507 25.9332 25.9425C26.4447 25.4421 26.5803 24.899 26.3207 24.3928C26.1405 24.0379 21.6223 19.5304 21.3026 19.3869C21.1498 19.3207 20.9853 19.286 20.8188 19.285C20.6524 19.284 20.4874 19.3167 20.3339 19.3811ZM14.5059 21.342C14.2442 21.4158 14.0076 21.56 13.822 21.759C13.5546 22.1197 13.5527 22.1449 13.5527 25.6322C13.5527 28.4096 13.5643 28.9197 13.6321 29.1485C13.8026 29.7207 14.254 30 15 30C15.7459 30 16.1973 29.7207 16.3678 29.1485C16.488 28.7374 16.486 22.5018 16.364 22.143C16.3264 21.9983 16.2577 21.8636 16.1627 21.7484C16.0676 21.6331 15.9485 21.5401 15.8137 21.4758C15.6006 21.3594 15.4766 21.3303 15.1104 21.3167C14.9086 21.3046 14.706 21.313 14.5059 21.342Z"
                fill="#364957"
              />
            </svg>
            <h1 className="text-lg font-medium">Loading...</h1>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {data?.slice(0, 4).map((b, index) => (
     <motion.div
     key={b.id}
     initial={{ opacity: 0, y: -20 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{
       type: "spring",
       stiffness: 100,
       damping: 20,
       delay: index * 0.1,
     }}
     whileHover={{ 
       y: -5,
       transition: { 
         type: "spring", 
         stiffness: 300, 
         damping: 15   
       } 
     }} // Smooth upward movement on hover
     className="flex flex-col px-4 md:px-0 md:flex-row bg-white shadow-md dark:shadow-[#0000] dark:shadow-sm rounded-lg overflow-hidden transition-transform transform hover:shadow-xl dark:bg-[#272727A6] dark:text-white"
   >
   
       
              <div className="relative md:w-1/3">
                <Image
                  className="w-full h-auto sm:h-full md:h-full lg:h-64"
                  width={350}
                  height={170}
                  src={b?.audioBookCover}
                  alt={b?.title}
                  quality={80}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                  <button
                    onClick={() => handlePlay(b.audioURL, b?._id)}
                    className="text-white text-4xl transition-transform transform hover:scale-110"
                  >
                    {isPlaying && currentAudio === b?._id ? (
                      <FaPauseCircle />
                    ) : (
                      <FaPlayCircle />
                    )}
                  </button>
                </div>
              </div>
              <div className="p-4 flex flex-col justify-between md:w-2/3">
                <div>
                  <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-1 hover:text-[#364957] transition-colors duration-300">
                    {b?.title.slice(0, 23)}
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-2">
                    By: <span className="font-medium">{b.author}</span>
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
                    Publisher: <span className="font-medium">Bookify</span>
                  </p>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < 4 ? "text-yellow-300" : "text-gray-300 dark:text-gray-600"} mr-1`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    ))}
                    <span className="text-slate-500 dark:text-slate-400 text-sm ml-2">
                      4.0 (42 reviews)
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handleFavorite(b?._id)}
                    className={` transition-colors duration-300 ${favorites[b?._id] ? "text-red-500" : "text-[#364957]" } hover:text-opacity-80`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => router.push(`/audiobooks/${b?._id}`)}
                    className="text-slate-900 dark:text-white dark:border-gray-300 border  py-1 rounded-md border-slate-800 px-2 hover:text-opacity-80"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
      <audio ref={audioRef} onEnded={() => setIsPlaying(false)} />
    </div>
  );
};

export default AudioBook;




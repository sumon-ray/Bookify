"use client";
import React, { useRef, useState } from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const audioBooks = [
  {
    id: 1,
    title:
      "Nexus: A Brief History of Information Networks from the Stone Age to AI Audiobook",
    author: "Yuval Noah Harari",
    audioBookCover:
      "https://media.audiobookstore.com/i/b/ib01/ib01-square-1536.jpg",
    audioURL: "https://media.audiobookstore.com/i/b/ib01/ib01-sample.mp3",
    duration: "17.50 hours",
    releaseDate: "September 2024",
    publisher: "Bookify",
  },
  {
    id: 2,
    title: "The Women: A Novel Audiobook",
    author: "Kristin Hannah",
    audioBookCover:
      "https://media.audiobookstore.com/h/k/hk07/hk07-square-1536.jpg",
    audioURL: "https://media.audiobookstore.com/h/k/hk07/hk07-sample.mp3",
    duration: "17.50 hours",
    releaseDate: "September 2024",
    publisher: "Bookify",
  },
  {
    id: 3,
    title: "It Ends with Us Audiobook",
    author: "Colleen Hoover",
    audioBookCover:
      "https://media.audiobookstore.com/b/t/btqz/btqz-square-1536.jpg",
    audioURL: "https://media.audiobookstore.com/b/t/btqz/btqz-sample.mp3",
    duration: "17.50 hours",
    releaseDate: "September 2024",
    publisher: "Bookify",
  },
  {
    id: 4,
    title:
      "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones Audiobook",
    author: "James Clear",
    audioBookCover:
      "https://media.audiobookstore.com/c/r/cr0m/cr0m-square-1536.jpg",
    audioURL: "https://media.audiobookstore.com/c/r/cr0m/cr0m-sample.mp3",
    duration: "17.50 hours",
    releaseDate: "September 2024",
    publisher: "Bookify",
  },
  {
    id: 5,
    title: "Eruption Audiobook",
    author: "James Patterson, Michael Crichton",
    audioBookCover:
      "https://media.audiobookstore.com/h/x/hxy5/hxy5-square-1536.jpg",
    audioURL: "https://media.audiobookstore.com/h/x/hxy5/hxy5-sample.mp3",
    duration: "17.50 hours",
    releaseDate: "September 2024",
    publisher: "Bookify",
  },
];
const AudioBook = () => {
  const [currentAudio, setCurrentAudio] = useState(null); // Track the current audio ID
  const [isPlaying, setIsPlaying] = useState(false); // Track play/pause state
  const audioRef = useRef(null); // Reference to the audio element

  // Function to handle playing a new audio
  const handlePlay = (audioURL, id) => {
    if (currentAudio === id) {
      // If the same audio is clicked, toggle play/pause
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    } else {
      // If a new audio is clicked, set it as the current and play it
      setCurrentAudio(id);
      audioRef.current.src = audioURL;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };
  return (
    <div className="max-w-7xl mx-auto  py-8 space-y-10">
      <div className='p-2 rounded-tl-2xl rounded-br-2xl border border-black max-w-[380px] h-12 mx-auto'>
        <h1 className='text-2xl uppercase font-bold text-center'>
          Explore Audio Collection
        </h1>
      </div>

      <div className="px-4 grid lg:grid-cols-2 grid-cols-1 gap-4 mb-5">
        {audioBooks.slice(0, 4).map((b) => (
          <div
            key={b.id}
            className="lg:h-[250px] flex border bg-white shadow-lg rounded-lg"
          >
            <div className="">
              <img
                className="h-full w-[250px] rounded-tl rounded-bl   hidden md:block"
                src={b?.audioBookCover}
                alt="Album Pic"
              />
            </div>
            <div className="w-full md:p-8 p-4 relative">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-2xl text-grey-darkest font-medium">
                    {b?.title}
                  </h3>
                  <p className="text-sm text-grey mt-1">{b?.author}</p>
                </div>
                <div>
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" />
                  </svg>
                </div>
              </div>
              <div className="md:text-3xl text-xl absolute bottom-0  md:right-0 -right-4">
                <button
                  type="button"
                  onClick={() => handlePlay(b.audioURL, b.id)}
                  className="px-8 py-3 font-semibold rounded-full dark:bg-gray-800 dark:text-gray-100"
                >
                  {isPlaying && currentAudio === b.id ? (
                    <FaPauseCircle className="text-[##64957]" />
                  ) : (
                    <FaPlayCircle className="text-[#364957]" />
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <audio ref={audioRef} onEnded={() => setIsPlaying(false)} />
    </div>
  );
};

export default AudioBook;

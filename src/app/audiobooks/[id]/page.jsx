"use client";
import { useEffect, useState } from "react";
import Player from "@/Components/Player";
import Link from "next/link";


const audioBooks = [
  {
    "title": "Nexus: A Brief History of Information Networks from the Stone Age to AI Audiobook",
    "author": "Yuval Noah Harari",
    "audioBookCover": "https://media.audiobookstore.com/i/b/ib01/ib01-square-1536.jpg",
    "audioURL": "https://media.audiobookstore.com/i/b/ib01/ib01-sample.mp3",
    "duration": "17.50 hours",
    "releaseDate": "September 2024",
    "publisher": "Bookify"
  },
  {
    "title": "The Women: A Novel Audiobook",
    "author": "Kristin Hannah",
    "audioBookCover": "https://media.audiobookstore.com/i/b/ib01/ib01-square-1536.jpg",  
    "audioURL": "https://media.audiobookstore.com/h/k/hk07/hk07-sample.mp3",
    "duration": "17.50 hours",
    "relaseDate": "September 2024",
    "publisher": "Bookify"
  },
  {
    "title": "It Ends with Us Audiobook",
    "author": "Colleen Hoover",
    "audioBookCover": "https://media.audiobookstore.com/b/t/btqz/btqz-square-1536.jpg",
    "audioURL": "https://media.audiobookstore.com/b/t/btqz/btqz-sample.mp3",
    "duration": "17.50 hours",
    "relaseDate": "September 2024",
    "publisher": "Bookify"
  },
  {
    "title": "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones Audiobook",
    "author": "James Clear",
    "audioBookCover": "https://media.audiobookstore.com/c/r/cr0m/cr0m-square-1536.jpg",
    "audioURL": "https://media.audiobookstore.com/c/r/cr0m/cr0m-sample.mp3",
    "duration": "17.50 hours",
    "relaseDate": "September 2024",
    "publisher": "Bookify"
  },
  {
    "title": "Eruption Audiobook",
    "author": "James Patterson, Michael Crichton",
    "audioBookCover": "https://media.audiobookstore.com/h/x/hxy5/hxy5-square-1536.jpg",
    "audioURL": "https://media.audiobookstore.com/h/x/hxy5/hxy5-sample.mp3",
    "duration": "17.50 hours",
    "relaseDate": "September 2024",
    "publisher": "Bookify"
  }
]

export default function Page({ params }) {
  const [audioBooks, setAudioBooks] = useState([]);
  const [currentAudio, setCurrentAudio] = useState({
    "_id": "670e75ef820558c8cb5a0da0",
    "title": "the destiny book",
    "author": "John Greenfield",
    "genre": "neature",
    "narrator": "Emma Thompson",
    "duration": "7.54m",
    "releaseDate": "2023-01-15",
    "coverImage": "https://i.ibb.co.com/kMFzvDH/download.jpg",
    "audioSource": "https://s17.aconvert.com/convert/p3r68-cdx67/45s1a-zpccp.mp3",
    "view": 127
    }||null);

  console.log(params.id);
  console.log(currentAudio);

  useEffect(() => {
    // Fetch audio books data from the API
    const fetchAudioBooks = async () => {
      try {
        const response = await fetch("https://bookify-server-lilac.vercel.app/audioBook");
        const data = await response.json();
        setAudioBooks(data);

        // Set the current audio based on params.id
        if (params.id) {
          const foundAudio = data.find(book => book._id === params.id);
          if (foundAudio) {
            setCurrentAudio(foundAudio);
          }
        }

        // If no params.id is present, set the first audio book as default
        if (!params.id && data.length > 0) {
          setCurrentAudio(data[0]);
        }
      } catch (error) {
        console.error("Error fetching audio books:", error);
      }
    };

    fetchAudioBooks();
  }, [params.id]); // Re-run useEffect if params.id changes

  return (
    <div className="min-h-screen max-w-7xl mx-auto">
      <div id="Main">
        {/* Player Div */}
        <div className="pt-14">
          <div className="mt-14 sm:mt-10 relative z-10 rounded-xl">
            <div className="bg-white border-slate-100 transition-all duration-500 dark:bg-slate-800 dark:border-slate-500 border-b rounded-t-xl p-4 pb-6 sm:p-10 sm:pb-8 lg:p-6 xl:p-10 xl:pb-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8">
              {currentAudio && (
                <div className="flex space-x-4">
                  <img
                    src={currentAudio.coverImage}
                    loading="lazy"
                    decoding="async"
                    alt={currentAudio.title}
                    className="flex-none rounded-lg bg-slate-100 lg:w-[400px] lg:h-[400px]"
                    width="88"
                    height="88"
                  />
                  <div className="min-w-0 flex-auto space-y-1 font-semibold">
                    <p className="text-cyan-500 dark:text-cyan-400 text-sm leading-6">
                      {currentAudio.title}
                    </p>
                    <h2 className="text-slate-500 dark:text-slate-400 text-sm leading-6 truncate">
                      {currentAudio.author}
                    </h2>
                    <p className="text-slate-900 dark:text-slate-50 text-lg">
                      Narrated by {currentAudio.narrator}
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="bg-slate-50 text-slate-500 dark:bg-slate-600 dark:text-slate-200 rounded-b-xl flex items-center">
              {currentAudio && <Player audioUrl={'https://media.audiobookstore.com/d/h/dhim/dhim-sample.mp3'}></Player>}
            </div>
          </div>
        </div>

        {/* Audio Books List Div */}
        <div>
          <div className="inline-block w-full overflow-x-scroll">
            <table className="w-full leading-normal">
              <tbody>
                {audioBooks.map((book) => (
                  <tr key={book._id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-16 h-16">
                          <img
                            className="w-full h-full rounded-xl"
                            src={book.coverImage}
                            alt={book.title}
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">{book.title}</p>
                          <p className="text-gray-500 whitespace-no-wrap">{book.author}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{book.narrator}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{book.duration}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{book.releaseDate}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <button
                        onClick={() => setCurrentAudio(book)}
                        className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                      >
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                        ></span>
                        <Link href={'#Main'} className="relative">Play</Link>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

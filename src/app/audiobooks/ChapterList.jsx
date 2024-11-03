import React from 'react';
import Image from 'next/image';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';
import Link from 'next/link';

const ChapterList = ({ chapters, currentAudio, handlePlay, isPlaying, audioBookCover }) => {
  return (
    <div className="inline-block w-full mx-auto p-4 pb-8 transition-all duration-500 rounded-b-xl dark:text-white">
      <table className="w-full leading-normal p-0">
        <tbody>
          {chapters?.map((b) => (
            <tr key={b.id} className="flex flex-col md:flex-row border-gray-200 border-b">
              <td className="px-2 py-2   text-sm dark:text-white flex items-center w-full">
                <div className="flex-shrink-0 w-16 h-16">
                  <Image
                    className="w-full h-full rounded-xl"
                    width={64}
                    height={64}
                    src={audioBookCover}
                    alt={b?.title}
                    quality={80}
                  />
                </div>
                <div className="ml-2">
                  <p className="text-gray-900 whitespace-no-wrap dark:text-white">
                    {b?.chapter}
                  </p>
                </div>
              </td>
              <td className="px-2   text-sm dark:text-white  md:pr-48 lg:pr-[20rem] md:flex flex-col justify-center items-center w-full md:w-auto ">
                <p className="text-gray-900 dark:text-white md:text-center  whitespace-no-wrap">
                  {b?.duration}
                </p>
              </td>
              <td className="px-2 text-sm dark:text-white  md:pr-28  lg:pr-72 md:flex flex-col justify-center items-center w-full md:w-auto ">
                <p className="text-gray-900 md:text-center whitespace-no-wrap dark:text-white">
                  {b?.releaseDate}
                </p>
              </td>
              <td className="px-2 py-2  text-3xl text-[#364957] text-right dark:text-white w-full md:w-auto">
                <button
                  type="button"
                  onClick={() => handlePlay(b.audioURL, b?.id)}
                  className="border px-4 py-2 font-semibold rounded-full dark:text-white"
                >
                  <Link href="#Main">
                    {isPlaying && currentAudio === b?.id ? (
                      <FaPauseCircle />
                    ) : (
                      <FaPlayCircle />
                    )}
                  </Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChapterList;

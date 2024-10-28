import React from 'react';
import Image from 'next/image';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';
import Link from 'next/link';

const ChapterList = ({ chapters, currentAudio, handlePlay, isPlaying, audioBookCover }) => {
  return (
    <div className="inline-block w-full mx-auto p-4 pb-8 bg-white transition-all duration-500 rounded-b-xl dark:bg-[#0A0A0C] dark:text-white">
      <table className="w-full leading-normal p-10 ">
        <tbody>
          {chapters?.map((b) => (
            <tr key={b.id}>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-[#0A0A0C] dark:text-white">
                <div className="flex items-center">
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
                  <div className="ml-3">
                    <p className="text-gray-900 whitespace-no-wrap dark:bg-[#0A0A0C] dark:text-white">
                      {b?.chapter}
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 text-sm">
                <p className="text-gray-900 whitespace-no-wrap md:block hidden dark:bg-[#0A0A0C] dark:text-white">
                  {b?.duration}
                </p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-[#0A0A0C] dark:text-white">
                <p className="text-gray-900 whitespace-no-wrap md:block hidden dark:bg-[#0A0A0C] dark:text-white">
                  {b?.releaseDate}
                </p>
              </td>
              <td className="px-5 py-5 border-b text-3xl text-[#364957] text-right border-gray-200 bg-white dark:bg-[#0A0A0C] dark:text-white">
                <button
                  type="button"
                  onClick={() => handlePlay(b.audioURL, b?.id)}
                  className="px-8 py-3 font-semibold rounded-full dark:bg-[#0A0A0C] dark:text-white"
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
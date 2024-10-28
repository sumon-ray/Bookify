"use client"
import React from "react";
import { FaCrown, FaBookOpen, FaStar, FaAward } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { v4 as uuidv4 } from "uuid";

const CommunityHighlights = () => {
  const topUsers = [
    {
      id: 1,
      name: "Jordan Walk",
      booksExchanged: 24,
      profileImage: "https://i.pravatar.cc/150?img=3",
      title: "Book Lover of the Month",
      exchangeText: "Jordan has shared countless stories, exchanging over 24 books with readers.",
      icon: <FaCrown className="text-yellow-400" />,
      favoriteGenre: "Fantasy",
    },
    {
      id: 2,
      name: "Sam Hill",
      booksExchanged: 18,
      profileImage: "https://i.pravatar.cc/150?img=2",
      title: "Top Contributor",
      exchangeText: "With 18 books exchanged, Sam inspires others and builds a strong reader network.",
      icon: <FaStar className="text-yellow-400" />,
      favoriteGenre: "Science Fiction",
    },
    {
      id: 3,
      name: "Alex Moore",
      booksExchanged: 12,
      profileImage: "https://i.pravatar.cc/150?img=4",
      title: "Reading Enthusiast",
      exchangeText: "Alex enjoys sharing genres with 12 books exchanged and new connections formed.",
      icon: <FaBookOpen className="text-yellow-400" />,
      favoriteGenre: "Mystery",
    },
    {
      id: 4,
      name: "Emma Johnson",
      booksExchanged: 20,
      profileImage: "https://i.pravatar.cc/150?img=5",
      title: "Community Builder",
      exchangeText: "Emma's 20 book exchanges have brought readers together from all walks of life.",
      icon: <FaAward className="text-yellow-400" />,
      favoriteGenre: "Romance",
    },
    {
      id: 5,
      name: "Liam Chen",
      booksExchanged: 15,
      profileImage: "https://i.pravatar.cc/150?img=6",
      title: "Genre Explorer",
      exchangeText: "Liam's diverse taste has led to 15 exciting book exchanges across multiple genres.",
      icon: <FaBookOpen className="text-yellow-400" />,
      favoriteGenre: "Horror",
    },
    // Add more users as needed...
  ];

  const renderUserCard = (user, index) => {
    return (
      <div key={uuidv4()} className="rounded-lg shadow-lg p-6 w-64 sm:w-72 md:w-80 lg:w-96 bg-white text-gray-800 mx-4 relative overflow-hidden">
        {/* <div className="absolute top-0 right-0 w-24 h-24 bg-gray-100 opacity-50 rounded-full -mr-12 -mt-4"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gray-100 opacity-50 rounded-full -ml-12 -mb-4"></div> */}
        
        <div className="flex items-center mb-4">
          <div className="relative">
            <img
              src={user.profileImage}
              alt={`${user.name}'s profile`}
              className="rounded-full w-20 h-20 border-4 border-white shadow-md"
            />
            <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md">
              {user.icon}
            </div>
          </div>
          <div className="text-left ml-4">
            <h3 className="text-lg font-bold text-gray-800">
              {user.name}
            </h3>
            <p className="text-sm text-gray-600 italic">{user.title}</p>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-200">
          <p className="text-gray-700 text-sm">{user.exchangeText}</p>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <FaBookOpen className="text-yellow-400 mr-2" />
            <span className="text-lg font-semibold text-gray-700">{user.booksExchanged}</span>
            <span className="text-xs text-gray-500 ml-1">books</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xs text-gray-500 mb-1">Favorite Genre</span>
            <span className="text-sm font-semibold text-gray-700">{user.favoriteGenre}</span>
          </div>
        </div>
        
        {/* <button className="mt-4 w-full bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-600 transition-colors duration-200 shadow-md">
          Request Exchange
        </button> */}
        
        <div className="absolute top-2 right-2">
          <div className="text-xs font-semibold bg-[#364957] text-white  px-2 py-1 rounded-full shadow-sm">
            #{index + 1}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="  px-6 lg:px-32 overflow-hidden">
      <div className='p-2 rounded-tl-2xl rounded-br-2xl border border-black dark:border-gray-300 max-w-[385px] h-12 mx-auto'>
        <h1 className='md:text-2xl uppercase font-bold text-center'>
        Community Highlights
        </h1>
      </div>

<div className="mt-14">
        {/* Left-to-Right Marquee */}
        <Marquee gradient={false} speed={40} pauseOnHover={true}>
        {topUsers.map((user, index) => renderUserCard(user, index))}
      </Marquee>

      {/* Right-to-Left Marquee */}
      <Marquee gradient={false} speed={40} pauseOnHover={true} direction="right" className="mt-8">
        {topUsers.map((user, index) => renderUserCard(user, index))}
      </Marquee>
</div>
    </div>
  );
};

export default CommunityHighlights;

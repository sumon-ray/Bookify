import React from 'react';
import IconButton from './IconButton.jsx';
import { FaDiscord, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const useIcon = () => {
  return (
    <div>
      <div className="flex gap-5">
        <IconButton text="" color="">
          <a
            href="https://www.instagram.com/" 
            target="_blank"
            rel="noopener noreferrer"
            className="size-12 flex items-center justify-center bg-gray-300 dark:bg-[#364957] rounded-full"
          >
            <FaTwitter />
          </a>
        </IconButton>

        <IconButton text="" color="">
          <a
            href="https://www.instagram.com/" 
            target="_blank"
            rel="noopener noreferrer"
            className="size-12 flex items-center justify-center bg-gray-300 dark:bg-[#364957] rounded-full"
          >
            <FaInstagram />
          </a>
        </IconButton>

        <IconButton text="" color="">
          <a
            href="https://discord.com/" 
            target="_blank"
            rel="noopener noreferrer"
            className="size-12 flex items-center justify-center bg-gray-300 dark:bg-[#364957] rounded-full"
          >
            <FaDiscord />
          </a>
        </IconButton>

        <IconButton text="" color="">
          <a
            href="https://www.facebook.com/" 
            target="_blank"
            rel="noopener noreferrer"
            className="size-12 flex items-center justify-center bg-gray-300 dark:bg-[#364957] rounded-full"
          >
            <FaFacebook />
          </a>
        </IconButton>
      </div>
    </div>
  );
};

export default useIcon;

import React from 'react';
import IconButton from './IconButton.jsx';
import { FaDiscord,  FaTwitter,
  FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";



const useIcon = () => {
    return (
        <div>
                    <div className="flex gap-5 ">
                    <IconButton
                text="Twitter"
                color=""
              >
                <a className='size-12 flex items-center justify-center bg-gray-300   rounded-full' >
                  <FaTwitter />
                </a>
              </IconButton>
              
              <IconButton
                text="Instagram"
                color=""
              >
                <a className='size-12 flex items-center justify-center bg-gray-300  rounded-full' >
                  <FaInstagram />
                </a>
              </IconButton>
       
              <IconButton
                text="Discord"
                color=""
              
              >
                <a className='size-12 flex items-center justify-center  bg-gray-300  rounded-full' >

                <FaDiscord />
                </a>
              </IconButton>
              <IconButton
                text="Facebook"
                color=""
              >
                <a className='size-12 flex items-center justify-center bg-gray-300   rounded-full' >
                  <FaFacebook />
                </a>
              </IconButton>
          
            </div>
        </div>
    );
};

export default useIcon;
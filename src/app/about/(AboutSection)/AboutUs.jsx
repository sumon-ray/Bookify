// components/AboutUs.js
"use client";
// BookSwap
import { Button } from 'flowbite-react';
import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
// import LottieAnimation from './LottieAnimation';

const AboutUs = () => {
    return (
        <div>
            <section className="bg-[#fdf6f6] pb-8   ">
                <div className="container   mx-auto flex flex-col-reverse lg:flex-row justify-center lg:px-12 md:flex-col-reverse items-center px-6 md:px-12">
                    {/* Text Section */}
                    <div className=" md:w-1/2 flex flex-col items-center justify-center  md:mb-0 text-center md:text-left">
                        <h1 className="text-3xl md:text-4xl lg:text-[40px] font-semibold mb-6">
                            Welcome to <span className="text-indigo-600">Bookify</span>
                        </h1>
                        <p className="text-lg lg:w-96 mx-auto text-justify mb-6">
                            At BookSwap, we believe in the power of sharing knowledge. Our platform makes it easy to swap, share, and discover new books within a community of passionate readers.
                        </p>
                        <Button size="lg" color="purple" className="mb-6 flex flex-col items-center justify-center">
                            Get Started
                        </Button>

                        {/* Social Icons */}
                        <div className="flex space-x-4 justify-center md:justify-start">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF className="text-2xl text-indigo-600 hover:text-indigo-800" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="text-2xl text-indigo-600 hover:text-indigo-800" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="text-2xl text-indigo-600 hover:text-indigo-800" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-2xl text-indigo-600 hover:text-indigo-800" />
                            </a>
                        </div>
                    </div>

                    {/* Lottie Animation */}
                    <div className=" flex md:flex-col flex-col justify-center">
                        {/* <LottieAnimation /> */}
                    </div>
           
                </div>
   
            </section>
        </div>
    );
};

export default AboutUs;

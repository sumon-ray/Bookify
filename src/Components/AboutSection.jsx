import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AboutSection() {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <Image
            src="https://merakiui.com/images/components/Email-campaign-bro.svg"
            alt="about-section"
            width={600}
            height={600}
            className="  sm:h-64 lg:h-96 xl:h-112 2xl:h-128  rounded-md "
          />
      

        </div>

        <div className=" md:mr-5 md:ml-5 ">
          
          <h1 className="text-3xl flex gap-2 font-bold leading-none sm:text-6xl">
           <p className="text-[#A85D32]">About</p> BookiFy
          </h1>
          <p className="mt-4 mb-4 text-lg  sm:mb-5 text-gray-700">
          Welcome to Bookify, your ultimate destination for discovering, exchanging, and sharing books! At Bookify, we believe in the power of stories to connect, inspire, and transform lives. Our mission is to create a thriving community where book lovers can come together to explore new titles, swap their favorite reads, and cultivate a passion for literature.We are passionate about making books more accessible.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center text-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 md:justify-start lg:justify-start">
            <Link
              href="/about"
              className=" md:px-8 py-3 text-lg font-semibold border rounded-full bg-[#A85D32] text-white"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

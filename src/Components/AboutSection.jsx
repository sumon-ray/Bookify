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
            alt=""
            width={600}
            height={600}
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>

        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-3xl font-bold leading-none sm:text-6xl">
            BookiFy
          </h1>
          <p className="mt-4 mb-4 text-lg sm:mb-5">
            Learn more about our Bookify click through the link..
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              href="/about"
              className=" md:px-8 py-3 text-lg font-semibold border rounded bg-[#A85D32] text-white"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

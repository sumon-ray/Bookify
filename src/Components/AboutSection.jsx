// import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AboutSection() {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">

        <div className="h-64 w-1/2 lg:h-auto">
          <div
            className=" h-full bg-cover rounded-2xl"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}
          >
            <div className="w-full h-full rounded-2xl bg-black opacity-25"></div>
          </div>
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

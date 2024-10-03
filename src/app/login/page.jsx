"use client";
import SocialLogin from "@/Components/SocialLogin";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { GiBookmarklet } from "react-icons/gi";

const page = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const session = useSession();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const resp = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (resp.status === 200) {
      router.push("/");
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };
  return (
    <>
      <div className="flex flex-row w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-4xl my-8">
        <div
          className="hidden bg-cover lg:block lg:w-1/2"
          style={{
            backgroundImage: "url('https://i.ibb.co/52MW2SQ/login.jpg')",
          }}
        ></div>

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex items-center justify-center text-[#B7B7B7]">
            <GiBookmarklet className="text-3xl font-bold -mb-1.5" />
            <h1 className="font-black text-2xl uppercase -mt-1">Bookify</h1>
          </div>

          <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
            Welcome back!
          </p>

          <SocialLogin></SocialLogin>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

            <p className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
              or login with email
            </p>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
          </div>

          <form onSubmit={handleLogin}>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                
              >
                Email Address
              </label>
              <input
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
                type="email"
                name="email"
                id="email"
                required
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                
                >
                  Password
                </label>
                {/* <p
                  href="#"
                  className="text-xs text-gray-500 dark:text-gray-300 hover:underline"
                >
                  Forget Password?
                </p> */}
              </div>

              <input
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 "
                type="password"
                name="password"
                id="password"
                required
              />
            </div>

            {/* Error handle */}
            <div className="flex w-full max-w-sm overflow-hidden  dark:bg-gray-800">
              <div className="px-4 py-2 -mx-3">
                <div className="mx-3">
                  <span className="font-semibold text-red-500 dark:text-red-400">
                    {error}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              >
                Sign In
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

            <Link
              href="/signup"
              className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
            >
              or sign up
            </Link>

            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

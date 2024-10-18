"use client";
import SocialLogin from "@/Components/SocialLogin";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, Suspense } from "react";
import img from "../../../src/assets/images/About/logo (1).png";
import Image from "next/image";
import toast from "react-hot-toast";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const paramValue = searchParams ? searchParams.get('param') : null;
  const path = searchParams.get("redirect");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;
    const resp = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: path ? path : "/",
    });
    if (resp.status === 200) {
      router.push("/");
      toast.success("You are logged in successfully");
    } else {
      setError("Invalid email or password. Please try again.");
    }
    setLoading(false);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex justify-center max-w-7xl flex-row-reverse w-full mx-auto overflow-hidden rounded-lg my-16">
        <div
          className="hidden bg-center bg-no-repeat lg:block w-1/2 mx-6 my-8"
          style={{
            backgroundImage: "url('https://i.ibb.co/3d0DvB0/signin.png')",
          }}
        ></div>

        <div className="w-full mx-6 my-8 lg:px-16 md:px-8 lg:w-1/2">
          <Link href={"/"}>
            <div className="flex items-center justify-center text-[#B7B7B7]">
              <Image
                src={img}
                className="h-[68px] w-36"
                height={20}
                width={200}
              />
            </div>
          </Link>

          <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
            Welcome back!
          </p>

          <SocialLogin />

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
            <p className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
              or login with email
            </p>
            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
          </div>

          <form onSubmit={handleLogin}>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Email Address
              </label>
              <input
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-[#364957] focus:ring-opacity-0 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                name="email"
                id="email"
                required
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                  Password
                </label>
              </div>

              <input
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-[#364957] focus:ring-opacity-0 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                name="password"
                id="password"
                required
              />
            </div>

            {/* Error handle */}
            <div className="flex w-full max-w-sm overflow-hidden dark:bg-gray-800">
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
                className="w-full px-6 py-3 text-sm font-medium tracking-wide bg-[#364957] text-[#ffffff] capitalize transition-colors duration-300 transform rounded-lg"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin border-indigo-300"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <path
                        d="M14.4304 0.0323927C14.0002 0.172039 13.7522 0.420298 13.6321 0.825659C13.5643 1.05258 13.5527 1.58013 13.5527 4.33426C13.5527 7.98251 13.5488 7.93596 13.9208 8.30835C14.4187 8.80487 15.5812 8.80487 16.0792 8.30835C16.4511 7.93596 16.4473 7.98251 16.4473 4.33426C16.4473 0.804324 16.4415 0.742259 16.1547 0.400903C15.9145 0.115792 15.6568 0.0207556 15.0775 0.00523939C14.8614 -0.00695113 14.6447 0.00214369 14.4304 0.0323927Z"
                        fill="#4F46E5"
                      />
                      {/* Additional paths here... */}
                    </svg>
                  </div>
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Suspense>
  );
};

export default Page;

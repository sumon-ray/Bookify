"use client";
import SocialLogin from "@/Components/SocialLogin";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FaBookOpen } from "react-icons/fa";

const SignUp = () => {
  const router = useRouter();
  const handleSignUp = async (e) => {
    e.preventDefault();
    const newUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    const { email, password } = newUser;
    console.log(email, password);

    const resp = await fetch("http://localhost:3000/signup/api", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "content-type": "application/json",
      },
    });

    if (resp.status === 200) {
      e.target.reset();
    }
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (res.status === 200) {
      router.push("/");
    }
  };

  return (
    <div className="flex flex-row-reverse w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl my-8">
      <div
        className="hidden bg-cover lg:block lg:w-1/2"
        style={{
          backgroundImage: "url('https://i.ibb.co/MZJYGcZ/register.jpg')",
        }}
      ></div>

      <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <div className="flex justify-center mx-auto  text-blue-500">
          <FaBookOpen className=" text-3xl font-bold" />
          <h1 className="font-black text-2xl  uppercase -mt-1">Bookify</h1>
        </div>

        <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
          Welcome back!
        </p>

        <SocialLogin></SocialLogin>
        <form onSubmit={handleSignUp}>
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

            <p className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
              or register
            </p>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
          </div>

          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
             
            >
              Name
            </label>
            <input
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
           
            >
              Email Address
            </label>
            <input
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
              name="email"
              id="email"
            />
          </div>

          <div className="mt-4">
            <div className="flex justify-between">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
               
              >
                Password
              </label>
            </div>

            <input
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
              name="password"
              id="password"
            />
          </div>

          {/* Error handle */}
          <div className="flex w-full max-w-sm overflow-hidden  dark:bg-gray-800">
            <div className="px-4 py-2 -mx-3">
              <div className="mx-3">
                <span className="font-semibold text-red-500 dark:text-red-400"></span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

          <Link
            href="/login"
            className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
          >
            or sign in
          </Link>

          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

"use client"; // Ensure this file is treated as a client component
import SocialLogin from "@/Components/SocialLogin";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, Suspense } from "react";
import img from "../../../src/assets/images/About/logo (1).png";
import Image from "next/image";
import toast from "react-hot-toast";
import { useSearchParams } from "next/navigation"; 

const LoginForm = ({ redirect }) => {
  const router = useRouter();
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
      callbackUrl: redirect || "/",
    });

    if (resp?.status === 200) {
      router.push("/");
      toast.success("You are logged in successfully");
    } else {
      setError("Invalid email or password. Please try again.");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="mt-4 dark:bg-[#0A0A0C] dark:text-white">
        <label className="block mb-2 text-sm font-medium text-gray-600 file:dark:bg-[#0A0A0C] dark:text-white">
          Email Address
        </label>
        <input
          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-[#364957] focus:ring-opacity-0 focus:outline-none focus:ring focus:ring-blue-300 dark:bg-[#0A0A0C] dark:text-white"
          type="email"
          name="email"
          id="email"
          required
        />
      </div>

      <div className="mt-4">
        <label className="block mb-2 text-sm font-medium text-gray-600  dark:bg-[#0A0A0C] dark:text-white">
          Password
        </label>
        <input
          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-[#364957] focus:ring-opacity-0 focus:outline-none focus:ring focus:ring-blue-300 dark:bg-[#0A0A0C] dark:text-white"
          type="password"
          name="password"
          id="password"
          required
        />
      </div>

      {error && <div className="text-red-500">{error}</div>}

      <div className="mt-6 ">
        <button
          type="submit"
          className="w-full px-6 py-3 text-sm font-medium tracking-wide bg-[#364957] text-[#ffffff] capitalize transition-colors duration-300 transform rounded-lg"
          disabled={loading}
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </div>
    </form>
  );
};

const SearchParamsProvider = () => {
  const searchParams = useSearchParams();
  const path = searchParams.get("redirect");

  return <Page redirect={path} />;
};

const Page = ({ redirect }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex justify-center max-w-7xl flex-row-reverse w-full mx-auto overflow-hidden rounded-lg my-16 dark:bg-[#0A0A0C] dark:text-white">
        <div
          className="hidden bg-center bg-no-repeat lg:block w-1/2 mx-6 my-8"
          style={{
            backgroundImage: "url('https://i.ibb.co/3d0DvB0/signin.png')",
          }}
        ></div>

        <div className="w-full mx-6 my-8 lg:px-16 md:px-8 lg:w-1/2">
          <Link href={"/"}>
            <div className="flex items-center justify-center text-[#B7B7B7] dark:bg-[#0A0A0C] dark:text-white">
              <Image
                src={img}
                className="h-[68px] w-36"
                height={20}
                width={200}
                alt="Logo"
              />
            </div>
          </Link>

          <p className="mt-3 text-xl text-center text-gray-600 dark:bg-[#0A0A0C] dark:text-white">
            Welcome back!
          </p>

          <SocialLogin />

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:bg-[#0A0A0C] dark:text-white lg:w-1/4"></span>
            <p className="text-xs text-center text-gray-500 uppercase dark:bg-[#0A0A0C] dark:text-white hover:underline">
              or login with email
            </p>
            <span className="w-1/5 border-b dark:bg-[#0A0A0C] dark:text-white lg:w-1/4"></span>
          </div>

          <LoginForm redirect={redirect} /> {/* Pass the redirect parameter here */}

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:bg-[#0A0A0C] dark:text-white md:w-1/4"></span>
            <Link
              href="/signup"
              className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
            >
              or sign up
            </Link>
            <span className="w-1/5 border-b dark:bg-[#0A0A0C] dark:text-white md:w-1/4"></span>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchParamsProvider />
    </Suspense>
  );
};

export default App;

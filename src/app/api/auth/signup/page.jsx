"use client";
import Link from "next/link";
import React from "react";

const SignUp = () => {
    const handleRegister = async (e) => {
        e.preventDefault();
      
        const res = await fetch('http://localhost:3000/api', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: e.target.name.value,
            email: e.target.email.value,
          }),
        });
      
        const data = await res.json();
        if (data.success) {
          console.log('User added successfully:', data);
        } else {
          console.error('Error adding user:', data.error);
        }
      };
      

  return (
    <div>
      <h2 className="text-lg font-semibold text-center">
        Sign Up with Email and Password
      </h2>

      <div className="flex items-center justify-center text-center">
        <form
          onSubmit={handleRegister}
          className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg"
        >
          <label htmlFor="name" className="self-start text-xs font-semibold">
            Enter your name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Full Name"
            className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 focus:border-sky-400 focus:ring-sky-400"
          />
          <label htmlFor="email" className="self-start text-xs font-semibold">
            Enter your Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 focus:border-sky-400 focus:ring-sky-400"
          />
          <label
            htmlFor="password"
            className="self-start mt-3 text-xs font-semibold"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            className="flex items-center h-12 px-4 mt-2 rounded text-gray-900 focus:outline-none focus:ring-2 focus:border-sky-400 focus:ring-sky-400"
          />
          <button
            type="submit"
            className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded bg-sky-400 text-gray-900"
          >
            Sign Up
          </button>
          <div className="flex justify-center mt-6 space-x-2 text-xs">
            <span className="text-gray-400">Already have account!</span>
            <Link
              href={"/api/auth/signin"}
              rel="noopener noreferrer"
              className="text-sky-400"
            >
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;

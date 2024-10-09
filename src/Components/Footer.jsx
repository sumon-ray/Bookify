"use client";

import { usePathname } from "next/navigation";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaApplePay,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcPaypal,
  FaGooglePay,
} from "react-icons/fa";

const Footer = () => {
  const route = usePathname();

  if (
    route.includes("dashboard") ||
    route.includes("/login") ||
    route.includes("/signup") // Fixed typo from "/sighup" to "/signup"
  ) {
    return <div></div>;
  }

  return (
    <footer className="bg-white text-black py-6 px-4 lg:py-12 lg:px-8">
      <div className="w-full flex flex-col lg:flex-row gap-8 mx-auto">
        <div className="w-full lg:w-2/3 border-2 p-4 bg-gray-100 rounded-xl flex flex-col justify-center items-center space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full p-2 text-center">
            {/* Contact Section */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold">Contact Us</h2>
              <p>www.bookify06@gmail.com</p>
              <p>Dhaka, Bangladesh</p>
              <p>+88018********</p>
              <div className="flex space-x-4 mt-4 text-xl items-center justify-center">
                {/* Social Media Icons */}
                <a href="#" aria-label="Facebook">
                  <FaFacebook />
                </a>
                <a href="#" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="#" aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="#" aria-label="YouTube">
                  <FaYoutube />
                </a>
              </div>
            </div>

            {/* About Us Section */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold">About Us</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Banners & Noble, Inc.
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Authors
                  </a>
                </li>
              </ul>
            </div>

            {/* Categories Section */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold">Categories</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Coupons
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    E-catalogs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Order Form
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Help Section */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold">Quick Help</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Order Status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Shipping & Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Covid Safety
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center text-sm">
            {/* Copyright Section */}
            <p>© Copyright The Readers. All rights reserved.</p>
            <p>
              Site by{" "}
              <a className="font-bold" href="#">
                Bookify
              </a>
              .
            </p>
          </div>
        </div>

        {/* Newsletter and Payment Section */}
        <div className="w-full lg:w-1/3 flex flex-col space-y-6">
          <div className="border-2 p-4 bg-gray-100 rounded-xl flex flex-col justify-center items-center space-y-3 h-1/2">
            <h2 className="text-2xl font-bold text-center">Subscribe to our newsletter!</h2>
            <form className="flex gap-2 w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-md w-full text-gray-800"
                required
              />
              <button
                type="submit"
                className="bg-[#364957] text-white px-4 py-2 rounded-md hover:bg-gray-200 hover:text-black transition-colors duration-300"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="flex justify-center items-center space-x-4 text-3xl p-4 border-2 rounded-xl bg-gray-100 h-1/2">
            <FaApplePay />
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcAmex />
            <FaCcPaypal />
            <FaGooglePay />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

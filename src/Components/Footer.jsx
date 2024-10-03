import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcAmex } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12 ">
      <div className="w-full flex mx-auto gap-8 px-4 flex-col md:flex-row">
        <div className="w-full md:w-2/3 border-2 p-2 bg-gray-100 rounded-xl flex flex-col justify-center items-center">
          <div className="md:flex justify-between gap-16">
            {/* Contact Section */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold">Contact Us</h2>
              <p>www.bookify06@gmail.com</p>
              <p>Dhaka, Bangladesh</p>
              <p>+88018********</p>
              <div className="flex space-x-4 mt-4 text-xl">
                {/* Social Media Icons */}
                <a href="#">
                  <FaFacebook />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaTwitter />
                </a>
                <a href="#">
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
            <div className="space-y-4 b-">
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

          <div className="flex justify-between">
            {/* Copyright Section */}
            <div className=" text-center text-sm mt-8 ">
              <p>© Copyright The Readers. All rights reserved.</p>
              <p>Site by <a className="font-bold" href="">Bookify </a>.</p>
            </div>
          </div>
        </div>

        {/* Newsletter and Payment Section */}
        <div className="space-y-4 w-full md:w-1/3 flex flex-col">
          <div className="border-2 p-4 h-1/2 bg-gray-100 rounded-xl">
            <h2 className="text-lg font-bold">Subscribe to our newsletter!</h2>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-l-md w-full text-gray-800"
              />
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-200 hover:text-black"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="flex mt-4 space-x-2 text-5xl p-4 border-2 h-1/2 justify-center items-center rounded-xl bg-gray-100">
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

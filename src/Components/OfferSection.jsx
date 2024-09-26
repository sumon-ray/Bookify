import React from "react";
import { FaShippingFast, FaTag } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";

export default function OfferSection() {
  return (
    <section className=" bg-[#eeebe4] text-gray-100 ">
      <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3">
        <div className="flex p-4 space-x-4 rounded-lg md:space-x-2  text-gray-400">
          <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 text-3xl">
            <FaShippingFast />
          </div>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-lg font-semibold leading-none uppercase text-black">
              Free Shipping
            </p>
            <p className="capitalize">Order over $100</p>
          </div>
        </div>
        <div className="flex p-4 space-x-4 rounded-lg md:space-x-2  text-gray-400">
          <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 text-3xl">
            <RiSecurePaymentLine />
          </div>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-lg font-semibold leading-none uppercase text-black">
              Security Payment
            </p>
            <p className="capitalize">100% Secure Payment</p>
          </div>
        </div>
        <div className="flex p-4 space-x-4 rounded-lg md:space-x-2  text-gray-400">
          <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 text-3xl">
            <FaTag />
          </div>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-lg font-semibold leading-none uppercase text-black">
              Best Prices
            </p>
            <p className="capitalize">Guaranteed Price</p>
          </div>
        </div>
      </div>
    </section>
  );
}
   
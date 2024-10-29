import Image from "next/image";
import React from "react";
import { FaCircleXmark } from "react-icons/fa6";

const page = () => {
  return (
    <div className="md:mt-40 mt-20 mb-20 max-w-6xl mx-auto">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-auto my-20 px-4 container bg-white dark:bg-[#0A0A0C] dark:text-white">
        <table className="w-full text-sm text-left">
          <thead className="text-xs uppercase border-b">
            <tr className="">
              <th></th>
              <th scope="col" className="px-6 py-3">
                Books
              </th>
              <th scope="col" className="px-6 py-3">
                Days
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Unit Price
              </th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="border-b">
              <td className="text-red-500 font-bold text-xl">
                <button>
                  <FaCircleXmark />
                </button>
              </td>
              <td className="p-4 flex items-center gap-2">
                <div className="h-24">
                  <Image
                    width={64}
                    height={64}
                    src="https://i.postimg.cc/h42k2rpf/The-Night-Circus.jpg"
                    className="rounded-sm object-contain"
                    alt="Apple Watch"
                  />
                </div>
                <div className="text-sm">
                  <h2>Book Title</h2>
                </div>
              </td>
              <td className="px-6 py-4 font-semibold">30</td>
              <td className="px-6 py-4 font-semibold">$599</td>
              <td className="px-6 py-4 font-semibold">$599</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:justify-between justify-center container">
        <div className="w-80">
          <input
            type="text"
            placeholder="Place Coupon"
            className="border-none bg-white outline-none focus:outline-none w-3/4 rounded-l-md dark:bg-[#0A0A0C] dark:text-white"
          />
          <button className="bg-[#364957] text-white font-semibold  p-2 rounded-r-md ">
            Redeem
          </button>
        </div>
        <div className="border bg-white w-80 rounded-md">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:bg-[#0A0A0C] dark:text-white">
              <tbody>
                <tr className="bg-white  dark:bg-[#0A0A0C] dark:text-white">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:bg-[#0A0A0C] dark:text-white"
                  >
                    Subtotal
                  </th>
                  <td className="px-6 py-4">$500</td>
                </tr>
                <tr className="bg-white dark:bg-[#0A0A0C] dark:text-white">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:bg-[#0A0A0C] dark:text-white"
                  >
                    Shipping Fee
                  </th>

                  <td className="px-6 py-4">$20</td>
                </tr>
                <tr className="bg-white dark:bg-[#0A0A0C] dark:text-white ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:bg-[#0A0A0C] dark:text-white"
                  >
                    Coupon
                  </th>
                  <td className="px-6 py-4">No</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="font-semibold text-gray-900 dark:bg-[#0A0A0C] dark:text-white">
                  <th scope="row" className="px-6 py-3 text-base">
                    Total
                  </th>
                  <td className="px-6 py-3">$519</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <button className="w-full py-2 rounded-b-md text-center bg-[#364957]  text-white font-semibold">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;

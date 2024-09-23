import { FaBook, FaDoorOpen, FaGraduationCap } from "react-icons/fa";
import { SiBookstack } from "react-icons/si";
import { WiSunrise } from "react-icons/wi";
import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-[#eeebe4] dark:bg-gray-900">
        {/* -------------- */}
      <div className="container px-6 py-16 mx-auto text-center">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5 text-[64px] text-gray-400">
            {/* brand-1 */}
            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1 ">
              <div className="flex flex-col items-center">
                <FaGraduationCap />
              </div>
            </div>
            {/* brand-2 */}
            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1 text-[64px]">
              <div className="flex flex-col items-center">
                <SiBookstack />
                <h2 className="text-sm font-semibold uppercase">Book Store</h2>
              </div>
            </div>
            {/* brand-3 */}
            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
              <div className="flex flex-col items-center">
                <FaDoorOpen />
                <h2 className="text-sm font-semibold">Bookdoor</h2>
              </div>
            </div>
            {/* brand-4 */}
            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
              <div className="flex flex-col items-center">
                <div className="flex flex-col items-center">
                  <FaBook />
                  <h2 className="text-sm font-semibold uppercase">Library</h2>
                </div>
              </div>
            </div>
            {/* brand-5 */}
            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
              <div className="flex flex-col items-center">
                <WiSunrise />
                <h2 className="text-sm font-semibold uppercase">Flaprise</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 



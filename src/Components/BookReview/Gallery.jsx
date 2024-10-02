import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <div>
      <div className="container mx-auto px-8 lg:px-20">
        <div className="flex justify-between gap-10">
          <div className="flex flex-col justify-between items-center">
            <div className="">
              <div className="bg-green-300 rounded-full ">
                <Image
                  src="/image/men.jpg"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

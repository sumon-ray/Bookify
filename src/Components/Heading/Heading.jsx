import React from "react";

const Heading = ({ heading }) => {
  return (
    <div className="text-center md:my-10 lg:my-16 my-8">
      <span className="px-4 py-2 rounded-tl-2xl rounded-br-2xl border border-black mx-auto font-kadwa md:text-2xl text-sm font-semibold md:font-bold text-center uppercase dark:bg-[#0A0A0C] dark:text-white">
        {heading}
      </span>
    </div>
  );
};

export default Heading;

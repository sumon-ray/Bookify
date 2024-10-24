// CloseButton.js
import React from "react";
// import { Button } from "flowbite-react";

const CloseButton = ({ onClose }) => {
  return (
    // <button
    //   type="button"
    //   className="mt-4 w-40   bg-[#364957] flex items-center btn_1 gap-1 py-2  text-white rounded-md transition shadow"
    //   onClick={onClose}
    // >
    //   Close
    // </button>

    <button
      onClick={onClose}
      className="flex items-center btn_2 gap-1 px-2 py-2 text-white rounded-md transition"
    >
      {/* <AiOutlineRead className="text-xl" /> */}
      Close
    </button>
  );
};

export default CloseButton;

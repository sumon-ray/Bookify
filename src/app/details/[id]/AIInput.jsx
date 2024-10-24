// AIInput.js
import React from "react";
// import { Input } from "flowbite-react";

const AIInput = ({ title, author }) => {
  const handleInputChange = (e) => {
    console.log("Fetching AI suggestions for:", e.target.value);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={`${title} ${author}`} // Combine title and author
        onChange={handleInputChange}
        className="w-full rounded-lg border-gray-300 shadow-sm focus:ring focus:ring-blue-500"
        placeholder="Ask AI for suggestions..."
      />
    </div>
  );
};

export default AIInput; // Ensure this line is present

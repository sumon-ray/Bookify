import React from "react";

const AIResponse = ({ response, onCopy }) => {
  return (
    <div className="response mt-4 p-4 bg-blue-50 border border-blue-200 rounded-md shadow-md">
      <p className="text-gray-800">{response}</p>
    </div>
  );
};

export default AIResponse;

import React from 'react';

const BookSpinner = () => {
  return (
    <div className="flex justify-center items-center">
      <svg
        className="animate-spin h-10 w-10 text-white dark:text-[#364957]" // Use theme-based colors
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor" // Use currentColor to inherit the text color
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-.55.11-1.09.07-1.59-.1L6 20l1.07-3.45c.56.16 1.15.26 1.73.26 2.69 0 4.84-1.82 5.47-4.29L13 12l-.18-2.32C12.13 9.91 10.76 9 9 9c-.66 0-1.3.11-1.9.32l1.26-4.53A8.95 8.95 0 0112 4c4.42 0 8 3.58 8 8 0 3.21-1.8 6.1-4.43 7.4l1.26 4.53L15 20l-3.07-1.1c-.24.04-.49.07-.74.07-2.2 0-4.01-1.79-4.01-4.01 0-.55.45-1 1-1s1 .45 1 1c0 .55.45 1 1 1s1-.45 1-1c0-1.1-.9-2-2-2-1.12 0-2 .88-2 2 0 2.21 1.79 4 4 4 .55 0 1.09-.05 1.6-.15z"
        />
      </svg>
    </div>
  );
};

export default BookSpinner;

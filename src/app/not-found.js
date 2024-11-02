
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-100 p-6 dark:bg-[#272727CC] text-black">
      {/* Left Side - GIF */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0">
        <img
          src="https://i.postimg.cc/0yLNc315/404-snow.gif"
          alt="404 Not Found"
          className="w-64 h-64 md:w-full md:h-full lg:w-full lg:h-full mt-12 border-2 border-gray"
        />
      </div>

      {/* Right Side - Text */}
      <div className="lg:w-1/2 text-center lg:text-left pl-8 mt-16">
        <h2 className="text-4xl font-semibold mb-4 drop-shadow-lg dark:text-white">Oops! Page Not Found</h2>
        <p className="text-xl mb-6 max-w-md drop-shadow-md">
          {/* Sorry, the page you're looking for doesn&apos;t exist. */}
        </p>
        <Link
          href="/"
          className="bg-[#364957] text-white px-4 py-2 rounded-md hover:bg-gray-200 hover:text-black transition-colors duration-300"
        >
          Please go back to Home.
        </Link>
      </div>
    </div>
  );
}

export default function page()  {
    return (
      <div className="py-8 bg-white px-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Popular Now</h2>
  
          {/* Dropdown Menu */}
          <div className="relative inline-block text-left">
            <select
              className="block px-4 py-2 w-full text-sm text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none"
            >
              <option value="">Select Option</option>
              <option value="All">All Categories</option>
              <option value="Fiction">Fiction</option>
              <option value="Non-Fiction">Non-Fiction</option>
              <option value="Biography">Biography</option>
            </select>
          </div>
        </div>
  
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {/* Book Card */}
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border">
            <img
              className="w-full lg:h-[340px] "
              src="https://i.ibb.co.com/HrSw8v3/The-Elements-of-the-Crown-NEW-web-cover-600x900.jpg" 
              alt="Book Cover"
            />
            <div className="p-2 ">
              <h3 className="font-bold text-start text-sm md:text-sm lg:text-xl mb-2">The Rebirth of You</h3>
           
            </div>
          </div>
  
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border">
            <img
              className="w-full lg:h-[340px] "
              src="https://i.ibb.co.com/HrSw8v3/The-Elements-of-the-Crown-NEW-web-cover-600x900.jpg" 
              alt="Book Cover"
            />
            <div className="p-2 ">
              <h3 className="font-bold text-start text-sm md:text-sm lg:text-xl mb-2">The Rebirth of You</h3>
           
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border">
            <img
              className="w-full lg:h-[340px] "
              src="https://i.ibb.co.com/HrSw8v3/The-Elements-of-the-Crown-NEW-web-cover-600x900.jpg" 
              alt="Book Cover"
            />
            <div className="p-2 ">
              <h3 className="font-bold text-start text-sm md:text-sm lg:text-xl mb-2">The Rebirth of You</h3>
           
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border">
            <img
              className="w-full lg:h-[340px] "
              src="https://i.ibb.co.com/HrSw8v3/The-Elements-of-the-Crown-NEW-web-cover-600x900.jpg" 
              alt="Book Cover"
            />
            <div className="p-2 ">
              <h3 className="font-bold text-start text-sm md:text-sm lg:text-xl mb-2">The Rebirth of You</h3>
           
            </div>
          </div>
        </div>
      </div>
    );
  };
  

  
import React, { useState } from 'react';
import { HiSearch } from 'react-icons/hi'; // Flowbite uses Heroicons for icons

const SearchBook = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        onSearch(e.target.value); // Pass the search query to the parent component
    };

    return (
        <div className="my-4 flex justify-center items-center">
            <div className="relative w-full max-w-md">
                <input
                    type="text"
                    name="search"
                    id="search"
                    value={searchQuery}
                    onChange={handleSearch}
                    className="block w-full px-4 py-2  bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-zinc-500 focus:border-zinc-500 "
                    placeholder="Search for books..."
                />
                <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                    <HiSearch className="w-5 h-5 text-gray-400" />
                </button>
            </div>
        </div>
    );
};

export default SearchBook;

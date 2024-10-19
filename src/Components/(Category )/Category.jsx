"use client";

import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import Card from './Card'; 
import SearchBook from '../(Search)/page';
import { HiOutlineBookOpen } from 'react-icons/hi'; 
import { Select } from 'flowbite-react';

const Category = () => {
    const [activeGenre, setActiveGenre] = useState('');
    const [books, setBooks] = useState([]);
    const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const fetchBooks = async () => {
        try {
            const response = await fetch('https://bookify-server-lilac.vercel.app/books');
            const data = await response.json();

            const uniqueGenres = [...new Set(data.map(book => book.genre))];
            setGenres(uniqueGenres);

            if (uniqueGenres.length > 0) {
                setActiveGenre(uniqueGenres[0]);
            }

            setBooks(data);
        } catch (error) {
            setError("Error fetching books: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    const filteredBooks = books.filter(book => {
        const matchesGenre = book.genre === activeGenre;
        const matchesSearch = book?.title?.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesGenre && matchesSearch;
    });

    return (
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
            {/* Search and Genre Select input */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
                
                {/* Search input */}
                <div className="w-full sm:w-2/5 lg:w-1/3">
                    <SearchBook onSearch={setSearchQuery} />
                </div>

                {/* Stylish Genre Select dropdown */}
                <div className="w-full sm:w-2/5 lg:w-1/3">
                    <Select
                        onChange={(e) => setActiveGenre(e.target.value)}
                        value={activeGenre}
                        icon={HiOutlineBookOpen} // Add icon to make it more stylish
                        className="block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500"
                    >
                        <option value="">Select a Genre</option>
                        {genres.length > 0 ? (
                            genres.map((genre, index) => (
                                <option key={index} value={genre}>
                                    {genre}
                                </option>
                            ))
                        ) : (
                            <option disabled>No genres available</option>
                        )}
                    </Select>
                </div>
            </div>

            {/* Error handling */}
            {error && <p className="text-red-500 text-center my-4">{error}</p>}

            {/* Loading Spinner */}
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <Spin size="large" />
                </div>
            ) : (
                <>
                    {/* Filtered Books Display */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                        {filteredBooks.length > 0 ? (
                            filteredBooks.map((book) => (
                                <Card
                                    key={book._id}
                                    book={book}
                                />
                            ))
                        ) : (
                            <div className="col-span-full flex flex-col items-center justify-center py-16">
                                <HiOutlineBookOpen className="w-20 h-20 text-gray-400 mb-4" />
                                <h2 className="text-xl font-semibold text-gray-700 mb-2">
                                    No books found
                                </h2>
                                <p className="text-gray-500">
                                    We couldn&apos;t find any books that match this genre or your search query.
                                </p>
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default Category;

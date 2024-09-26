"use client";
import React, { useState, useEffect } from 'react';
import { Tabs, Spin } from 'antd';
import Card from './Card'; 
import SearchBook from '../(Search)/page';
import { HiOutlineBookOpen } from 'react-icons/hi'; // Heroicons for a book icon

const Category = () => {
    const [activeTab, setActiveTab] = useState(''); // Default tab
    const [books, setBooks] = useState([]); // State for fetched books
    const [genres, setGenres] = useState([]); // State for unique genres
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state
    const [searchQuery, setSearchQuery] = useState(''); // State for search query

    // Function to fetch books and extract genres
    const fetchBooks = async () => {
        try {
            const response = await fetch('https://bookify-server-lilac.vercel.app/books');
            const data = await response.json();

            // Extract unique genres from books
            const uniqueGenres = [...new Set(data.map(book => book.genre))];
            setGenres(uniqueGenres);

            // Set first genre as active by default
            if (uniqueGenres.length > 0) {
                setActiveTab(uniqueGenres[0]);
            }

            setBooks(data);
        } catch (error) {
            setError("Error fetching books: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    // Fetch books when component mounts
    useEffect(() => {
        fetchBooks();
    }, []);

    // Filter books based on genre and search query
    const filteredBooks = books.filter(book => {
        const matchesGenre = book.genre === activeTab;
        const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesGenre && matchesSearch;
    });

    return (
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
            {/* Search input */}
            <SearchBook onSearch={setSearchQuery} />

            {/* Error handling */}
            {error && <p className="text-red-500 text-center my-4">{error}</p>}

            {/* Loading Spinner */}
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <Spin size="large" />
                </div>
            ) : (
                <>
                    {/* Ant Design Tabs */}
                    <Tabs
                        activeKey={activeTab}
                        onChange={(key) => setActiveTab(key)}
                        className="my-8"
                    >
                        {genres.length > 0 ? (
                            genres.map((genre) => (
                                <Tabs.TabPane tab={genre} key={genre}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                                        {/* Filtered books based on search query and genre */}
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
                                                    We couldn't find any books that match this genre or your search query.
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </Tabs.TabPane>
                            ))
                        ) : (
                            <Tabs.TabPane tab="No genres available" disabled />
                        )}
                    </Tabs>
                </>
            )}
        </div>
    );
};

export default Category;

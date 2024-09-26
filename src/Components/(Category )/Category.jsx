"use client";
import React, { useState, useEffect } from 'react';
import { Tabs, Spin } from 'antd';
import Card from './Card'; // Assuming you have a Card component for displaying book info

const Category = () => {
    const [activeTab, setActiveTab] = useState(''); // Default tab
    const [books, setBooks] = useState([]); // State for fetched books
    const [genres, setGenres] = useState([]); // State for unique genres
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

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

    return (
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
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
                                        {/* Filter books based on genre */}
                                        {books.filter(book => book.genre === genre).length > 0 ? (
                                            books.filter(book => book.genre === genre).map((book) => (
                                                <Card
                                                    key={book._id}
                                                    book={book}
                                                />
                                            ))
                                        ) : (
                                            <p className="text-center col-span-full">No books available in this genre.</p>
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

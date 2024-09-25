"use client"
import React, { useState, useEffect } from 'react';
import Card from './Card'; // Make sure to adjust the import path accordingly

const Category = () => {
    const [activeTab, setActiveTab] = useState('Classic'); // Default tab
    const [books, setBooks] = useState([]); // State for fetched books

    // Function to fetch books based on genre
    const fetchBooks = async (genre) => {
        try {
            const response = await fetch(`https://bookify-server-lilac.vercel.app/books?genre=${genre}`);
            const data = await response.json();
            setBooks(data); // Set fetched books to state
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    };



    // Fetch new data whenever activeTab changes
    useEffect(() => {
        fetchBooks(activeTab);
    }, [activeTab]);

    return (
        <div>
            {/* Tabs */}
            <div className="flex justify-center my-16">
                {['Classic', 'Science Fiction', 'Fantasy'].map((genre) => (
                    <button
                        key={genre}
                        className={`relative px-4 py-2 transition duration-300 ease-in-out ${
                            activeTab === genre
                                ? 'text-[#62ab00] border-b-2 border-[#62ab00] rounded-lg shadow-lg'
                                : 'text-black rounded-md'
                        }`}
                        onClick={() => setActiveTab(genre)}
                    >
                        {genre}
                        <span
                            className={`absolute left-1/2 transform -translate-x-1/2 bottom-[-6px] h-0 border-t-4 border-transparent ${
                                activeTab === genre ? 'border-b-[#62ab00]' : 'border-b-transparent'
                            }`}
                        ></span>
                    </button>
                ))}
            </div>

            {/* Book List */}
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-4 gap-4">
                {books.length > 0 ? (
                    books.map((book) => (
                        <Card
                            key={book._id}
                            Data={book}
                        />
                    ))
                ) : (
                    <p>No books available in this genre.</p>
                )}
            </div>
        </div>
    );
};

export default Category;

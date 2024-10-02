"use client";
import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import './style.css';

const OurLibrary = () => {
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('Classic'); 
    const genres = ['Classic', 'Historical Fiction', 'Modernist Fiction', 'Fantasy', 'Science Fiction', 'Romance', 'Thriller']; // Add all your genres here

    // Fetch books based on the selected genre from the API
    useEffect(() => {
        fetchBooksByGenre(selectedGenre); // Fetch Classic books initially
    }, [selectedGenre]);

    // Function to fetch books by genre from API
    const fetchBooksByGenre = (genre) => {
        fetch(`https://bookify-server-lilac.vercel.app/books?genre=${genre}`)
            .then(response => response.json())
            .then(data => setFilteredBooks(data))
            .catch(error => console.error('Error fetching books:', error));
    };

    // Handle genre change
    const handleGenreChange = (genre) => {
        setSelectedGenre(genre);
        fetchBooksByGenre(genre); // Fetch books when genre changes
    };

    return (
        <div className='container mx-auto px-8 lg:px-20'>
            <h1 className='text-5xl font-bold text-center pt-9 pb-4'>Explore Our Library</h1>

            {/* Tab Buttons */}
            <div className='space-x-3 py-4'>
                <button onClick={() => handleGenreChange('Classic')} className={` border-2 p-3 rounded-lg ${selectedGenre === 'Classic' ? 'bg-[#B7B7B7] text-black' : 'bg-[#EFEEE9] text-[#000000]'}`}>Classic</button>
                <button onClick={() => handleGenreChange('Historical Fiction')} className={`border-2 p-3 rounded-lg ${selectedGenre === 'Historical Fiction' ? 'bg-[#B7B7B7] text-black' : 'bg-[#EFEEE9] text-[#000000]'}`}>Historical Fiction</button>
                <button onClick={() => handleGenreChange('Modernist Fiction')} className={`border-2 p-3 rounded-lg ${selectedGenre === 'Modernist Fiction' ? 'bg-[#B7B7B7] text-black' : 'bg-[#EFEEE9] text-[#000000]'}`}>Modernist Fiction</button>
            </div>

            {/* Book Display */}
            <div className='flex flex-col md:flex-row justify-center gap-4'>
                <div className='md:w-[30%] md:h-[850px] h-[200px] w-full rounded-r-2xl bg-cover bg-center border-none'
                     style={{
                        backgroundImage: "url('https://i.ibb.co.com/cbYp29b/Purple-Watercolor-Notebook-Book-Cover.png')"
                    }}
                >
                    {/* Vertical Image */}
                </div>

                <div className='lg:w-[70%] w-full h-[850px] grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 overflow-y-scroll no-scrollbar px-4 sm:px-10 py-6 gap-3 border-none'>
                    {filteredBooks.map((book, index) => (
                        <div key={index} className='w-full sm:w-[160px] max-h-full md:h-[250px] mx-auto'>
                            <img className='w-full h-[400px] md:h-[200px]  object-cover' src={book.coverImage} alt={book.title} />
                            <h3 className='text-center font-bold text-sm sm:text-base'>{book.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurLibrary;

"use client";
import React, { useEffect, useState } from 'react';

const OurLibrary = () => {
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('Classic'); // Default to Classic

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
        <div className='container mx-auto p-6 '>
            <h1 className='text-5xl font-bold text-center pt-9 pb-4'>Explore Our Library</h1>

            {/* Tab Buttons */}
            <div className='space-x-3 py-4'>
                <button onClick={() => handleGenreChange('Classic')} className={` border-2 p-3 rounded-lg ${selectedGenre === 'Classic' ? 'bg-[#B7B7B7] text-black' : 'bg-[#EFEEE9] text-[#000000]'}`}>Classic</button>
                <button onClick={() => handleGenreChange('Historical Fiction')} className={`border-2 p-3 rounded-lg ${selectedGenre === 'Historical Fiction' ? 'bg-[#B7B7B7] text-black' : 'bg-[#EFEEE9] text-[#000000]'}`}>Historical Fiction</button>
                <button onClick={() => handleGenreChange('Modernist Fiction')} className={`border-2 p-3 rounded-lg ${selectedGenre === 'Modernist Fiction' ? 'bg-[#B7B7B7] text-black' : 'bg-[#EFEEE9] text-[#000000]'}`}>Modernist Fiction</button>
            </div>

            {/* Book Display */}
            <div className='flex flex-col md:flex-row justify-center gap-4'>
                <div className='md:w-[30%] md:h-[850px] h-[200px] w-full  rounded-r-2xl bg-cover bg-center'
                    style={{
                        backgroundImage: "url('https://i.ibb.co.com/cbYp29b/Purple-Watercolor-Notebook-Book-Cover.png')"
                    }}
                >
                    {/* Vertical Image */}
                </div>

                <div className='lg:w-[70%] h-[850px]  grid lg:grid-cols-4 md:grid-cols-3 overflow-y-scroll px-20 py-6 gap-3 '>
                    {filteredBooks.map((book, index) => (
                        <div key={index} className='w-[160px] h-[250px] '>
                            <img className='w-[160px] h-[200px]' src={book.coverImage} alt={book.title} />
                            <h3 className='text-center font-bold'>{book.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurLibrary;

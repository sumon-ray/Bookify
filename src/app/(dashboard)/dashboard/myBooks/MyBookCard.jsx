"use client"

import React, { useEffect, useState } from 'react';
import { useSearchContext } from './SearchProvider';

const MyBookCard = () => {
    const [allBooks, setAllBooks] = useState([]);  // Store all fetched books
    const [filteredBooks, setFilteredBooks] = useState([]);  // Store filtered books based on search
    const [selectedGenre, setSelectedGenre] = useState('Classic');
    const [error, setError] = useState(null);  // Handle errors
    const { searchQuery } = useSearchContext();  // Get search query from context

    const genres = ['Classic', 'Historical Fiction', 'Modernist Fiction', 'Fantasy', 'Science Fiction', 'Romance', 'Thriller'];

    // Fetch books based on genre when the genre changes
    useEffect(() => {
        fetchBooksByGenre(selectedGenre);
    }, [selectedGenre]);

    // Filter books when the search query changes
    useEffect(() => {
        if (searchQuery) {
            const filtered = allBooks.filter((book) =>
                book.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredBooks(filtered);
        } else {
            setFilteredBooks(allBooks);  // If search query is cleared, show all books
        }
    }, [searchQuery, allBooks]);

    const fetchBooksByGenre = (genre) => {
        setError(null);  // Reset error before fetching
        fetch(`https://bookify-server-lilac.vercel.app/books?genre=${genre}`)
            .then(response => response.json())
            .then(data => {
                if (data.length === 0) {
                    setAllBooks([]);  // No books found
                    setFilteredBooks([]);  // No filtered books
                } else {
                    setAllBooks(data);  // Store all fetched books
                    setFilteredBooks(data);  // Initially, show all books of the genre
                }
            })
            .catch(error => {
                console.error('Error fetching books:', error);
                setError('Failed to fetch books. Please try again later.');
            });
    };

    const handleGenreChange = (genre) => {
        setSelectedGenre(genre);
    };

    return (
        <div className='container mx-auto py-10'>
            <h1 className='text-5xl font-bold text-center pb-6'>Explore Our Library</h1>

            {/* Genre Buttons */}
            <div className='flex flex-wrap justify-center gap-3 mb-8'>
                {genres.map((genre) => (
                    <button
                        key={genre}
                        onClick={() => handleGenreChange(genre)}
                        className={`px-4 py-2 rounded-lg border-2 text-sm md:text-base font-medium transition-all ${selectedGenre === genre 
                            ? 'bg-[#B7B7B7] text-black' 
                            : 'bg-[#EFEEE9] text-black'}`}
                    >
                        {genre}
                    </button>
                ))}
            </div>

            {/* Error or No Books Found */}
            {error ? (
                <div className='text-center py-8'>
                    <img
                        src='/path_to_error_image/book_logo.png'  // Replace with the path to your error image
                        alt='Error'
                        className='mx-auto w-32 h-32 mb-4'
                    />
                    <p className='text-lg font-semibold text-red-600'>{error}</p>
                </div>
            ) : filteredBooks.length === 0 ? (
                <div className='text-center py-8'>
                    <img
                        src='/path_to_no_books_image/book_logo.png'  // Replace with the path to your "no books" image
                        alt='No books found'
                        className='mx-auto w-32 h-32 mb-4'
                    />
                    <p className='text-lg font-semibold text-gray-700'>No books found in this genre.</p>
                </div>
            ) : (
                /* Book Grid */
                <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {filteredBooks.map((book, index) => (
                        <div key={index} className='bg-white p-4 rounded-lg shadow-md transition-shadow hover:shadow-lg'>
                            <img 
                                src={book.coverImage} 
                                alt={book.title} 
                                className='w-full h-48 object-cover rounded-t-lg mb-2' 
                            />
                            <h2 className='text-lg font-semibold mt-2'>{book.title}</h2>
                            <p className='text-sm text-gray-600'>{book.author}</p>
                            <p className='text-sm text-gray-500'>{book.genre}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyBookCard;

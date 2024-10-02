'use client'
import { useState, useEffect } from 'react';
import { useQuery } from "@tanstack/react-query";
import MyBookCard from "./MyBookCard";
import axios from "axios";

export default function MyBooks() {
    const [genre, setGenre] = useState(''); // State to store selected genre
    const [searchTerm, setSearchTerm] = useState(''); // State to store search term
    const [genres, setGenres] = useState([]); // State to store all available genres

    // Fetch genres dynamically when the component mounts
    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const res = await axios.get('https://bookify-server-lilac.vercel.app/genres');
                console.log("Fetched Genres:", res.data); // Log the fetched genres
                setGenres(res.data); // Assuming the API returns an array of genres
                if (res.data.length > 0) {
                    setGenre(res.data[0]); // Set the default selected genre to the first genre
                }
            } catch (error) {
                console.error('Error fetching genres:', error);
            }
        };

        fetchGenres();
    }, []);

    // Fetch books based on genre and search term
    const { data, error, isLoading } = useQuery({
        queryKey: ['My books', genre, searchTerm], // Depend on genre and search term
        queryFn: async () => {
            console.log("Fetching books for genre:", genre, "and searchTerm:", searchTerm);
            const res = await axios(`https://bookify-server-lilac.vercel.app/books?genre=${genre}&search=${searchTerm}`);
            return res.data;
        },
        enabled: !!genre // Enable query only if genre is selected
    });

    return (
        <section className="space-y-9">
            {/* my book page title, filter, and search */}
            <div className="bg-[#EFEEE9] flex items-center justify-between rounded-md p-6">
                <h1 className="text-3xl font-black uppercase text-center">My books</h1>
                
                {/* Filter and search */}
                <div className="flex space-x-4">
                    {/* Dropdown for genre filter */}
                    <form>
                        <select
                            id="genre"
                            className="bg-gray-50 border-[#EFEEE9] border text-black font-bold text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5"
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)} // Update genre dynamically
                        >
                            {genres.length > 0 ? (
                                genres.map((g, idx) => (
                                    <option key={idx} value={g}>{g}</option>
                                ))
                            ) : (
                                <option>Loading genres...</option>
                            )}
                        </select>
                    </form>

                    {/* Search bar */}
                    <form>
                        <input
                            type="text"
                            placeholder="Search books..."
                            className="bg-gray-50 border-[#EFEEE9] border text-black text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)} // Update search term dynamically
                        />
                    </form>
                </div>
            </div>

            {/* Cards displaying books */}
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-x-16 gap-y-10 pb-12">
                {
                    isLoading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p>Error fetching data</p>
                    ) : data?.length === 0 ? (
                        <p>No books found for "{genre}" genre.</p>
                    ) : (
                        data?.map((book, idx) => <MyBookCard key={idx} book={book} />)
                    )
                }
            </div>

        </section>
    )
}

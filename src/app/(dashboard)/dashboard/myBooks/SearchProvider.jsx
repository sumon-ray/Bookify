
"use client"
import React, { createContext, useState, useContext } from "react";

// Create a SearchContext
const SearchContext = createContext();

// Create a custom hook to use the SearchContext
export const useSearchContext = () => {
    return useContext(SearchContext);
};

// Create a Provider component to wrap the app
export const SearchProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
            {children}
        </SearchContext.Provider>
    );
};

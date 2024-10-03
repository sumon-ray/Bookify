"use client";
import React, { createContext, useState, useContext } from "react";

const SearchContext = createContext();

export const useSearchContext = () => {
  return useContext(SearchContext);
};

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

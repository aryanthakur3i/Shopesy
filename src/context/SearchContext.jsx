import React, { Children } from "react";
import { createContext, useContext, useState } from "react";

// create a context to manage the search state
const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  // store the cureent search input value
  const [search, setSearch] = useState("");

  return (
    <>
      {/* provide search state to all its child */}
      <SearchContext.Provider value={{ search, setSearch }}>
        {children}
      </SearchContext.Provider>
    </>
  );
};

// custom hook to easily access the search context
export const useSearch = () => useContext(SearchContext);

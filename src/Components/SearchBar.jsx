import React, { useState } from "react";
import { Search } from "lucide-react";
import { useSearch } from "../context/SearchContext";
import { useNavigate } from "react-router-dom";


const SearchBar = () => {
    const {search , setSearch } = useSearch()
    const navigate = useNavigate()

    const handleSearch = (e) => {
      e.preventDefault()

      if(!search.trim()) return;

      navigate(`/search?query=${encodeURIComponent(search)}`)
    }
  return (
    <>
    <form onSubmit={handleSearch} className="relative w-64">
      
        <input
          type="text"
          placeholder="Search product"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full  bg-white rounded-full py-2 pl-4 pr-10 outline-none"
        />

        <Search className="absolute right-3 top-2.5 text-gray-700" size={20} />
      
      </form>
    </>
  );
};

export default SearchBar;

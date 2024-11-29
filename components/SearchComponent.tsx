"use client";

import { Search } from "lucide-react";

export default function SearchComponent({ searchInput, setSearchInput }) {
  return (
    <>
      <section className="flex relative items-center">
        <input
          className="w-[300px] h-8 pl-4 pr-9 font-bold text-gray-300 outline-none bg-gray-700 text-sm border border-gray-700 rounded-3xl mobile:w-[150px] transition-all duration-1000 ease-in-out"
          placeholder="Search Images"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <Search size={18} color="#333" className="absolute right-3" />
      </section>
    </>
  );
}

import Image from "next/image";
import SearchComponent from "./SearchComponent";
import { useState } from "react";

export default function GNB({ searchInput, setSearchInput }) {
  return (
    <nav className="flex h-16 px-10 items-center justify-between border-gray-700 border-b backdrop-blur-lg">
      <Image
        src="/images/noteit_logo_white.svg"
        alt="logo"
        width={100}
        height={50}
      />
      <section className="flex items-center gap-3">
        <SearchComponent
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
        <button className="h-8 px-5 pt-1 font-semibold text-gray-300 text-base border border-amber-400 hover:bg-gray-800 transition-all rounded-3xl">
          Login
        </button>
        <button className="h-8 px-5 pt-1 font-semibold text-gray-800 text-base bg-amber-300 hover:bg-amber-200 transition-all rounded-3xl">
          Sign in
        </button>
      </section>
    </nav>
  );
}

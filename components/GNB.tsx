"use client";

import Image from "next/image";
import SearchComponent from "./SearchComponent";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useRecoilState } from "recoil";
import { searchState } from "utils/recoil/atoms";

export default function GNB() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [search, setSearch] = useRecoilState(searchState);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex h-16 mobile:h-12 px-10 mobile:px-3 items-center justify-between border-gray-700 border-b backdrop-blur-lg">
        <Image
          src="/images/noteit_logo_white.svg"
          alt="logo"
          width={110}
          height={50}
          className="mobile:!w-[90px]"
        />
        <section className="flex items-center gap-3">
          <SearchComponent searchInput={search} setSearchInput={setSearch} />
          <button className="h-8 px-5 pt-1 font-semibold text-gray-300 text-base border border-amber-400 hover:bg-gray-800 transition-all duration-200 ease-in-out rounded-3xl mobile:hidden">
            Login
          </button>
          <button className="h-8 px-5 pt-1 font-semibold text-gray-800 text-base bg-amber-300 hover:bg-amber-500 transition-all duration-200 ease-in-out rounded-3xl mobile:hidden">
            Sign Up
          </button>
          {isMenuOpen ? (
            <X
              color="#fff"
              className="desktop:hidden tablet:hidden cursor-pointer"
              onClick={handleToggleMenu}
            />
          ) : (
            <Menu
              color="#fff"
              className="desktop:hidden tablet:hidden cursor-pointer"
              onClick={handleToggleMenu}
            />
          )}
        </section>
      </nav>
      {isMenuOpen ? (
        <menu className="flex flex-col py-3 px-2 desktop:hidden tablet:hidden border-gray-700 border-b gap-2 transition-transform duration-300 ease-in-out animate-fadeInDown">
          <li className="flex h-8 items-center hover:bg-gray-800 rounded-md cursor-pointer">
            <button className="pl-3 font-bold text-gray-300 text-lg ">
              Login
            </button>
          </li>
          <li className="flex h-8 items-center hover:bg-gray-800 rounded-md cursor-pointer">
            <button className="pl-3 font-bold text-gray-300 text-lg ">
              Sign Up
            </button>
          </li>
        </menu>
      ) : null}
    </>
  );
}

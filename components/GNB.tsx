"use client";

import Image from "next/image";
import SearchComponent from "./SearchComponent";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useRecoilState } from "recoil";
import { searchState } from "utils/recoil/atoms";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

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
          <LoginModal />
          <SignupModal />
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
          <li className="flex h-12 items-center justify-center border border-amber-400 transition-all duration-200 ease-in-out rounded-lg cursor-pointer">
            <button className="pl-3 font-bold text-gray-300 text-lg ">
              Log in
            </button>
          </li>
          <li className="flex h-12 items-center justify-center bg-gray-800 transition-all duration-200 ease-in-out rounded-lg cursor-pointer">
            <button className="pl-3 font-bold text-gray-300 text-lg ">
              Sign up
            </button>
          </li>
        </menu>
      ) : null}
    </>
  );
}

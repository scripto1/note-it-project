"use client";

import { useQuery } from "@tanstack/react-query";
import { searchFiles } from "actions/storageActions";
import DragnDropZone from "components/DragnDropZone";
import DropBoxImageList from "components/DropBoxImageList";
import GNB from "components/GNB";
import SideMenu from "components/SideMenu";
import { useState } from "react";

export default function UI() {
  const [searchInput, setSearchInput] = useState("");
  const searchImagesQuery = useQuery({
    queryKey: ["images", searchInput],
    queryFn: () => searchFiles(searchInput),
  });

  const isDataAvailable =
    searchImagesQuery.data && searchImagesQuery.data.length > 0;
  const isSearching = searchInput.trim() !== "";

  return (
    <>
      <GNB searchInput={searchInput} setSearchInput={setSearchInput} />
      <main className="flex">
        <SideMenu />
        <section className="relative flex flex-col bg-gray-900 w-4/5 mobile:w-4/5 mx-auto mt-10 items-center p-6 gap-4">
          <DragnDropZone showAlways={!isDataAvailable && !isSearching} />
          <DropBoxImageList searchInput={searchInput} />
        </section>
      </main>
    </>
  );
}

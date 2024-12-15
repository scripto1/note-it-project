"use client";

import { useQuery } from "@tanstack/react-query";
import { searchFiles } from "actions/storageActions";
import DragnDropZone from "components/DragnDropZone";
import DropBoxImageList from "components/DropBoxImageList";
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
      <main>
        <section className="relative flex flex-col bg-gray-900 w-11/12 mobile:w-full mx-auto mt-9 items-center p-7 gap-4">
          <DragnDropZone showAlways={!isDataAvailable && !isSearching} />
          <DropBoxImageList />
        </section>
      </main>
    </>
  );
}

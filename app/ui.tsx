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

  return (
    <>
      <GNB searchInput={searchInput} setSearchInput={setSearchInput} />
      <main className="flex">
        <SideMenu />
        <section className="flex flex-col bg-gray-900 w-2/3 mx-auto mt-10 items-center p-6 gap-4">
          {isDataAvailable ? (
            <DropBoxImageList searchInput={searchInput} />
          ) : (
            <DragnDropZone />
          )}
        </section>
      </main>
    </>
  );
}

// export default function UI() {
//   const [searchInput, setSearchInput] = useState("");
//   return (
//     <>
//       <GNB searchInput={searchInput} setSearchInput={setSearchInput} />
//       <main className="flex flex-col bg-gray-900 w-2/3 m-auto items-center p-6 gap-4">
//         <DragnDropZone />
//         <DropBoxImageList searchInput={searchInput} />
//       </main>
//     </>
//   );
// }

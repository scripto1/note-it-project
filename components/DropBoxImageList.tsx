"use client";

import { useQuery } from "@tanstack/react-query";
import DropBoxImage from "./DropBoxImage";
import { searchFiles } from "actions/storageActions";
import { LoaderCircle } from "lucide-react";
import DragnDropZone from "./DragnDropZone";

export default function DropBoxImageList({ searchInput }) {
  const searchImagesQuery = useQuery({
    queryKey: ["images", searchInput],
    queryFn: () => searchFiles(searchInput),
  });

  return (
    <section className="grid tablet:grid-cols-3 desktop:grid-cols-4 grid-cols-2 gap-2">
      {searchImagesQuery.isLoading && <LoaderCircle />}
      {searchImagesQuery.data &&
        searchImagesQuery.data.map((image, index) => (
          <DropBoxImage key={image.id} image={image} index={index} />
        ))}
    </section>
  );
}

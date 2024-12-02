"use client";

import { useQuery } from "@tanstack/react-query";
import DropBoxImage from "./DropBoxImage";
import { searchFiles } from "actions/storageActions";
import { LoaderCircle } from "lucide-react";
import DragnDropZone from "./DragnDropZone";
import { useRecoilValue } from "recoil";
import { searchState } from "utils/recoil/atoms";

export default function DropBoxImageList() {
  const search = useRecoilValue(searchState);
  const searchImagesQuery = useQuery({
    queryKey: ["images", search],
    queryFn: () => searchFiles(search),
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

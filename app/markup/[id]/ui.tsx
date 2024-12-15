"use client";

import { useQuery } from "@tanstack/react-query";
import { getFile } from "actions/storageActions";
import { LoaderCircle } from "lucide-react";

export default function UI({ id }: { id: string }) {
  const getUrlQuery = useQuery({
    queryKey: ["url", id],
    queryFn: () => getFile(id),
    enabled: !!id,
  });

  return (
    <section className="relative ml-48 mobile:ml-0 w-11/12 mobile:w-full mt-9 items-center p-7">
      {getUrlQuery.isLoading && (
        <LoaderCircle className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin" />
      )}
      <img
        src={getUrlQuery.data?.publicUrl}
        alt="image"
        className="w-full object-contain rounded-xl animate-fadeInUp"
      />
    </section>
  );
}

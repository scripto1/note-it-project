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
    <section className="absolute inset-0">
      {getUrlQuery.isLoading && <LoaderCircle />}
      <img src={getUrlQuery.data?.publicUrl} alt="image" className="w-full" />
    </section>
  );
}

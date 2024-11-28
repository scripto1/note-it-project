import { X } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { deleteFile } from "actions/storageActions";
import { queryClient } from "app/config/ReactQueryClientProvider";
import { getImageUrl } from "utils/supabase/storage";

export default function DropBoxImage({ image }) {
  const deleteFileMutation = useMutation({
    mutationFn: deleteFile,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["images"],
      });
    },
  });

  return (
    <figure className="relative w-full flex flex-col border border-gray-700 rounded-lg shadow-lg p-3 gap-2">
      <picture>
        <img
          src={getImageUrl(image.name)}
          alt={image.name}
          className="w-full rounded-lg aspect-square object-cover"
        />
      </picture>
      <figcaption className="text-white">{image.name}</figcaption>
      <X
        onClick={() => {
          deleteFileMutation.mutate(image.name);
        }}
        size={32}
        strokeWidth={1.5}
        color="white"
        className="absolute bg-blue-gray-300 bg-opacity-50 rounded-[50%] top-5 right-5 p-1 hover:bg-opacity-75 hover:transition-all cursor-pointer"
      />
    </figure>
  );
}

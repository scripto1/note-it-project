"use client";

import { LoaderCircle } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { uploadFile } from "actions/storageActions";
import { queryClient } from "app/config/ReactQueryClientProvider";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function DragnDropZone({ showAlways = false }) {
  const uploadImageMutation = useMutation({
    mutationFn: uploadFile,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["images"],
      });
    },
  });

  const onDrop = useCallback(async (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const formData = new FormData();

      acceptedFiles.forEach((file) => {
        formData.append(file.name, file);
      });

      const result = await uploadImageMutation.mutate(formData);
      console.log(result);
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
    noClick: !showAlways,
  });

  return (
    <div {...getRootProps()} className="absolute inset-0">
      <input {...getInputProps()} />
      {(isDragActive || showAlways) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-4/5 rounded-2xl border-2 border-dotted border-amber-700/50 bg-gray-800/50 cursor-pointer">
          <p className="font-bold text-gray-500">
            Drag and drop files here or click to upload
          </p>
        </div>
      )}
    </div>
  );
}

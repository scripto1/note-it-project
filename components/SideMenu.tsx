import { useMutation } from "@tanstack/react-query";
import { uploadFile } from "actions/storageActions";
import { queryClient } from "app/config/ReactQueryClientProvider";
import { Plus } from "lucide-react";

export default function SideMenu() {
  const uploadImageMutation = useMutation({
    mutationFn: uploadFile,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["images"],
      });
    },
  });

  return (
    <aside className="flex flex-col p-5 w-48 h-screen gap-3 items-center border-gray-800 border-r">
      <h1 className="text-gray-600">Dashboard</h1>
      <section className="flex items-center relative">
        <Plus
          size={20}
          strokeWidth={2}
          color="#444"
          className="absolute left-3"
        />
        <button
          className="h-8 pl-9 pr-5 pt-1 font-bold text-gray-800 text-lg bg-gray-400 hover:bg-amber-200 transition-all rounded-3xl"
          onClick={() => {
            uploadImageMutation;
          }}
          type="submit"
        >
          Add
        </button>
      </section>
    </aside>
  );
}

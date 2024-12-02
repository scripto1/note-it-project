import UI from "./ui";

export default async function Markup({ params }: { params: { id: string } }) {
  return (
    <main className="flex items-center w-full absolute">
      <UI id={params.id} />
    </main>
  );
}

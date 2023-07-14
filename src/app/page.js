import { PokeCard } from "@/components/pokecard";

export default function Home() {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="bg-gray-200 w-1/2 h-1/2">
        <PokeCard />
      </div>
    </main>
  );
}

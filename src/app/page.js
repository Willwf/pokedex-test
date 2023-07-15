"use client";

import { PokeCard } from "@/components/pokecard";
import { useEffect, useState } from "react";

export default function Home() {
  const [pokemonList, setPokemonList] = useState([]);

  async function fetchPokemons() {
    const result = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=15"
    );

    const data = await result.json();

    setPokemonList(data.results);
  }

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <main className="md:w-screen md:h-screen flex justify-center items-center">
      <div className="bg-gray-200 max-w-4xl p-3 grid gap-4 grid-cols-3">
        {pokemonList.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          pokemonList.map((pokemon) => {
            return <PokeCard key={pokemon.name} fetchUrl={pokemon.url} />;
          })
        )}
      </div>
    </main>
  );
}

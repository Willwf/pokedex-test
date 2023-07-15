import Image from "next/image";
import { useEffect, useState } from "react";

const typeColors = {
  grass: "bg-[#90d26f]",
  poison: "bg-[#ae63ae]",
  fire: "bg-[#ee9759]",
  flying: "bg-[#b6a4f3]",
  water: "bg-[#86a4ee]",
  bug: "bg-[#b7c549]",
};

export function PokeCard({ fetchUrl }) {
  const [pokemonData, setPokemonData] = useState(null);

  async function fetchPokemonData(fetchUrl) {
    const res = await fetch(fetchUrl);

    const data = await res.json();

    setPokemonData(data);
  }

  useEffect(() => {
    fetchPokemonData(fetchUrl);
  }, [fetchUrl]);

  if (!pokemonData) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="bg-white drop-shadow grid justify-center items-center relative p-3 md:min-w-[15rem] md:max-h-20 md:justify-between">
      <div className="flex flex-col gap-3 mx-2 md:grid md:grid-cols-3 md:grid-rows-2 md:gap-0">
        <p className="text-[#738bc7] text-sm font-medium capitalize text-center md:text-start md:text-xl ">
          {pokemonData.name}
        </p>

        <div className="flex justify-center md:row-span-full md:col-start-3 md:justify-end ">
          <Image
            src={pokemonData.sprites.other.dream_world.front_default}
            height={64}
            width={64}
            alt={pokemonData.name}
            className="h-10 md:h-16 md:pr-2"
          />
        </div>

        <div className="md:col-start-1">
          <div className="flex gap-[1px] justify-center md:justify-start">
            {pokemonData.types.map(({ type }) => {
              return (
                <div
                  key={type.name}
                  className={`${typeColors[type.name]} px-2 py-1`}
                >
                  <p className="text-white font-bold text-[8px] capitalize md:text-sm">
                    {type.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <p className="absolute top-1 right-1 text-[8px] text-gray-300 md:text-sm">{`#${pokemonData.id}`}</p>
      <p className="absolute bottom-1 right-1 text-[10px] text-green-500 font-bold md:text-sm">
        1
      </p>
    </div>
  );
}

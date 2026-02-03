import {
  createMultiplePokemon,
  createSinglePokemon,
} from "./api/createPokemon.js";
import {
  deleteMultiplePokemon,
  hardDeletePokemonOne,
  softDeletePokemonOne,
} from "./api/deletePokemon.js";
import { fetchMultipleListBySpecificKeyworAndPagination } from "./api/fetchApi.js";
import { updatePokemon } from "./api/updatePokemon.js";
import { pokemonList } from "./constant.js";

(async function () {
  await createMultiplePokemon(pokemonList);

  createSinglePokemon(pokemonList, {
    name: "charmenion",
    url: "https://pokeapi.co/api/v2/pokemon/1001/",
  });

  updatePokemon(
    pokemonList,
    {
      name: "charmander",
    },
    {
      name: "mobasaur",
    },
  );

  updatePokemon(
    pokemonList,
    {
      name: "ivysaur",
    },
    {
      name: "dinausour",
    },
  );

  hardDeletePokemonOne(pokemonList, {
    name: "mobasaur",
  });

  softDeletePokemonOne(pokemonList, {
    name: "charmeleon",
  });

  await deleteMultiplePokemon(pokemonList, ["dinausour", "bulbasaur"]);

  //   console.log(pokemonList);

  const paginatedData = fetchMultipleListBySpecificKeyworAndPagination(
    pokemonList,
    {
      name: "ni",
    },
    {
      currentPage: 2,
      itemPerPage: 2,
    },
  );

  console.log(paginatedData);
})();

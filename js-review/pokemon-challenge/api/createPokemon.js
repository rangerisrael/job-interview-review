import { fetchPokemonList, isExistingSinglePokemon } from "./fetchApi.js";

export const createMultiplePokemon = async (state) => {
  //  if exist throw existed

  // push to the lost
  const result = await fetchPokemonList();
  return state.push(...result);
};

export const createSinglePokemon = (state, newPokemon) => {
  const existed = isExistingSinglePokemon(state, newPokemon);

  if (existed !== -1) console.log("Pokemon already existed");
  if (existed !== -1) return false;

  if (existed.position == -1) state.push(newPokemon);

  return newPokemon;
};

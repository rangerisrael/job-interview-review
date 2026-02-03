import { isExistingSinglePokemon } from "./fetchApi.js";

export const updatePokemon = (state, keyword, updatePokemon) => {
  const existed = isExistingSinglePokemon(state, keyword);

  if (existed == -1) console.log("Pokemon is not created yet");
  if (existed === -1) return false;

  if (existed.position !== -1)
    Object.assign(state[existed.position], updatePokemon);

  return updatePokemon;
};

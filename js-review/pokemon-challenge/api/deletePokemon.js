import { isExistingSinglePokemon } from "./fetchApi.js";

const hardDeletePokemonOne = (state, id) => {
  const existed = isExistingSinglePokemon(state, id);

  if (existed === -1 || existed.position == -1)
    console.log("Pokemon not on the list");
  if (existed === -1 || existed.position == -1) return false;

  state.splice(existed.position, 1);

  return `Pokemon ${id} deleted successfully from the list`;
};

const softDeletePokemonOne = (state, keyword) => {
  const existed = isExistingSinglePokemon(state, keyword);

  if (existed === -1 || existed.position == -1)
    console.log("Pokemon not on the list");
  if (existed === -1 || existed.position == -1) return false;

  return state.filter((item) => item.name !== keyword.name);
};

const deleteMultiplePokemon = async (state, ids) => {
  const isDelete = await Promise.all(
    ids.map((id) => {
      const deleteItem = hardDeletePokemonOne(state, { name: id });

      if (!deleteItem) console.log(`Id ${id} not found`);

      return "Ids deleted successfully";
    }),
  );

  return isDelete;
};

export { hardDeletePokemonOne, softDeletePokemonOne, deleteMultiplePokemon };

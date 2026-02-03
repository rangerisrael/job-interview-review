export const checkPokemon = (existed, msg) => {
  if (existed !== -1 || existed?.results == undefined) console.log(msg);
  if (existed !== -1 || existed?.results == undefined) return false;

  return true;
};

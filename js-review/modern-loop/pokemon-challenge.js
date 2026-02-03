//clone api
const pokemonList = [];

//get the api
const pokemonApi = "https://pokeapi.co/api/v2/pokemon?limit=1000";

//fetch the api from the list function
const apiPokemon = async () => {
  const req = await fetch(pokemonApi);
  const res = await req.json();

  return res.results;
};

const init = async (state) => {
  const results = await apiPokemon();
  state.push(...results);
};

//check if existing data
const isExist = (state, keyword = {}) => {
  const getIndex = Object.entries(keyword || []).map(([key, value]) =>
    state.findIndex((item) =>
      typeof value === "string"
        ? item[key]?.toLowerCase().includes(value.toLowerCase())
        : item[key] === value,
    ),
  )[0];

  return getIndex !== -1
    ? {
        result: state[getIndex],
        position: getIndex,
      }
    : -1;
};

//add new item one
const addNewPoken = (state, newPokemon) => {
  //exist
  const existed = isExist(state, newPokemon);

  return existed == -1
    ? state.push(newPokemon)
    : console.log("Pokemon existed", JSON.stringify(existed));
};

//update new item
const updatePokemon = (state, keyword, updatePokem) => {
  const existed = isExist(state, keyword);

  //   return existed !== -1
  //     ? (state[existed.position] = { ...state[existed.position], ...updatePokem })
  //     : console.log("Id not found");

  return existed !== -1
    ? Object.assign(state[existed.position], updatePokem)
    : console.log("Id not found");
};
//able to deleteone
const deleteOnePokemon = (state, keyword) => {
  const existed = isExist(state, keyword);

  return existed !== -1
    ? state.splice(existed.position, 1)
    : console.log("Keyword not found");
};

const deleteManyPokemon = async (state, ids) => {
  const deleteSpecificIndex = await Promise.all(
    ids.map((id) => {
      const deleteHard = deleteOnePokemon(state, { name: id });
      console.log(deleteHard);

      return deleteHard;
    }),
  );

  return deleteSpecificIndex;
};

//able to delete many
//display on page

//get by spefic keyword with pagination
// formula starIndex= (currentPage - 2) * itemPerPage
// endIndex = startIndex + itemPerPage;
//ggetting the total Math.ceil(data / itemPerPage)

const pokementSearchByTerm = (state, keyword, pagination) => {
  const filterDataByTerms = state.filter((list) => {
    return Object.entries(keyword).every(([key, value]) =>
      typeof value === "string"
        ? list[key].toLowerCase().includes(value.toLowerCase())
        : list[key] === value,
    );
  });

  if (pagination?.currentPage && pagination?.itemPerPage && pagination) {
    const starIndex = (pagination.currentPage - 1) * pagination.itemPerPage;
    const endIndex = starIndex + pagination.itemPerPage;
    const total = Math.ceil(filterDataByTerms.length / pagination.itemPerPage);

    const paginationData = filterDataByTerms.slice(starIndex, endIndex);

    return {
      results: paginationData,
      total,
    };
  } else {
    return {
      results: filterDataByTerms,
      pagination: null,
    };
  }
};

//iife
(async function () {
  await init(pokemonList);

  addNewPoken(pokemonList, {
    name: "metapods",
    url: "https://pokeapi.co/api/v2/pokemon/11/",
  });

  updatePokemon(
    pokemonList,
    { name: "charmeleon" },
    {
      name: "charmenions",
    },
  );

  addNewPoken(pokemonList, {
    name: "butterfree",
    url: "https://pokeapi.co/api/v2/pokemon/12/",
  });

  deleteOnePokemon(pokemonList, { name: "charmenions" });

  await deleteManyPokemon(pokemonList, ["bulbasaur", "ivysaur"]);

  const filterData = pokementSearchByTerm(
    pokemonList,
    {
      name: "ni",
    },
    { currentPage: 1, itemPerPage: 8 },
  );

  //   console.log(pokemonList);
  console.log(filterData);
})();

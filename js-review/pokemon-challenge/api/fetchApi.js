import axios from "axios";
import { pokemonApi } from "../constant.js";

const isExistingSinglePokemon = (state, keyword) => {
  const index = Object.entries(keyword).map(([key, value]) =>
    state.findIndex((item) =>
      typeof value === "string"
        ? item[key].toLowerCase().includes(value.toLowerCase())
        : item[key] === value,
    ),
  )[0];

  return index !== -1
    ? {
        results: state[index],
        position: index,
      }
    : -1;
};

const fetchPokemonList = async () => {
  try {
    const respons = await axios.get(pokemonApi);

    return respons.data.results;
  } catch (error) {
    console.log(error);
  }
};

const fetchMultipleListBySpecificKeyworAndPagination = (
  state,
  keyword,
  pagination,
) => {
  const filterData = state.filter((list) =>
    Object.entries(keyword).every(([key, value]) =>
      typeof list[key] === "string"
        ? list[key].toLowerCase().includes(value.toLowerCase())
        : list[key] === value,
    ),
  );

  if (pagination?.currentPage && pagination?.itemPerPage && pagination) {
    const { currentPage, itemPerPage } = pagination;

    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    const totalPage = Math.ceil(filterData.length / itemPerPage);

    const paginatedData = filterData.slice(startIndex, endIndex);

    return {
      result: paginatedData,
      total: totalPage,
    };
  } else {
    return {
      result: filterData,
      total: null,
    };
  }
};

export {
  isExistingSinglePokemon,
  fetchPokemonList,
  fetchMultipleListBySpecificKeyworAndPagination,
};

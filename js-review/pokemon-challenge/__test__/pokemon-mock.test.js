import { afterAll, it, vi } from "vitest";
import { beforeEach, describe } from "vitest";
import { pokemonApi } from "../constant";
import { expect } from "vitest";
import {
  createMultiplePokemon,
  createSinglePokemon,
} from "../api/createPokemon";
import {
  fetchMultipleListBySpecificKeyworAndPagination,
  isExistingSinglePokemon,
} from "../api/fetchApi";
import { updatePokemon } from "../api/updatePokemon";
import {
  deleteMultiplePokemon,
  hardDeletePokemonOne,
  softDeletePokemonOne,
} from "../api/deletePokemon";
import { assert } from "vitest";

const testPokemon = [];
const testPokemonwithPagination = [];

describe("Pokemon mock data", function () {
  beforeEach(() => {
    // overwrite fetch
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            counts: 1000,
            results: [
              {
                name: "bulbasaur",
                url: "https://pokeapi.co/api/v2/pokemon/1/",
              },
              {
                name: "ivysaur",
                url: "https://pokeapi.co/api/v2/pokemon/2/",
              },
              {
                name: "charmeleon",
                url: "https://pokeapi.co/api/v2/pokemon/5/",
              },
              {
                name: "charizard",
                url: "https://pokeapi.co/api/v2/pokemon/6/",
              },
              {
                name: "squirtle",
                url: "https://pokeapi.co/api/v2/pokemon/7/",
              },
              {
                name: "wartortle",
                url: "https://pokeapi.co/api/v2/pokemon/8/",
              },
              {
                name: "blastoise",
                url: "https://pokeapi.co/api/v2/pokemon/9/",
              },
              {
                name: "caterpie",
                url: "https://pokeapi.co/api/v2/pokemon/10/",
              },
              {
                name: "metapod",
                url: "https://pokeapi.co/api/v2/pokemon/11/",
              },
              {
                name: "butterfree",
                url: "https://pokeapi.co/api/v2/pokemon/12/",
              },
            ],
          }),
      }),
    );
  });
  afterAll(() => {
    vi.clearAllMocks();
    // or vi.restoreAllMocks();
  });

  it("should fetch pokemon mock api", async function () {
    const req = await global.fetch(pokemonApi);
    const data = await req.json();

    // console.log("Is mock?", vi.isMockFunction(global.fetch)); // Should be true
    // console.log("Call count:", global.fetch.mock.calls.length); // Should be 1
    // console.log("Data:", data);

    const objectList = {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/",
    };

    expect(data.results[0]).toEqual(objectList);
    expect(data.results.length).toBeGreaterThan(1);
  });

  describe("add pokemon to store", function () {
    it("should push data to array store", async function () {
      const req = await global.fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=1000",
      );
      const data = await req.json();

      testPokemon.push(...data.results);

      expect(testPokemon.length).toBeGreaterThan(1);
    });

    it("should push new pokemon in the list", async function () {
      const createPokemon = createSinglePokemon(testPokemon, {
        name: "charmelion",
        url: "https://pokeapi.co/api/v2/pokemon/3",
      });

      testPokemon.push(createPokemon);

      const validateObject = {
        name: "charmelion",
        url: "https://pokeapi.co/api/v2/pokemon/3",
      };

      expect(testPokemon).toContainEqual(validateObject);

      expect(testPokemon[testPokemon.length - 1]).toEqual(validateObject);
    });
  });

  describe("pokemon existed", function () {
    it("should check pokemon existed/not existed if already inserted", function () {
      const existed = isExistingSinglePokemon(testPokemon, {
        name: "charmelion",
        url: "https://pokeapi.co/api/v2/pokemon/3",
      });
      const notExisted = isExistingSinglePokemon(testPokemon, {
        name: "test",
      });

      expect(existed.position).not.toEqual(-1);
      expect(existed.position).toBeGreaterThan(-1);
      expect(notExisted).toEqual(-1);
    });
  });
  describe("update pokemon", function () {
    it("should update pokemon or modified on the list", function () {
      updatePokemon(
        testPokemon,
        { name: "charmelion" },
        {
          name: "mobasaur",
        },
      );

      expect(testPokemon[testPokemon.length - 1]).toMatchObject({
        name: "mobasaur",
      });

      expect(testPokemon).toEqual(
        expect.arrayContaining([expect.objectContaining({ name: "mobasaur" })]),
      );
    });
  });

  describe("delete pokemon", function () {
    it("should remove on the list of array store", function () {
      hardDeletePokemonOne(testPokemon, {
        name: "mobasaur",
      });

      expect(testPokemon).not.toEqual("mobasaur");
    });

    it("should remove on the list of array store", function () {
      hardDeletePokemonOne(testPokemon, {
        name: "mobasaur",
      });

      expect(testPokemon).not.toEqual("mobasaur");
    });

    it("should hide the list from array store", function () {
      const filter = softDeletePokemonOne(testPokemon, {
        name: "mobasaur",
      });

      expect(filter).not.toEqual("mobasaur");
    });

    it("should delete multiple items", function () {
      deleteMultiplePokemon(testPokemon, ["metapods", "ivysaur"]);

      expect(testPokemon).not.toEqual("ivysaur");
      expect(testPokemon).not.toEqual("metapods");
    });
  });

  describe("filter pokemon by term and pagination", function () {
    it("should filter pokemon item", function () {
      const filterData = fetchMultipleListBySpecificKeyworAndPagination(
        testPokemon,
        {
          name: "squirtle",
        },
      );

      assert.deepInclude(filterData.result, {
        name: "squirtle",
        url: "https://pokeapi.co/api/v2/pokemon/7/",
      });
    });

    it(
      "should filter and paginate list",
      { tags: ["@api", "@slow"] },
      async function () {
        await createMultiplePokemon(testPokemonwithPagination);

        const paginatedData = fetchMultipleListBySpecificKeyworAndPagination(
          testPokemonwithPagination,
          {
            name: "ni",
          },
          { currentPage: 1, itemPerPage: 9 },
        );

        const validateFilterArray = [
          { name: "nidoran-f", url: "https://pokeapi.co/api/v2/pokemon/29/" },
          { name: "nidorina", url: "https://pokeapi.co/api/v2/pokemon/30/" },
          { name: "nidoqueen", url: "https://pokeapi.co/api/v2/pokemon/31/" },
          { name: "nidoran-m", url: "https://pokeapi.co/api/v2/pokemon/32/" },
          { name: "nidorino", url: "https://pokeapi.co/api/v2/pokemon/33/" },
          { name: "nidoking", url: "https://pokeapi.co/api/v2/pokemon/34/" },
          { name: "ninetales", url: "https://pokeapi.co/api/v2/pokemon/38/" },
          { name: "arcanine", url: "https://pokeapi.co/api/v2/pokemon/59/" },
          { name: "onix", url: "https://pokeapi.co/api/v2/pokemon/95/" },
        ];

        assert.deepEqual(paginatedData.result, validateFilterArray);

        expect(paginatedData.result).toEqual(validateFilterArray);
      },
    );
  });
});

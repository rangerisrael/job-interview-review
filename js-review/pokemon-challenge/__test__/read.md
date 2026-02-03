let testPokemon;

beforeEach(() => {
// Fresh setup before each test
testPokemon = createMultiplePokemon(pokemonList);
});

afterEach(() => {
// Clean up after each test
});

import fetch from 'isomorphic-fetch';
import { vi } from 'vitest';

// Mock it
vi.mock('isomorphic-fetch');

beforeEach(() => {
fetch.mockResolvedValue({
ok: true,
json: () => Promise.resolve({ results: [...] })
});
});

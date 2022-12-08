import axios from 'axios';

const instancePokemonAxios = axios.create({
  // failed request
  baseURL: 'https://pokeapi.co/api/v2/pokemons',
  // correct request
  // baseURL: 'https://pokeapi.co/api/v2/pokemon',
});

export const getPokemons = async () => {
  try {
    const {
      data: { results },
    } = await instancePokemonAxios.get('');
    return results.slice(0, 5);
  } catch (error) {
    throw new Error(error);
  }
};

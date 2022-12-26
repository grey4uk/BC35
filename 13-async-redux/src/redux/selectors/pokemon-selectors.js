export const allPokemonsSelector = (state) =>
  state.instance.pokemons;

export const onePokemonSelector = (state) =>
  state.instance.pokemon;

export const querySelector = (state) =>
  state.instance.query;

export const pokemonLoadingSelector = (state) =>
  state.instance.loading;

export const pokemonStateSelector = (state) =>
  state.instance;

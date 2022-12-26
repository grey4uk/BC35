import { createSlice } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

import {
  getAllPokemonsThunk,
  getOnePokemonThunk,
} from 'redux/operations/pokemon-operations';

const initialState = {
  pokemon: null,
  pokemons: [],
  query: '',
  loading: false,
};

const handleRejected = (state, { payload }) => {
  Notify.failure(payload);
  state.loading = false;
};
const handlePending = (state) => {
  state.loading = true;
};

export const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setAllPokemons: (state, { payload }) => {
      state.pokemons = payload;
    },
    setQuery: (state, { payload }) => {
      state.query = payload;
    },
    setOnePokemon: (state, { payload }) => {
      state.pokemon = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPokemonsThunk.pending, handlePending)
      .addCase(
        getAllPokemonsThunk.fulfilled,
        (state, { payload }) => {
          state.pokemons = payload;
          state.loading = false;
        }
      )
      .addCase(getAllPokemonsThunk.rejected, handleRejected)
      .addCase(getOnePokemonThunk.pending, handlePending)
      .addCase(
        getOnePokemonThunk.fulfilled,
        (state, { payload }) => {
          state.pokemon = payload;
          state.loading = false;
        }
      )
      .addCase(getOnePokemonThunk.rejected, handleRejected);
  },
});

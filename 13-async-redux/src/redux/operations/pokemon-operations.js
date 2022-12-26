import { createAsyncThunk } from '@reduxjs/toolkit';
// import { Notify } from 'notiflix';

// import { pokemonSlice } from 'redux/slices/pokemon-slice';

// const {
//   setAllPokemons,
//   setOnePokemon,
// } = pokemonSlice.actions;

export const getAllPokemonsThunk = createAsyncThunk(
  '@pokemons/get-all-pokemons',
  async (_, thunkAPI) => {
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon`,
        { method: 'GET' }
      )
        .then((r) => {
          if (r.status === 404)
            throw new Error('we not found pokemons');
          return r.json();
        })
        .then((r) => r);
      return res.results.map((el) => el.name);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getOnePokemonThunk = createAsyncThunk(
  '@pokemons/get-one-pokemon',
  async (query, thunkAPI) => {
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${query}`,
        { method: 'GET' }
      )
        .then((r) => {
          if (r.status === 404)
            throw new Error('we not found pokemons');
          return r.json();
        })
        .then((r) => r);
      const pokemon = {
        url: res.sprites.front_default,
        name: res.name,
        abilities: res.abilities
          .map((el) => el?.ability?.name)
          .reduce((acc, el) => acc.concat(` ,${el}`)),
      };
      return pokemon;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const getAllPokemons = () => async (dispatch) => {
//   try {
//     const res = await fetch(
//       `https://pokeapi.co/api/v2/pokemon`,
//       { method: 'GET' }
//     )
//       .then((r) => {
//         if (r.status === 404)
//           throw new Error('we not found pokemons');
//         return r.json();
//       })
//       .then((r) => r);
//     dispatch(
//       setAllPokemons(res.results.map((el) => el.name))
//     );
//   } catch (error) {
//     Notify.failure(error.message);
//   }
// };

// export const getOnePokemonByQuery =
//   (query) => async (dispatch) => {
//     try {

//       const res = await fetch(
//         `https://pokeapi.co/api/v2/pokemon/${query}`
//       )
//         .then((r) => {
//           if (r.status === 404)
//             throw new Error('we not found such pokemon');
//           return r.json();
//         })
//         .then((r) => r);
//       dispatch(
//         setOnePokemon({
//           url: res.sprites.front_default,
//           name: res.name,
//           abilities: res.abilities
//             .map((el) => el?.ability?.name)
//             .reduce((acc, el) => acc.concat(` ,${el}`)),
//         })
//       );
//     } catch (error) {
//       Notify.failure(error.message);
//     }
//   };

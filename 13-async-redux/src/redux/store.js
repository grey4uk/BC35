import { configureStore } from '@reduxjs/toolkit';
import { pokemonSlice } from './slices/pokemon-slice';
// import { echoClick } from './actions/actions';

const customMiddleware = (store) => (next) => (action) => {
  //   console.log('store.getState() :>> ', store.getState());
  //   console.log('action :>> ', action);
  //   store.dispatch(echoClick());
  next(action);
};

const customMiddleware2 = (store) => (next) => (action) => {
  //   console.log('store.getState() :>> ', store.getState());
  //   console.log('action :>> ', action);
  next(
    action.type === '@click'
      ? { ...action, payload: action.payload + 1 }
      : action
  );
};

const middleware = (getDefaultMiddlewares) => [
  ...getDefaultMiddlewares(),
  customMiddleware,
  customMiddleware2,
];

const clickReducer = (state = { click: 0 }, action) => {
  //   console.log(action);
  return state;
};

export const store = configureStore({
  reducer: {
    instance: pokemonSlice.reducer,
    click: clickReducer,
  },
  middleware,
});

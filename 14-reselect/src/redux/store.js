import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import todosReducer from './todos/slice';
import clickerReducer from './clicker/slice';
import { todosApi } from './todos/todosApi';

export const store = configureStore({
  reducer: {
    [todosApi.reducerPath]: todosApi.reducer,
    todos: todosReducer,
    clicker: clickerReducer,
  },
  middleware: (getDefaultMiddlewares) => [
    ...getDefaultMiddlewares(),
    todosApi.middleware,
  ],
});

setupListeners(store.dispatch);

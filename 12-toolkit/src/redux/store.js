import {
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  // PERSIST,
  // REHYDRATE,
} from 'redux-persist';
import localstorage from 'redux-persist/lib/storage';

import counterReducer from './toolkit/counter/counter-slice';
// import { counterReducer } from './toolkit/counter/counter-reducer';
import stepReducer from './toolkit/step/step-slice';
// import { stepReducer } from './toolkit/step/step-reducer';

const preloadedState = {
  counter: { counter: 10 },
  step: 1,
};

const rootReducer = combineReducers({
  counter: counterReducer,
  step: stepReducer,
});

const persistConfig = {
  key: 'counter',
  storage: localstorage,
  whitelist: ['counter'],
  // blacklist: ['counter'],
};

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,
  preloadedState,
  middleware: (getDefaultMiddlewares) => {
    return getDefaultMiddlewares({
      serializableCheck: {
        ignoreActions: true,
        // [PERSIST, REHYDRATE],
      },
    });
  },
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

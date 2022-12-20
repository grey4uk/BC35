import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './reducers/counterReducer';

import { stepReducer } from 'redux/reducers/stepReducer';

const preloadedState = {
  counter: { counter: 10 },
  step: 1,
};

const rootReducer = combineReducers({
  counter: counterReducer,
  step: stepReducer,
});

export const store = createStore(
  rootReducer,
  preloadedState,
  composeWithDevTools(applyMiddleware())
);

// export const store = configureStore({
//   reducer: { counter: counterReducer, step: stepReducer },
//   preloadedState,
// });

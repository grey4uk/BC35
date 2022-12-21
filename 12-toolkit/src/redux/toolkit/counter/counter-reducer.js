import { createReducer } from '@reduxjs/toolkit';
import { resetAction } from '../shared-actions';
import { addAction, minusAction } from './counter-actions';

const initialState = { counter: 0 };

// export const counterReducer = createReducer(initialState, {
//   [minusAction.type]: (state, action) => {
//     return { counter: state.counter - action.payload };
//   },
//   [addAction.type]: (state, action) => {
//     return { counter: state.counter + action.payload };
//   },
//   [resetAction.type]: () => initialState,
// });
export const counterReducer = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(addAction, (state, { payload }) => {
        state.counter = state.counter + payload;
      })
      .addCase(minusAction, (state, { payload }) => {
        state.counter = state.counter - payload;
      })
      .addCase(resetAction, () => initialState);
  }
);

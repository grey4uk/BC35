import { createSlice } from '@reduxjs/toolkit';
import { resetAction } from '../shared-actions';

const initialState = { counter: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addAction: {
      reducer(state, action) {
        state.counter = state.counter + action.payload;
      },
      prepare(value) {
        return { payload: value * 2 };
      },
    },
    minusAction: (state, { payload }) => {
      state.counter = state.counter - payload;
    },
  },
  extraReducers: (builder) =>
    builder.addCase(resetAction, () => initialState),
});

export const { addAction, minusAction } =
  counterSlice.actions;
export default counterSlice.reducer;

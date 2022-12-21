import { createSlice } from '@reduxjs/toolkit';
import { resetAction } from '../shared-actions';

const stepSlice = createSlice({
  name: 'steper',
  initialState: 1,
  reducers: {
    setStepAction: (_, { payload }) => payload,
  },
  extraReducers: (builder) => {
    builder.addCase(resetAction, () => 1);
  },
});

export const { setStepAction } = stepSlice.actions;

export default stepSlice.reducer;

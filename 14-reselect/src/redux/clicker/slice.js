import { createSlice } from '@reduxjs/toolkit';

const clickerSlice = createSlice({
  name: 'clicker',
  initialState: 0,
  reducers: {
    click: (state) => state + 1,
  },
});
export const { click } = clickerSlice.actions;

export default clickerSlice.reducer;

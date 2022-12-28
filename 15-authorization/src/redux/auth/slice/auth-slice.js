import { createSlice } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';
import {
  authByGoogle,
  logOut,
} from '../operations/auth-operations';

const initialState = {
  user: null,
  loading: false,
  isAuth: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onRefreshing: (state) => {
      state.isRefreshing = true;
    },
    offRefreshing: (state) => {
      state.isRefreshing = false;
    },
    setUser: (state, { payload }) => {
      state.user = payload;
      state.isAuth = true;
      state.isRefreshing = false;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(authByGoogle.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        authByGoogle.fulfilled,
        (state, { payload }) => {
          state.user = payload;
          state.loading = false;
          state.isAuth = true;
          Notify.success(`Welcome ${payload.name}`);
        }
      )
      .addCase(
        authByGoogle.rejected,
        (state, { payload }) => {
          state.loading = false;
          Notify.failure(payload);
        }
      )
      .addCase(logOut.pending, (state) => {
        state.loading = true;
      })
      .addCase(logOut.fulfilled, (state, { payload }) => {
        state.user = null;
        state.loading = false;
        state.isAuth = false;
        Notify.success(`See you later`);
      })
      .addCase(logOut.rejected, (state, { payload }) => {
        state.loading = false;
        Notify.failure(payload);
      }),
});

export default authSlice.reducer;
export const { setUser, onRefreshing, offRefreshing } =
  authSlice.actions;

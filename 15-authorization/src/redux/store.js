import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/slice/auth-slice';

export const store = configureStore({
  reducer: authReducer,
});

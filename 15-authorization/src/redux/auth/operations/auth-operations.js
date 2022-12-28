import { createAsyncThunk } from '@reduxjs/toolkit';
import firebase from 'services/firebase.config';
import {
  offRefreshing,
  onRefreshing,
  setUser,
} from '../slice/auth-slice';
const {
  signInWithPopup,
  auth,
  provider,
  signOut,
  onAuthStateChanged,
} = firebase;

export const authByGoogle = createAsyncThunk(
  'auth/google',
  async (_, { rejectWithValue }) => {
    try {
      const res = await signInWithPopup(auth, provider);
      const user = {
        name: res?.user?.displayName,
        img: res?.user?.photoURL,
        email: res?.user?.email,
      };
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh-user',
  async (_, { dispatch, rejectWithValue }) => {
    dispatch(onRefreshing());
    try {
      onAuthStateChanged(auth, (user) => {
        const currentUser = {
          name: user?.displayName,
          img: user?.photoURL,
          email: user?.email,
        };
        dispatch(setUser(currentUser));
      });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);

      return;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

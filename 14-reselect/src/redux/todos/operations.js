import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTodos, updateTodo } from 'services/todosAPI';

export const getAllTodos = createAsyncThunk(
  'todos/get-all',
  async (_, { rejectWithValue }) => {
    try {
      const todos = await getTodos();
      return todos;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateOneTodo = createAsyncThunk(
  'todos/update-todo',
  async (todo, { rejectWithValue }) => {
    try {
      const res = await updateTodo(todo);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

import { createSlice } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';
import { getAllTodos, updateOneTodo } from './operations';

const handleRejected = (_, { payload }) =>
  Notify.failure(payload);

const todosSlice = createSlice({
  name: 'todos',
  initialState: { todos: [] },
  extraReducers: (builder) =>
    builder
      .addCase(
        getAllTodos.fulfilled,
        (state, { payload }) => {
          state.todos = payload;
        }
      )
      .addCase(getAllTodos.rejected, handleRejected)
      .addCase(
        updateOneTodo.fulfilled,
        (state, { payload }) => {
          state.todos = state.todos.map((el) =>
            el.id === payload.id ? payload : el
          );
        }
      )
      .addCase(updateOneTodo.rejected, handleRejected),
});

export default todosSlice.reducer;

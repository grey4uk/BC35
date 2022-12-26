import { createSelector } from '@reduxjs/toolkit';

export const allTodosSelector = (state) =>
  state.todos.todos;

export const allTodosQuantitySelector =
  (todos) => (state) =>
    todos?.length ?? 0;

// export const allTodosQuantitySelector=(state) =>
//   state.todos.todos.length;

// export const doneTodosQuantitySelector = (state) => {
//   const todos = allTodosSelector(state);
//   const doneTodos = todos.filter(({ isDone }) => isDone);
//   console.log('doneTodos :>> ', doneTodos);
//   return doneTodos.length;
// };
const notDoneTodosSelector = createSelector(
  allTodosSelector,
  (todos) => todos?.filter(({ isDone }) => !isDone).length
);

export const doneTodosQuantitySelector = (todos) =>
  createSelector(notDoneTodosSelector, (notDoneTodos) => {
    console.log('notDoneTodos', notDoneTodos);
    return todos?.filter(({ isDone }) => isDone).length;
  });
// export const doneTodosQuantitySelector = createSelector(
//   [allTodosSelector, notDoneTodosSelector],
//   (todos, notDoneTodos) => {
//     console.log('notDoneTodos', notDoneTodos);
//     return todos.filter(({ isDone }) => isDone).length;
//   }
// );

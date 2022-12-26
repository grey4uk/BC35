// Need to use the React-specific entry point to allow generating React hooks
import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://63a95381100b7737b98f0a52.mockapi.io/todos',
  }),
  tagTypes: ['todos'],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => '',
      providesTags: ['todos'],
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({ url: `/${id}`, method: 'DELETE' }),
      invalidatesTags: ['todos'],
    }),
    updateTodo: builder.mutation({
      query: (todo) => ({
        url: `/${todo.id}`,
        method: 'PUT',
        body: todo,
      }),
      invalidatesTags: ['todos'],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useLazyGetTodosQuery,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} = todosApi;

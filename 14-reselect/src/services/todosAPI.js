import axios from 'axios';

// const baseURL =
//   'https://63a95381100b7737b98f0a52.mockapi.io/todos';
const baseURL = process.env.REACT_APP_TODOS_BASE_URL;

export const getTodos = async () => {
  const { data } = await axios({ baseURL, method: 'get' });

  return data;
};

export const updateTodo = async (todo) => {
  const { data } = await axios({
    baseURL: `${baseURL}/${todo.id}`,
    method: 'put',
    data: todo,
  });
  return data;
};

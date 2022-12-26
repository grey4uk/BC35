import { useSelector } from 'react-redux';
import {
  allTodosQuantitySelector,
  doneTodosQuantitySelector,
} from 'redux/todos/selectors';
import { useGetTodosQuery } from 'redux/todos/todosApi';

const Statistic = () => {
  const { data: todos } = useGetTodosQuery();
  const isDoneTodosCount = useSelector(
    doneTodosQuantitySelector(todos)
  );
  const todosCount = useSelector(
    allTodosQuantitySelector(todos)
  );
  console.log('render in Statistic');
  return (
    <h2>
      Amount of done tasks: {isDoneTodosCount} /{' '}
      {todosCount}
    </h2>
  );
};

export default Statistic;

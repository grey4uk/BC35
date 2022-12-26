import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllTodos } from 'redux/todos/operations';
import TodosList from 'components/TodosList/TodosList';
import Statistic from 'components/Statistic/Statistic';
import Clicker from 'components/Clicker/Clicker';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);
  return (
    <main>
      <Clicker />
      <Statistic />
      <TodosList />;
    </main>
  );
};

export default App;

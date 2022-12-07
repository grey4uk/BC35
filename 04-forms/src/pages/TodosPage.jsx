import PropTypes from 'prop-types';

import TodoForm from 'components/TodoForm/TodoForm';
import TodosList from 'components/TodosList/TodosList';

const TodosPage = ({
  addTodo,
  todos,
  deleteTodo,
  toggleTodoDone,
  filter,
  onChange,
}) => {
  return (
    <>
      <input
        placeholder='filter'
        value={filter}
        onChange={(e) => onChange(e.target.value)}
      />
      <TodoForm addTodo={addTodo} />
      <TodosList
        deleteTodo={deleteTodo}
        todos={todos}
        toggleTodoDone={toggleTodoDone}
        filter={filter}
      />
    </>
  );
};

export default TodosPage;

TodosPage.propTypes = {
  addTodo: PropTypes.func.isRequired,
  //   todos: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       title: PropTypes.string.isRequired,
  //       text: PropTypes.string,
  //       isDone: PropTypes.bool.isRequired,
  //       priority: PropTypes.string.isRequired,
  //       category: PropTypes.string.isRequired,
  //     })
  //   ),
  todos: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
      priority: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  //   todos: PropTypes.arrayOf(
  //     PropTypes.objectOf(PropTypes.string.isRequired)
  //   ),
  deleteTodo: PropTypes.func.isRequired,
  toggleTodoDone: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

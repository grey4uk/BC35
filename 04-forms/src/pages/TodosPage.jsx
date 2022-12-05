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

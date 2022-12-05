import { Component } from 'react';

import AuthForm from 'components/AuthForm/AuthForm';
import TodosPage from 'pages/TodosPage';

const initialState = { todos: [], user: {}, filter: '' };

class App extends Component {
  // state = initialState;
  // signUpUser = (item) => {
  //   this.setState({ user: item });
  //   // this.setState({ user });
  // };
  constructor() {
    super();
    this.state = initialState;
    this.signUpUser = this.signUpUser.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.toggleTodoDone = this.toggleTodoDone.bind(this);
  }

  signUpUser(item) {
    this.setState({ user: item });
    // this.setState({ user });
  }

  addTodo({ todo }) {
    this.setState((prev) => ({
      todos: [...prev.todos, todo],
    }));
  }

  deleteTodo(id) {
    this.setState((prev) => ({
      todos: prev.todos.filter((todo) => todo.id !== id),
    }));
  }

  toggleTodoDone(id) {
    this.setState((prev) => ({
      todos: prev.todos.map((el) =>
        el.id === id ? { ...el, isDone: !el.isDone } : el
      ),
    }));

    // const { todos } = this.state;
    // const position = todos.findIndex(
    //   (todo) => todo.id === id
    // );
    // const prevIsDone = todos[position].isDone;
    // todos[position].isDone = !prevIsDone;
    // this.setState({todos})
  }
  onChange = (filter) => this.setState({ filter });

  render() {
    const { todos, user, filter } = this.state;
    const {
      signUpUser,
      addTodo,
      deleteTodo,
      toggleTodoDone,
      onChange,
    } = this;
    return user ? (
      <TodosPage
        filter={filter}
        addTodo={addTodo}
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodoDone={toggleTodoDone}
        onChange={onChange}
      />
    ) : (
      <AuthForm signUpUser={signUpUser} />
    );
  }
}

export default App;

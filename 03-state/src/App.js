import { Component } from 'react';
import db from 'db/todos.json';
import TodosList from 'components/TodosList/TodosList';
import TodoForm from 'components/TodoForm/TodoForm';

class App extends Component {
  state = { todos: db, counter: 0 };

  deleteTodo = (id) => {
    // console.log('id :>> ', id);
    // this.setState(prev=>({todos:prev.todos.filter}))
    // this.setState({todos:this.state.todos.filter})
    this.setState((prevState) => {
      return {
        todos: prevState.todos.filter(
          (todo) => todo.id !== id
        ),
      };
    });
    // for (let i = 1; i <= 3; i++) {
    //   this.setState({ counter: this.state.counter + i });
    //   console.log(
    //     'this.state.counter :>> ',
    //     this.state.counter
    //   );
    // }
    // for (let i = 1; i <= 3; i++) {
    //   this.setState((prev) => {
    //     console.log('prev.counter :>> ', prev.counter);
    //     return { counter: this.state.counter + i };
    //   });
    // }
  };

  addTodo = ({ todo }) => {
    this.setState({ todos: [...this.state.todos, todo] });
  };

  render() {
    // console.log('Component :>> ', Component);
    const { todos, counter } = this.state;
    console.log('counter :>> ', counter);

    const { deleteTodo, addTodo } = this;
    return (
      <>
        <TodosList items={todos} deleteTodo={deleteTodo} />
        <TodoForm addTodo={addTodo} />
      </>
    );
  }
}
export default App;

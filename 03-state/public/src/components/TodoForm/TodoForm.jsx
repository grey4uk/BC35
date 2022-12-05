import { Component } from 'react';
import { v4 as uuid } from 'uuid';

class TodoForm extends Component {
  init = { title: '', text: '' };
  state = this.init;

  onSubmitForm = (e) => {
    e.preventDefault();
    const newTodo = { ...this.state, id: uuid() };
    this.props.addTodo({ todo: newTodo });
    this.reset();
  };

  reset() {
    this.setState(this.init);
  }

  onChangeInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { onSubmitForm, onChangeInput } = this;
    const { title, text } = this.state;
    return (
      <form onSubmit={onSubmitForm}>
        <input
          type='text'
          name='title'
          value={title}
          onChange={onChangeInput}
          placeholder='title'
        />
        <input
          type='text'
          name='text'
          value={text}
          onChange={onChangeInput}
          placeholder='description'
        />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;

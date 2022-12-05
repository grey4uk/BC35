import { Component } from 'react';
import { v4 as uuid } from 'uuid';

export const priorities = {
  heigh: { name: 'heigh', color: 'red' },
  medium: { name: 'medium', color: 'yellow' },
  low: { name: 'low', color: 'green' },
};

const categories = ['home', 'car', 'study'];

class TodoForm extends Component {
  init = {
    title: '',
    text: '',
    isDone: false,
    priority: priorities.heigh.name,
    category: categories[0],
  };
  state = this.init;
  // uncontrolled
  // onSubmitForm = (e) => {
  //   e.preventDefault();
  //   console.log(
  //     ' e.currentTurget.elements :>> '
  //     // e.currentTarget.querySelector('[name="label"]')
  //     //   .textContent
  //   );
  //   const { title, text } = e.currentTarget.elements;
  //   const newTodo = {
  //     title: title.value,
  //     text: text.value,
  //     isDone: false,
  //     id: uuid(),
  //   };
  //   this.props.addTodo({ todo: newTodo });
  //   e.currentTarget.reset();
  //   // this.reset();
  // };
  onSubmitForm = (e) => {
    e.preventDefault();

    const newTodo = {
      ...this.state,
      id: uuid(),
    };
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
    const { title, text, priority } = this.state;
    return (
      <form
        onSubmit={onSubmitForm}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}>
        <h2 name='label'>Create todo</h2>
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
        <div>
          <p>Choose priority</p>
          {Object.keys(priorities).map((el) => (
            <label key={el}>
              {el}
              <input
                type='radio'
                name='priority'
                value={el}
                onChange={onChangeInput}
                checked={priority === el}
              />
            </label>
          ))}
        </div>
        <div>
          <label htmlFor='select-category'>Category</label>
          <select
            id='select-category'
            name='category'
            onChange={onChangeInput}
            defaultValue={categories[0]}>
            {categories.map((el) => (
              <option key={el} value={el}>
                {el}
              </option>
            ))}
          </select>
        </div>
        <button>Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;

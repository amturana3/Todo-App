import React from 'react';
import TodoList from './TodoList'


class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange =(e) => {
    this.setState({ text: e.target.value });
  }

  handleSubmit =(e) => {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    // ENtering text and time stamp
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    // concatinating it with state items
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What do want to do?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button className="btn btn-dark">
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }  
}

export default TodoApp;
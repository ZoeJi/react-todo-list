import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
/**
 * App
 */
class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {id: 1, text: 'first'},
        {id: 2, text: 'second'},
        {id: 3, text: 'third'}
      ]
    };
  }

  handleAdd = (text) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: +new Date(),
          text
        }
      ]
    });
  }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos}/>
        <UserInput handleAdd={this.handleAdd}/>
      </div>
    );
  }
}

/** 
 * todo list
 */
class TodoList extends Component {
  render() {
    const { todos } = this.props;
    return (
      <div> 
        {todos.map(({id, text}) => <TodoItem key={id} text={text} />)}
      </div>
    )
  }
}

/** 
 * todo Item
 */
class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    }
  }

  onClick = () => {
    this.setState(prevState => ({
      done : !prevState.done
    }));
  }

  render() {
    const textStyle = {
      'textDecoration': this.state.done ? 'line-through' : 'none'
    }
    return (
      <div> 
        <button className="done-btn" onClick={this.onClick}>{this.state.done ? 'undo' : 'done'}</button>
        <span className="todo-text" style={textStyle}>{this.props.text}</span>
        <button className="delete-btn"> x </button> 
      </div>
    )
  }
}

class UserInput extends Component {
  onAdd = () => {
    this.props.handleAdd("new to do");
  }
  render() {
    return (
      <div>
        <input />
        <button onClick={this.onAdd}>add</button>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
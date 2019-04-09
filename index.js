import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    );
  }
}
const todos = [
        {id: 1, text: 'first'},
        {id: 2, text: 'second'},
        {id: 3, text: 'third'}
]
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        
      ]
    }
  }
  render() {
    return (
      <div> 
        <TodoItem text={this.props.todos[0].text}/>
      </div>
    )
  }
}
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
render(<App />, document.getElementById('root'));

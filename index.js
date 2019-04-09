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

    };
  }

  render() {
    return (
      <div>
        <TodoList todos={todos}/>
        <UserInput />
      </div>
    );
  }
}

const todos = [
        {id: 1, text: 'first'},
        {id: 2, text: 'second'},
        {id: 3, text: 'third'}
]

/** 
 * todo list
 */
class TodoList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        
      ]
    }
  }
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
  render() {
    return (
      <div>
        <input />
        <button>add</button>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
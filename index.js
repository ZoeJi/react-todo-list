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
        {id: 1, text: 'clean kitch'},
        {id: 2, text: 'take shower'},
        {id: 3, text: 'pick up package'}
      ]
    };
  }

  handleDelete = (index) => {
    this.setState({
      todos: [
        ...this.state.todos.slice(0,index),
        ...this.state.todos.slice(index + 1)
      ]
    })
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
        <TodoList todos={this.state.todos} handleDelete={this.handleDelete}/>
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
    const { todos, handleDelete } = this.props;
    return (
      <div> 
        {todos.map(({id, text}, index) => <TodoItem key={id} index={index} text={text} handleDelete={handleDelete}/>)}
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

  onDelete = () => {
    this.props.handleDelete(this.props.index);
  }

  render() {
    const textStyle = {
      'textDecoration': this.state.done ? 'line-through' : 'none'
    }
    return (
      <div> 
        <button className="done-btn" onClick={this.onClick}>{this.state.done ? 'undo' : 'done'}</button>
        <span className="todo-text" style={textStyle}>{this.props.text}</span>
        <button className="delete-btn" onClick={this.onDelete}> x </button> 
      </div>
    )
  }
}

/**
 * UserInput
 */
class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }
  
  onChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  onAdd = () => {
    this.props.handleAdd(this.state.value);
    this.setState({value: ''});
  }
  render() {
    return (
      <div>
        <input value={this.state.value} onChange={this.onChange}/>
        <button onClick={this.onAdd}>add</button>
      </div>
    )
  }
}

render(<App />, document.getElementById('todo-list'));
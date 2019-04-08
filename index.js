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
        <TodoItem />
      </div>
    );
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
        <span className="todo-text" style={textStyle}>Todo item</span>
      </div>
    )
  }
}
render(<App />, document.getElementById('root'));

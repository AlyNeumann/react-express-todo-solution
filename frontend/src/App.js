import React, { Component } from 'react';
import logo from './logo.svg';
import TodoList from './TodoList.js';

class App extends Component {
  
  render() {
    return (
      <div>
        <TodoList which="first"/>
        <TodoList which="second"/>
      </div>
    );
  }
}

export default App;

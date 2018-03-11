import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList'
import CreateTodo from './components/CreateTodo'

class App extends Component {
  constructor(props) {
    super(props)

    // this.state = { todos }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">REACT TODO APP</h1>
        </header>
        <CreateTodo />
        <TodoList  />
      </div>
    );
  }
}



export default App;

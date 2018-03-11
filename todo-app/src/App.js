import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList'
import CreateTodo from './components/CreateTodo'
// raw data
const todos = [
  {
    task: "make react todo app",
    isCompleted: false
  },
  {
    task: "eat breakfast",
    isCompleted: true
  }
]
class App extends Component {
  constructor(props) {
    super(props)

    this.state = { todos }
  }
  createTask(task) {
    this.state.todos.push({
      task,
      isCompleted: false
    });
    this.setState({ todos: this.state.todos });
  }
  saveTask(oldTask, newTask) {
    let editTaskIndex = this.state.todos.findIndex(todo => todo.task == oldTask)
    this.state.todos[editTaskIndex].task = newTask
    this.setState({ todos: this.state.todos });

  }
  deleteTask(task) {
    let newTodos = this.state.todos.filter(todo => todo.task != task)
    this.setState({ todos: newTodos })
  }
  toggleTask(task) {
    const toggleTaskIndex = this.state.todos.findIndex( todo => todo.task === task);
    this.state.todos[toggleTaskIndex].isCompleted = !this.state.todos[toggleTaskIndex].isCompleted
    this.setState({ todos: this.state.todos });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">REACT TODO APP</h1>
        </header>
        <CreateTodo 
          createTask={this.createTask.bind(this)} />
        <TodoList 
          todos={this.state.todos}
          toggleTask={this.toggleTask.bind(this)} 
          deleteTask={this.deleteTask.bind(this)} 
          saveTask={this.saveTask.bind(this)} />
      </div>
    );
  }
}

export default App;

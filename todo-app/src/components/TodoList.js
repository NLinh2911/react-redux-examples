import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
       <table className="TodoList">
         <thead>
                <tr>
                    <th>Task</th>
                    <th>Action</th>
                </tr>
            </thead>
         <thead> 
           {this.props.todos.map((todo, key) => 
              <Todo 
              key={key} 
              todo={todo} 
              toggleTask={this.props.toggleTask}
              deleteTask={this.props.deleteTask} 
              saveTask={this.props.saveTask}/>
           )}
         </thead>
       </table>
    );
  }
}

export default TodoList;

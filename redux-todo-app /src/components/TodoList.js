import React, { Component } from 'react';
import Todo from './Todo';
import { connect } from 'react-redux'

class TodoList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props.todos)
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
              todo={todo} />
           )}
         </thead>
       </table>
    );
  }
}
function mapStateToProps(state) {
  return {
    todos: state
  };
}

TodoList = connect(
  mapStateToProps,
)(TodoList)
export default TodoList;

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editTodo, toggleTodo, deleteTodo } from '../actions'

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false
        }
    }
    renderActionSection() {
        if (this.state.isEditing) {
            return (
                <td>
                    <button  onClick={this.handleEdit.bind(this)}> Save </button>
                    <button  onClick={this.onCancel.bind(this)}> Cancel </button>
                </td>
            )
        }
        return (
            <td>
                <button onClick={this.onEdit.bind(this)} > Edit </button>
                <button onClick={this.handleDelete.bind(this)}> Delete </button>
            </td>
        )
    }
    renderTaskSection() {
        const { task, isCompleted } = this.props.todo;

        const taskStyle = {
            color: isCompleted ? 'green' : 'red',
            cursor: 'pointer'
        };

        if (this.state.isEditing) {
            return (
                <td>
                    <form onSubmit={this.handleEdit.bind(this)}>
                        <input type="text" defaultValue={task} ref="editInput" />
                    </form>
                </td>
            );
        }

        return (
            <td style={taskStyle}
                onClick={this.handleToggle.bind(this)}>
                {task}
            </td>
        );
    }
    onEdit() {
        this.setState({ isEditing: true })
    }

    onCancel() {
        this.setState({ isEditing: false })
    }
    handleEdit (event) {
        event.preventDefault();
        let newTask = this.refs.editInput.value
        if (!newTask.trim()) {
            return
        }
        console.log({oldTask: this.props.todo.task, newTask})
        this.props.dispatch(editTodo({oldTask: this.props.todo.task, newTask}))
        newTask = ''
        this.setState({ isEditing: false })
    }
    handleDelete () {
        console.log(`Delete ${this.props.todo.task}`)
        this.props.dispatch(deleteTodo(this.props.todo.task))
    }
    handleToggle () {
        console.log(`Toggle ${this.props.todo.task}`)
        this.props.dispatch(toggleTodo(this.props.todo.task))
    }
    render() {
        return (
            <tr>
                {this.renderTaskSection()}
                {this.renderActionSection()}
            </tr>
        );
    }
}
Todo = connect(
    // mapStateToProps,
)(Todo)
export default Todo;

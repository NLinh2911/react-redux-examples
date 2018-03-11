import React, { Component } from 'react';

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
                    <button onClick={this.onSave.bind(this)}> Save </button>
                    <button onClick={this.onCancel.bind(this)}> Cancel </button>
                </td>
            )
        }
        return (
            <td>
                <button onClick={this.onEdit.bind(this)}> Edit </button>
                <button onClick={this.onDelete.bind(this)}> Delete </button>
            </td>
        )
    }
    renderTaskSection () {
        const { task, isCompleted } = this.props.todo;

        const taskStyle = {
            color: isCompleted ? 'green' : 'red',
            cursor: 'pointer'
        };

        if (this.state.isEditing) {
            return (
                <td>
                    <form onSubmit={this.onSave.bind(this)}>
                        <input type="text" defaultValue={task} ref="editInput" />
                    </form>
                </td>
            );
        }

        return (
            <td style={taskStyle}
                onClick={this.props.toggleTask.bind(this, task)}>
                {task}
            </td>
        );
    }
    onEdit() {
        this.setState({ isEditing: true })
    }
    onSave(event) {
        event.preventDefault();

        const oldTask = this.props.todo.task;
        const newTask = this.refs.editInput.value;
        console.log(oldTask + "  "+newTask);
        this.props.saveTask(oldTask, newTask);
        this.setState({ isEditing: false });
    }
    onCancel() {
        this.setState({ isEditing: false })
    }
    onDelete () {
        this.props.deleteTask(this.props.todo.task)
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

export default Todo;

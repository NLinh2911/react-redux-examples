import React, { Component } from 'react';
import Todo from './Todo';

class CreateTodo extends Component {
    constructor(props) {
        super(props)

    }

    handleCreate (event) {
        event.preventDefault();
        // console.log(this.refs.createInput.value)
        // console.log(this.props.createTask);
        this.props.createTask(this.refs.createInput.value)
        this.refs.createInput.value = ''
    }
    render() {
        return (
            <form className="CreateTodo" onSubmit={this.handleCreate.bind(this)}>
                <input type="text" placeholder="What do I need to do?" ref="createInput" />
                <button>Create</button>
            </form>
        );
    }
}

export default CreateTodo;

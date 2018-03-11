import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class CreateTodo extends Component {
    constructor(props) {
        super(props)
    }

    handleCreate (event) {
        event.preventDefault();
        let newTodo = this.refs.createInput.value
        if (!newTodo.trim()) {
            return
        }
        this.props.dispatch(addTodo(newTodo))
        newTodo = ''
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

CreateTodo = connect()(CreateTodo)
export default CreateTodo;

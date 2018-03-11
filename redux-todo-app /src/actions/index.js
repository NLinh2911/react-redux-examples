// let nextTodoId = 0
export const addTodo = (task) => ({
    type: 'ADD_TODO',
    //   id: nextTodoId++,
    payload: task
})

export const editTodo = ({ oldTask, newTask }) => ({

    type: 'EDIT_TODO',
    //   id: nextTodoId++,
    payload: { oldTask, newTask }
})

export const toggleTodo = (task) => ({

    type: 'TOGGLE_TODO',
    //   id: nextTodoId++,
    payload: task
})

export const deleteTodo = (task) => ({

    type: 'DELETE_TODO',
    //   id: nextTodoId++,
    payload: task
})
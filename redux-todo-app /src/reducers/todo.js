// reducer holds state and receive action
// when action happens or dispatched to the store
// store sends the action to the reducer
// reducer is gonna handle the action
const TodoReducer = (currentState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...currentState,
                {
                    task: action.payload,
                    isCompleted: false
                }
            ];
            break;
        case "EDIT_TODO":
            return currentState.map(todo =>
                todo.task === action.payload.oldTask ?
                    { ...todo, task: action.payload.newTask } :
                    todo
            )
            break;
        case "DELETE_TODO":
        return currentState.filter(todo =>
            todo.task !== action.payload
          )
            break;
        case "TOGGLE_TODO":
            return currentState.map(todo =>
                todo.task === action.payload ?
                    { ...todo, isCompleted: !todo.isCompleted } : 
                    todo
            )
            break;
        default:
            return currentState;
    }
}

export default TodoReducer
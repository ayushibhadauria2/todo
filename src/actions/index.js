import { ADD_TODO, REMOVE_TODO, UPDATE_TODO, MARK_COMPLETED } from "../constants"

export const addTodo = (data) => {
    return {
        type: ADD_TODO,
        payload: {
            task: data
        }
    }
}

export const removeTodo = (id) => {
    return {
        type: REMOVE_TODO,
        id
    }
}

export const completedTodo = (id) => {
    return {
        type: MARK_COMPLETED,
        payload: {
            id : id
        }
    }
}

export const handleEditSubmit=(id, data, isCompleted)=>{
    return{
        type: UPDATE_TODO,
        payload: {
            editTodoId: id, 
            editTodo : data,
            isCompleted : isCompleted
        }
    }
}
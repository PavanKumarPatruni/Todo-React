import {
    COMPLETE_TODO,
    DELETE_TODO,
    UPDATE_TODO,
    ADD_TODO,
    CLEAR_COMPLETED

} from './constants';

export const completeTodo = id => {
    return {
        type: COMPLETE_TODO,
        id
    };
}

export const deleteTodo = id => {
    return {
        type: DELETE_TODO,
        id
    };
}

export const updateTodo = todo => {
    return {
        type: UPDATE_TODO,
        todo
    };
}

export const addTodo = todo => {
    return {
        type: ADD_TODO,
        todo
    };
}

export const clearCompleted = () => {
    return {
        type: CLEAR_COMPLETED
    };
}
import { connect } from 'react-redux';

import TodoItem from '../todo/TodoItem';

import { completeTodo, deleteTodo, updateTodo } from '../../redux/actions';

const mapDispatchToProps = (dispatch) => {
    return {
        completeTodo(todoId) {
            dispatch(completeTodo(todoId));
        },
        deleteTodo(todoId) {
            dispatch(deleteTodo(todoId));
        },
        updateTodo(todo) {
            dispatch(updateTodo(todo))
        }
    }
}

export default connect(null, mapDispatchToProps)(TodoItem);
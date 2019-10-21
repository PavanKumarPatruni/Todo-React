import { connect } from 'react-redux';

import TodoItem from '../todo/TodoItem';

import { completeTodo, deleteTodo } from '../../redux/actions';

const mapDispatchToProps = (dispatch) => {
    return {
        completeTodo(todo) {
            dispatch(completeTodo(todo))
        },
        deleteTodo(todo) {
            dispatch(deleteTodo(todo))
        }
    }
}

export default connect(null, mapDispatchToProps)(TodoItem);
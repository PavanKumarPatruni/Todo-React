import { connect } from 'react-redux';

import TodoCreator from '../todo/TodoCreator';

import { addTodo } from '../../redux/actions';

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo(todo) {
            dispatch(addTodo(todo))
        }
    }
}

export default connect(null, mapDispatchToProps)(TodoCreator);
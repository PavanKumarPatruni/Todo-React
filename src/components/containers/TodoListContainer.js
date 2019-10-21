import { connect } from 'react-redux';

import TodoList from '../todo/TodoList';

import { clearCompleted } from '../../redux/actions';

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearCompleted() {
            dispatch(clearCompleted());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
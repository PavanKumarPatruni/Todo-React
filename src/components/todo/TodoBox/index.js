import React from 'react';

import TodoCreatorContainer from '../../containers/TodoCreatorContainer';
import TodoListContainer from '../../containers/TodoListContainer';

const TodoBox = () => {

    return (
        <div className="todo-box">
            <TodoCreatorContainer />
            <TodoListContainer />
        </div>
    );
}

export default TodoBox;
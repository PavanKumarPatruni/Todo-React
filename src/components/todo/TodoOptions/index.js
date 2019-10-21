import React from 'react';

const TodoOptions = props => {
    
    const allTodos = e => {
        props.allTodos();
    }

    const completedTodos = e => {
        props.completedTodos();
    }

    const pendingTodos = e => {
        props.pendingTodos();
    }
    
    return (
        <div className="list-options">
            <label>{props.pending > 0 ? props.pending : 'No' } {props.pending === 1 ? ' item': ' items'} left</label>
            <div className="list-info">
                <button className={props.selected === 'all' ? 'selected' : ''} onClick={allTodos}>All</button>
                <button className={props.selected === 'completed' ? 'selected' : ''} onClick={completedTodos}>Completed</button>
                <button className={props.selected === 'pending' ? 'selected' : ''} onClick={pendingTodos}>Pending</button>
            </div>
            <label onClick={props.clearCompleted} className="clear-completed">Clear Completed</label>
        </div>
    );
}

export default TodoOptions;

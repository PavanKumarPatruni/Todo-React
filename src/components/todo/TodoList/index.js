import React, { useState, useEffect } from 'react';
import TodoItemContainer from '../../containers/TodoItemContainer';
import TodoOptions from '../TodoOptions';

const TodoList = props => {

    const todos = props.todos;
    const allList = todos;
    const all = todos.length;
    const completedList = todos.filter(item => item.completed);
    const pendingList = todos.filter(item => !item.completed);
    const pending = pendingList.length;

    const [list, setList] = useState([]);
    const [selected, setSelected] = useState("all");

    useEffect(() => {
        setSelected("all");
        setList(todos);
    }, [todos]);

    const allTodos = e => {
        setSelected("all");
        setList([...allList]);
    }

    const completedTodos = e => {
        setSelected("completed");
        setList([...completedList]);
    }

    const pendingTodos = e => {
        setSelected("pending");
        setList([...pendingList]);
    }

    const clearCompleted = e => {
        props.clearCompleted();
    }

    return (
        <div className="todo-list">
            {
                all > 0
                ? (
                    <div className="list-items-info">
                        <div className="list-items">
                            {
                                list.map(item => <TodoItemContainer key={item.id} value={item} />)
                            }
                        </div>
                        <TodoOptions selected={selected} pending={pending} allTodos={allTodos} completedTodos={completedTodos} pendingTodos={pendingTodos} clearCompleted={clearCompleted} />
                    </div>
                )
                : <span className="no-list">no todos</span>
            }
        </div>
    );
}

export default TodoList;

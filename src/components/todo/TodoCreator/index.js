import React, { useState } from 'react';

const TodoCreator = props => {

    let [text, setText] = useState("");

    const onEnterClick = e => {
        if(e.key === 'Enter') {
            const todo = {
                id: new Date().getTime(),
                todo: text,
                timestamp: new Date().getTime(),
                completed: false
            };

            props.addTodo(todo);
            setText("");
        }
    }

    return (
        <div className="todo-creator">
            <input placeholder="type here.." value={text} onChange={e => setText(e.target.value)} onKeyDown={e => onEnterClick(e)}/>
        </div>
    );
}

export default TodoCreator;
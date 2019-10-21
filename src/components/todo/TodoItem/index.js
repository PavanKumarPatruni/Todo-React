import React from 'react';
import deleteIcon from '../../../assets/images/icon-delete.png';

class TodoItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            completed: props.value.completed,
            todo: props.value.todo,
            timestamp: props.value.timestamp,
            id: props.value.id
        }
    }

    onComplete = e => {
        let { id, completed } = this.state;
        completed = !completed;
        this.setState({
            completed
        });

        this.props.completeTodo(id);
    }

    onDelete = e => {
        let { id } = this.state;    
        this.props.deleteTodo(id);
    }

    render() {

        let { todo, completed } = this.state;

        return (
            <div className="todo-item">
                <label className={"todo-label " + (completed ? "completed" : "")}>{todo}
                    <input type="checkbox" checked={completed} onChange={this.onComplete}/>
                    <span className="checkmark"></span>
                </label>
                <img className="delete-item" alt="delete" src={deleteIcon} onClick={this.onDelete}/>
            </div>
        )
    }

}

export default TodoItem;
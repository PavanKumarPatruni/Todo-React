import React from 'react';
import deleteIcon from '../../../assets/images/icon-delete.png';
import editIcon from '../../../assets/images/icon-edit.png';
import saveIcon from '../../../assets/images/icon-save.png';
import cancelIcon from '../../../assets/images/icon-cancel.png';

class TodoItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            completed: props.value.completed,
            todo: props.value.todo,
            timestamp: props.value.timestamp,
            id: props.value.id,
            edit: false,
            unsave: props.value.todo
        }
    }

    onChange = e => {
        const unsave = e.target.value;

        this.setState({
            unsave
        });
    }

    onComplete = e => {
        let { id, completed } = this.state;
        completed = !completed;
        this.setState({
            completed
        });

        this.props.completeTodo(id);
    }

    onEnterClick = e => {
        if(e.key === 'Enter') {
            this.onSave();
        }
    }

    onSave = () => {
        const { unsave } = this.state;

        this.setState({
            todo: unsave,
            unsave: "",
            edit: false
        }, () => {
            const {id, completed, todo, timestamp} = this.state;
            this.props.updateTodo({id, completed, todo, timestamp});
        });
    }

    onEdit = e => {
        let { edit, todo } = this.state;
        edit = !edit;
        this.setState({
            edit,
            unsave: todo
        });
    }

    onDelete = e => {
        const { id } = this.state;    
        this.props.deleteTodo(id);
    }

    render() {

        let { edit, todo, unsave, completed } = this.state;

        return (
            <div className="todo-item">
                {
                    edit ? (
                        <>
                            <input className="todo-label edit-input" type="text" value={unsave} onChange={this.onChange} onKeyDown={this.onEnterClick}/>
                            <img className="todo-option-icon second-icon" alt="save" src={saveIcon} onClick={this.onSave}/>
                            <img className="todo-option-icon" alt="cancel" src={cancelIcon} onClick={this.onEdit}/>
                        </>
                    ) : (
                        <>
                            <label className={"todo-label " + (completed ? "completed" : "")}>{todo}
                                <input type="checkbox" checked={completed} onChange={this.onComplete}/>
                                <span className="checkmark"></span>
                            </label>
                            <img className="todo-option-icon second-icon" alt="edit" src={editIcon} onClick={this.onEdit}/>
                            <img className="todo-option-icon" alt="delete" src={deleteIcon} onClick={this.onDelete}/>
                        </>
                    )
                }
            </div>
        )
    }

}

export default TodoItem;
import {
    COMPLETE_TODO,
    DELETE_TODO,
    ADD_TODO,
    CLEAR_COMPLETED

} from './constants';

let initState = {
    todos: []
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case COMPLETE_TODO : {
            let { todos } = state;
            const { id } = action;
            todos = todos.map(item => {
                if (id === item.id) {
                    item.completed = !item.completed;
                }

                return item;
            });

            return Object.assign({}, state, { todos: [...todos] });
        }
        case DELETE_TODO : {
            let { todos } = state;
            const { id } = action;
            todos = todos.filter(item => item.id !== id);

            return Object.assign({}, state, { todos: [...todos] });
        }

        case ADD_TODO : {
            let  { todos } = state;
            const { todo } = action;
            todos.push(todo);

            return Object.assign({}, state, { todos: [...todos] });
        }

        case CLEAR_COMPLETED: {
            let  { todos } = state;
            todos = todos.filter(item => !item.completed);

            return Object.assign({}, state, { todos: [...todos] });
        }
   
        default:
            return state;
    }
};

export default reducer;
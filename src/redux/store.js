import { createStore } from 'redux';
import setupReducer  from './reducer';
import { loadState, saveState } from '../local_storage';

const persistedState = loadState();
const store = createStore(setupReducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
  saveState({
    todos: store.getState().todos
  });
});

export default store;

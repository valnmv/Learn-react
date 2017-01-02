import { createAction, createReducer } from 'redux-act';
import { callApi } from '../callapi';

const initialState = [];

export const addTodo = createAction('add todo');
export const deleteTodo = createAction('delete todo');
export const getTodos = createAction('get todos');
export const getTodosDone = createAction('get todos done');

export default createReducer({
  [addTodo]: (state, text) => {
    const newTodo = {
      id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      completed: false,
      text: text
    };

    callApi('post', 0, newTodo, '/api/todo');
    const newState = [newTodo, ...state];
    return newState;
  },

  [deleteTodo]: (state, id) => {
    state.filter(todo => todo.id !== id);
  },

  [getTodos]: (state, payload) => {
    payload;
    // here possibly show clock...
    return state;
  },

  [getTodosDone]: (state, payload) => {
    return payload;
  }
}, initialState);

import { createAction, createReducer } from 'redux-act';
import { callApi } from '../callapi';

const initialState = [];

export const addTodo = createAction('add todo');
export const deleteTodo = createAction('delete todo');
export const getTodosRequest = createAction('get todos request');
export const getTodos = createAction('get todos');

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
    callApi('delete', id, {}, '/api/todo');
    return state.filter(todo => todo.id !== id);
  },

  [getTodosRequest]: (state, payload) => {
    payload;
    // here possibly show clock...
    return state;
  },

  [getTodos]: (state, payload) => {
    return payload;
  }
}, initialState);

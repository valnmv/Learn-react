import { createAction, createReducer } from 'redux-act';
import { callApi } from '../callapi';

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }, {
    text: 'Use MongoDb',
    completed: false,
    id: 2
  }
];

export const addTodo = createAction('add todo');
export const deleteTodo = createAction('delete todo');

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
  }

}, initialState);

import { createAction, createReducer } from 'redux-act';

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  },
  {
    text: 'Use MongoDb',
    completed: false,
    id: 2
  }
];

export const addTodo = createAction('add todo');
export const deleteTodo = createAction('delete todo');

export default createReducer({
  [addTodo]: (state, text) => [
    {
      id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      completed: false,
      text: text
    },
    ...state
  ],

  [deleteTodo]: (state, id) => state.filter(todo =>
    todo.id !== id
  )

}, initialState);

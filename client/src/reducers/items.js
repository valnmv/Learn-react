import { createAction, createReducer } from 'redux-act';
import { callApi } from '../callapi';

const initialState = [];

export const addItem = createAction('add item');
export const deleteItem = createAction('delete item');
export const getItemsRequest = createAction('get items request');
export const getItems = createAction('get items');

export default createReducer({
  [addItem]: (state, text) => {
    const newItem = {
      id: state.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1,
      text: text
    };

    callApi('post', 0, newItem, '/api/item');
    const newState = [newItem, ...state];
    return newState;
  },

  [deleteItem]: (state, id) => {
    callApi('delete', id, {}, '/api/item');
    return state.filter(item => item.id !== id);
  },

  [getItemsRequest]: (state, payload) => {
    payload;
    // here possibly show clock...
    return state;
  },

  [getItems]: (state, payload) => {
    return payload;
  }
}, initialState);

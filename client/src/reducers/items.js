import { createAction, createReducer } from 'redux-act';
import { callApi } from '../callapi';

const initialState = [];

export const addItem = createAction('add item');
export const deleteItem = createAction('delete item');
export const getItems = createAction('get items');

export default createReducer({
  [addItem]: (state, name) => {
    const cuid = require('cuid');
    const newItem = {
      cuid: cuid(),
      name: name
    };

    callApi('post', 0, newItem, '/api/item');

    const newState = [newItem, ...state];
    return newState;
  },

  [deleteItem]: (state, id) => {
    callApi('delete', id, {}, '/api/item');
    return state.filter(item => item.id !== id);
  },

  [getItems]: (state, payload) => {
    return payload;
  }
}, initialState);

export function getItemsRequest() {
  return dispatch => {
    callApi('get', 0, {}, '/api/item')
      .then(res => { dispatch(getItems(res.data)); });
  };
}

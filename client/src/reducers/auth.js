import { createAction, createReducer } from 'redux-act';
import { callApi } from '../callapi';

const initialState = [];

export const signIn = createAction('sign in');
export const signOut = createAction('sign out');
export const signUp = createAction('sign up');

export default createReducer({
  [signIn]: (state, user) => {
    callApi('post', 0, user, '/api/auth');
    return state;
  },

  [signOut]: (state, {}) => {
    return state;
  },

  [signUp]: (state, {}) => {
    return state;
  }
}, initialState);

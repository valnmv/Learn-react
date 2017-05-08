import { createAction, createReducer } from 'redux-act';

const initialState = [];

export const signIn = createAction('sign in');
export const signOut = createAction('sign out');
export const signUp = createAction('sign up');

export default createReducer({
  [signIn]: (state, {}) => {
    return state;
  },

  [signOut]: (state, {}) => {
    return state;
  },

  [signUp]: (state, {}) => {
    return state;
  }
}, initialState);

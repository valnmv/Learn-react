import { combineReducers } from 'redux';
import account from './account';
import items from './items';

const rootReducer = combineReducers({ account, items });

export default rootReducer;

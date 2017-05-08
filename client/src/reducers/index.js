import { combineReducers } from 'redux';
import account from './auth';
import items from './items';

const rootReducer = combineReducers({ account, items });

export default rootReducer;

import rootReducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

export default function configureStore(initialState, history) {
  const middleware = [thunk, routerMiddleware(history)];
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, initialState,
    composeEnhancers(applyMiddleware(...middleware), f => f));
  return store;
}

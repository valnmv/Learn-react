import rootReducer from './reducers';
import { createStore, compose } from 'redux';
import { persistState } from 'redux-devtools';
import DevTools from './DevTools';

const enhancer = compose(DevTools.instrument(),
  persistState(window.location.href.match(/[?&]debug_session=([^&#]+)\b/)));

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  return store;
}

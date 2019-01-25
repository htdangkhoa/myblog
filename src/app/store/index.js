import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const AppInitialState = {};

const initStore = (initialState = AppInitialState) => createStore(
  reducers,
  initialState,
  applyMiddleware(thunk),
);

export {
  initStore,
};

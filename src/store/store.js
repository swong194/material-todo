import { createStore } from 'redux';

import rootReducer from '../reducers/rootReducer.js';
import middleware from './middleware.js';

const configureStore = (preLoadedState = {}) => {
  return createStore(
    rootReducer,
    preLoadedState,
    middleware,
  );
};

export default configureStore;
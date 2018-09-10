import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store.js';
import Root from './components/Root.js';

import './index.css';

document.addEventListener("DOMContentLoaded", () => {
  // allows for preloadedState
  const store = configureStore();
  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});


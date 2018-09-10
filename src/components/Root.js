import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import App from './App.js';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CssBaseline>
          <App />
        </CssBaseline>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;

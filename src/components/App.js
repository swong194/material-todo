import React, { Component, Fragment } from 'react';

import Drawer from './Drawer/Drawer.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Drawer>Drawer</Drawer>
        <Main></Main>
        <Footer>Footer</Footer>
      </Fragment>
    );
  }
}

export default App;

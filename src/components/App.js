import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';
import Welcome from './Welcome/Welcome.js';

class App extends Component {
  render() {
    return <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/todo/:groupId" component={Main} />
        </Switch>
        <Route path="/todo/:groupId" component={Footer} />
      </Fragment>;
  }
}

export default App;

import React, { Component, Fragment } from 'react';

import Header from './Header/Header.js';
import Main from './Main/Main.js';
import cards from './Main/cards.js';
import Footer from './Footer/Footer.js';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header>TO DO</Header>
        <Main cards={cards} />
        <Footer />
      </Fragment>
    );
  }
}

export default App;

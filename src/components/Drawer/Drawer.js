import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';

import './Drawer.scss';

class SideBar extends Component {
  render() {
    return (
      <Drawer
        variant='permanent'
        className="drawer"
      >
        <div>Hello</div>
      </Drawer>
    );
  }
}

export default SideBar;
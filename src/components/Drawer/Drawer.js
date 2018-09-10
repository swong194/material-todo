import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';

class SideBar extends Component {
  render() {
    return (
      <Drawer
        variant='permanent'
      >
        {this.props.children}
      </Drawer>
    );
  }
}

export default SideBar;
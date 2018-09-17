import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';

class Sidebar extends Component {
  state = { open: true };

  toggleDrawer = () => {
    this.setState(({ open }) => ({ open: !open }));
  };

  render() {
    return (
      <Drawer anchor="right" variant="permanent" open={this.state.open}>
        Hello i am a drawer
      </Drawer>
    );
  }
}

export default Sidebar;

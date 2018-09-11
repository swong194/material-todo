import React, { PureComponent } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Header extends PureComponent {
  render() {
    return (
      <AppBar position='static' color='primary'>
        <ToolBar>
          <Typography variant="title" color="inherit">
            {this.props.children}
          </Typography>
        </ToolBar>
      </AppBar>
    );
  }
}

export default Header;
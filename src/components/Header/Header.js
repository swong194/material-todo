import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import ToolBar from '@material-ui/core/Toolbar';

class Header extends PureComponent {
  render() {
    return (
      <AppBar position='static' color='primary'>
        <ToolBar>
          <Button variant="contained" component={Link} to="/" color="secondary">
            Home
          </Button>
        </ToolBar>
      </AppBar>
    );
  }
}

export default Header;
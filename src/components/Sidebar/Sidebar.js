import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { withStyles } from '@material-ui/core/styles';

import { toggleSidebar } from '../../actions/uiActions.js';

const mapStateToProps = ({ ui: { open } }) => ({ open });
const mapDispatchToProps = (dispatch) => {
  return {
    toggleDrawer: () => dispatch(toggleSidebar()),
  };
};

const drawerWidth = 240;

const styles = (theme) => ({
  icon: {
    margin: '0 auto',
  },
  drawerPaper: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
});

class Sidebar extends Component {
  render() {
    const { open, toggleDrawer, classes } = this.props;
    return (
      <Drawer
        classes={{
          paper: classNames(
            classes.drawerPaper,
            !open && classes.drawerPaperClose,
          ),
        }}
        anchor="right"
        variant="permanent"
        open={open}
      >
        <List component="nav">
          <ListItem button onClick={toggleDrawer}>
            <ListItemIcon className={classes.icon}>
              {open ? <ChevronRightIcon /> : <MenuIcon />}
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles, { withTheme: true })(Sidebar));

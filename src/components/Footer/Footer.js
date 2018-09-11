import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  Footer: {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    padding: '10px',
  }
};

const mapStateToProps = state => {
  return {

  }
}
class Footer extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.Footer}>
        {this.props.children}
        <Tabs indicatorColor="secondary" textColor="secondary" centered>
          <Tab data-name="one" label="one" />
          <Tab data-name="two" label="two" />
          <Tab data-name="three" label="three" />
        </Tabs>
      </Paper>
    );
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Footer));
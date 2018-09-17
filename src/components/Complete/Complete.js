import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  Card: {
    margin: '10px',
    padding: '10px',
  },
};

class Complete extends Component {
  render() {
    const { completes, classes } = this.props;

    if (!completes.length) {
      return (
        <Card className={classes.Card}>
          <Typography color="error" align="center">
            You have no completed tasks...
          </Typography>
        </Card>
      );
    }

    return completes.map(complete => {
      return (
        <Card key={complete.id} className={classes.Card}>
          <Typography align="center">{complete.text}</Typography>
        </Card>
      );
    });
  }
}

export default withStyles(styles)(Complete);

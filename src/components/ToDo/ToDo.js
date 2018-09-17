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

class ToDo extends Component {
  render() {
    const { todos, classes } = this.props;

    if (!todos.length) {
      return (
        <Card className={classes.Card}>
          <Typography color="error" align="center">
            You have no nothing to do...
          </Typography>
        </Card>
      );
    }

    return todos.map(todo => {
      return (
        <Card key={todo.id} className={classes.Card}>
          <Typography align="center">{todo.text}</Typography>
        </Card>
      );
    });
  }
}

export default withStyles(styles)(ToDo);

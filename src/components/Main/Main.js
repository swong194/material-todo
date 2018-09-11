import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import Complete from '../Complete/Complete.js';
import ToDo from '../ToDo/ToDo.js';

const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { groupId },
    },
  } = ownProps;

  const { groups, tasks } = state;

  // add redirect if coming from 'any' route
  let redirect = 0;
  if (groupId === 'any') {
    redirect = Object.keys(groups)[0];
  }

  let group = groups[groupId];
  let todos = [];
  let completes = [];

  if (group) {
    group.todo.forEach(todoId => {
      todos.push(tasks[todoId]);
    });

    group.complete.forEach(completeId => {
      completes.push(tasks[completeId]);
    });
  }

  return {
    completes,
    todos,
    redirect,
  };
};

const styles = {
  Paper: {
    margin: '10px',
    padding: '20px',
  },
};

class Main extends PureComponent {
  componentDidMount() {
    const { redirect } = this.props;

    if (redirect) {
      this.props.history.push(`/todo/${redirect}`);
    }
  }

  render() {
    const { completes, todos, classes } = this.props;

    return (
      <Grid container>
        <Grid item sm={6}>
          <Paper square={true} className={classes.Paper}>
            <ToDo todos={todos} />
          </Paper>
        </Grid>

        <Grid item sm={6}>
          <Paper square={true} className={classes.Paper}>
            <Complete completes={completes} />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Main));

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Complete from '../Complete/Complete.js';
import ToDo from '../ToDo/ToDo.js';
import {
  selectTodosAndCompletes,
  provideRedirect,
} from '../../selectors/selector.js';

const mapStateToProps = (state, ownProps) => {
  const { todos, completes } = selectTodosAndCompletes(state, ownProps);
  const redirect = provideRedirect(state, ownProps);

  return {
    completes,
    todos,
    redirect,
  };
};

const styles = {
  Header: {
    margin: '15px',
  },
  Container: {
    padding: '0 10px',
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
      <Grid className={classes.Container} spacing={8} container>
        <Grid item sm={6}>
          <Typography
            align="center"
            className={classes.Header}
            variant="headline"
          >
            Todo List
          </Typography>
          <Divider />
          <ToDo todos={todos} />
        </Grid>

        <Grid item sm={6}>
          <Typography
            align="center"
            className={classes.Header}
            variant="headline"
          >
            Complete List
          </Typography>
          <Divider />
          <Complete completes={completes} />
        </Grid>
      </Grid>
    );
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Main));

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
  let group = state.groups[groupId];
  if (!group) group = { complete: [], todo: [] };

  return {
    group,
  };
};

const styles = {
  Paper: {
    margin: '10px',
    padding: '20px',
  },
};
class Main extends PureComponent {
  render() {
    const {
      group: { complete, todo },
      classes,
    } = this.props;

    return (
      <Grid container>
        <Grid item sm={6}>
          <Paper square={true} className={classes.Paper}>
            <ToDo todo={todo} />
          </Paper>
        </Grid>

        <Grid item sm={6}>
          <Paper square={true} className={classes.Paper}>
            <Complete complete={complete} />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Main));

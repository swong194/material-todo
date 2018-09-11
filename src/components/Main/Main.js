import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';

import Complete from '../Complete/Complete.js';
import ToDo from '../ToDo/ToDo.js';

class Main extends PureComponent {
  render() {
    return (
      <Grid container>
        <Grid item sm={6}>
          <Complete />
        </Grid>
        <Grid item sm={6}>
          <ToDo />
        </Grid>
      </Grid>
    );
  }
}

export default Main;
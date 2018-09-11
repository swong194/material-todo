import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  Text: {
    padding: '20px;'
  },
  Paper: {
    margin: '20px'
  }
}

class Welcome extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Paper elevation={1} square={true} className={classes.Paper}>
        <Typography variant='display1' align='center' className={classes.Text}>
          Hello World!
        </Typography>
        <Typography variant='subheading' align='justify' className={classes.Text}>
          Material design has become a leading standard in how apps should look and feel.
          So I decided to teach myself by making the hello world of apps, the TODO app.
          This project is created using React, Redux and Material-UI
        </Typography>
        <Typography variant='caption' align='right' className={classes.Text}>
          <Button href="https://github.com/swong194" variant="contained" color="secondary">
              By Sunny Wong
          </Button>
        </Typography>
      </Paper>
    );
  }
}

export default withStyles(styles)(Welcome);
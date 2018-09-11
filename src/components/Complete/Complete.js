import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

class Complete extends Component {
  render() {
    const { complete } = this.props;

    if (!complete.length) {
      return (
        <Card>
          <Typography align="center">You have no completed tasks...</Typography>
        </Card>
      );
    }

    return complete.map(complete => {
      return <Card key={complete.id}>{complete.text}</Card>;
    });
  }
}

export default Complete;

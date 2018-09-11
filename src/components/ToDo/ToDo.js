import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

class ToDo extends Component {
  render() {
    const { todo } = this.props;

    if (!todo.length) {
      return (
        <Card>
          <Typography align="center">You have nothing todo...</Typography>
        </Card>
      );
    }

    return todo.map(todo => {
      return <Card key={todo.id}>{todo.text}</Card>;
    });
  }
}

export default ToDo;

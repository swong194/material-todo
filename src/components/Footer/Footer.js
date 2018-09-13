import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
import { getGroupIds } from '../../selectors/selector.js';

const styles = {
  Footer: {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    padding: '10px',
  },
};

const mapStateToProps = (state, ownProps) => {
  return {
    groupIds: getGroupIds(state),
    selected: ownProps.match.params.groupId,
  };
};

class Footer extends PureComponent {
  handleChange = (_, value) => {
    this.props.history.push(`/todo/${value}`);
  };

  render() {
    const { classes, selected, groupIds } = this.props;

    return (
      <Paper className={classes.Footer}>
        <Tabs
          value={selected}
          indicatorColor="secondary"
          textColor="secondary"
          centered
          onChange={this.handleChange}
        >
          {groupIds.map(id => (
            <Tab key={id} value={id} label={id} />
          ))}
        </Tabs>
      </Paper>
    );
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Footer));

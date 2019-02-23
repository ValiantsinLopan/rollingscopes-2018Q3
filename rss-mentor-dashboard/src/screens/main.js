import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Search from '../components/Search';

class Main extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Search />
      </Paper>
    );
  }
}

const styles = theme => ({
  root: {
    width: '100%',
    overflow: 'none',
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
  },
});

export default withStyles(styles)(Main);

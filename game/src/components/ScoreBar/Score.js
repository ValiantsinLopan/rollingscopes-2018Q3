import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';

class Score extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.score}>
        <Typography variant="h4" gutterBottom>
        Player
        </Typography>
        <LinearProgress variant="determinate" value={55} color="secondary" />
      </div>
    );
  }
}

const styles = {
  score: {
    margin: '20px',
  },
};

export default withStyles(styles)(Score);

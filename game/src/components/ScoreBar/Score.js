import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';

class Score extends Component {
  render() {
    const { classes, name, score } = this.props;
    return (
      <div className={classes.score}>
        <Typography variant="h4" gutterBottom>
          {name}
        </Typography>
        <LinearProgress variant="determinate" value={score} color="secondary" />
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

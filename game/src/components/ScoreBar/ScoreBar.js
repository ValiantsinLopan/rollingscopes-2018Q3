import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Score from './Score';

class ScoreBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.scoreBar}>
        <AppBar position="static" color="default">
          <Grid container>
            <Grid item xs={5}>
              <Score />
            </Grid>
            <Grid item xs>
              <Typography variant="h4" gutterBottom>
              VS.
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Score />
            </Grid>
          </Grid>
        </AppBar>
      </div>
    );
  }
}

const styles = {
  scoreBar: {
    textAlign: 'center',
  },
};

export default withStyles(styles)(ScoreBar);

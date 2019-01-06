import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Score from './Score';

class ScoreBar extends Component {
  render() {
    const { classes, user, monster } = this.props;
    return (
      <div className={classes.scoreBar}>
        <AppBar position="static" color="default">
          <Grid container>
            <Grid item xs={5}>
              <Score name={user.name} score={user.score} />
            </Grid>
            <Grid item xs>
              <Typography className={classes.vs} variant="h4" gutterBottom>
              VS.
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Score name={monster.name} score={monster.score} />
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
  vs: {
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
  },
};

export default connect(
  store => ({
    user: store.user,
    monster: store.monster,
  }),
)(withStyles(styles)(ScoreBar));

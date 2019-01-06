import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ScoreBar from '../components/ScoreBar/ScoreBar';
import GameField from '../components/GameField/GameField';
import PlayerNameInput from '../components/PlayerNameInput';

class Battle extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.battle}>
        <ScoreBar />
        <GameField />
        <PlayerNameInput />
      </div>
    );
  }
}

const styles = {
  battle: {
    height: '100vh',
  },
};

export default withStyles(styles)(Battle);

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ScoreBar from '../components/ScoreBar/ScoreBar';
import GameField from '../components/GameField';
import PlayerNameInput from '../components/PlayerNameInput';
import SelectSpellModal from '../components/SelectSpellModal';
import TaskModal from '../components/TaskModal';
import ScoreModal from '../components/ScoreModal';

class Battle extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.battle}>
        <ScoreBar />
        <GameField />
        <PlayerNameInput />
        <SelectSpellModal />
        <TaskModal />
        <ScoreModal />
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

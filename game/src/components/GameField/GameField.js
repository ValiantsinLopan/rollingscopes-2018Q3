import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import coridor from './images/coridor.jpg';

class GameField extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.gameField}>
        
      </div>
    );
  }
}

const styles = {
  gameField: {
    height: '100%',
    width: '100%',
    position: 'fixed',
    padding: '0',
    margin: '0',
    backgroundImage: `url(${coridor})`,
    backgroundPosition: 'bottom',
  },
};

export default withStyles(styles)(GameField);

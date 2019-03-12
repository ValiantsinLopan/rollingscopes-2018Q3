import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { setIsSelectSpellActive } from '../store/actions/page';
import coridor from './images/coridor.jpg';
import boo from './images/boo.png';
import monster from './images/monster.png';

class GameField extends Component {
  constructor(props) {
    super(props);
    this.handleSelectSpellClick = this.handleSelectSpellClick.bind(this);
  }

  handleSelectSpellClick() {
    this.props.setIsSelectSpellActive(true);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.gameField}>
        <Grid container className={classes.players}>
          <Grid item xs={5} className={classes.photoContainer}>
            <img src={boo} alt="boo" className={classes.photo} />
          </Grid>
          <Grid item xs />
          <Grid item xs={5} className={classes.photoContainer}>
            <img src={monster} alt="monster" className={classes.photo} />
          </Grid>
        </Grid>
        <Button variant="contained" size="large" color="primary" onClick={this.handleSelectSpellClick}>
          Select spell
        </Button>
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
    textAlign: 'center',
  },
  players: {
    height: '70%',
  },
  photoContainer: {
    height: '100%',
  },
  photo: {
    maxHeight: '100%',
    margin: 'auto',
  },
};

export default connect(
  store => ({
    isOpen: store.page.isSelectSpellActive,
  }),
  {
    setIsSelectSpellActive,
  },
)(withStyles(styles)(GameField));

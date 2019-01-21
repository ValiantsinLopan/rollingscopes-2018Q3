import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import { setIsLoginActive } from '../store/actions/page';
import { setUserName } from '../store/actions/user';
import { setMonsterName } from '../store/actions/monster';

class PlayerNameInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleStart = this.handleStart.bind(this);
  }

  handleChange(e) {
    this.setState({ username: e.target.value });
  }

  handleStart() {
    const name = this.state.username;
    this.props.setIsLoginActive(false);
    this.props.setUserName(name);
    this.props.setMonsterName();
  }

  render() {
    const { isOpen } = this.props;
    return (
      <Dialog
        open={isOpen}
      >
        <DialogTitle>Enter your name</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To start game enter your name.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Your name"
            type="email"
            fullWidth
            onChange={this.handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleStart} color="primary" fullWidth size="large">
            Start!
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default connect(
  store => ({
    name: store.user.name,
    isOpen: store.page.isLoginActive,
  }),
  {
    setIsLoginActive,
    setUserName,
    setMonsterName,
  },
)(PlayerNameInput);

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import { setName } from '../store/actions/user';

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
    console.log(this.state.username);
    const name = this.state.username;
    this.props.setName(name);
  }


  render() {
    return (
      <Dialog
        open
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Enter your name</DialogTitle>
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
  }), {
    setName,
  } 
)(PlayerNameInput);

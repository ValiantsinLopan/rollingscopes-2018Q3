import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { setIsSelectSpellActive } from '../store/actions/page';
import { setIsTaskActive } from '../store/actions/task';

class TaskModal extends Component {
  render() {
    const { isOpen, description, task } = this.props;
    return (
      <Dialog
        open={isOpen}
      >
        <DialogTitle>{description}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {description}
          </DialogContentText>
          <TextField
            autoFocus
            margin="normal"
            variant="outlined"
            id="answer"
            label="Your answer"
            type="email"
            fullWidth
            onChange={this.handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleAnswer} color="primary" fullWidth size="large">
            Answer
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default connect(
  store => ({
    isOpen: store.task.isActive,
    description: store.task.description,
    task: store.task.task,
    expectedAnswer: store.task.expectedAnswer,
  }),
  {

  }
)(TaskModal);

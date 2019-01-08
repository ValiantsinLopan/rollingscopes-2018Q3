import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setIsTaskActive } from '../store/actions/task';
import { setUserScore, setMonstersKilled } from '../store/actions/user';
import { setMonsterScore, setMonsterName } from '../store/actions/monster';
import { addUserToScore } from '../store/actions/score';
import { setIsScoreActive } from '../store/actions/page';

class TaskModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
  }

  handleChange(e) {
    this.setState({ answer: e.target.value.toLowerCase() });
  }

  handleAnswer() {
    const scoreDelta = 15;
    if (this.state.answer === this.props.expectedAnswer) {
      if (this.props.isAttack) {
        const newMonsterScore = this.props.monsterScore - scoreDelta;
        if (newMonsterScore <= 0) {
          this.props.setMonstersKilled(this.props.monstersKilled + 1);
          this.props.setMonsterScore(100);
          this.props.setMonsterName();
        } else {
          this.props.setMonsterScore(newMonsterScore);
        }
      } else {
        const newUserScore = this.props.userScore + scoreDelta > 100
          ? 100
          : this.props.userScore + scoreDelta;
        this.props.setUserScore(newUserScore);
      }
    } else {
      const newUserScore = this.props.userScore - scoreDelta;
      if (newUserScore <= 0) {
        this.props.setUserScore(newUserScore);
        this.props.addUserToScore(
          this.props.userName,
          this.props.monstersKilled,
          new Date().getTime(),
        );
        this.props.setIsScoreActive(true);
        this.props.setUserScore(100);
      } else {
        this.props.setUserScore(newUserScore);
      }
    }
    this.props.setIsTaskActive(false);
  }

  render() {
    const {
      isOpen,
      description,
      note,
      task,
    } = this.props;
    return (
      <Dialog
        open={isOpen}
      >
        <DialogTitle>{description}</DialogTitle>
        <DialogContent>
          <Typography variant="h3" gutterBottom align="center">
            {task}
          </Typography>
          <DialogContentText>
            {note}
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
    isAttack: store.task.isAttack,
    description: store.task.description,
    note: store.task.note,
    task: store.task.task,
    expectedAnswer: store.task.expectedAnswer,
    userName: store.user.name,
    userScore: store.user.score,
    monstersKilled: store.user.monstersKilled,
    monsterScore: store.monster.score,
  }),
  {
    setIsTaskActive,
    setUserScore,
    setMonstersKilled,
    setMonsterScore,
    setMonsterName,
    setIsScoreActive,
    addUserToScore,
  },
)(withRouter(TaskModal));

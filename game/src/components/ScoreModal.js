import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { setUserScore, setMonstersKilled, setUserName } from '../store/actions/user';
import { setMonsterScore, setMonsterName } from '../store/actions/monster';
import { addUserToScore } from '../store/actions/score';
import { setIsScoreActive } from '../store/actions/page';
import { orderBy } from 'lodash';

class ScoreModal extends Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleReplay = this.handleClose.bind(this);
  }

  handleClose() {
    this.props.setIsScoreActive(false);
  }

  handleReplay() {
    this.props.setIsScoreActive(false);
  }

  render() {
    const { isOpen, users, lastUserName } = this.props;
    return (
      <Dialog
        open={isOpen}
        fullScreen
      >
        <DialogTitle align="center">Score</DialogTitle>
        <DialogContent>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><Typography variant="body2">№</Typography></TableCell>
                <TableCell><Typography variant="body2">Name</Typography></TableCell>
                <TableCell><Typography variant="body2">Monsters killed</Typography></TableCell>
                <TableCell><Typography variant="body2">Game played</Typography></TableCell>
              </TableRow>
              <TableBody>
                {users.map((i, user) => (
                  <TableRow
                    key={i}
                  >
                    <TableCell><Typography variant="body1">{i}</Typography></TableCell>
                    <TableCell><Typography variant="body1">{user.name}</Typography></TableCell>
                    <TableCell><Typography variant="body1">{user.score}</Typography></TableCell>
                    <TableCell><Typography variant="body1">{user.time}</Typography></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </TableHead>

          </Table>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleReplay} color="primary" fullWidth size="large">
            New game
          </Button>
          <Button onClick={this.handleClose} color="secondary" fullWidth size="large">
            Exit
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default connect(
  store => ({
    isOpen: store.page.isScoreActive,
    users: store.score.users,
    lastUserName: store.user.name,
  }),
  {
    setIsScoreActive,
    setUserScore,
    setMonstersKilled,
    setUserName,
    setMonsterScore,
    setMonsterName,
  },
)(ScoreModal);

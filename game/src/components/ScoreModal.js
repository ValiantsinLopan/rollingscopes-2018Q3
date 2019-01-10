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
import { orderBy } from 'lodash';
import moment from 'moment';
import { setUserScore, setMonstersKilled, setUserName } from '../store/actions/user';
import { setMonsterScore, setMonsterName } from '../store/actions/monster';
import { setIsScoreActive, setIsLoginActive } from '../store/actions/page';

class ScoreModal extends Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleReplay = this.handleReplay.bind(this);
  }

  handleClose() {
    this.props.setIsScoreActive(false);
  }

  handleReplay() {
    this.props.setUserName('');
    this.props.setUserScore(100);
    this.props.setMonstersKilled(0);
    this.props.setMonsterName();
    this.props.setMonsterScore(100);
    this.props.setIsScoreActive(false);
    this.props.setIsLoginActive(true);
  }

  render() {
    const { isOpen, users, lastUserName } = this.props;
    return (
      <Dialog
        open={isOpen}
        fullWidth
      >
        <DialogTitle align="center">Score</DialogTitle>
        <DialogContent>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><Typography variant="body2">Position</Typography></TableCell>
                <TableCell><Typography variant="body2">Name</Typography></TableCell>
                <TableCell><Typography variant="body2">Monsters killed</Typography></TableCell>
                <TableCell><Typography variant="body2">Game played</Typography></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orderBy(users, ['score'], ['desc']).map((user, i) => (
                <TableRow
                  key={i.toString()}
                  style={
                    {
                      backgroundColor: `${user.name === lastUserName ? 'rgba(48, 63, 159, 0.2)' : ''}`,
                    }
                  }
                >
                  <TableCell><Typography variant="body1">{i + 1}</Typography></TableCell>
                  <TableCell><Typography variant="body1">{user.name}</Typography></TableCell>
                  <TableCell><Typography variant="body1">{user.score}</Typography></TableCell>
                  <TableCell><Typography variant="body1">{moment(user.time).format('MMMM Do YYYY, hh:mm:ss')}</Typography></TableCell>
                </TableRow>
              ))}
            </TableBody>

          </Table>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleReplay} color="primary" fullWidth size="large">
            New game
          </Button>
          <Button onClick={this.handleClose} color="secondary" fullWidth size="large" href="https://valiantsinlopan.github.io/monstergame/">
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
    setIsLoginActive,
  },
)(ScoreModal);

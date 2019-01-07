import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { connect } from 'react-redux';
import { setIsSelectSpellActive } from '../store/actions/page';
import { setIsTaskActive, setIsAttack, getTask } from '../store/actions/task';

class SelectSpellModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.isAttack ? 'attack' : 'healing',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSelectSpell = this.handleSelectSpell.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    const val = event.target.value === 'attack';
    this.props.setIsAttack(val);
  }

  handleClose() {
    this.props.setIsSelectSpellActive(false);
  }

  handleSelectSpell(event) {
    const taskType = event.currentTarget.getAttribute('value');
    console.log(taskType);
    this.props.getTask(taskType);
    this.props.setIsSelectSpellActive(false);
    this.props.setIsTaskActive(true);
  }

  render() {
    const { isOpen } = this.props;
    return (
      <Dialog
        open={isOpen}
      >
        <DialogTitle>Slect your spell</DialogTitle>
        <DialogContent>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="mode"
              name="mode"
              value={this.state.value}
              onChange={this.handleChange}
            >
              <FormControlLabel
                value="attack"
                control={<Radio />}
                label="Attack"
                labelPlacement="start"
              />
              <FormControlLabel
                value="healing"
                control={<Radio />}
                label="Healing"
                labelPlacement="start"
              />
            </RadioGroup>
          </FormControl>
          <List>
            <ListItem button onClick={this.handleSelectSpell} value="arithmetic">
              <ListItemText primary="Arithmetic" />
            </ListItem>
            <ListItem button onClick={this.handleSelectSpell} value="translation">
              <ListItemText primary="Translation" />
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary" fullWidth size="large">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default connect(
  store => ({
    isOpen: store.page.isSelectSpellActive,
    isAttack: store.task.isAttack,
  }),
  {
    setIsSelectSpellActive,
    setIsAttack,
    setIsTaskActive,
    getTask,
  },
)(SelectSpellModal);

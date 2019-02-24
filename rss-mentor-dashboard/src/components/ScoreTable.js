import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';

class ScoreTable extends Component {
  render() {
    const { classes, students, tasks } = this.props;
    if (!(typeof (students) === 'undefined')) {
      return (
        <Paper className={classes.paper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell><Typography variant="title" gutterBottom>Task</Typography></TableCell>
                {
                  students.map(student => (
                    <TableCell><Typography variant="title" gutterBottom key={student.nickname}>{student.nickname}</Typography></TableCell>
                  ))
                }
              </TableRow>
            </TableHead>
            <TableBody>
              {tasks.map(task => (
                <TableRow>
                  <TableCell><Typography variant="body1">{task.name}</Typography></TableCell>
                  {students.map(student => (
                    <TableCell>
                      <Typography variant="body2" gutterBottom>
                        {typeof (student.tasks) === 'undefined'
                        ? ''
                        : typeof (student.tasks.find(t => t.task === task.name)) === 'undefined'
                          ? ''
                          : student.tasks.find(t => t.task === task.name).score}
                      </Typography>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
    return (<Typography variant="title" gutterBottom>Please, select mentor</Typography>);
  }
}

const styles = {
  paper: {
    alignSelf: 'center',
    marginBottom: 20,
  },
};

export default connect(
  store => ({
    students: store.currentMentor.students,
    tasks: store.tasks,
  }),
)(withStyles(styles, { withTheme: true })(ScoreTable));

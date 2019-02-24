import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';
import ScoreCell from './ScoreCell';

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
                    <TableCell>
                      <Link href={student.github} underline="none">
                        <Typography variant="title" gutterBottom key={student.nickname}>{student.nickname}</Typography>
                      </Link>
                    </TableCell>
                  ))
                }
              </TableRow>
            </TableHead>
            <TableBody>
              {tasks.map(task => (
                <TableRow>
                  <TableCell>
                    <Link href={task.link} underline="none">
                      <Typography variant="body1">{task.name}</Typography>
                    </Link>
                  </TableCell>
                  {students.map(student => (
                    <ScoreCell
                      task={task}
                      studentTasks={student.tasks}
                    />
                  ))}
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              valya
            </TableFooter>
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

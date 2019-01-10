import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class TextTask extends Component {
  render() {
    return (
      <Typography variant="h3" gutterBottom align="center">
        {this.props.task}
      </Typography>
    );
  }
}

export default TextTask;

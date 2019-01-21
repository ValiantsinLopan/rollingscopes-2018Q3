import React, { Component } from 'react';
import Speech from 'react-speech';

class VoiceTask extends Component {
  render() {
    return (
      <Speech text={this.props.task} voice="Google UK English Female" textAsButton displayText="Click to plyay" textAlign="center" />
    );
  }
}

export default VoiceTask;

import React, { Component } from 'react';
import {
  Heading, Hero, Subhead, Flex, ScrollDownIndicator, Image,
} from 'react-landing-page';
import Button from '@material-ui/core/Button';
import monsters from './images/monsters.png';
import './home.css';

class Home extends Component {
  render() {
    return (
      <Hero
        color="black"
        bg="#95F0AD"
      >

        <Flex flexWrap="wrap" alignItems="center">
          <Flex alignItems="flex-start" width={[1, 1 / 2]} p={3}>
            <Image src={monsters} className="logo" />
          </Flex>
          <Flex width={[1, 1 / 2]} alignItems="center" flexDirection="column" p={3}>
            <Heading className="header">Monsters School</Heading>
            <Subhead textAlign="center">Amazing game for little monster hunters!</Subhead>
            <Button
              className="playButton"
              variant="outlined"
              color="primary"
              size="large"
              href="./game"
              style={
                {
                  margin: '10px 0 0 0',
                }
              }
            >
              Play now!
            </Button>
          </Flex>
        </Flex>
        <ScrollDownIndicator />
      </Hero>
    );
  }
}

export default Home;

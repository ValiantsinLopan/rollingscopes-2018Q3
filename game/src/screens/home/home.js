import React, { Component } from 'react';
import {
  Heading, Hero, Subhead, Flex, ScrollDownIndicator, Image, Laptop, Contributor, Small,
} from 'react-landing-page';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import monsters from './images/monsters.png';
import gameplay from './images/gameplay.png';
import avatar from './images/avatar.jpg';
import './home.css';

class Home extends Component {
  render() {
    return (
      <div>
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
              <Link
                to="/game"
              >
                <Button
                  className="playButton"
                  variant="outlined"
                  color="primary"
                  size="large"
                  style={
                      {
                        margin: '10px 0 0 0',
                      }
                    }
                >
                    Play now!
                </Button>
              </Link>
            </Flex>
          </Flex>
          <ScrollDownIndicator />
        </Hero>
        <Hero
          color="black"
          bg="pink"
        >
          <Heading>Play and Study</Heading>
          <Subhead fontSize={[2, 3]}>Solve tasks, fight with different monsters and become smarter</Subhead>
          <Laptop mt={10} src={gameplay} />
        </Hero>
        <Heading textAlign="center">Made by</Heading>
        <Flex justifyContent="space-around">
          <Contributor
            fullName="Valentin Lopan"
            title="developer"
            avatar={avatar}
          >
            <Flex>
              <Button href="https://github.com/ValiantsinLopan">GitHub</Button>
              <Button href="https://www.linkedin.com/in/valiantsin/">LinkedIn</Button>
            </Flex>
          </Contributor>
        </Flex>
      </div>
    );
  }
}

export default Home;

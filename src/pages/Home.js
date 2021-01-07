import React, { Component } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { LiveMessage } from 'react-aria-live';
import { Hero } from '../components';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.setNewPage('Home');
  }

  render() {
    return (
      <>
        <LiveMessage
          message="Navigated to Home page"
          aria-live="polite"
          clearOnUnmount="true"
        />
        <Box textAlign="center" fontSize="xl">
          <Flex
            direction="column"
            align="center"
            // maxW={{ xl: '6000px' }}
            // m="0 auto"
          >
            <Hero />
          </Flex>
          {/* <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid> */}
        </Box>
      </>
    );
  }
}

Home.propTypes = {
  db: PropTypes.object.isRequired,
  setNewPage: PropTypes.func.isRequired,
};

export default Home;

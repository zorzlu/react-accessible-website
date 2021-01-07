import React, { Component } from 'react';
import { Box, Heading, Link, VStack, Code, Grid } from '@chakra-ui/react';
import { Logo } from '../components';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { LiveMessage } from 'react-aria-live';

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
          <Grid minH="100vh" p={3}>
            <VStack spacing={8}>
              <Logo h="40vmin" pointerEvents="none" />
              <Heading as="h1" size="xl">
                Edit <Code textStyle="h1">src/App.js</Code> and save to reload.
              </Heading>

              <Link
                as={RouterLink}
                color="teal.500"
                to="/events"
                fontSize="2xl"
              >
                Learn Chakra
              </Link>
            </VStack>
          </Grid>
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

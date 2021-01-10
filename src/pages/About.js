import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Heading, UnorderedList, ListItem, Text } from '@chakra-ui/react';
import { LiveMessage } from 'react-aria-live';
import { Grid } from '../components';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.setNewPage('About Us');
  }

  render() {
    return (
      <>
        <LiveMessage
          message="Navigated to About Us page"
          aria-live="polite"
          clearOnUnmount="true"
        />
        <Heading
          as="h1"
          textStyle="h1"
          lineHeight={2}
          textAlign={['center', 'center', 'left', 'left']}
        >
          {'Who are we'}
        </Heading>
        <Text
          textStyle="paragraph"
          lineHeight={2}
          textAlign={['center', 'center', 'left', 'left']}
          fontSize="lg"
        >
          {'Description about us'}
        </Text>
        <Heading
          as="h2"
          textStyle="h1"
          lineHeight={2}
          textAlign={['center', 'center', 'left', 'left']}
        >
          {'History'}
        </Heading>
        <Text
          textStyle="paragraph"
          lineHeight={2}
          textAlign={['center', 'center', 'left', 'left']}
          fontSize="lg"
        >
          {'Some more infor about our path.'}
        </Text>
        <Heading
          as="h2"
          textStyle="h1"
          lineHeight={2}
          textAlign={['center', 'center', 'left', 'left']}
        >
          {'Our values'}
        </Heading>
        <Text
          textStyle="paragraph"
          lineHeight={2.5}
          textAlign={['center', 'center', 'left', 'left']}
          fontSize="lg"
        >
          <UnorderedList>
            <ListItem>Integrity</ListItem>
            <ListItem>Flexibility</ListItem>
            <ListItem>Respect</ListItem>
          </UnorderedList>
        </Text>
        <Heading
          as="h2"
          textStyle="h1"
          lineHeight={2}
          textAlign={['center', 'center', 'left', 'left']}
        >
          {'Our figures'}
        </Heading>
        <Grid />
        <Heading
          as="h2"
          textStyle="h1"
          lineHeight={2}
          textAlign={['center', 'center', 'left', 'left']}
        >
          {'Meet the team'}
        </Heading>
      </>
    );
  }
}

About.propTypes = {
  setNewPage: PropTypes.func.isRequired,
};

export default About;

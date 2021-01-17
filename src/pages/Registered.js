import React from 'react';
import { Heading, Text, Button, Box } from '@chakra-ui/react';
import { LiveMessage } from 'react-aria-live';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

class JoinEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.setNewPage('Registered');
  }
  render() {
    return (
      <React.Fragment>
        <LiveMessage
          message={'Registered to the event ' + this.props.details['name']}
          aria-live="polite"
        />

        <Heading as="h1" size="xl">
          {'Thank you for registering to this event'}
        </Heading>
        <Text mt="2em">
          {'Your registration to the event "' +
            this.props.details['name'] +
            '" has been saved.'}
        </Text>
        <Text mt="1em">
          You will receive soon an email from the association.
        </Text>
        <Box mt="2em">
          <Button as={RouterLink} to="/events" colorScheme="brand">
            Discover other events
          </Button>
        </Box>
      </React.Fragment>
    );
  }
}

JoinEvent.propTypes = {
  details: PropTypes.object.isRequired,
  setNewPage: PropTypes.func.isRequired,
};

export default JoinEvent;

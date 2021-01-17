import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { LiveMessage } from 'react-aria-live';
import PropTypes from 'prop-types';
import Form from '../components/Form';
//import { BreadCrumbAuto } from '../components';

class JoinEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.setNewPage('Join event');
  }
  render() {
    return (
      <React.Fragment>
        <LiveMessage
          message={
            'Navigated to ' + this.props.details['name'] + 'Registration Form'
          }
          aria-live="polite"
        />

        <Heading as="h1" size="xl">
          {'Join event: ' + this.props.details['name']}
        </Heading>
        <Text mt="1em">
          Please fill the following form to register for this event.
        </Text>

        <Box maxW="70ch">
          <Form role="form" />
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

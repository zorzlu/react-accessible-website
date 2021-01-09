import React from 'react';
import { Center, Heading } from '@chakra-ui/react';
import { LiveMessage } from 'react-aria-live';
import PropTypes from 'prop-types';
import Form from '../components/Form';

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
          clearOnUnmount="true"
        />
        <Heading as="h1" size="xl">
          {'Register to ' + this.props.details['name']}
        </Heading>
        <Center
          bg="gray.200"
          w="400px"
          p={10}
          mt={5}
          boxShadow="sm"
          rounded="lg"
        >
          <Form role="form" />
        </Center>
      </React.Fragment>
    );
  }
}

JoinEvent.propTypes = {
  details: PropTypes.object.isRequired,
  setNewPage: PropTypes.func.isRequired,
};

export default JoinEvent;

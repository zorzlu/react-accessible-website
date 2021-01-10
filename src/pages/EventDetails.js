/* eslint-disable react/jsx-key */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Text,
  Heading,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import { LiveMessage } from 'react-aria-live';
import { Link as RouterLink } from 'react-router-dom';
import { EventOverview } from '../components';

class EventDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.setNewPage(this.props.details['name']);
  }
  render() {
    return (
      <React.Fragment>
        <LiveMessage
          message={
            'Navigated to ' + this.props.details['name'] + 'Event Details Page'
          }
          aria-live="polite"
          clearOnUnmount="true"
        />

        <EventOverview eventdetails={this.props.details} />

        <Heading
          as="h2"
          textStyle="h2"
          lineHeight={2}
          textAlign={['center', 'center', 'left', 'left']}
        >
          {'Description of the event'}
        </Heading>
        <Text
          textStyle="paragraph"
          lineHeight={2}
          textAlign={['center', 'center', 'left', 'left']}
        >
          {this.props.details.longDescription}
        </Text>
        <Heading
          as="h2"
          textStyle="h2"
          lineHeight={2}
          textAlign={['center', 'center', 'left', 'left']}
        >
          {'Activities'}
        </Heading>
        <Text
          textStyle="paragraph"
          lineHeight={2}
          textAlign={['center', 'center', 'left', 'left']}
        >
          <UnorderedList>
            {this.props.details.activities.map((listitem) => (
              <ListItem>{listitem}</ListItem>
            ))}
          </UnorderedList>
        </Text>
        <br></br>
        <br></br>
        <Button
          as={RouterLink}
          to={'/event/' + this.props.details['id'] + '/register'}
          variant="outline"
          colorScheme="brand"
        >
          Apply now
        </Button>
      </React.Fragment>
    );
  }
}

EventDetails.propTypes = {
  details: PropTypes.object.isRequired,
  setNewPage: PropTypes.func.isRequired,
};

export default EventDetails;

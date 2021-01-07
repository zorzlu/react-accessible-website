import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, Image, Stack, Heading, Link } from '@chakra-ui/react';
import { LiveMessage } from 'react-aria-live';
import { Link as RouterLink } from 'react-router-dom';

//This is a template, not a fully implemented webpage

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
        <Heading as="h1" size="xl">
          {this.props.details['name']}
        </Heading>
        <Stack direction="row">
          <Image
            boxSize="100px"
            objectFit="cover"
            src={process.env.PUBLIC_URL + '/' + this.props.details.pictures[0]}
            alt={this.props.details.altPictures[0]}
          />
          <Image
            boxSize="100px"
            objectFit="cover"
            src={process.env.PUBLIC_URL + '/' + this.props.details.pictures[1]}
            alt={this.props.details.altPictures[1]}
          />
        </Stack>
        <Link
          as={RouterLink}
          to={'/events/' + this.props.details['id'] + '/register'}
          fontSize="2xl"
        >
          JOIN
        </Link>
        <Text>{this.props.details.longDescription}</Text>
      </React.Fragment>
    );
  }
}

EventDetails.propTypes = {
  details: PropTypes.object.isRequired,
  setNewPage: PropTypes.func.isRequired,
};

export default EventDetails;

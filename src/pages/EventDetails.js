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

function strConv(textConvertToString) {
  return textConvertToString.toString().toLowerCase().replace(' ', '-');
}

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
            'Navigated to ' + this.props.details['name'] + ' Event Details Page'
          }
          aria-live="polite"
        />
        <article>
          <EventOverview eventdetails={this.props.details} />
          <section>
            <Heading as="h2" size="md" fontWeight="bold" mt="3em" mb="1em">
              Description of the event
            </Heading>
            <Text maxW="70ch" textStyle="p">
              {this.props.details.longDescription}
            </Text>
          </section>
          <section>
            <Heading
              as="h2"
              size="md"
              maxW="80ch"
              fontWeight="bold"
              mt="3em"
              mb="1em"
            >
              Activities
            </Heading>
            <UnorderedList pb="3em" maxW="70ch">
              {this.props.details.activities.map((listitem) => (
                <ListItem
                  lineHeight={2.5}
                  fontSize="md"
                  key={strConv(listitem) + '-activity'}
                >
                  {listitem}
                </ListItem>
              ))}
            </UnorderedList>
          </section>

          <Button
            as={RouterLink}
            to={'/event/' + this.props.details['id'] + '/register'}
            variant="outline"
            colorScheme="brand"
          >
            Apply now
          </Button>
        </article>
      </React.Fragment>
    );
  }
}

EventDetails.propTypes = {
  details: PropTypes.object.isRequired,
  setNewPage: PropTypes.func.isRequired,
};

export default EventDetails;

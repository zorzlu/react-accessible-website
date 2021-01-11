import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Heading, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { LiveMessage } from 'react-aria-live';
import { EventFiltersAndCards } from '../components';

function EventsList({ evList }) {
  const group = evList;
  const list = group.map((element) => (
    <li key={element.id}>
      <Link
        as={RouterLink}
        color="red.700"
        to={'/event/' + element.id}
        fontSize="2xl"
      >
        {element.name}
      </Link>
    </li>
  ));
  return <ul>{list}</ul>;
}
EventsList.propTypes = {
  evList: PropTypes.array.isRequired,
};

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.setNewPage('Events');
  }

  render() {
    return (
      <>
        <LiveMessage message="Navigated to Events page" aria-live="polite" />
        <header>
          <Heading as="h1" size="xl">
            Events
          </Heading>
          <Text textStyle="p">This is the Events page.</Text>
        </header>
        <EventFiltersAndCards db={this.props.db} />
      </>
    );
  }
}

Events.propTypes = {
  db: PropTypes.object.isRequired,
  setNewPage: PropTypes.func.isRequired,
};

export default Events;

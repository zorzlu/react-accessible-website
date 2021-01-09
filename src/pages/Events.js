import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Heading } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { LiveMessage } from 'react-aria-live';
import { Card } from '../components';
/* import { Luca } from '.';
 */
/* function getParameters() {
  let parameters = window.location.search.replace('?', '');

  let currentParameters = {};

  if (Object.keys(parameters).length) {
    parameters = parameters.split('&');

    for (let i = 0; i < parameters.length; i++) {
      let parameter = parameters[i].split('=');
      currentParameters[parameter[0]] = parameter[1];
    }
  }

  return currentParameters;
}
 */
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
      <div name="mainContent">
        {/* <Luca db={this.props.db}></Luca> */}
        <LiveMessage
          message="Navigated to Events page"
          aria-live="polite"
          clearOnUnmount="true"
        />
        {console.log('rendered events')}
        <Heading as="h1" size="xl">
          Events
        </Heading>
        <div className="Events">This is the Events page.</div>
        <EventsList evList={this.props.db.events} />
        <Card eventDetails={this.props.db.events[0]} startingHeading="2" />
      </div>
    );
  }
}

Events.propTypes = {
  db: PropTypes.object.isRequired,
  setNewPage: PropTypes.func.isRequired,
};

export default Events;

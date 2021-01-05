import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function EventsList({ evList }) {
  const group = evList;
  const list = group.map((element) => (
    <li key={element.id}>
      <Link
        as={RouterLink}
        color="red.200"
        to={'/events/' + element.id}
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

function Events({ list }) {
  return (
    <React.Fragment>
      <div className="Events">This is the Events page.</div>
      <EventsList evList={list} />
    </React.Fragment>
  );
}

Events.propTypes = {
  list: PropTypes.array.isRequired,
};

export default Events;

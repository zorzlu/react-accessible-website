import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { PageNotFound, EventDetails } from '../pages';

function EventChecker({ db, setNewPage }) {
  let { eventId } = useParams();
  var result = db.events.filter((obj) => {
    return obj.id == eventId;
  });
  if (result.length === 0) {
    return <PageNotFound />;
  } else {
    return <EventDetails details={result[0]} setNewPage={setNewPage} />;
  }
}

EventChecker.propTypes = {
  db: PropTypes.object.isRequired,
  setNewPage: PropTypes.func.isRequired,
};

export default EventChecker;

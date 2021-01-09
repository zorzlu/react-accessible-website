import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { PageNotFound } from '.';

function EventChecker({ db, setNewPage, PageToLoad }) {
  let { eventId } = useParams();
  var result = db.events.filter((obj) => {
    return obj.id == eventId;
  });
  if (result.length === 0) {
    return <PageNotFound />;
  } else {
    return <PageToLoad details={result[0]} setNewPage={setNewPage} />;
  }
}

EventChecker.propTypes = {
  db: PropTypes.object.isRequired,
  setNewPage: PropTypes.func.isRequired,
  PageToLoad: PropTypes.elementType.isRequired,
};

export default EventChecker;

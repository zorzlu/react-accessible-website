import React from 'react';
import PropTypes from 'prop-types';

import { SimpleGrid } from '@chakra-ui/react';
import { Card } from '.';
import { LiveMessage } from 'react-aria-live';

function numOfQueryParams(queryParams) {
  var result = 0;
  var names = [];
  Object.keys(queryParams).forEach((key) => {
    let temp = queryParams[key].length > 0;
    if (temp > 0) {
      result += temp;
      names.push(key);
    }
  });
  return [result, names.join(', ')];
}

/* function filterItself(events, queryParams) {} */
function getFilteredEventObjects(events, queryParams) {
  return events.filter((ev) => {
    return Object.keys(queryParams).every((qkey) => {
      if (queryParams[qkey].length === 0) {
        return true;
      }
      return queryParams[qkey].some((filt) => {
        if (Array.isArray(ev[qkey])) {
          return ev[qkey]
            .map((a) => a.toLowerCase())
            .includes(filt.toLowerCase());
        } else {
          return ev[qkey].toLowerCase() === filt.toLowerCase();
        }
      });
    });
  });
}

function CardsSection({ events, queryParams, startHeading }) {
  let evList = getFilteredEventObjects(events, queryParams);
  let a11yMessage = '';
  let [numParams, nameParams] = numOfQueryParams(queryParams);
  let numEvents = evList.length;
  if (numParams === 0) {
    a11yMessage = 'No filters applied. ' + numEvents + ' events found.';
  } else {
    a11yMessage =
      'Filters applied ' + nameParams + '. ' + numEvents + ' events found.';
  }
  const cards = evList.map((ev) => (
    <Card key={ev.id} eventDetails={ev} startingHeading={startHeading} />
  ));
  return (
    <>
      <LiveMessage
        message={a11yMessage}
        aria-live="polite"
        clearOnUnmount="true"
      />
      <SimpleGrid justifyItems="centre" minChildWidth="15rem" spacing="40px">
        {cards}
      </SimpleGrid>
    </>
  );
}

CardsSection.propTypes = {
  events: PropTypes.array.isRequired,
  queryParams: PropTypes.object.isRequired,
  startHeading: PropTypes.string.isRequired,
};

export default CardsSection;

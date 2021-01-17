import React from 'react';
import PropTypes from 'prop-types';

import { SimpleGrid, Text } from '@chakra-ui/react';
import { Card } from '.';

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function numOfQueryParams(queryParams) {
  var result = 0;
  var names = [];
  let first = true;
  Object.keys(queryParams).forEach((key) => {
    let temp = queryParams[key].length;
    if (temp > 0) {
      if (first) {
        names.push(capitalizeFirstLetter(key));
        first = false;
      } else {
        names.push(key);
      }
      result += temp;
    }
  });
  return [result, names.join(' and ')];
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
      nameParams +
      ' filters applied, ' +
      numEvents +
      (numEvents === 1 ? ' event found.' : ' events found.');
  }

  const cards = evList.map((ev) => (
    <Card
      as="li"
      key={ev.id}
      eventDetails={ev}
      startingHeading={startHeading}
    />
  ));
  return (
    <>
      <Text role="status" textStyle="p">
        {a11yMessage}
      </Text>

      <SimpleGrid
        mt="1rem"
        as="ul"
        listStyleType="none"
        justifyItems="centre"
        minChildWidth="15rem"
        spacing="2rem"
      >
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

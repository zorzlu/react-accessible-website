import React from 'react';
import PropTypes from 'prop-types';

import { SimpleGrid } from '@chakra-ui/react';
import { Card } from '.';

/* function filterItself(events, queryParams) {} */
function getFilteredEventObjects(events, queryParams) {
  return events.filter((ev) => queryParams['id'].includes(ev.id));
}

function CardsListHome({ events, queryParams, startHeading }) {
  let evList = getFilteredEventObjects(events, queryParams);
  const cards = evList.map((ev) => (
    <Card
      as="li"
      key={ev.id}
      eventDetails={ev}
      startingHeading={startHeading}
    />
  ));
  return (
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
  );
}

CardsListHome.propTypes = {
  events: PropTypes.array.isRequired,
  queryParams: PropTypes.object.isRequired,
  startHeading: PropTypes.string.isRequired,
};

export default CardsListHome;

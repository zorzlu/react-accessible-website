import React from 'react';
import { useQueryAsState } from '../utils/QueryAsState';
import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Divider,
  SimpleGrid,
  Heading,
} from '@chakra-ui/react';
import { CardsSection } from '../components';
import GridCheckBoxes from '../components/Grid/GridCheckBoxes';

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function strConv(textConvertToString) {
  return textConvertToString.toString().toLowerCase().replace(' ', '-');
}

function buildFilters(
  // eslint-disable-next-line no-unused-vars
  { events, recommendedEvents, ...filters },
  queryP,
  callback
) {
  let temp = { ...filters };
  let emptyFilter = {};
  Object.keys(temp).forEach((keyVal) => {
    emptyFilter[keyVal] = [];
  });
  let resultFilter = Object.keys(temp).map((keyVal) => (
    <Box as="li" key={strConv(keyVal) + 'filterElement'}>
      <GridCheckBoxes
        nameFilter={capitalizeFirstLetter(keyVal)}
        keyFilter={keyVal}
        FilterValuesArray={temp[keyVal]}
        currentValues={queryP[keyVal]}
        callbackOnChange={callback}
      />
    </Box>
  ));
  return [resultFilter, emptyFilter];
}

/* function filterTextOnBar(queryP) {
  let counter = 0;
  Object.keys(queryP).forEach((keyQ) => {
    counter += queryP[keyQ].length;
  });
  if (counter === 1) {
    return '1 filter applied.';
  }
  return counter + ' filters applied.';
} */

function EventFiltersAndCards({ db }) {
  const [query, updateQueryParams] = useQueryAsState(
    {
      tag: db.tag,
      location: db.location,
    },
    {}
  );

  const [filters, emptyString] = buildFilters(db, query, updateQueryParams);

  return (
    <>
      <section>
        <Heading as="h2" size="md" fontWeight="bold" mt="2em" mb="1em">
          Filter Selection
        </Heading>
        <Accordion allowToggle variant="menuFilter">
          <AccordionItem>
            <Flex direction={['column', 'row']}>
              <Button as={AccordionButton} colorScheme="brand">
                <Box flex="1" textAlign="left">
                  Edit Filters
                </Box>
                <AccordionIcon />
              </Button>
            </Flex>
            <AccordionPanel py="2em">
              <SimpleGrid
                mb="1em"
                as="ul"
                listStyleType="none"
                justifyItems="centre"
                columns={[1, 2, 3, 4]}
                spacing="2rem"
              >
                {filters}
              </SimpleGrid>
              <Button
                mb="1em"
                colorScheme="brand"
                variant="outline"
                onClick={() => updateQueryParams(emptyString)}
              >
                Remove all filters
              </Button>
              <Divider />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </section>
      <section>
        <Heading as="h2" size="md" fontWeight="bold" mt="2em" mb="1em">
          List of Events
        </Heading>

        <CardsSection events={db.events} queryParams={query} startHeading="3" />
      </section>
    </>
  );
}

export default EventFiltersAndCards;
EventFiltersAndCards.propTypes = {
  db: PropTypes.object.isRequired,
};

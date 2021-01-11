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
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { CardsSection } from '../components';
import GridCheckBoxes from '../components/Grid/GridCheckBoxes';

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function buildFilters(
  // eslint-disable-next-line no-unused-vars
  { events, recommendedEvents, ...filters },
  queryP,
  callback
) {
  let temp = { ...filters };
  return Object.keys(temp).map((key) => (
    <WrapItem key={key + 'filterElement'}>
      <GridCheckBoxes
        nameFilter={capitalizeFirstLetter(key)}
        keyFilter={key}
        FilterValuesArray={temp[key]}
        currentValues={queryP[key]}
        callbackOnChange={callback}
      />
    </WrapItem>
  ));
}

function Luca({ db }) {
  const [query, updateQueryParams] = useQueryAsState(
    {
      tag: db.tag,
      location: db.location,
    },
    {}
  );

  const filters = buildFilters(db, query, updateQueryParams);

  return (
    <div>
      <Accordion allowToggle variant="menuFilter">
        <AccordionItem>
          <Wrap>
            <Box flex="1" textAlign="left">
              FiltersText{' '}
            </Box>
            <Button as={AccordionButton} colorScheme="brand">
              <Box flex="1" textAlign="left">
                Customize Filters
              </Box>
              <AccordionIcon />
            </Button>
          </Wrap>
          <AccordionPanel>
            <Wrap> {filters}</Wrap>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Box pt="3rem">
        <CardsSection events={db.events} queryParams={query} startHeading="3" />
      </Box>
    </div>
  );
}

export default Luca;
Luca.propTypes = {
  db: PropTypes.object.isRequired,
};
